import React, {Component} from "react";
import './movieCard.css'
import {Link} from 'react-router-dom'

class MovieCard extends Component {

    constructor (props) {
        super(props)
        this.state = {
            description: ''
        }
    }

    render () {
        return (
            <React.Fragment>
            <article className="movie-card">
                <Link className="movie-content" to={`movie/id/${[this.props.movieData.id]}`}>
                <img src= {`https://image.tmdb.org/t/p/w780/${this.props.movieData.poster_path}`} alt={this.props.movieData.title}/>
                <h2>{this.props.movieData.title}</h2>
                <p>{this.props.movieData.overview}</p>
                </Link>
                <p >Mostrar mas</p>
                <button>Añadir a favoritos</button>
            </article>
            </React.Fragment>
        )
    }
}


export default MovieCard