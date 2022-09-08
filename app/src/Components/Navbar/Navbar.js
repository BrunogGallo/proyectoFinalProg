import React, { Component } from "react";
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
            <React.Fragment>
                <nav>
                    <ul className="main-nav">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/favorites'>Favoritos</Link>
                        </li>
                        <li>
                            <form onSubmit={e => this.evitarSubmit(e)}>
                                <input placeholder = "Ingresa tu busqueda" type='text' onChange={e => this.cambiarDatos(e)} value={this.state.valor}></input>
                                <Link to={`/searchResults/${this.state.valor}`}>
                                    <button> Buscar</button>
                                </Link>
                            </form>
                        </li>
                        
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}
export default Navbar;