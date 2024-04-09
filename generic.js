// let array : Array<number> = [10,20,30];
// console.log(array);
// function testing<X,Y>(number: X , age: Y){
//     return number;
// }
// 
// testing<number, number>(10,10);
// testing<string,string>("Shivam","Ahlawat")
var test = /** @class */ (function () {
    function test(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return test;
}());
var t = new test("Shivam", "Ahlawat");
console.log(t);
