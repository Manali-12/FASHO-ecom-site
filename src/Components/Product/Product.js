import React from 'react'
import "../Product/Product.scss"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';


export default function Product({ item }) {
    return (
        <div className="product-wrap">
            <div className="product-image-wrap">
                <img src={item.src} />

                <div className="product-circle"></div>

            </div>
            <div className="product-icon-wrap">
                <div className="product-icon">
                    <ShoppingCartOutlinedIcon className="icon" />
                </div>
                <div className="product-icon">
                    <SearchOutlinedIcon className="icon" />
                </div>
                <div className="product-icon">
                    <FavoriteBorderOutlinedIcon className="icon" />
                </div>
            </div>

        </div>
    )
}
