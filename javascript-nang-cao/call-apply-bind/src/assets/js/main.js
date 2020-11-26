//------------ call - apply - bind
// call: để gọi hàm, cho phép truyền vào một obj và các đối số truyền vào là dạng danh sách các đối số - tức là các đối số cách nhau bởi dấu phẩy
// apply: để gọi hàm. cho phép truyền vào một obj và các đối số truyền vào là dạng mảng các đối số
// bind : trả về một function mới, cho phép truyền vào một obj và đối số truyền vào dạng danh sách các đối số  như là hàm call
// call và apply đều gọi trực tiếp hàm, khác nhau về cách truyền đối số
// bind: trả về function mới, cách truyền đối số giống với call. có thể sử dụng function mới để dùng
var user = {
    setName(name){
        this.name = name;
    },
    getName(){
        return this.name;
    }
}
user.setName("ABc");
function say(a, b){
    console.log(a +" " + this.name + " " + b) ;
}
say.call(user, "Hello","Hi");
say.apply(user,["Hello", "HI"]);
var bind = say.bind(user, "Hello", "hi");
bind();



