import React from 'react'
import "../Product Details/ProductDetails.scss"
import ct3 from "../../Images/ct3.jpg"


export default function ProductDetails({ product }) {
    console.log(product, "detaiiilssss")
    // const { image, description, price, title } = product.data;
    return (
        <div className="product-details-div" id="list">
            {
                Object.keys(product).length !== 0 ? <div className="product-details-wrap">
                    <div className="product-wrap">
                        <img src={product.image} />
                    </div>
                    <div className="details-wrap">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <h6> $ {product.price}</h6>
                    </div>
                </div>
                    : <h2>....Loading</h2>
            }</div>
    )
}
