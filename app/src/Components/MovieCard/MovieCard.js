import React, { Component } from "react";
import './movieCard.css'
import { Link } from 'react-router-dom'

class MovieCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            favsMessage: 'Agregar a favoritos',
            inFavs: false,
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
            ()=> window.location.reload(false)
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

                <article className="movie-card">
                    <Link className="movie-content" to={`/movie/id/${this.props.movieData.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w780/${this.props.movieData.poster_path}`} alt={this.props.movieData.title} />
                        <h2>{this.props.movieData.title}</h2>
                        <p>{this.state.description}</p>
                    </Link>
                    {
                        this.state.description === ''
                            ? <p className="centrar" onClick={() => this.verMas()}>Mostrar mas</p>
                            : <p className="centrar" onClick={() => this.verMenos()}>Mostrar menos</p>

                    }
                    <button onClick={() => this.agregarYQuitarFavoritos(this.props.movieData.id)}>{this.state.favsMessage}</button>
                </article>
            </React.Fragment>
        )
    }
}


export default MovieCard