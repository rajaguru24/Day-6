class UberPrice
{
    constructor(price,kilometre){
    this.price=price;
    this.kilometre=kilometre;
    
}
totalPrice(){
return this.kilometre*this.price;
}
}   
let myUber=new UberPrice(150,6);
console.log(myUber.totalPrice());


  