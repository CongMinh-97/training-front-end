class Customer01 {
    name: string;
    constructor(firstName: string, lastName: string){
        this.name = firstName + " " + lastName;
    }
    getName(){
        return this.name;
    }
}
var cust = new Customer01("Jimi","Scott");
// ******** kieu du lieu: number( cu the la so nguyen, so thuc ... thi se phu thuoc vao gia tri truyen vao)
// boolean, string, array, obj, null, undefined, co them kieu void, tuple, any, enum
var address:string = "Bac Giang";
var isDone:boolean = true;
var num:number = 12;

// mang: 2 cach khai bao: kieudulieu[]   or  Array<kieudulieu>
var arr01: string[] = ['Jimi', 'Scott'];
var arr02:Array<string> = ['ABC','DEF'];

// obj: 
var prams: object = {
    name: 'abc',
    age: 22
};

// console.log(o);
// tuple: chua nhieu gia tri voi nhieu kieu du lieu khac nhau
// tuple la mang da xac dinh so phan tu va kieu du lieu cho phan tu do
var tupleArray: [number, string, string, boolean];
tupleArray = [8, 'Chug', 'BG', true];
// gia tri phan tu truyen vao phai dung voi kieu dl, va truyen du gia tri voi so luong khai bao
//tupleArr = ['Chug', 8, 'BG', true]; // sai vi phan tu dau tien la kieu number...
console.log(tupleArray[0]);
// enum: kiểu dữ liệu đặc biệt dùng để tạo một nhóm tên tương ứng với các giá trị là những con số mà ta thiết lập cho nó,-> tập số
//nếu ta không thiết lập giá trị cho chúng thì nó sẽ tính theo thứ tự và bắt đầu bằng 0.các giá trị sau tăng theo thứ tự lên 1
enum Color1 {
    Yellow,
    Blue,
    Green,
    Red,
    Black
};
var color01:Color1 = Color1.Yellow; // log: 0
console.log(color01);
enum Color2 {
    Yellow =3,
    Blue,
    Green,
    Red,
    Black
};
var color02:Color2 = Color2.Yellow; // color02 =3
console.log(Color2.Red); //log: 6 vi Yellow o vi tri dau tien da bat dau gia tri la 3
// co the  thay doi tat ca gia tri trong enum
enum Color3 {
    Yellow =3,
    Blue = 1,   
    Green = 2,
    Red = 7,
    Black = 6
}; // log: Yellow: 3; Blue: 1; Green: 2; Red: 7; Black: 6
//lay ten gia tri qua gia tri 
console.log(Color3[1]) // log: Blue

//any: kieu bat ki
var a:any =4;
a = 'String';
a = true;
console.log(a);
var b:any[] = [1,2,'abc', false];
// void: ham k tra ve gia tri gi, co the gan cho null hoac undefined
function sayHello():void{
    console.log("Say hello");
}
sayHello();

// interface: định nghĩ thuộc tính là gì và phương thức là gì mà đối tượng cần để được thực thi (implement). 
// Nếu đối tượng tuân thủ đúng khuôn mẫu interface thì đối tượng đã implement interface ấy sẽ được thi hành đúng. 
// Nếu interface không được thi hành đúng đắn thì typescript sẽ phát sinh lỗi ngay lập tức. 
//    khong dung interface
function printLabel1(labelObj: {label: string, size: number}){
    console.log("label: " + labelObj.label + " ,size: " + labelObj.size);
};
printLabel1({label:'abc', size: 10});
//     dung interface
interface Label{
    label: string,
    size: number,
}
function printLabel2(labelObj: Label){
    console.log("label: " + labelObj.label + " ,size: " + labelObj.size);
}
printLabel2({label:'abc', size: 10})

// function
// arrow function in typescript
var sum = (x:number, y:number):number => x+y;
console.log(sum);
// tham số optional, nghĩa là có truyền giá trị vào cho nó hay không đều được. -> them dau ? vao truoc kieu dl cua n
function buildName1(firstName: string, lastName?: string):string{
    if(lastName){
        return firstName + " " + lastName;
    }else 
        return firstName;
}
console.log(buildName1("Bob", undefined));// log: Bob vi undefined - k co -> hieu la k co bien lastName
console.log(buildName1("Bob", "Adams"));
// bien mac dinh
function buildName2(firstName: string, lastName = 'Adams'):string{   
    return firstName + " " + lastName;
}
console.log(buildName2("Bob"));
console.log(buildName2("Bob", "Mama"));
//Nếu một tham số được khởi tạo mặc định đứng trước một tham số bắt buộc, 
//thì người dùng cần phải chuyển một cách rõ ràng undefinedđể nhận được giá trị được khởi tạo mặc định. 
function buildName3(firstName = 'Bob', lastName: string):string{   
    return firstName + " " + lastName;
}
console.log(buildName3(undefined,"Bob"));// phai truyen undefined vao, neu k se loi thieu tham so
// rest trong function
function buildName4(firstName: string, lastName: string, ...rest:string[]):void{   
    console.log('firstName'+ firstName);
    console.log('lastName'+lastName);
    console.log('rest'+rest);
}

console.log(buildName4("Bob", "Mama", "Bob", "Mama", "Bob", "Mama"));

// this in function

// class 
class Animal {
    name:string;
    private x: number;
    constructor(name:string) {
        this.name= name;
    }
    move(speed:number = 0){
        console.log(`${this.name} speed: ${speed}km/s`);
    }
}
class Snake  extends Animal{
    constructor(name:string) {
        super(name);
    }
    move(speed:number){
        console.log('Slithering');
        super.move(speed);
    }
}
let snack1 = new Snake('abc');
console.log(snack1.name); // log: abc
snack1.move(22); 

// union types
// Khi bạn muốn một biến nào đó có thể có nhiều kiểu dữ liệu khác nhau,
let unionVar = (arg: string | number) => arg; // unionVar  có thể nhận một trong 2 kiểu dữ liệu là string hoặc number
unionVar("hello");
unionVar(100);

function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
  }
  
  const result = rollDice();
  console.log(result);

// generic
// cú pháppháp
//   function identity<T>(arg: T): T {
//     return arg;
//   }
// gọi
//identity<kiểu dữ liệu mà muốn gán cho T>(); // gọi hàm indentity
// Normal arrow function
let myIdentity1 = (arg: number): number => arg;
let myIdentity2 = (arg: string): string => arg;
// Generic function
let myIdentity = <T>(arg: T):T => arg;
// How to call generic function?
console.log(myIdentity<number>(1603));
console.log(myIdentity<string>("generic"));
// có thể dùng any khai báo kiểu dữ liệu cho biến từ đầu nhưng như vậy sẽ làm mất đi thông tin về kiểu đó là gì khi hàm trả về   





