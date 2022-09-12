import React, { Component } from 'react'
import loader from '../../loader.gif'
import './moviedetail.css'



class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            movies: {
                genres: [
                    {name: ""}
                ]
            },
            loader: true,
            favsMessage: 'Agregar a favoritos',

        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data, 
                    loader: false
                }, ()=> console.log(this.state.movies))
            })
    
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

    render() {
        return (
            this.state.loader === true ? 

            (<img src={loader} alt="aguarde mientras carga la pagina" className='imgLoader' />)
            : <React.Fragment>
                //si es una serie tiene que decir una cosa, si es una pelicula otra. 
                <img src={`https://image.tmdb.org/t/p/w780/${this.state.movies.poster_path}`} alt="foto" />
                <h2>{this.state.movies.title}</h2>
                <h4> El rating es: {this.state.movies.vote_average}, según la página oficial de IMDB</h4>
                <h4> Se estrenó el {this.state.movies.release_date}</h4>
                <h4> Duración: {this.state.movies.runtime} minutos</h4>
                <p> Géneros:
                    {this.state.movies.genres.map ((genre, idx) => (<li key={genre.id + idx}> {genre.name}</li> ))}
                </p>
                <p>Mostrar mas</p>
                <button onClick={() => this.agregarYQuitarFavoritos(this.state.id)}>{this.state.favsMessage}</button>
            </React.Fragment>
        )
    }
}

export default MovieDetail