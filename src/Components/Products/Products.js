import React, { useEffect } from 'react'
import "../Products/Products.scss"
import { productData } from "../../ProductsInfo"
import Product from "../Product/Product"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from "../../Redux/Actions/ProductAction"

export default function Products() {
    const dispatch = useDispatch();


    const fetchProducts = async () => {
        var response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("error => ", err);
        });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    const products = useSelector(state => state.allProducts.products)
    console.log(products)
    return (
        <div className="products-div">
            {products.map((item) =>
                <Product item={item} />
            )}
        </div>
    )
}
