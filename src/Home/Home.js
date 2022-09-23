import  './Home.css'

import { form, Formularioreserva } from '../Formularioreserva/formularioreserva.js'
import { Actividades } from '../Actividades/Actividades'
import { ServicioHabitacion } from "../Services/ServicioHabitacion.js"
import { useEffect, useState } from "react" 
import Swal from 'sweetalert2'


export function Home(){

    const [estadoCarga,setEstadoCarga]=useState(true)
    const [habitaciones,setHabitaciones]=useState(null)
    const [idHabitacion,setidhabitacion]= useState("")
    useEffect(function(){

        ServicioHabitacion()
            .then(function(respuesta){
                setHabitaciones(respuesta)
                console.log(respuesta)
                setEstadoCarga(false)

            })
    },[])

    if(estadoCarga){
        return(

            <>
                <h1>Estoy cargando...</h1>
            </>
        )
    }else{
        return(
            <>
                <div className='banner'>
                    <Formularioreserva habitacionseleccionada = {idHabitacion}/>
                </div>
                <div>
                    <Actividades/>
                </div>
                <div className='mt-5'/>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 g-3 ">
                    {
                    habitaciones.datos.map(function(habitacion){
                        return(
    
                            
                            <div> 
                                
                                <div class="col" >
                                    <div className="card tarjeta ">
                                        <img src= {habitacion.imagenes[0]}></img>
                                        <div class="card-body">
                                            <h5 class="card-title">{habitacion.nombre}</h5>
                                            <p class="card-text">{habitacion.descripcion}</p>
                                            <h2 className='text-start'>${habitacion.valorNoche}</h2>
                                            <a onClick={()=>{
                                                setidhabitacion(habitacion._id)
                                                Swal.fire({
                                                    position: 'center',
                                                    icon: 'success',
                                                    title: 'habitacion seleccionada',
                                                    showConfirmButton: false,
                                                    timer: 2500
                                                  })
                                             }} class="btn btn-primary">Reservar</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
            
                          
                        )
    
                    })
                }
                        
                    </div>
                </div>
                
            </>
        )
    }

}