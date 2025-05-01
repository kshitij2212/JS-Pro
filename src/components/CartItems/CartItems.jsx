import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext)

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Product</p>
                <p>Details</p>
                <p>Size</p>
                <p>Price</p>
                <p>Quantity</p>
                <p></p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] && cartItems[e.id].length > 0) {
                    return cartItems[e.id].map((obj, idx) => (
                        <div key={`${e.id}-${obj.size}`} className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt={e.name} className='carticon-product-icon'/>
                            <div>
                                <h3>{e.name}</h3>
                                <p className="cart-item-size">Size: {obj.size}</p>
                            </div>
                            <p>{obj.size}</p>
                            <p>₹{e.new_price}</p>
                            <p className='cartitems-quantity'>{obj.quantity}</p>
                            <img 
                                className='cartitems-remove-icon' 
                                src={remove_icon} 
                                onClick={() => removeFromCart(e.id, obj.size)} 
                                alt="Remove" 
                            />
                        </div>
                    ));
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Fee</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>₹{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed To Checkout</button>
                </div>
                <div className='cartitems-promocode'>
                    <p>If you hava a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
