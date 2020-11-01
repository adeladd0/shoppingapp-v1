
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import SideBar from './components/SideBar';
import data from "./products.json";
import React from "react";

class App extends React.Component{
 constructor(){
   super();
   this.state={
     products:data.products,
     size:"",
     sort:"",

   };
 } 
render() {
  return (
      <div className="app">
          
          <Header/>
          <div className="app__body">
            <Products products={this.state.products}/>
            <SideBar/>
           </div> 
      </div>
  )
}
}

export default App;
