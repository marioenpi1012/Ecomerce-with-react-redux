import React, {useEffect} from 'react'

const Filter = () => {
    return (
        <>
            <div className="filter">
                <select name="filter-category"
                    id="filter-category"
                    onChange={(e) => getValue(e)}>
                    <option value="default">Filter By Category (Default):
                    </option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                </select>
            </div>
            <div className="filter filter-price">
                <select
                    name="filter-price"
                    id="filter-price"
                    onChange={(e) => setFilterByPrice(e.target.value)}>
                    <option value="normal">Filter By Price (Default)
                    </option>
                    <option value="desc">Highest Price</option>
                    <option value="asc">Lowest Price</option>
                </select>
            </div>
        </>
    )
}

export default Filter