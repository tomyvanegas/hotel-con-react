export function Formularioreserva(){

    return(

        <>
        
            <form>

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
                        <input type="date" class="form-control" placeholder="fecha de reserva" className="shadow"></input>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 ">
                        <label className="form-label">Fecha de salida</label>
                        <div class="input-group mb-3">
                        <span class="input-group-text"><i class="bi bi-calendar-day"></i></span>
                        <input type="date" class="form-control" placeholder="fecha de reserva" className="shadow"></input>
                        </div>
                    </div>
                </div>

                <div className="row text-white fw-bold">
                    <div className="col-12 col-md-4 ">
                        <label className="form-label">Numero de adultos</label>
                        <div class="input-group mb-3">
                        <span class="input-group-text"><i class="bi bi-person-badge-fill"></i></span>
                        <select class="form-select" aria-label="Default select example">
                            <option value="1">Numero de adultos</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        </div>
                </div>
                    <div className="col-12 col-md-4 ">
                        <label className="form-label">Numero niñ@s</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-person-badge-fill"></i></span>
                            <select class="form-select" aria-label="Default select example">
                            <option value="1">Numero niñ@s</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        </div>
                        
                    </div>
                    <div className="col-8">
                            <button type="submit" class="btn btn-primary w-100 ">Reserva</button>
                            </div>
                        
                </div>

               

            </form>
        
        </>

    )

}