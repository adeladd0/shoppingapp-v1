import React from 'react';
import "../css/Header.css";
import { properties } from '../properties.js';
import SearchIcon from '@material-ui/icons/Search';
import {IconButton} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function Header() {
    return (
        <div className="header">

         <div className="header__left">
         <img src={properties.logo} alt=""/>
          
          <div className="header__input">
          <SearchIcon/>
          <input placeholder='Search Products'type="text"/>
          </div>
         </div>

         <div className="header__center">
         <h4>React Shopping App </h4>
         </div>
         
          <div className="header__right">

           <ShoppingCartIcon styles={{color:"red"}} fontSize="medium"/>
           
           </div>
        </div>
    )
}

export default Header