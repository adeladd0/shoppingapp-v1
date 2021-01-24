import React, { Component } from 'react'
import "../css/Card.css";
import TextTruncate from "react-text-truncate";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {IconButton} from '@material-ui/core';
import formatCurrency from '../utils';
export default class  Card extends Component{
    render(){
    return (
        <div className="card">
            <img src={this.props.product.image} alt=""/>
            <div className="card__info" >
             
             <h2>{this.props.product.title}</h2>
              <TextTruncate line={2}   element="h4" truncateText="..." text={this.props.product.description}  />
             
              <div className="card__bottom">
              <h3>{formatCurrency(this.props.product.price)}</h3>
              <ShoppingCartIcon onClick={()=>this.props.addToCart(this.props.product)}
              
              styles={{color:"white"}} fontSize="small"/>
             </div>
             
            </div>
        </div>
    )
}
}

