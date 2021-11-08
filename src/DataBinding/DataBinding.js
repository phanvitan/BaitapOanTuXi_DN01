import React, { Component } from 'react'

export default class DataBinding extends Component {

    age = 20;
    img = "https://i.imgur.com/e5Zxf5M.jpg";

    renderProduct = () => {
        let product = {
            name: "product 001",
            moTa: "sp....",
            price: 100,
            imgProduct: "https://i.imgur.com/e5Zxf5M.jpg"
        }
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src={product.imgProduct} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.moTa}<br />
                        {product.price}
                    </p>
                </div>
            </div>
        )
    }

    render() {
        let name = "Ng Thi Hoc Vien";
        return (
            <div className="container" >
                <p>Ten hoc vien : {name}</p>
                <p>Tuoi : {this.age}</p>
                <img src={this.img} alt="" />

                {this.renderProduct()}

            </div>
        )
    }
}
