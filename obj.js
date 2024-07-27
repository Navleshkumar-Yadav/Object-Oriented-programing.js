

class Product{
    name;
    price;
    category;
    description;
    rating;
    constructor(productName, productPrice, productCategory, productDescription ,productRating){
        this.name = productName;
        this.price = productPrice;
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
        console.log("Constructor called");
    }
    addToCart(){
        console.log("Product added to cart");

    }
    removeFromCart(){
        console.log("Product removed from cart");
    }
    displayProduct(){
        console.log("Product display");
    }
    buyProduct(){
        console.log("Product bough");
    }
}
let iphone = new Product("iphone",120000,"Mobile","something",4.3);
console.log(iphone);


 this keyword in js
 call site
let obj = {

    x: 20,
    y: 30,
    z :{
        x : 100,
        y : 2000,
        fn: function(){
            console.log(this.x, this.y);
    
        }

    }
   

}
obj.z.fn();
 

let obj1 ={
    A: 54,
    B: 55,
    fn: ()=>{
        console.log(this.A , this.B);
    }
   
}
obj1.fn();



let obj = {
    
    x: 20,
    y: 30,
    fn: function(){
        const arrow = () =>{
            console.log(this.x, this.y);
        }
        arrow();
       

    }
   

}







let obj = {
    x:1,
    y:2,
    fn: function(){
        x = 3;
        y = 4;
        const printVariables = () =>{
            console.log(this.x, this.y);
            console.log(x,y);
        }
        printVariables();
    }
}
obj.fn()
