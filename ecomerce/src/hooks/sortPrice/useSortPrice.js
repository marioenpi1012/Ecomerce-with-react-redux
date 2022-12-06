const useSortPrice = (target, products) =>{
    switch(target){
        case 'highestPrice':
            return products.slice().sort((a,b) => b.price - a.price)
        case 'lowestPrice':
            return products.slice().sort((a, b) => a.price - b.price);
        default:
            return products;
    }
}

export default useSortPrice;