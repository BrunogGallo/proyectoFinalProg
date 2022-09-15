import React from "react";
import './Footer.css'


function Footer() {
    return (
        <React.Fragment>

            <footer>
                <img className="logo" src="./img/logo.jpg" alt="logoFilmoh"/>
                <img className="logo" src="./img/logo 3.0.jpg" alt="logoTMDB" />
                <p>Copyright © - Todos los derechos reservados</p>
                <p>Valentin del Pino, Alfonso Agote, Bruno Gallo</p>
            </footer>
        </React.Fragment>
    )
}
export default Footer;