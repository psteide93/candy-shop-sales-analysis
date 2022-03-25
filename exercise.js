function getTotalItemSales(sales, itemID){
    // total # of sales for that item
    return sales.filter(item => item.itemId === itemID).map(obj => obj.quantity).reduce((sum, number) => sum + number, 0)

}

// getTotalItemSales(sales, itemID)




module.exports = {
    // Uncomment these functions as you write them
     getTotalItemSales,
   // addTotalSalesToItems,
   // addTotalValueToItems
}
