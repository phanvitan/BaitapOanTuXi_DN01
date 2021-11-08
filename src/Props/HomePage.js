import React, { Component } from 'react'
import FunctionProduct from './FunctionProduct';
import Product from './Product'

export default class HomePage extends Component {
    productList = [
        { id: 1, name: "black car", price: 1000, img: "./img/CarBasic/products/black-car.jpg" },
        { id: 2, name: "steel car", price: 2000, img: "./img/CarBasic/products/steel-car.jpg" },
        { id: 3, name: "silver car", price: 2000, img: "./img/CarBasic/products/silver-car.jpg" },
        { id: 4, name: "red car", price: 1000, img: "./img/CarBasic/products/red-car.jpg" }
    ];
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        {/* <Product nameCar="Black Car" price={1000} /> */}
                        {/* <Product product={this.productList[0]} /> */}
                        <FunctionProduct product={this.productList[0]} />

                    </div>
                    <div className="col-4">
                        {/* <Product nameCar="Red Car" price={2000} /> */}
                        {/* <Product product={this.productList[1]} /> */}
                        <FunctionProduct product={this.productList[1]} />

                    </div>
                    <div className="col-4">
                        {/* <Product nameCar="Silver Car" price={1000} /> */}
                        {/* <Product product={this.productList[2]} /> */}
                        <FunctionProduct product={this.productList[2]} />
                    </div>
                </div>
            </div>
        )
    }
}
