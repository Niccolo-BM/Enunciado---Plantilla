import { URL_USERS } from "./route.JS";
import { get } from "./postService.js";


const nameInput = document.getElementsById('name');
const emailInput= document.getElementById("email");
const dobInput = document.getElementById("dob");
const passwordInput = document.getElementById("password");

document.addEventListener("DOMContentLoaded", paintUsers)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    insert();
})

btnRegister.addEventListener("click", () => {
    form.reset();
    form.setAttribute("registerForm","add");
    modalTitle.textContent = "Registro hecho"
 })

function insert() {

    const name = nameInput.value;
    const email = emailInput.value;
    const dob = dobInput.value;
    const password = passwordInput.value;


    if (empty(name) || empty(email) || !isDob(dob) || empty(password)) {}

    const data = { name, email, dob, password};


    if (form.getAttribute("registerForm") == "add") {
        post(URL_USERS, data);
    } else if (form.getAttribute("registerForm") == "edit"){
        putById(URL_USERS, form.getAttribute("data-id") , data);
    }
    
    form.reset();
    paintUsers();
}






