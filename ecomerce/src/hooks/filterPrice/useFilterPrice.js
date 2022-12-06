const useFilterPrice = (priceRange, products) =>{
    let filterProducts = products;
    
    const minPrice = Math.min(...products.map((product) => product.price));

    if(priceRange < minPrice) return filterProducts;

    return filterProducts.filter((product) => product.price <= priceRange)
}

export default useFilterPrice;