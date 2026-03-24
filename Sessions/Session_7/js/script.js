let form = document.getElementById("contact-form");
let userName = document.getElementById("userName");
let phoneNumber = document.getElementById("phoneNumber");
let email = document.getElementById("email");
let massage = document.getElementById("massage");


function showError(input, massage) {
  let formControl = input.parentElement;
  formControl.className = "content-form-error";
  let span = formControl.querySelector("span");
  span.innerText = massage;
}


function showInput(input) {
  let formControl = input.parentElement;
  formControl.className = "content-form";
}



form.addEventListener("submit", (e) => {
    let isvaild =true
//   e.preventDefault();
  if (userName.value.trim() === "") {
    showError(userName, "user name is required");
    isvaild=false
  } else if (userName.value.trim().length <= 4) {
    showError(userName, "enter a vaild user name");
    isvaild=false
  } else {
    showInput(userName);
  }
  if (phoneNumber.value.trim() == "") {
    showError(phoneNumber, "phone number is required");
    isvaild=false
  } else if (phoneNumber.value.trim().length !== 11) {
    showError(phoneNumber, "enter a vaild phone number with 11 number");
    isvaild=false
  } else {
    showInput(phoneNumber);
  }
  if (email.value.trim() === "") {
    showError(email, "email is required");
    isvaild=false
  } else {
    showInput(email);
  }
  if (massage.value.trim() === "") {
    showError(massage, "massage is required");
    isvaild=false
  } else {
    showInput(massage);
  }

  if(isvaild ==false){
    e.preventDefault()
  }
});
