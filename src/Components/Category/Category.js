import "./Category.scss"
import cate from "../../Categories"

import React from 'react'
import CategoryItem from "./CategoryItem"

export default function Category() {
    return (
        <div className="cate-wrap">
            {cate.map((item) =>
                <CategoryItem item={item} />
            )}
        </div>
    )
}
