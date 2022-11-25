function printError(elemId, hintMsg)
{
    document.getElementById(elemId).innerHTML=hintMsg;
}
var submit=document.getElementById("loginButton")
console.log(submit)
submit.onclick=function(){
    validateForm();
}
var usernamelist=["anish","aditya"]
function validateForm(){
    var form=document.getElementById("myform")
    var username=form.username.value

var usernameErr = true;
var passwordErr = true;
if(username=""){
    printError("usernameErr","please enter valid username");
}
else{
    if(username.length<5){
        printError("usernameErr","please enter valid username");
    }
    else if(!usernamelist.includes(username)){
        printError("usernameErr","username not registered");
    }
    else{
        printError("usernameErr", "");
        username = false;
    }
}
if(password=""){
    printError("password","please enter a password")
}
else{
    if(password.length<5){
        printError("password","valid password");
    }
    else{
        printError("passwordErr","");
        passwordErr = false;
    }
}
console.log(usernameErr,passwordErr)
if((usernameErr||passwordErr) == true) {
    return false;
}
else{
    var dataPreview=
    "You have entered the following details: \n"+
    "username:" +
    username+
    "\n"+
    "password: " +
    password;
    alert(dataPreview);
}
}
let fetchRes = fetch(
    "https://jsonplaceholder.typicode.com/todos/1");
     //fetchRes is the promise to resolve
     //it by using.then method
    fetchRes.then(res=>res.json()).then(d => {console.log(d)})
