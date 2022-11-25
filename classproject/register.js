function printError(eleId,hintMsg){
    document.getElementById(eleId).innerHTML=hintMsg;
    // document.getElementById("hello")
}
var submit=document.getElementById("registerbutton")
console.log(submit)

submit.onclick=function(){
    validateForm();
}
function validateForm()
{
    var form =document.getElementById("myForm")
    console.log(form)
    var name = form.name.value;
    var phone = form.phone.value;
    var email = form.email.value;
    var gender = document.getElementById("genderErr").checked=== true;
    var qualification = document.getElementById("qualificationErr").checked === true;
    var course = document.getElementById("courseErr").checked===true;
    var country = form.country.value;
    var verification = document.getElementById("verificationErr").checked === true;
    var message = form.message.value;
    console.log(name,phone,email,gender,qualification,course,country,verification,message)
    var nameErr=true;
    var phoneErr=true;
    var emailErr=true;
    var genderErr=true;
    var qualificationErr=true;
    var courseErr=true;
    var countryErr=true;
    var verificationErr=true;
    var messageErr=true;
    
    if (name == "") {
        printError("nameErr", "Please enter your name");
      } 
      else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
          printError("nameErr", "Please enter a valid name");
        } else {
          printError("nameErr", "");
          nameErr = false;
        }
      }

      if (phone == "") {
        printError("phoneErr", "Please enter your mobile number");
      } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(phone) === false) {
          printError("phoneErr", "Please enter a valid 10 digit mobile number");
        } else {
          printError("phoneErr", "");
          phoneErr = false;
        }
      }

      if (email == "") {
        printError("emailErr", "Please enter your email address");
      } else {
        if (email.includes("@")) {
          printError("emailErr", "Please enter a valid email address");
        } else {
          printError("emailErr", "");
          emailErr = false;
        }
      }
     
      if (gender == "") {
        printError("genderErr", "Please select your gender");
      } else {
        printError("genderErr", "");
        genderErr = false;
      }

      if (qualification == "") {
        printError("qualificationErr", "Please select your qualification");
      } else {
        printError("qualificationErr", "");
        qualificationErr = false;
      }

      if (course == "") {
        printError("courseErr", "Please select your course");
      } else {
        printError("courseErr", "");
        courseErr = false;
      }

      if (country == "Select") {
        printError("countryErr", "Please select your country");
      } else {
        printError("countryErr", "");
        countryErr = false;
      }
      if (verification == "") {
        printError("verificationErr", "Please read the conditions");
      } else {
        printError("verificationErr", "");
        verificationErr = false;
      }
      if (message == "") {
        printError("commentsErr", "Please read the conditions");
      } else {
        printError("commentsErr", "");
        messageErr = false;
      }
      if ((nameErr || phoneErr || emailErr || countryErr || genderErr || qualificationErr || courseErr || countryErr || verificationErr || commentsErr) == true) {
    
        return false;
      } else {
        
        var dataPreview =
          "You've entered the following details: \n" +
          "Name : " +
          name +
          "\n" +
          "Email : " +
          email +
          "\n" +
          "Phone : " +
          phone +
          "\n" +
          "Gender: " +
          gender +
          "\n";
          "Qualifications : " +
          qualification +
          "\n";
          "Course : " +
          course +
          "\n";
          "Country: " +
          country +
          "\n" +
        alert(dataPreview);
      }
}
