import React, {Component} from "react";
import './movieCard.css'

class MovieCard extends Component {

    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <React.Fragment>
            <article className="movie-card">
                <img src= {`https://image.tmdb.org/t/p/w780/${this.props.movieData.poster_path}`} alt={this.props.movieData.title}/>
                <h2>{this.props.movieData.title}</h2>
                <p>{this.props.movieData.overview}</p>
                <p>Mostrar mas</p>
                <button>Añadir a favoritos</button>
            </article>
            </React.Fragment>
        )
    }
}


export default MovieCard