import React from 'react'
import "../Products/Products.scss"
import { productData } from "../../ProductsInfo"
import Product from "../Product/Product"

export default function Products() {
    return (
        <div className="products-div">
            {productData.map((item) =>
                <Product item={item} />
            )}
        </div>
    )
}
