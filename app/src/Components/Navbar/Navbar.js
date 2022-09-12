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
                <div className="links">
                    <Link to="/"> Home </Link>
                    <Link to="/popular"> Ver Todas las Populares</Link>
                    <Link to="/top-rated"> Ver las Mejores Calificadas</Link>
                    <Link to="/favorites"> Mis Favoritas</Link>
                </div>

                <div>
                    <form onSubmit={e => this.evitarSubmit(e)}>
                        <input placeholder="Ingresa tu busqueda" type='text' onChange={e => this.cambiarDatos(e)} value={this.state.valor}></input>
                        <Link to={`/searchResults/${this.state.valor}`}>
                            <button> Buscar</button>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}
export default Navbar;