//in js objects are basically key value pair 
//to declare an object 
let obj={}//object delaration


//how object works with
let person={
name:'Supriya',//here name is the key and supriya is string
age:18,//want to add new property than use comma ',' and than add the property
phoneNumber:6756868976//',' comma is very important 
}
console.log(person) //afterward call the object for printing


let cap={ //creating object
    firstName: 'Steve',
    lastName: 'roger',
    friends:['bucky','tommy','Dr Banner'],//in object array is also allowed to create objects
    isAveneger:true,
    age : 102,
    address: {
        state: 'Manhattan',
    city: 'New York'
    },//in object we can create nested object
    sayHi:function fn(){
    console.log('hi')
      }//in object we can also make function  
}
console.log(cap)
//if from object we want to access any one value from an object or want to access the prpoperty from the from object
 console.log(cap.firstName)
 console.log(cap.lastName)
 cap.sayHi()//to access the function from the object 
 console.log(cap.friends[0])//to access the array from the object  
 console.log(cap.address.city)//to access the value from the nested object
 //object is not unordered collection

 //important loop and one of the important topic for interviewer
//loop -> for in loop  is used to use object in it 
//for (data type variable 'in' object name{})
for (let i in cap){
 console.log("key:",i,'value:',cap[i])
}
//output of for in loop 
/*key: firstName value: Steve
key: lastName value: roger
key: friends value: [ 'bucky', 'tommy', 'Dr Banner' ]     
key: age value: 102
key: address value: { state: 'Manhattan', city: 'New York'*/
 cap.isAveneger=false
 console.log(cap)
 //want to add another thing something in object or want to manipulate the data from
 cap.movies=['Age of Ultron','first Aveneger']
 console.log(cap)