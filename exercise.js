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

function addTotalValueToItems(sales, itemList) {
    const variableToLog = addTotalSalesToItems(sales, itemList)
        .map(item => {
            let value = sales.find(e => e.quantity * item.price)

            return { ...item, totalValue: value }


        })
        console.log(variableToLog)
}


    /*addTotalSalesToItems(sales, itemList).map(element =>
                (element.price * element.quantity).toFixed(2)).map(element => element.index === item.Id)*/




    /*const result = addTotalSalesToItems(sales, itemList)

    /* const completedList = result.map(e => {
    const value = e.totalValue
        return {
            ...e, totalValue: '3'}
    
    console.log(value)*/

 /* return  addTotalSalesToItems(sales, itemList).map(element => (element.price * element.quantity).toFixed(2))*/








    /*const quantity = result.quantity
    const multi = result.price.reduce((result, quantity) => {
        return result.price * quantity
    },0)
    console.log(multi)
    const totalValue = quantity
    .map(addTotalSalesToItems)
    .reduce(getTotalItemSales,2) * quantity
        
    return totalValue
  */ 
}








module.exports = {
    // Uncomment these functions as you write them
    getTotalItemSales,
    addTotalSalesToItems,
    addTotalValueToItems
}
