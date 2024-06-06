import { URL_USERS } from "./route.js";

export async function get(URL) {

    const response = await fetch(URL);
    return await response.json();
}
/* envio de informacion a la BD */
export async function post(URL, data){
    
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}
/* FUNCION PARA ELIMINAR UN REGISTRO*/
export async function deleteById(URL, id){
    await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });
}

/* FUNCION PARA ACTUALIZAR UN REGISTRO CON LA URL */
export async function putById(URL, id, data){
    await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
} 

