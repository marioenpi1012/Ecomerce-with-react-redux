export const itemsInCart = (items) =>{
    let qtys = 0
    items.map(item =>{
        qtys += Number(item.qty)
    })
    return qtys
}