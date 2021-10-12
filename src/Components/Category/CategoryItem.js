import "./CategoryItem.scss"
import React from 'react'
import { Link } from "react-scroll"

export default function CategoryItem({ item }) {
    return (
        <div className="cate-card-wrap">
            <div className="cate-card">
                <div className="cate-card-img">
                    <img src={item.src} />
                </div>
                <div className="cate-card-title">
                    <h2>{item.title}</h2>
                    <button><Link to="productsdiv" duration={500} smooth={true}>SHOP NOW</Link></button>
                </div>
            </div>
        </div>
    )
}
