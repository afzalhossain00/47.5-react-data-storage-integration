const add = (first, second) => {
    return first + second;
}

// export default add;

const multiply = (first, second) => {
    return first * second;
}

const subtraction = (first, second) => {
    return first - second;
}

// const numbers = [10, 25, 30, 36, 25]
// const sumReducers = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducers, 0)

// const items = [
//     { id: 1, name: 'alta', price: 100 },
//     { id: 1, name: 'alta', price: 100 },
//     { id: 1, name: 'alta', price: 100 },
//     { id: 1, name: 'alta', price: 100 },
//     { id: 1, name: 'alta', price: 100 }
// ]

// const itemSumReducer = (previous, current) => previous + current.price
// const itemTotal = items.reduce(itemSumReducer, 0)

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0)
    return total;
}

export { add, multiply, subtraction, getTotalPrice as getTotal }