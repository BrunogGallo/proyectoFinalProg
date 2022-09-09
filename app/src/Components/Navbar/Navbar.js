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
                <div className="links">
                    <Link to="/"> Home </Link>
                    <Link to="/movie"> Ver todas las peliculas</Link>
                    <Link to="/favorites"> Mis favoritas</Link>
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