
import React,{Component} from 'react'
import "../css/SideBar.css";
import Cart from './Cart';

export default class Sidebar extends Component {
   render(){
    return (
        <div>
            <Cart cartItems={this.props.cartItems}
               removeFromCart={this.props.removeFromCart}    
            />
                
                
        </div>
    )
}
}

