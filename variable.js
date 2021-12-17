//variable declaration
//js is dynamically typed language 
//1 data type is var which can be redeclaration 
var a=2
console.log(a)
var a=true
console.log(a)
var a='I am from Uttar Pradesh'
console.log(a)
//2 data type is let it can not be redeclare but it can be reassigned
let b='hello'
console.log(b)
b=true
console.log(b)
//what is the difference between let and var??
//var can be redeclared but let can not be redeclared  but it can be  reassigned 
var num=4
if(num==1) {
    console.log("prime number")
}
var flag=true
for(var i=2;i*i<=num;i++) {
 if((num%i)==0) {
     flag=false
break;
}
}
if(flag==true) {
    console.log("prime number")
}
else{
    console.log("not prime number")
}

if(10%2==0)
{
    var a=10
    console.log(a)
}
console.log(a)
// var scopping 
//const declaration 
//const can not be redeclared not be reassigned
const d=10 
console.log(d)



