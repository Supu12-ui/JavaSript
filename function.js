//normal function
function nor()
{
    console.log("hello")
}
nor()
//function by giving the value
function add(a,b)//function parameter
{
    console.log("the adition of two number" , (a+b))
}
add(2,3)//function argument
//function for return statement
function mul(a,b)//function parameter
{
 return a*b;
}
console.log("the multiplication is",mul(2,3))//function return statement
//javascript does not differentiate on variable and function 
//eg

let c=function(a,b)
{
    return a/b;
}
console.log(c(2,3))
//IIFE -> Intermediately Invoke Function Expression
 let add1=(function(a,b)
 {
     return a+b
  })(10,5)
 console.log(add1)