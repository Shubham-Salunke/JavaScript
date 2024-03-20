// Reduce

 const myNums = [1, 2, 3]

//  const myTotal = myNums.reduce( function(acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
//  }, 0)

//  console.log(myTotal);

//  const myTotal = myNums.reduce( (acc, currval) => {
//     return acc + currval
//  }, 0)
//  console.log(myTotal);

const shopCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "PY course",
        price: 999
    },
    {
        itemName: "CPP course",
        price: 499
    },
    {
        itemName: "Mobile Dev course",
        price: 5999
    },
    {
        itemName: "HTML course",
        price: 799
    }
]

const newShopCart = shopCart.reduce( (acc, item) => acc + item.price, 0)
console.log(newShopCart);
