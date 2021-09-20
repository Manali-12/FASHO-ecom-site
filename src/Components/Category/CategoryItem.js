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
                    <button>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}
