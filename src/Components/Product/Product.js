import React from 'react'
import "../Product/Product.scss"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Link } from "react-router-dom"

export default function Product({ item }) {

    const screenWidth = window.matchMedia("(min-width:480px)");
    console.log(screenWidth);

    return (
        <div className="product-wrap">
            <div className="product-image-wrap">
                <img src={item.image} />

                <div className="product-circle"></div>

            </div>
            {screenWidth.matches ? <div className="product-icon-wrap">
                <div className="product-icon">
                    <ShoppingCartOutlinedIcon className="icon" />
                </div>
                <div className="product-icon">
                    <Link to={`/products/${item.id}`}><SearchOutlinedIcon className="icon" /></Link>
                </div>
                <div className="product-icon">
                    <FavoriteBorderOutlinedIcon className="icon" />
                </div>
            </div> :
                <div className="productmobicons">
                    <div className="product-icon">
                        <ShoppingCartOutlinedIcon className="icon" />
                    </div>
                    <div className="product-icon">
                        <Link to={`/products/${item.id}`}><SearchOutlinedIcon className="icon" /></Link>
                    </div>
                    <div className="product-icon">
                        <FavoriteBorderOutlinedIcon className="icon" />
                    </div>
                </div>}

        </div>
    )
}
