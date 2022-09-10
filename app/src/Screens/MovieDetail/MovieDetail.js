import React, { Component } from 'react'
import loader from '../../loader.gif'



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
            loader: true
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
                <button>Añadir a favoritos</button>
            </React.Fragment>
        )
    }
}

export default MovieDetail