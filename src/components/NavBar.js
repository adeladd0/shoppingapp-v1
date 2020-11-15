import React,{Component} from 'react'
import "../css/NavBar.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Filter from './Filter';


export default class NavBar extends Component {
    render(){
        
        return (
        <div className="navbar">
                 
                 
                
                <Filter  icon={<ShoppingCartIcon/>} 
                count={this.props.count}
                size={this.props.size}
                sort={this.props.sort}
                category={this.props.category}
                filterProducts={this.props.filterProducts}
                filterCategory={this.props.filterCategory}
                sortProducts={this.props.sortProducts}               
                />
            
        </div>
    )
}
}




