
export const total = (qty, price) =>{
             return qty * price 
        }
export const totalPrice = (products) =>{
        let prices = 0
        products.map(product =>{
            prices +=  total(product.qty, product.price)
            
        })
        // This adds commas to separate numbers eg = 1,000
        let nf = new Intl.NumberFormat('en-US')
        return "$" + nf.format(prices)
    }