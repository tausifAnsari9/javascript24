const myNums = [1, 2, 3, 4, 5]

const myTotal = myNums.reduce((acc , crrv) => {
    console.log(`acc: ${acc}   crrv:${crrv}`);
    return acc + crrv
}, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price:999

    },
    {
        itemName: "python course",
        price:1299
    },
    {
        itemName: "data science",
        price:9999
    }
]

const total = shoppingCart.reduce((acc ,item) => acc + item.price ,0)

console.log(total);