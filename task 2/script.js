class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        return this.radius=n;
    }
        get Color(){
       return this.color
        }               
       set Color(c){
       return this.color=c;
        }  
        get tostring()
        {
        return `"Circle[radius = $(this.radius), color =$(this.color)]"`
        }
        get area()
        {
        return Math.PI*Math.pow(this.radius,2)
       }
         get circumference(){
        return 2*Math.PI*this.radius
    }}
    let obj = new circle(3.5,"green");
    console.log(obj.radius);
    console.log(obj.color);
    console.log(obj.toString);
    console.log(obj.area);
    console.log(obj.circumference); 