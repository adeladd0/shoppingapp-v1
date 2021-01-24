import React, { Component } from 'react'
import "../css/Cart.css";
import formatCurrency from '../utils';
export default class Cart extends Component {
    render() {
        const {cartItems,removeFromCart}=this.props;

        return (
            <div>
                
             {cartItems.length===0 ?

             (<div className="cart cart-header">
                 CART IS EMPTY</div>)
                 :
             (<div  className="cart cart-header">
                 YOU HAVE {cartItems.length} 
                 {" "}  ITEMS IN CART {" "}
                 Total:{" "}
                    {formatCurrency(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}

                    
                   { cartItems.map(
                    (item) =>
                    <li key={item._id}>
                    <div>
                      <div>{item.title}</div>
                      <div className="right">
                        {formatCurrency(item.price)} x {item.count}{" "}
                        <button
                          className="button"
                          onClick={() => this.props.removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>

                   )
                 
                  
                 }


             </div>)
            
            }
             

            </div>
        )
    }
}
