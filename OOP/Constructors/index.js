

//  Constructors
function Product(title, description, price, stock){
    // Properties
    this.title = title
    this.description = description
    this.price = price
    this.stock = stock

    // Methods
    this.info = function(){
        console.log(`Product Title: ${this.title}`)
        console.log(`Product Description: ${this.description}`)
        console.log(`Product Price: ${this.price}`)
    }
    this.isActive = function(){
        console.log(this.stock > 0 ? "sale" : "no stock" )
    }
}

const p1 = new Product("Samsung S24", "new one", 20000, 4)


p1.info()
p1.isActive()