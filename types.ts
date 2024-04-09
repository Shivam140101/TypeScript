// ### Types

// - string
// let str: string = "Shivam";
// console.log(str);
// console.log(str);


// - number
// let number:number = 10;
// console.log(number);


// - boolean
// let bool:boolean = true;
// console.log(bool);



// - Array
// let array:number[] =[10,20,30];
// let array1:string[] = ["sbcs","skbvshd"];
// let array2:boolean[] = [true,false];
// 
// console.log(array);
// console.log(array1);
// console.log(array2);


// - any
// let num:any = "deepak";
// 
// num = 10;
// console.log(num);


// - Function
// function addition(num1: number, num2: number) {
//     console.log(num1 + num2);
// }
// addition(10,20);

// function addition(num1: number, num2: number):number {
//     return num1 + num2;
// }
// console.log(addition(10,20));


// Object
// let object: {
//     firstName: string,
//     lastName: string,
//     age: number
// } = {
//     firstName: "Shivam",
//     lastName: "Ahlawat",
//     age:10
// }
// console.log(object);




// Interface
// interface Employee {
//     firstName: string,
//     lastName: string,
//     age: number
// }
// 
// let object: Employee = {
//     firstName: "Shivam",
//     lastName: "Ahlawat",
//     age:10
// }
// 
// let object1: Employee = {
//     firstName: "Pratibha",
//     lastName: "Ahlawat",
//     age:10
// }
// 
// console.log(object);
// console.log(object1);



// Optional Properties

// interface Employee {
//       firstName: string,
//       lastName: string,
//       age?: number
//     }
//      
//  let object: Employee = {
//      firstName: "Shivam",
//      lastName: "Ahlawat",
//      age:10
//     }
//  
//  let object1: Employee = {
//      firstName: "Pratibha",
//      lastName: "Ahlawat",
//     }
//      
//      console.log(object);
//      console.log(object1);



// null
// let number: null = null;
// console.log(number);

// undefined
// let un: undefined;
// console.log(un);


// Enums

// let a  =10;
// 
// if(a===10){
//     console.log(10);
// }
// 
// if(a > 10){
//     console.log(10);
// }

// enum Status {
//     pending = 1,
//     delivered = 0,
//     cancelled = 2,
//     refunded = 3,
// }
// 
// if(Status.pending === 1){
//     console.log("Pending");
//     console.log(Status.pending);   
// }


// bigint
// let number: bigint = BigInt(10);
// console.log(number);

// symbol
// let sym:symbol = Symbol('id');
// console.log(sym);


// Union
// let a: string | number | boolean = 10;
// a = "Shivam";
// a = true;
// 
// console.log(a);


// Intersection
// interface t1{
//     name: string;
// }
// interface t2{
//     age: number;
// }
// 
// let object: t1 & t2 = {
//     name: "Shivam",
//     age: 10
// }


// Type Aliases
// type shivam = string | number;
// 
// let str:shivam = "shivam";
// str = 10;


// Tuple Types
// let emp:[string,number,boolean] = ["deepak",10,true];
// console.log(emp);

// Type Assertions
// let div = document.getElementById('heading') as HTMLHeadElement


 


