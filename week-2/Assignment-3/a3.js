function avg(data) {
    var sum = 0;
    for (i = 0; i < data.size; i++) {
        sum += data.products[i].price;
    }
    return sum / data.size;
}

console.log(
    avg({
        size: 3,
        products: [{
            name: "Product 1",
            price: 100
    }, {
            name: "Product 2",
            price: 700
    }, {
            name: "Product 3",
            price: 250
    }]
    }));
