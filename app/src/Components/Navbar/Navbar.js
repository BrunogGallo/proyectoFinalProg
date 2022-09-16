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
        if (this.state.valor = "") {
            alert("Debe estar completo")
        }
    }
    render() {
        return (
            <div className="navbar">
                <img className="logo" src={'/img/logo.jpg'} alt='logo' />
                <ul id="links">
                    <li><Link to="/"> HOME </Link></li>
                    <li><Link to="/popular"> POPULARES</Link></li>
                    <li><Link to="/top-rated">TOP RANKING</Link></li>
                    <li><Link to="/favorites"> MIS FAVORITAS</Link></li>
                </ul>
                <form className="search-bar" onSubmit={e => this.evitarSubmit(e)}>
                    <input type='text' className="search-bar_input" onChange={e => this.cambiarDatos(e)} value={this.state.valor}></input>
                    {this.state.valor === "" ? (
                        <button className="search-bar_submit">            <i id="icono_navbar" class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    ) : (
                        <Link to={`/searchResults/${this.state.valor}`}>
                            <button className="search-bar_submit">            <i id="icono_navbar" class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </Link>)}
                </form>
            </div>
        )
    }
}
export default Navbar;