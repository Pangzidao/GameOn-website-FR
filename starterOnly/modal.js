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
const nom = document.getElementById("last");
const email = document.getElementById("email");
const date = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementsByClassName("checkbox-input");


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
  const prenomValue = prenom.value.trim();
  const nomValue = nom.value.trim();
  const emailValue = email.value.trim();
  const dateValue = date.value.trim();
  const quantityValue = quantity.value.trim();
  

//Vérification de la soumission du formulaire

  modalbg.addEventListener("submit", function(e){
    if (prenomValue.length >= 2 && 
      !prenomValue.match(/[0-9]/) &&
      nomValue.length >= 2 && 
      !nomValue.match(/[0-9]/) &&
      emailValue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) &&
      dateValue !== "" &&
      quantityValue !== "" &&
      (checkbox[0].checked == true ||
      checkbox[1].checked == true ||
      checkbox[2].checked == true ||
      checkbox[3].checked == true ||
      checkbox[4].checked == true ||
      checkbox[5].checked == true)&&
      checkbox[6].checked == true
      )
      {
      form.submit();

    }else{
      e.preventDefault();
    }
  });

//Messages d'erreur

//prénom
  if (prenomValue.length < 2){
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Veuillez entrer deux caractères ou plus pour le champ du prénom");

  }else if (prenomValue.match(/[0-9]/)){
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Le prénom ne doit pas contenir de chiffres");

  }else{
    formData[0].setAttribute("data-error-visible", "false");
  }

//nom
  if (nomValue.length < 2){
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Veuillez entrer deux caractères ou plus pour le champ du nom");

  }else if (nomValue.match(/[0-9]/)){
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Le nom ne doit pas contenir de chiffres");

  }else{
    formData[1].setAttribute("data-error-visible", "false");
  }

//email
  if (!emailValue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "Veuillez entrer une adresse e-mail");
  }else{
    formData[2].setAttribute("data-error-visible", "false");
  }

//date

  if (dateValue == ""){
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Veuillez choisir une date de naissance");
  }else{
    formData[3].setAttribute("data-error-visible", "false");
  }

//participation aux tournois

  if (quantityValue == ""){
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Veuillez indiquer un nombre de tournoi");
  }else{
    formData[4].setAttribute("data-error-visible", "false");
  }

//quel tournoi?

  if (checkbox[0].checked == false &&
      checkbox[1].checked == false &&
      checkbox[2].checked == false &&
      checkbox[3].checked == false &&
      checkbox[4].checked == false &&
      checkbox[5].checked == false 
    ){
    formData[5].setAttribute("data-error-visible", "true");
    formData[5].setAttribute("data-error", "Veuillez choisir un tournoi");
  }else{
    formData[5].setAttribute("data-error-visible", "false");
  }

//conditions d'utilisation

if (checkbox[6].checked == false){
formData[6].setAttribute("data-error-visible", "true");
formData[6].setAttribute("data-error", "Vous devez valider les conditions d'utilisation pour vous s'inscrire");
}else{
formData[6].setAttribute("data-error-visible", "false");
}



  //fermeture de la fonction validate
}



