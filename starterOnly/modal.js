function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const text = document.querySelectorAll(".text-control");
const form = document.getElementById("formulaire");

const prenom = document.getElementById("first");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

function validate(){
  const prenomValue = prenom.value;


  modalbg.addEventListener("submit", function(e){
    if (prenomValue.length >= 2 && !prenomValue.match(/[0-9]/)){
      console.log("formulaire correct");
      form.submit();
    }else{
      e.preventDefault();
    }
  });


  if (prenomValue.length < 2){
    console.log("c'est trop court");
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "au moins 2 caractères");

  }else if (prenomValue.match(/[0-9]/)){
    console.log("lettres");
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Lettres!");

  }else{
    console.log("c'est bon");
    formData[0].setAttribute("data-error-visible", "false");
  }
}

