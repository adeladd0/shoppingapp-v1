import React from 'react'
import "../css/Card.css";
import TextTruncate from "react-text-truncate";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {IconButton} from '@material-ui/core';
import formatCurrency from '../utils';
function Card({src,title,description,price}) {
    return (
        <div className="card">
            <img src={src} alt=""/>
            <div className="card__info" >
             
             <h2>{title}</h2>
              <TextTruncate line={2}   element="h4" truncateText="..." text={description}  />
             
              <div className="card__bottom">
              <h3>{formatCurrency(price)}</h3>
              <ShoppingCartIcon  styles={{color:"white"}} fontSize="small"/>
             </div>
             
            </div>
        </div>
    )
}

export default Card
