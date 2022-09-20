import {  Link } from "react-router-dom";

import './Menu.css';

export function Menu(){

    return(
        <>
           <nav className="navbar navbar-expand-lg menu navbar-dark menu">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                             <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="habitaciones">Habitaciones</Link>
                            </li>
            
                        </ul>
                    </div>
                </div>
            </nav> 
        </>
    )
}