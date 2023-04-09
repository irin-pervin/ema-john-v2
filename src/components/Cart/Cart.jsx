import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({cart,handleClearCart,children}) => {

    let total = 0;
    let totalShipping = 0;
    let quantity = 0
    for(const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }

        total = total + product.price * product.quantity ;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = total * 7/100;

    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
             <h4>Order summary</h4>
            <p>selected items :{quantity} </p>
            <p>Total price :${total}</p>
            <p>Total shipping :${totalShipping} </p>
            <p>tax:${tax.toFixed(2)}</p>
            <h6>Grand total : ${grandTotal.toFixed(2)}</h6>

            <button
             onClick={handleClearCart} className='btn-clear-cart'><span>Clear cart</span>
             <FontAwesomeIcon icon={faTrashCan} /></button>
               {children}
        </div>
    );
};

export default Cart;