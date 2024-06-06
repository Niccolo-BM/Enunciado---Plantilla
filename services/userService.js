import { URL_USERS } from "./route.JS";
import { get, post , deleteById, putById } from "./postService.js";
import { URL_FLIGHTS } from "./route.JS";


const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const form = document.querySelector("form");

document.addEventListener("DOMContentLoaded", paintFlights)

form.addEventListener("submit",(event) => {
    event.preventDefault();
    insert();
})

btnAdd.addEventListener("click", () => {
   form.reset();
   form.setAttribute("data-status","add");
   modalTitle.textContent = "Modificando una reserva"
})

// FUNCIONES
function insert() {
        const name = nameInput.value;
        const number = numberInput.value;
        
        if  (empty(name) || empty(number)){
            return;
        }
        // esto ya permite ingresar datos en la pagina, se vean y se gaurden la BD
        const data = {name,number};
       

        if (form.getAttribute("data-status" ) == "add") {
              post (URL_FLIGHTS, data);
        } else if (form.getAttribute("data-status" ) == "edit"){
            putById(URL_FLIGHTS, form.getAttribute("data-id"), data);
        }

        form.reset();
        paintFlights();
}


    


// Se definen los vuelos y se importa la optencion de la info pedida y luego se impota en ()los vuelos
async function  paintFlights() {
    const flights = await get(URL_FLIGHTS)

    flights.forEach((flight) => {
            
            const tr = document.createElement("tr");
            const tdId = document.createElement("td");
            const tdFlightNumber = document.createElement("td");
            const tdOrigin = document.createElement("td");
            const tdDestination = document.createElement("td");
            const tdCapacity = document.createElement("td");
            const tdReservedSeats = document.createElement("td");
            const tdActions = document.createElement("td");
            const btnDelete = document.createElement("button");
            const btnEdit = document.createElement("button");

        btnDelete.classList = "btn btn-danger me-2"
        btnEdit.classList = "btn btn-warning"

        btnEdit.setAttribute("data-bs-toggle", "modal"),
        btnEdit.setAttribute("data-bs-target", "#exampleModal"),


        btnDelete.textContent = "Delete";
        btnEdit.textContent = "Edit";
        tdName.textContent = user["name"]
        tsNumber.textContent = user["number"]


        tdActions.append(btnDelete, btnEdit);
        tr.append(tdflightNumber, teReservedSeats, tdActions);

        /* funcion del boton borrar */
        btnDelete.addEventListener("click", ()=>{
            deleteById(URL_FLIGHTS, user["id"])
        })

        /* funcion del boton editar */
        btnEdit.addEventListener("click", () => {
            form.setAttribute("data-status","edit");
            form.setAttribute("data-id", user["id"]);
            modalTitle.textContent = "Editando Usuario"


           nameInput.value = user["name"];
            numberInput.value = user["number"];
         })


        contentTable.appendChild(tr);
        });
    };