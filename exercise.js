function getTotalItemSales(sales, itemID) {
    // total # of sales for that item
    return sales.filter(item => item.itemId === itemID).map(obj => obj.quantity).reduce((sum, number) => sum + number, 0)

}

function addTotalSalesToItems(sales, itemList) {
    return itemList.map(item => {
        const quantity = getTotalItemSales(sales, item.id)
        return { ...item, quantity }
    })
}





module.exports = {
    // Uncomment these functions as you write them
    getTotalItemSales,
    addTotalSalesToItems,
    // addTotalValueToItems
}
