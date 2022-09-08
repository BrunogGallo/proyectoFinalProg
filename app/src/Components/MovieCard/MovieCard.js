import React, {Component} from "react";
import {Link} from "react-router-dom"
import './movieCard.css'

class MovieCard extends Component {

    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render () {
        console.log(this.props.movieData);
        return (
            <React.Fragment>
            <Link to={`/movie/id/${this.props.movieData.id}`} className="movie-card">
                <img src= {`https://image.tmdb.org/t/p/w780/${this.props.movieData.poster_path}`} alt={this.props.movieData.title}/>
                <h2>{this.props.movieData.title}</h2>
                <p>{this.props.movieData.overview}</p>
                <p>Mostrar mas</p>
                <button>Añadir a favoritos</button>
            </Link>
            </React.Fragment>
        )
    }
}


export default MovieCard