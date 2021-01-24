import React, { Component } from 'react'
import Card from './Card';
import "../css/Products.css";
export default class Products extends Component {
    render() {
        return (
            <div className="products">
                
                { this.props.products.map(
                    (product) =>
                    <Card  key={product._id}
                    product={product}
                    addToCart={this.props.addToCart} /> 
                
                    
                    )
                 
                  
                 }

                  
              
            </div>
        )
    }
}
