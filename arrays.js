let a=[]//array declaration

let b=['ferrari','bmw','tesla']//array access
console.log(b)

//in java script we can store different data types with different values
let c=['ferrari',true,2,null]
console.log(c)

//accessing the element of an array 
let cars=['ferrari','bmw','tesla','hyundai','suzuki']
console.log(cars[2])
console.log(cars[1])
console.log(cars[0])
console.log(cars[3])
console.log(cars[4])

//accessing the element using for loop
for(let c=0;c<cars.length;c++)
{
    console.log(cars[c])
}

//replace an element from an array  and access the new element
cars[0]='mercedies'
console.log("new element of an array", cars)

//Arrays methods

//add a new element in array
cars[4]='farrari'
console.log("new element" ,cars)

//pop method - is used to delete the elemnt from the last of the arrays
cars.pop()
console.log(cars)

//push method - is used to add the element in last
cars.push('lamberghini')
console.log(cars)

//shift method is used to remove the element from starting position of an array
cars.shift()
console.log(cars)

//unshift method is used to add the element from starting position of an array
cars.unshift('ruby')
console.log(cars)

//length of an array can be find

console.log(cars.length)
//multidimenesional array 
let matrix=[
    [1,2,3],
    [4,5,6],[7,8,9]

]
console.log(matrix)//for accessiong whole matrix
console.log(matrix[0,0])// for accessing the one row and one column
console.log(matrix[0][0])//for accessing the index of the matrix