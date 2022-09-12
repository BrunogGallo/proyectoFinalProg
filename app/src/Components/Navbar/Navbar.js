import React, { Component } from "react";
import './navbar.css'
import { Link } from "react-router-dom";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valor: '',
        }
    }

    cambiarDatos(e) {
        this.setState({ valor: e.target.value })
    }

    evitarSubmit(e) {
        e.preventDefault()
    }
    render() {
        return (
            <div className="navbar">
                <img className="logo" src={'/img/logo.jpg'} alt='logo'/>
                <ul className="links">
                    <li><Link to="/"> <a>Home</a> </Link></li>
                    <li><Link to="/popular"> <a>Populares</a></Link></li>
                    <li><Link to="/top-rated"><a>Top Ranking</a></Link></li>
                    <li><Link to="/favorites"> <a>Mis Favoritas</a></Link></li>
                    <li>
                        <form onSubmit={e => this.evitarSubmit(e)}>
                            <input className="CuadrodeBusqueda" placeholder="Ingresa tu busqueda" type='text' onChange={e => this.cambiarDatos(e)} value={this.state.valor}></input>
                            <Link to={`/searchResults/${this.state.valor}`}>
                                <button className="button"> Buscar</button>
                            </Link>
                        </form>
                    </li>
                        
                    
                
                </ul>

               
            </div>
        )
    }
}
export default Navbar;