import { ServicioHabitacion } from "../Services/ServicioHabitacion.js"
import { useEffect, useState } from "react" //HOOKS
import "./habitaciones.css"
export function Habitaciones(){

    //USANDO EL USESTATE (FUNCION ESPECIAL PARA CREAR UNA VARIABLE GLOBAL DENTRO DEL COMPONENTE)
    const [estadoCarga,setEstadoCarga]=useState(true)
    const [habitaciones,setHabitaciones]=useState(null)

    //usando el useEffect
    //funcion que controla el render(pintar) de un componente
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
                                        <a class="btn btn-primary">Reservar</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
        
                      
                    )

                })
            }
                    
                </div>
            </div>

        )

        

    }


   

    
    
}