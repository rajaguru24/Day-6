/*
//a).
class Movie {
    constructor(title, studio, rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
} }
var obj = new Movie("singam", "studio green" ,"8.5");
var obj1 = new Movie("vikram", "RKF", "9.0");
    console.log(obj.title,obj.studio,obj.rating);
*/    



 /* //b).
class Movie {
  constructor(title, studio, rating = "PG") 
        {
            this.title=title;
            this.studio=studio;
            this.rating=rating;
   }  } 
    var obj = new Movie("singam", "studio green");
    var obj1 = new Movie("vikram", "RKF", "9.0");
    console.log(obj.title,obj.studio,obj.rating);
*/

/*c).

class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let moviee1 = new Moviee("Thunivu", "Zee studios", "PG");
let moviee2 = new Moviee("Varisu", "Sri Venkateswara Creations", "V");
let movie3 = new Moviee("Kantara", "KRG Studios", "PG");
let movie4 = new Moviee("Vikram", "Raj kamal films", "PG-13");
let movie5 = new Moviee("veeram", "Vijaya production", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
let pgMovies = Moviee.getPG(movieArray);
console.log(pgMovies); 
  /*
//d). 
 class Movie {
  constructor(title, studio, rating)
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }}
var obj = new Movie("casino royale", "Eon productions" ,"PG13");
console.log(obj.title,obj.studio,obj.rating);
*/    
