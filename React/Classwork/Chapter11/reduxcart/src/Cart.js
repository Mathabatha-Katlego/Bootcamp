import React, { Component } from "react";
import AddProduct from './AddProduct';
import { Table } from 'reactstrap';
class Cart extends Component {
    render() {
        return (
            <div className="container"> 
                <AddProduct addProduct={this.props.onAddProduct} /> {/*called when add button is clicked*/}
                <Table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.productCart.map(productData => (
                            <tr key={productData.productName}>
                                <td>{productData.productName}</td>
                                <td>{productData.productPrice}</td>
                                <td onClick={() =>
                                    this.props.onDeleteProduct(productData)}>Remove</td> {/*called when remove button is clicked*/}
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <span>Total Amount: {this.props.totalCost}</span>
            </div>
        );
    }
};
export default Cart;