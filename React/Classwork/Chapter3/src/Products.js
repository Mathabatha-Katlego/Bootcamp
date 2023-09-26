import React, { Component } from 'react'; //imports the component class from react library
class Products extends Component {
    render() {
        const products = ["Learning React", "Pro React", "Beginning React"];
        const listProducts = products.map((product) =>
            <li key={product.toString()}>{product}</li>
        );
        return (
            <div>
                <ul>{listProducts}</ul>
            </div>
        );
    }
}
export default Products;// makes this component available for other files in application