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
        var data = this.data;
        var init = this.init();
        var saveData = data => this.saveLocalStorage(data);

       Validator({
            form: "#form-data",
            rules:[ 
                Validator.isRequired("#name"),
                Validator.isRequired("#age"),
                Validator.isRequired("#email"),
                Validator.isRequired("#address"),
                Validator.isNumber("#age"),
                Validator.isEmail("#email"),
            ],
            onSubmit: function(_data){
                data.push(_data);
                saveData(data);
                return init;
            }
        });
        // console.log(dataSource);
        // return;
        // let newStudent = {
        //     name: this.userName.value,
        //     age: this.age.value,
        //     email: this.email.value,
        //     address: this.address.value,
        // };
        
        // this.data.push(newStudent);
        // this.saveLocalStorage(this.data);
        // return this.init();
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
    // console.log(this.data);
    this.init();
   }

   destroy(id){
    this.data.splice(id, 1);
    this.saveLocalStorage(this.data);
    // console.log(this.data);
    this.init();
   }

}

var user = new User();
user.init();

function Validator(options){ 
    // hafm xử lý validate cho 1 inputElement 
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector('.message-error');// lấy element hiển thị lỗi
        // var errorMessage = rule.test(inputElement.value);
        var errorMessage;
        //lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        // lặp qua từng rule
        for(let i=0; i<rules.length; i++){
            errorMessage = rules[i](inputElement.value);
            //ktra rule, nếu có lỗi thì dừng việc kiểm tra rule tiếp theo của chính selector đó
            if (errorMessage) {
               break;
            }
        }
        if(errorMessage){
            errorElement.style.display = 'block';
            errorElement.style.color = 'red';
            errorElement.innerText =errorMessage;                        
        }
        else errorElement.innerText ='';
        return !errorMessage; // convert thanh dang boolean: true or false

    }

    var selectorRules= {};
    var formElement = document.querySelector(options.form);// lấy element của form  cần validate
    if(formElement){
        //khi submit form
        formElement.onsubmit = function(e){
            e.preventDefault();
            var isFormInvalid = true;
            //lặp qua từng rule và validate
            options.rules.forEach(rule=> {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if(!isValid){
                    isFormInvalid = false;
                }
            });
            if (isFormInvalid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                        
                    }, {});
                    options.onSubmit(formValues);
                    
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    console.log('sbumit');
                    formElement.submit();
                }
            }
        }
        // lặp qua mỗi rule của form và xử lý (lắng nghe các sự kiện: blur, click...)
        options.rules.forEach(rule => {
            // lưu lại các rules trong mỗi input          
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            }else {
                selectorRules[rule.selector]= [rule.test];
            }
            var inputElement = formElement.querySelector(rule.selector);
            if(inputElement){
                // bat su kien blur khoi input
                inputElement.onblur = function(){
                    validate(inputElement, rule);
                }
                // bắt sự kiện ng dùng nhập vào input thì k hiện message lỗi nữa, gặp lỗi -> báo
                inputElement.oninput = function(){
                    var errorElement = inputElement.parentElement.querySelector('.message-error');
                    errorElement.innerText ='';
                    errorElement.style.display = 'none';
                }
            };
        });
        // console.log(selectorRules);
    }   
}
Validator.isRequired = function(selector){
    return { // return 1 obj 
        selector: selector,
        test: function(value){
            return value ? undefined : "Vui lòng nhập trường này!";
        },
        // isCheck: function(value) {
        //     return value == undefined ? true: false;
        // }
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



    

