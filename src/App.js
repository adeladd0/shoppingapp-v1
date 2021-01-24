import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Products from './components/Products';
import SideBar from './components/SideBar';
import data from "./products.json";
import React from "react";
import Filter from './components/Filter';

class App extends React.Component{
 constructor(){
   super();
   this.state={
     products:data.products,
     size:"",
     sort:"",
     category:"",
     cartItems:[]

   };
 }
 
 addToCart=(product)=>{
  
  const cartItems=this.state.cartItems.slice();
  let alreadyInCart=false;

 cartItems.forEach((item)=>{
  if(item._id===product._id)
  { item.count++;
    alreadyInCart=true;

  }});

  if(!alreadyInCart)
  {
    cartItems.push({...product,count:1});
  }
  
  this.setState(
    (state)=>({cartItems})
  
  )
  console.log(cartItems);
   


}
 sortProducts=(event)=>
 {
   console.log(event.target.value);
   const sort=event.target.value;
   this.setState(
     (state)=>({
        sort:sort,
        products: this.state.products.slice()
        .sort(
          (a,b)=>(
            sort==="Lowest"? ((a.price<b.price)?-1:1):
            sort==="Highest"? ((a.price<b.price)?1:-1):
            sort===((a._id>b._id)?1:-1)
         
         
         
            )
        
        )

     })
   )


 }

 filterProducts=(event)=>
 {
  console.log(event.target.value);
  if(event.target.value==="")
   {
     this.setState({size: event.target.value, product: data.products})
   }
   
   else{
  this.setState({
   size:event.target.value,
   products:data.products.filter(
    (product)=>product.availableSizes.indexOf(event.target.value)>=0
   ),})
   }

 }
 filterCategory=(event)=>
 {
  console.log(event.target.value);
  if(event.target.value==="")
   {
     this.setState({size: event.target.value,
       product: data.products})
   }
   else{
  this.setState({
    category:event.target.value,
    products:data.products.filter(
     (product)=>product.availableCategory.
     indexOf(event.target.value)>=0
    ),})
    }
 }

 removeFromCart = (product) => {
  const cartItems = this.state.cartItems.slice();
  this.setState({
    cartItems: cartItems.filter((x) => x._id !== product._id),
  });};


render() {
  return (
      <div className="app">
          
          <Header />

          <div className="app__nav">
         
          <h3>{this.state.products.length}  {" "}
                       Products 
          </h3>
                
          <NavBar 
          count={this.state.products.length}
          size={this.state.size}
          sort={this.state.sort}
          category={this.state.category}
          filterProducts={this.filterProducts}
          filterCategory={this.filterCategory}
          sortProducts={this.sortProducts}/>
          </div>

          <div className="app__body">

          <div className="app__left">
            <Products products={this.state.products}
             addToCart={this.addToCart}
            />
           </div>
           <div className="app__right">
            <SideBar 
             cartItems={this.state.cartItems}
             removeFromCart={this.removeFromCart}
            />
           </div>

           </div> 
      </div>
  )
}
}

export default App;
