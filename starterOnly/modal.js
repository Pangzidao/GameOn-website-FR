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

// Ajout de DOM Elements
const closeBtn = document.querySelectorAll(".close");
const text = document.querySelectorAll(".text-control");
const form = document.getElementById("formulaire");
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const date = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementsByClassName("checkbox-input");
const messageInscription = document.getElementById("message-inscription");
const btnClose = document.getElementById("btn-close");

// variables de vérification de la validité du formulaire
let prenomFormat = false;
let nomFormat = false;
let emailFormat = false;
let dateFormat = false;
let quantityFormat = false;
let checkboxFormat = false;
let userConditionFormat = false;


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  btnClose.style.display = "none";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
btnClose.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// fonction de validation du formulaire
function validate(){
  const prenomValue = prenom.value.trim();
  const nomValue = nom.value.trim();
  const emailValue = email.value.trim();
  const dateValue = date.value.trim();
  const quantityValue = quantity.value.trim();

  console.log(dateValue)


  


//Messages d'erreur
//prénom
  if (prenomValue.length < 2){
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Veuillez entrer deux caractères ou plus pour le champ du prénom");
    prenomFormat = false;


  }else if (prenomValue.match(/[0-9]/)){
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Le prénom ne doit pas contenir de chiffres");
    prenomFormat = false;

  }else if (prenomValue.length > 30){
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Le prénom est trop long");
    prenomFormat = false;

  }else{
    formData[0].setAttribute("data-error-visible", "false");
    prenomFormat = true;
  }

//nom
  if (nomValue.length < 2){
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Veuillez entrer deux caractères ou plus pour le champ du nom");
    nomFormat = false;


  }else if (nomValue.match(/[0-9]/)){
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Le nom ne doit pas contenir de chiffres");
    nomFormat = false;
  
  }else if (nomValue.length > 30){
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Le nom est trop long");
    nomFormat = false;

  }else{
    formData[1].setAttribute("data-error-visible", "false");
    nomFormat = true;
  }

//email
  if (!emailValue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "Veuillez entrer une adresse e-mail");
    emailFormat = false;
  }else{
    formData[2].setAttribute("data-error-visible", "false");
    emailFormat = true;
  }

//date

  if (dateValue == ""){
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Veuillez choisir une date de naissance");
    dateFormat = false;
  }else{
    formData[3].setAttribute("data-error-visible", "false");
    dateFormat = true;
  }

//participation aux tournois

  if (quantityValue == ""){
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Veuillez indiquer un nombre de tournoi");
    quantityFormat = false;
  }else if (quantityValue > 10){
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "10 tournois maximum");
    quantityFormat = false;
  }else{
    formData[4].setAttribute("data-error-visible", "false");
    quantityFormat = true;
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
    checkboxFormat = false;
  }else{
    formData[5].setAttribute("data-error-visible", "false");
    checkboxFormat = true;
  }

//conditions d'utilisation

  if (checkbox[6].checked == false){
    formData[6].setAttribute("data-error-visible", "true");
    formData[6].setAttribute("data-error", "Vous devez valider les conditions d'utilisation pour vous s'inscrire");
    userConditionFormat = false;
  }else{
    formData[6].setAttribute("data-error-visible", "false");
    userConditionFormat = true;
  }

//Vérification de la soumission du formulaire
  modalbg.addEventListener("submit", function(e){
    if (prenomFormat == true &&
      nomFormat == true &&
      emailFormat == true &&
      dateFormat == true &&
      quantityFormat == true &&
      checkboxFormat == true &&
      userConditionFormat == true
      )
      {
      e.preventDefault();
      form.style.display = "none";
      messageInscription.style.display = "flex";
      btnClose.style.display = "block";
    }else{
      e.preventDefault();
    }
  });
  
  //fermeture de la fonction validate
}




