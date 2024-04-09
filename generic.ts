// let array : Array<number> = [10,20,30];
// console.log(array);

// function testing<X,Y>(number: X , age: Y){
//     return number;
// }
// 
// testing<number, number>(10,10);
// testing<string,string>("Shivam","Ahlawat")


class test<U,V>{
    firstName: U;
    lastName: V;
    constructor(firstName: U, lastName: V){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let t = new test<string,string>("Shivam","Ahlawat");
console.log(t);
