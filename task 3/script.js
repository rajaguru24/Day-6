class person{
constructor(name,age,gender,marital,contact,email){
this.name=name;
this.age=age;
this.gender=gender;
this.marital =marital;
this.contact=contact;
this.email=email;
}
get Name()
{
    return this.name
}
set Name(a) 
{
    return this.name(a);
}
get Age()
{
    return this.age
}
set Age(b)
{
    return this.age(b);
}
get Gender()
{
    return this.gender  
}
set Gender(c)
{
    return this.gender(c);
}
get Marital ()
{
    return this.marital            
}
set Marital (d)
{
    return this.marital(d) ;
}
get Contact()
{
    return this.contact
}
set Contact(e)
{
    return this.contact(e);
}

get Email()
{
    return this.email
}
set Email(f)
 {
    return this.email(f);
}}
let obj= new person("rajaguru",31,"male","single",8667298624,"rajaguru246@gmail.com");
console.log(obj.name);
console.log(obj.age);
console.log(obj.gender);
console.log(obj.marital);
console.log(obj.contact);
console.log(obj.email);