export async function ServicioReserva(datos){

    console.log("estamos en el servicio")
    console.log(datos)

const URI ="https://servercomfama.herokuapp.com/viajescomfama/reserva"

const PETICION ={
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(datos)
}

let respuesta = await fetch(URI,PETICION)

respuesta = await respuesta.json()

return respuesta

}