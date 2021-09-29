import "./CategoryItem.scss"
import React from 'react'

export default function CategoryItem({ item }) {
    return (
        <div className="cate-card-wrap">
            <div className="cate-card">
                <div className="cate-card-img">
                    <img src={item.src} />
                </div>
                <div className="cate-card-title">
                    <h2>{item.title}</h2>
                    <button><a href="/products/15">SHOP NOW</a></button>
                </div>
            </div>
        </div>
    )
}
