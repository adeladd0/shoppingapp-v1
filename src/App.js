
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

   };
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
     this.setState({size: event.target.value, product: data.products})
   }
   else{
  this.setState({
    category:event.target.value,
    products:data.products.filter(
     (product)=>product.availableCategory.indexOf(event.target.value)>=0
    ),})
    }
 }


render() {
  return (
      <div className="app">
          
          <Header />

          <div className="app__nav">
         
          <h3>{this.state.products.length}  Products </h3>
                
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
            <Products products={this.state.products}/>
            <SideBar/>
           </div> 
      </div>
  )
}
}

export default App;
