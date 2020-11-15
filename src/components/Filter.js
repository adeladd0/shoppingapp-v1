import React, { Component } from 'react'
import "../css/Filter.css";
export class Filter extends Component {
    render() {
        return (
            <div className="filter">
                

                <div className="filter__sort">
                  
                  <select className="dropdown"
                   value={this.props.sort}
                   onChange={this.props.sortProducts}
                  >
                  
                  <option>Latest</option>
                  <option value="Lowest">Lowest</option>
                  <option value="Highest">Highest</option>
                  
                 </select>
                </div>

                <div className="filter__size">
                  
                  <select className="dropdown" 
                  value={this.props.size}
                  onChange={this.props.filterProducts}
                  
                  >
                 
                  <option value="">All Sizes</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                
                 </select>
                 </div>

              
                 <div className="filter__category">
                  
                  <select className="dropdown" 
                  value={this.props.category}
                  onChange={this.props.filterCategory} >
                 
                  <option value="">All Categories</option>
                  <option value="BAGS">Bags</option>
                  <option value="SLIPPERS">Slippers</option>
                  <option value="EARRINGS">Earrings</option>
                  <option value="NECKLACES">Necklaces</option>
                  <option value="BOWLS">Bowls</option>
                  <option value="BEADS">Beads</option>
                 </select>
                 </div>


                </div>
        
        )
    }
}

export default Filter
