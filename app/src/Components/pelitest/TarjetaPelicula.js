import React, { Component } from "react";
import './tarjetaPelicula.css'
import { Link } from 'react-router-dom'

class TarjetaPeli extends Component {

    constructor(props) {
        super(props)
        this.state = {
            favsMessage: 'Agregar a favoritos',
            description: ''

        }
    }
    componentDidMount() {

        let favoritos = [];


        let recuperoStorage = localStorage.getItem('favoritos'); // Esta posicion puede no estar.

        if (recuperoStorage !== null) {

            let storageToArray = JSON.parse(recuperoStorage); //transforma texto en array.

            favoritos = storageToArray

            if (favoritos.includes(this.props.movieData.id)) {
                this.setState({
                    favsMessage: 'Quitar de favoritos'
                })
            }
        }

    }

    agregarYQuitarFavoritos(id) {
        // vamos a guardar ids en un array dentro de localStorage.
        //console.log('Agregando y sacando favs');

        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos'); // Esta posicion puede no estar.

        if (recuperoStorage !== null) {

            let storageToArray = JSON.parse(recuperoStorage); //transforma texto en array.

            favoritos = storageToArray
        }



        if (favoritos.includes(id)) { // includes retorna true o false.
            // Cambiar el texto del boton a Quitar de favoritos.
            // Sacar el id del array: usamos filter.
            favoritos = favoritos.filter(cadaIdDelArray => cadaIdDelArray !== id)
            this.setState({
                favsMessage: 'Agregar a favoritos',
            },
                () => window.location.reload(false)
            )

        } else {
            favoritos.push(id);
            this.setState({
                favsMessage: 'Quitar de favoritos',
            })
        }



        let favsToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favsToString)

        console.log(localStorage);


    }
    verMas() {
        this.setState({
            description: this.props.movieData.overview
        })
    }

    verMenos() {
        this.setState({
            description: ''
        })
    }


    render() {
        return (
            <React.Fragment>

                <div className="main_container">
                    <Link to={`/movie/id/${this.props.movieData.id}`}>
                        <img className="image" src={`https://image.tmdb.org/t/p/w780/${this.props.movieData.poster_path}`} alt={this.props.movieData.title} />
                        <div className="overlay">
                            <h2 className="tit-card">{this.props.movieData.title}</h2>
                            <p className="p-card">{this.props.movieData.overview}</p>
                        </div>
                    </Link>
                </div>

            </React.Fragment>
        )
    }
}


export default TarjetaPeli