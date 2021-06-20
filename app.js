const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnCLick(){
  const username = loginInput.username;
  if(username === ""){
    alert("Pls write something");
  }
  else if(username.length > 50){
    alert("Your name is too long.");
  }
  else{
    alert("NICE");
  }
}

loginButton.addEventListener("click", onLoginBtnCLick)