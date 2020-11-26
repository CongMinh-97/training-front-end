var array_1 = ["Ratan", "Sonoo","Vimal","Ratan", "Anth", "Peter", "Ratan", "Bod", "Mama", "Babe"];
let input = document.getElementsByClassName('number');
let clickBtn = document.getElementsByClassName('btn--click');
clickBtn[0].addEventListener('click', function(){
    console.log('click');
    let valueInput = '';
    for (let index = 0; index < array_1.length; index++) {
        valueInput += array_1[index] +', ';   
    }
    input[0].value = valueInput;
});
// ex: click on button Change Background Color, bg-color cua cac div chan se doi mau sang red, le doi sang xanh la
function changeBgColor(event){
    // console.log(event.target);
    let bgDiv = document.getElementsByClassName('bg');
    for (let index = 0; index < bgDiv.length; index++) {
        if (index%2 == 0) {
            bgDiv[index].style.background = 'red';
        }
        else 
            bgDiv[index].style.background = 'green';   
    }
}



// ***************** example about array
function exampleArray(){
    var style = ["Jazz", "Blues"];
    // ex1.them Rock-n-Roll vao cuoi
    style.push("Rock-n-Roll");
    console.log("Old Array:", style);
    //thay the gia tri o giua bang Classic. mang co do dai chan le deu thay o vi tri giua
    function findMidleIndex(length){
        if(length%2 == 0) return length/2-1;
        return parseInt(length/2);
    }
    style.splice(findMidleIndex(style.length), 1, "Classic");
    console.log("New Array:", style);
    // ex2.tach gia tri dau tien cua mang 
    console.log(style.shift());
    style.unshift("Rap","Reggae");
    console.log(style);
    
    // ex3.Viết hàm để thay đổi các từ được phân tách bằng dấu gạch ngang như “my-short-string” thành “myShortString”
    function camelize(str){
        var newStr = [];
        for (let i = 0; i < str.length; i++) {
            if(str[i]!= "-") {
                newStr.push(str[i]);
            } 
            else {
    
            }
            
            
        }
    }
    camelize("my-short-string");
    
    // 3x4.Viết một hàm filterRange(arr, a, b) lấy một mảng arr, tìm kiếm các phần tử giữa a và b trong đó và trả về một mảng trong số đó.
    var arr = [1,2,8,5,9,10,34,22,4,11,23];
    function filterRange(arr,a,b) {
        var newArray = arr.filter((i) => i>a && i<b);
        return newArray;
    };
    console.log(filterRange(arr,3,22));
    
    // ex5.Viết một hàm filterRangeInPlace(arr, a, b) lấy một mảng arr và loại bỏ khỏi nó tất cả các giá trị ngoại trừ những giá trị nằm giữa a và b.
    //Hàm chỉ nên sửa đổi mảng. Nó sẽ không trả lại bất cứ điều gì.
    function filterRangeInPlace(arr,a,b) {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]<a || arr[i]>b ){
                arr.splice(i,1);
                i--;
            }    
        }
        console.log(arr);
    }
    filterRangeInPlace(arr,3,22);
    
    // ex6. Sắp xếp mảng giảm dần
    arr.sort((a,b) => {return b-a});
    console.log("Array Sorted:",arr);
}
exampleArray();

// ******************* example about object
function exampleObj(){
    var listUser = [
        { name: "John", age: 25 },
        { name: "Pete", age: 30 },
        { name: "Mary", age: 28 },
        { name: "Maria", age: 22 },
        { name: "Mery", age: 3 },
        { name: "Cleo", age: 25 }
    ];
    // ex1. Bạn có một mảng các đối tượng người dùng, mỗi đối tượng có user.name. Viết code chuyển đổi nó thành một mảng tên.
    function getName(user){
        return user.name;
    }
    function getListName(arr){
        var listName=[];
        arr.forEach(el => {
            listName.push(getName(el));
        });
        return listName;
    };
    console.log(getListName(listUser));

    // ex2. Viết hàm sortByAge(users) lấy một mảng các đối tượng User(có name và age)có thuộc tính age và sắp xếp chúng theo độ tuổi.   
    function sortByAge(arr){
        arr.sort((a,b)=>{
            return a.age-b.age;
        });
        console.log(arr);
    }
    sortByAge(listUser);

    // ex3. Viết hàm getAverageAge(users) lấy một mảng đối tượng có thuộc tính tuổi và trả về tuổi trung bình.
    function getAverageAge(arr){
        var sumAge = 0;
        arr.forEach(el=>{
            sumAge+=el.age;
        });
        return sumAge/arr.length;
    }
    console.log("Average Age:",getAverageAge(listUser));

    // ex4. Giả sử chúng ta đã nhận được một loạt người dùng ở dạng {id: …, name: …, age …}.Tạo một nhóm groupById(arr) 
    //tạo một đối tượng từ nó, với id là khóa và các phần tử mảng là giá trị.
    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
    ];
    function groupById(arr){

    }
};
exampleObj();

var personInfo = {
    name : 'ABC',
    setName : function(name){
        // giá trị này sẽ không có tác dụng với key name trong object này
        // nếu như ta sử dụng nó là một callback function
        this.name = name;
    }
};
// Hàm có tham số callback
function test(callback, callbackObject){
    var name = "Nguyen Van A";
    // callback.apply(callbackObject, [name]);
}
// Gọi đến hàm và truyền hàm callback vào
test(personInfo.setName, personInfo);
// Kết quả: Nguyen Van A
console.log(personInfo.name);






