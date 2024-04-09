// ### 

// Constructors
// class Car{
//     carName:string;
// 
//     constructor(name:string){
//         this.carName = name;
//     }
// }
// 
// let car = new Car("Tata");
// console.log(car);



// Methods
// class Car{
//          carName:string;
//      
//          constructor(name:string){
//              this.carName = name;
//         }
// 
//         // Method
//         getCarName(): string {
//             return this.carName;
// 
//         }
//     }
//      
//     let car = new Car("Tata");
//     console.log(car);


// Getters and Setters
// class Car{
//    private carName: string = "Tata";
// 
//    // getter
//    get getCarName():string{
//     return this.carName;
//    }
// 
//    // Setter
//    set setCarName(name:string){
//     this.carName = name;
//    }
// } 
// let car = new Car();
// car.setCarName = "Maruti";
// console.log(car.getCarName);


// Index Signature
// class Test{
//     [number: number] : string;
// 
//     constructor(name: string){
//         this[number] = name;
//     }
// }
// let test = new Test("shivam");
// console.log(test);


// Member visibility(public / private / protected / readonly)

// public
// class ParentClass{
//    public className: string = "ParentClass";
// 
//    public getClassName(){
//     return this.className;
//    }
// }
// 
// let p = new ParentClass();
// console.log(p.getClassName());

// private
// class ParentClass{
//     private className: string = "Parent Class";
// 
//     privategetClassName(): string{
//         return this.className;
//     }
// }
// let p = new ParentClass();
// console.log(p.getClassName);

// readonly
// class ParentClass{
//     readonly className: string = "Parent Class";
// 
//     getClassName(): string{
//         return this.className;
//     }
// }
// let p = new ParentClass();
// console.log(p.getClassName());


// protected
// class ParentClass{
//     protected className: string = "ParentClass";
// 
//     protected getClassName(): string{
//         return this.className;
//     }
// }
// 
// class ChildClass extends ParentClass{
//     public getParentClassName(){
//         return this.className;
//     }
// }
// 
// let p = new ChildClass();
// console.log(p.getParentClassName());



// Overriding Method
// class ParentClass{
//     public className: string;
// 
//     constructor(name: string){
//         this.className = name;
//     }
// 
//     public getParentClass(): string{
//         return this.className;
// 
//     }
// }
// 
// class ChildClass extends ParentClass{
// 
//     constructor(name: string){
//         super(name);
//         this.className = name;
//     }
// 
//     public getParentClass(): string{
//         console.log(super.getParentClass());
//         return this.className;
// 
//     }
// }
// 
// let child = new ChildClass("ParentClass");
// console.log(child.getParentClass());


// abstract Classes and members 

// abstract class ParentClass{
//     public className: string;
// 
//     constructor(name: string){
//         this.className = name;
//     }
// 
//     public abstract getParentClassName(): string;
//     public abstract setParentClassName(): string;
// 
//     public testing(){
//         console.log("Testing");
//         
//     }
// }
// 
// abstract class ChildClass extends ParentClass{
// 
//     constructor(name: string){
//         super(name);
//         this.className = name;
//     }
// 
//     public abstract getParentClassName(): string;
//     public abstract setParentClassName(): string;
//     
// }
// 
//  class SubChildClass extends ParentClass{
// 
//     public getParentClassName(): string {
//         return this.className + "shvbhs";
//     }
// 
//     public setParentClassName(): string {
//         return this.className + "sbvs";
//     }
// 
// }
// 
// let child = new SubChildClass("ParentClass name");
// console.log(child.getParentClassName());




// Interface (implements)
// interface Employee{
//     empName : string;
//     getEmployeeName(): string;
//     setEmployeeEmail(): string;
// }
// 
// class ChildClass implements Employee{
//     empName: string = "shivam";
//     getEmployeeName(): string{
//         return "Shivam";
//     }
//     setEmployeeEmail(): string{
//         return "shivam@games.com";
//     }
// }

// interface College{
//     getCollegeName():string;
// }
// 
// interface Sports{
//     getSportsName():string;
// }
// 
// class Student implements College,Sports {
//     getCollegeName(): string {
//         return "Ducat";
//     }
// 
//     getSportsName(): string {
//         return "Cricket";
//     }
// }




// Static Members
// class Test{
//     static className = "Test";
// 
//     static getClassName() {
//         return this.className;
//     }
// }
// 
// class Test2 extends Test{
// 
// }
// console.log(Test2.className);
// console.log(Test2.getClassName());





