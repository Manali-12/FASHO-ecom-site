import React, { useEffect } from 'react'
import ProductDetails from '../../Components/Product Details/ProductDetails'
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'
import { useParams } from 'react-router'
import { selectedProducts } from '../../Redux/Actions/ProductAction'
import Navbar from '../../Components/Navbar/Navbar'


export default function ProductInfo() {
    const dispatch = useDispatch();
    const { productsId } = useParams();
    console.log(productsId)
    const getProduct = async () => {
        var result = await axios.get(`https://fakestoreapi.com/products/${productsId}`).catch((err) => {
            console.log("error =>", err);
        }
        )
        dispatch(selectedProducts(result.data));
    }
    useEffect(() => {
        getProduct();
    }, [productsId])

    const product = useSelector(state => state.product);
    console.log(product);
    return (
        <div>
            <Navbar />
            <ProductDetails product={product} />
        </div>
    )
}
