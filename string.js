//defining the string 

let str='supriya mishra'
console.log(str)
console.log(str.length)

//extracting the string meanfinding the substring 
//1 slice function used to find the substring
//slice(start,end+1)

let str1=str.slice(3,7)
console.log(str1)

// substr function it is now deleted
//slice(start,end)

let substring = str.substr(3,5)
console.log(substring)

//if we are not giving end in substr or in slice than it will take till string length
//substr(start)
//slice(start)

let substring_1=str.substr(3)
console.log(substring_1)
let substring_2=str.slice(3)
console.log(substring_2)

//to replace the string
//replace('which string want to replace','what u want to add new ')
let str3='Hello supriya how are you?'
let str4=str3.replace('Hello','Pagal')
console.log(str4)

//toUpperCase function //to print the string into capital letter
let upp='SUPRIYA'
let text1=upp.toUpperCase()
console.log(text1)

//toLowerCase function // used to print the string into small letter
let text2=upp.toLowerCase()
console.log(text2)

//ADDING THE TWO STRING 
//concat method is  concatenation method used to add the two string
let string1='First'
let string2='Second'
let string3=string1.concat(" ",string2)
console.log(string3)

//simple '+' is also used to add the two string 
let string4=string1+" "+string2
console.log(string4)

//trim method is used to remove the whitespace from the string
let white='                      hello world                 '
console.log(white.trim())