// function validationform(){
//     var name=document.getElementById("name").value
//     var address=document.getElementById("address").value
//     var email=document.getElementById("email").value
//     var password=document.getElementById("password").value
//     var subject=document.getElementById("subject").value
//     var agree=document.getElementById("agree").value
//     var nameerror=document.getElementById("name-error")
//     var addresserror=document.getElementById("address-error")
//     var emailerror=document.getElementById("email-error")
//     var passworderror=document.getElementById("password-error")
//     var subjecterror=document.getElementById("subject-error")
//     var agreeerror=document.getElementById("agree-error")

//     nameerror.textContent=""
//     addresserror.textContent=""
//     emailerror.textContent=""
//     passworderror.textContent=""
//     subjecterror.textContent=""
//     agreeerror.textContent=""
//    let isValid = true;

 

//     if(name===""||/\d/.test(name)){
//         nameerror.textContent="please enter your name properly"
//         isValid=false
//     }

//     if(address===""){
//         addresserror.textContent="please enter your address properly"
//         isValid=false
//     }

//     if(email===""||email.includes("@")){
//         emailerror.textContent="please enter your valid Email properly"
//         isValid=false
//     }

//     if(password===""||password.lenght<6){
//         passworderror.textContent="please enter a character atleast 6charecter"
//         isValid=false
//     }
   
//       if(subject===""){
//         subjecterror.textContent="please select your Course"
//         isValid=false
//     }

//     if(!agree){
//         agreeerror.textContent="please agree the bbove imformation"
//         isValid=false
//     }
//      return isValid;
// }

function validationform() {

    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var subject = document.getElementById("subject").value;
    var agree = document.getElementById("agree").checked;

    var nameerror = document.getElementById("name-error");
    var addresserror = document.getElementById("address-error");
    var emailerror = document.getElementById("email-error");
    var passworderror = document.getElementById("password-error");
    var subjecterror = document.getElementById("subject-error");
   var agreeerror = document.getElementById("agree-error"); 

    nameerror.textContent = "";
    addresserror.textContent = "";
    emailerror.textContent = "";
    passworderror.textContent = "";
    subjecterror.textContent = "";
    agreeerror.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameerror.textContent = "Please enter a valid name";
        isValid = false;
    }

    if (address === "") {
        addresserror.textContent = "Please enter your address";
        isValid = false;
    }

    if(email === "" || !email.includes("@")) {
        emailerror.textContent = "Please enter a valid email";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passworderror.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (subject  === "") {
         subjecterror.textContent = "Please select your course";
    isValid = false;
    }

    if (!agree) {
        agreeerror.textContent = "Please agree to the above information";
        isValid = false;
    }

    return isValid;
}

