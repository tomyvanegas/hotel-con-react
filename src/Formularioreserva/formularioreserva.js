import { useState } from "react"
import { ServicioReserva } from "../Services/ServicioReserva.js"
import Swal from 'sweetalert2'

export function Formularioreserva({habitacionseleccionada}){

    const[entrada, setEntrada] = useState("")
    const[salida, setSalida] = useState("")
    const[ninos, setNinos] = useState("")
    const[adultos, setAdultos] = useState("")
    function EnvioFormulario(evento){
        evento.preventDefault()
        let data = {
            "idHabitacion": habitacionseleccionada,
            "fechaEntrada": entrada,
            "fechaSalida": salida,
            "numeroNinos":ninos,
            "numeroAdultos":adultos
        }
        ServicioReserva(data)
        .then(function(respuesta){
            console.log(respuesta)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: respuesta.mensaje,
                showConfirmButton: false,
                timer: 1500
              })
        })
    }

    return(

        <>
        
            <form className="" onSubmit={EnvioFormulario}>

                <div className="row">
                    <div className="col-12 col-md-8 text-white">
                        <h1>RESERVA CON NOSOTROS</h1>
                        <h5>LOS PRECIOS MAS ECONOMICOS DEL MERCADO</h5>
                        <h1>RESERVA YA!</h1>
                        <hr></hr>
                    </div>
                </div>

                <div className="row text-white fw-bold">
                    <div className="col-12 col-md-4 ">
                        <label className="form-label">Fecha de entrada</label>
                        <div class="input-group mb-3">
                        <span class="input-group-text"><i class="bi bi-calendar-day"></i></span>
                        <input 
                        type="date"  
                        className="form-control shadow"
                        onChange={(evento)=>{
                            setEntrada(evento.target.value)
                        }}
                        value={entrada}>
                        </input>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-4 ">
                        <label className="form-label">Fecha de salida</label>
                        <div class="input-group mb-3">
                        <span class="input-group-text"><i class="bi bi-calendar-day"></i></span>
                        <input 
                        type="date"   
                        className="form-control shadow"
                        onChange={(evento)=>{
                            setSalida(evento.target.value)
                        }}
                        value={salida}></input>
                        </div>
                    </div>
                </div>

                <div className="row text-white fw-bold">
                    <div className="col-12 col-md-4 ">
                        <label className="form-label">Numero de adultos</label>
                        <div className="input-group mb-3">
                        <span className="input-group-text"><i className="bi bi-person-badge-fill"></i></span>
                        <select 
                        className="form-select" 
                        onChange={(evento)=>{
                            setAdultos(evento.target.value)
                        }}
                        value={adultos}
                        defaultValue="0"
                        >

                            <option value="1">Numero de adultos</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        </div>
                </div>
                    <div className="col-12 col-md-4 ">
                        <label className="form-label">Numero niñ@s</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="bi bi-person-badge-fill"></i></span>
                            <select className="form-select" 
                            onChange={(evento)=>{
                                setNinos(evento.target.value)
                            }}
                            value={ninos}
                            defaultValue="0"
                            >
                            <option value="1">Numero niñ@s</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        </div>
                        
                    </div>
                    <div className="col-8">
                            <button type="submit" className="btn btn-primary w-100 ">Reserva</button>
                            </div>
                        
                </div>

               

            </form>
        
        </>

    )

}