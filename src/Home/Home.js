import  './Home.css'

import { form, Formularioreserva } from '../Formularioreserva/formularioreserva.js'
import { Actividades } from '../Actividades/Actividades'

export function Home(){

    return(
        <>
            <div className='banner'>
                <Formularioreserva/>
            </div>
            <div>
                <Actividades/>
            </div>
        </>
    )

}