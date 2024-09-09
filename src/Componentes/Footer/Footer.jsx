import React from "react";
import './Footer.css'


const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">

                    <div className="col">
                        <h4>UBICACIÓN 📍</h4>
                        <ul className="list-unstyled">
                            <li>Dirección - San Martín </li>
                            <li>Numero - 64</li>

                        </ul>
                    </div>

                    <div className="col">
                        <h4>TELEFONO 📱</h4>
                        <ul className="list-unstyled">
                            <li>+56 9 6429 6821</li>
                            <li>+34 670 788 466</li>
                            <li>+1 618-758-9481</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>PAISES 🚩</h4>
                        <ul className="list-unstyled">
                            <li>Chile</li>
                            <li>España</li>
                            <li>Estados Unidos</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear}2024 Tienda Outlet | Política de Privacidad | Política de cookies | Aviso Legal

                    </p>

                </div>
            </div>
        </div>
    )



}

export default Footer;