export const truncate = (text, n) => (
    text?.length > n ? text.substr(0, n - 1) + "..." : text
);
export const maxPrice = (products) =>{
    const maxPrice = Math.max(
        ...products.map((product) => product.price)
    )
    return Math.ceil(maxPrice / 100) * 100
}