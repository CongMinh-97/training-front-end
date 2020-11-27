class User {
    data = JSON.parse(localStorage.getItem('student'));
    formData = document.querySelector('#form-data');
    userName = document.querySelector('#name');
    age = document.querySelector('#age');
    email = document.querySelector('#email');
    address = document.querySelector('#address');
    init(){
        let displayList ='';
        this.data.forEach((element, index) => {
            displayList += `<tr>
            <td>${index+1}</td>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.email}</td>
            <td>${element.address}</td>
            <td>
                <button type="button" class="btn" id="btn-edit" onclick="user.update(${index})">Edit</button>
                <button type="button" class="btn" id="btn-del" onclick="user.destroy(${index})">Del</button>
            </td>
        </tr>`
        });
        document.getElementsByTagName('tbody')[0].innerHTML= displayList;  
    } 

    saveLocalStorage(data){
        return localStorage.setItem('student', JSON.stringify(data));
    }

    create(){
        
        // Validator();
        let newStudent = {
            name: this.userName.value,
            age: this.age.value,
            email: this.email.value,
            address: this.address.value,
        };
        
        this.data.push(newStudent);
        this.saveLocalStorage(this.data);
        return this.init();
   }

   show(){

   }

   update(id){
    let updateStudent = {
        name: this.userName.value,
        age: this.age.value,
        email: this.email.value,
        address: this.address.value,
    };
    this.data.splice(id,0,updateStudent);
    this.saveLocalStorage(this.data);
    console.log(this.data);
    this.init();
   }

   destroy(id){
    this.data.splice(id, 1);
    this.saveLocalStorage(this.data);
    console.log(this.data);
    this.init();
   }

}

var user = new User();
user.init();

function Validator(options){ 
    // console.log(options) 
    var formElement = document.querySelector(options.form);// lấy element của form  cần validate
    if(formElement){
        // console.log(options.rules)
        options.rules.forEach(rule => {
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.message-error');// lấy element hiển thị lỗi
            if(inputElement){
                // bat su kien blur khoi input
                inputElement.onblur = function(){
                    var errorMessage = rule.test(inputElement.value);
                    if(errorMessage){
                        errorElement.style.display = 'block';
                        errorElement.style.color = 'red';
                        errorElement.innerText =errorMessage;                        
                    }
                    else errorElement.innerText ='';
                }
                // bắt sự kiện ng dùng nhập vào input thì k hiện message lỗi nữa, gặp lỗi -> báo
                inputElement.oninput = function(){
                    errorElement.innerText ='';
                    errorElement.style.display = 'none';
                }
            };
        });
    }   
}
Validator.isRequired = function(selector){
    return { // return 1 obj 
        selector: selector,
        test: function(value){
            return value ? undefined : "Vui lòng nhập trường này!";
        }
    }
}
Validator.isEmail = function(selector){
    return { // return 1 obj 
        selector: selector,
        test: function(value){
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : "Trường này phải là email!";
        }
    }
}
Validator.isNumber = function(selector){
    return {
        selector: selector,
        test: function(value){
            var regex = /^[0-9]+$/;
            return regex.test(value) ? undefined : "Vui lòng nhập vào số tuổi!";
        }
    }
}



    

