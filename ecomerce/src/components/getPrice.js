
export const total = (qty, price) =>{
             return qty * price 
        }
export const totalPrice = (products) =>{
        let prices = 0
        products.map(product =>{
            console.log(product.qty, product.price)
            prices +=  total(product.qty, product.price)
            
        })
        return "$" + prices.toFixed(2)
    }