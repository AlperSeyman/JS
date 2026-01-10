
const product = {
    // properties
    title: "Samsung S25",
    description: "It is a nice phone",
    price: 70000,
    stock: 100,

    // methods
    display: function () {
        return `Product Title: ${this.title}`
    },
    isActive: function(){
        return (this.stock > 0) ? "sale" : "no stock"
    },
};

