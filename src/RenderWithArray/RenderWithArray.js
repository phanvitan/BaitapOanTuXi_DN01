import React, { Component } from 'react'

export default class RenderWithArray extends Component {
    productList = [
        { id: 1, name: "black car", price: 1000, img: "./img/CarBasic/products/black-car.jpg" },
        { id: 2, name: "steel car", price: 1000, img: "./img/CarBasic/products/steel-car.jpg" },
        { id: 3, name: "silver car", price: 1000, img: "./img/CarBasic/products/silver-car.jpg" },
        { id: 4, name: "red car", price: 1000, img: "./img/CarBasic/products/red-car.jpg" }
    ];
    renderTable = () => {
        //CACH 1:  DÙNG FOR
        // let content = [];
        // for (let i = 0; i < this.productList.length; i++) {
        //     let product = this.productList[i];
        //     let objTR = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td> <img className="w-25" src={product.img} alt="" /> </td>
        //     </tr>
        //     content.push(objTR);
        // }
        // return content;

        ///CACH 2 : dùng MAP
        let content = this.productList.map((product) => {
            return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="w-50" > <img className="w-50" src={product.img} alt="" /> </td>
            </tr>
        });
        return content;

    }

    render() {
        return (

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div >
        )
    }
}
