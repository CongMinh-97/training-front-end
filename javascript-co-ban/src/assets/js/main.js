// ************************ 1. biến
/*biến: var, let, const
let: block scope
var: function scoped hoặc  global scoped, bị hosting, 
const: khai báo biến là các hằng số, k thay đổi giá trị
*/
const PI = 3.14;
console.log(address); // biến var bị hosting nên khai báo var address sẽ được đẩy lên trên, nhưng k kèm theo các phép gán giá trị hoặc các thực thi
var name = "Nguyen Van An";
var name = "Ta Van Chung";
console.log(name);// log: Ta Van Chung 
// var có thể khai báo biến cùng tên và giá trị sẽ bị ghi lại 
var address = "Ha Noi";
let age = 20;
// let age = 23;
console.log(age); //let không được khai báo trùng tên


// ************************** 2. kiểu dữ liệu: nguyên thủy ( number, string, boolean, undefinder, symbol), structural (object, function)
console.log('======================');


// ************************** 3. Object
console.log('======================');
// 3.1. khởi tạo obj
var couse = {
    name: 'Javascript',
    cost: 10000,
    getNameCouse: function () {
        return couse.name;
    }
}
var couse_02 = new Object();
couse_02.name = 'Java';
console.log(couse_02);
var couse_03 = new Object({ name: 'PHP' });
console.log(couse_03);
// 3.2. truy cập vào thuộc tính của obj, vào method: obj.property or obj['property'], obj.method()
console.log(couse.name);
console.log(couse['cost']);
console.log(couse.getNameCouse());


// ************************* 4. array
console.log('======================');
// 4.1. khai báo
var fruits = ["Banana", "Orange", "Apple", "Mango", "Strawbery"];
// var fruits = new Array(); fruits[0] = "Banana";
// 4.2 method
console.log("------- Original Array ------")
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
fruits.push("Lemon"); // thêm vào cuối mảng
fruits.unshift("Mango"); // thêm vào đầu mảng
// fruits.pop(); // xóa cuối -> trả về phần tử bị xóa
// fruits.shift();
//     // foreEach - duyệt từng giá trị mảng
console.log("-------- New Array -------")
fruits.forEach(element => {
    console.log(element);
});
console.log(fruits);
// ---- slice(start, end) - trả về mảng mới (là shallow copy) từ vị trí start đến end, k gồm vị trí end 
console.log(fruits.slice(2, 4));

// ----- splice(start, delCount, item) - xóa hoặc thay thế hoặc thêm phần tử mảng. trả về: mảng gồm các phần tử đã xóa. nếu không xóa thì trả về mảng rỗng.
console.log(fruits.splice(2, 1)); //xóa
console.log(fruits);
fruits.splice(3, 0, "Cherry");// thay thế
console.log(fruits.splice(3, 0, "Cherry")); // log: []
console.log(fruits);
fruits.splice(2, 0, 'Feb');
console.log(fruits);

// ----- fill(value, start, end) thay thế phần tử từ start đến end, k bao gồm vị trí end bằng value
fruits.fill("Abc", 2, 4);
console.log(fruits);

let arrayNumber = [1, 2, 3, 4, 2, 7, 5, 8, 0, 4];
// ----- filter() -> mảng mới với phần tử thỏa mãn điều kiện của function truyền vào
console.log(arrayNumber.filter(function (item) {
    return item > 5;
}));
// ------ find() -> trả về phần tử đầu tiên thỏa mãn điều kiện của function testing truyền vào. 
// findIndex() -> trả về vị trí phần tử thỏa mãnmãn
console.log(arrayNumber.find((item) => item > 2 && item < 7));
console.log(arrayNumber.findIndex((item) => item > 2 && item < 7));
// ------ join() nối các phần tử mảng bằng các separator- ngăn cách -> trả về string
console.log(typeof (fruits.join('-')));

// ------ map() -> trả về mảng mới với các phần tử là kq của việc thực thi callback function truyền vào
let arrayMap = arrayNumber.map(item => item += 2);
console.log(arrayMap);
// ------ reduce() -> 

/////******************************************* */ ch hiểu




// ------ sort()
let fruitsSort = fruits.sort();
console.log(fruitsSort);
let arraySort = arrayMap.sort((a, b) => {
    return b - a;
});
console.log(arraySort);

// ------ includes() - ktra giá trị truyền vào có tồn tại trong mảng k?, return true/false
console.log(fruits.includes("Mango"));
console.log(fruits.includes("Ma"));


// 5. mảng các object


// 6. Toán tử, câu lệnh điều kiện, vòng lặp
let x = 10;
let y = x++;
let z = ++x;
console.log(x, y, z);// 12, 10, 12 vì x=10 , x++ là thực hiện gán x cho y trước rồi tăng x lên 1, x=11. ++x là tăng x lên rồi thực hiện gán x lại cho z nên x lúc này là 12, và z=12
(x > 5) ? console.log('x lon hon 5') : console.log('x khong lon hon 5');
// vong lap
let array = [0];
let i = 0;
do {
    array.push(array[i] + 8);
    i++;
} while (i < 10);
console.log(array);
let j = 0;
while (j < array.length) {
    array[j] = array[j] / 2;
    j++;
}
// for...in duyệt chỉ số mảngmảng
for (item in array) {
    console.log(item);
}
// for of duyệt giá trị
for (item of array) {
    console.log(item);
}

// ************************ 7. function
console.log("--------- function-----------");
function isPrime(n) {
    if (n < 0 || n == 1) {
        return false;
    }
    if (n == 2) {
        return true;
    }
    let i = 1;
    var count = 0;
    while (i <= Math.sqrt(n)) {
        if (n % i == 0) {
            count++;
        }
        i++;
    }
    if (count == 1) return true;
    else return false;
}
function showPrimes(n) {
    for (let index = 1; index < n; index++) {
        // if(isPrime(index)==true){
        //     console.log(index);
        // }   
        (isPrime(index)) ? console.log(index) : console.log();
    }
}
showPrimes(100);


// ************* 7. Math
// console.log(Math.radom());

// ************** 8. json
/*
là một định dạng dữ liệu (chuỗi)
parse -> convert json -> kiểu dữ liệu của javascript
stringify -> convert định dạng khác - kiểu dữ liệu của javascript về dạng string json
 */

let jsonUser = '{"userName":"Ta Chung", "age":23}';
let user = JSON.parse(jsonUser);
console.log(user);
console.log(user.userName);
console.log(JSON.stringify(user)); // là string
console.log(JSON.stringify(12)); // string 12
console.log(typeof(JSON.stringify(12)));




















