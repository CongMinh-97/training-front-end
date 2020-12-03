// **** 1. khai bao va khoi tao 1 obj
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    run: function(){
        console.log(`${this.name} run fast`);
    }
}; 
// khoi tao voi new
var ourDog02 = new Object(ourDog);
ourDog02.abc = "jash";
console.log(ourDog02);
// tury xuat thuoc tinh obj: 2 cach
console.log(ourDog.name);
console.log(ourDog['name']);
// goi phuong thuc cua obj
ourDog.run();
// thay doi gia tri thuoc tinh
ourDog.name = "Coder";
// or   ourDog['name'] = "Coder";
console.log(ourDog.name);
// them thuoc tinh: 2 cach
ourDog.height = 200;
ourDog['weight'] = 100;
console.log(ourDog.weight, ourDog.height);
// xoa thuoc tinh
delete ourDog.height;
console.log(ourDog);

// **** 2. phuong thuc
// 2.1. assign() - Sao chép các gía trị của tất cả các thuộc tính riêng từ một hoặc nhiều object vào một object khác.
// neu doi tuong duoc gan (doi tuong dich) co thuoc tinh trung key voi doi tuong dem gan  thi doi tuong duoc gan se bi ghi de 
const obj2 = { age: 23 };
var dog03 = Object.assign({'name':'dog03'}, ourDog02, obj2);
console.log("dog03",dog03); // name: Coder

// 2.2. create() - Tạo object mới sử dụng một object hiện có để cung cấp __proto__ của object mới được tạo ra.
// Object.create(prototypeObject, propertiesObject)
// prototypeObject: Object prototype mới được tạo. Nó có thể là object hoặc null.
// propertiesObject: Các thuộc tính của object mới (tùy chọn).
prototypeObject = {
	fullName: function(){
		return this.firstName + ' ' + this.lastName		
	}
};
var person = Object.create(prototypeObject);
console.log(person); // {}
// them properties cho obj
person.firstName = 'Hieu';
person.lastName = 'Bui';
person.fullName();
console.log(person.fullName()); // Hieu Bui

// 2.3. entries() -Trả về mảng thuộc tính đếm được của các cặp [key, value] với object đã cho, tương tự như dùng vặp lặp for...in.
// co ca phuong thuc cua obj
console.log(Object.entries(ourDog));

// 2.4. Object.fromEntries(array) - biến array trở lại thành một đối tượng.
var prices = {
    banana: 1,
    orange: 2,
    meat: 4,
}; 
var doublePrices = Object.fromEntries(
    // convert to array, map, sau do dung fromEntries tra ve mot object
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);  
console.log(doublePrices.meat); // 8

// 2.5. key(<obj>) - Trả về một mảng các tên key thuộc tính, phuong thuc của một object đã cho.
console.log(Object.keys(ourDog02));

// 2.6. values(<obj>)
console.log(Object.values(ourDog02));
// 2.7. hasOwnProperty(<thuoc tinh>) - ktra 1 thuoc tinh co nam trong doi tuong k? 
console.log(ourDog.hasOwnProperty('name')); // log: true

// 2.8. prototype
// Khi một hàm được tạo trong Javascript thì nó sẽ thêm thuộc tính prototype vào hàm đó. Thuộc tính prototype là một object với mặc định có constructor.
// Tất cả các object trong Javascript kế thừa các thuộc tính và phương thức từ prototype.

// ***** 3. promise // link: https://www.youtube.com/watch?v=qW3raOCefms&ab_channel=CodersX
//cau truc
let promise1 = new Promise((resolve, reject)=> {
    // xu ly goi ham resolve/ reject
    resolve('succes');
    reject();
});
promise1
    .then((message)=> {
        console.log(`This is in then ${message}`);
        
    })
    .catch((message)=> {
        console.log(`This is in catch ${message}`);
    })

/*
promise
    .then(
        value => { //fullfillment//}
        error => { //ejection //}
    )
    .catch (error => { //ejection //})
*/ 

// thời điểm bắt đầu chay là khi khai báo new Promise() chứ kp là gọi then, then chỉ để gắn 1 sự kiện khi thực thi vào case thành công
// trong một thời điểm chỉ chạy 1 là resolve hoặc reject. 
// example: load thanh cong link srcipt thi them the script vao the head, k thanh cong thi hien loi
function testPromise(src){
    let script = document.createElement('script');
    script.src = src;
    let pro = new Promise((resolve, reject)=>{
        script.onload =()=> resolve(script);
        script.onerror = () => reject(src);
        document.head.append(script);
    });
    pro.then((script)=>{
        console.log(`${script.src} is loaded`);
    })
    pro.catch((src)=>{
        console.log(new Error(`Script load error for ${src}`));
    });
}
testPromise("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
//
function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
      document.head.append(script);
    });
}
let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
promise.then(
  script => console.log(`${script.src} is loaded!`),
  error => console.log(`Error: ${error.message}`)
);
promise.then(script => console.log('Another handler...'));

// let promise2 = new Promise(function(resolve, reject) {
//     resolve(1);
//     reject(2);
//     setTimeout(() => resolve(2), 1000);
//   });
  
//   promise2.then(alert);
//   promise2.catch(alert);

// promise nối chuỗi -- k hiểu
// với promise nối thì promise.then  -> trả về promise nếu dữ liệu là promise,
// còn nếu kp là promise mà là gtri thông thường thì sẽ bắt lại đưa vào .then tiếp theotheo