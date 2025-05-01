import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product'

export const ShopContext = createContext(null)
const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
         cart[index] = []; // array of {size, quantity}
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    // Add to cart with size
    const addToCart = (itemId, size) => {
        setCartItems((prev) => {
            const prevArr = prev[itemId] || [];
            // Check if this size already exists for this item
            const idx = prevArr.findIndex(obj => obj.size === size);
            let newArr;
            if (idx !== -1) {
                // Increase quantity for this size
                newArr = prevArr.map((obj, i) =>
                    i === idx ? { ...obj, quantity: obj.quantity + 1 } : obj
                );
            } else {
                // Add new size entry
                newArr = [...prevArr, { size, quantity: 1 }];
            }
            return { ...prev, [itemId]: newArr };
        });
    };

    // Remove from cart (removes one quantity for a given size)
    const removeFromCart = (itemId, size) => {
        setCartItems((prev) => {
            const prevArr = prev[itemId] || [];
            const idx = prevArr.findIndex(obj => obj.size === size);
            if (idx === -1) return prev; // nothing to remove
            let newArr = prevArr.map((obj, i) =>
                i === idx ? { ...obj, quantity: obj.quantity - 1 } : obj
            ).filter(obj => obj.quantity > 0);
            return { ...prev, [itemId]: newArr };
        });
    };

    // Get total cart amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            cartItems[item].forEach(obj => {
                if (obj.quantity > 0) {
                    let itemInfo = all_product.find((product) => product.id === Number(item));
                    if (itemInfo) {
                        totalAmount += itemInfo.new_price * obj.quantity;
                    }
                }
            });
        }
        return totalAmount;
    };

    // Get total cart items
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            cartItems[item].forEach(obj => {
                if (obj.quantity > 0) {
                    totalItem += obj.quantity;
                }
            });
        }
        return totalItem;
    };

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider