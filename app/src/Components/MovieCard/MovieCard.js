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

    render () {
        return (
            <React.Fragment>
            <article className="movie-card">
                <Link className="movie-content" to={`movie/id/${[this.props.movieData.id]}`}>
                <img src= {`https://image.tmdb.org/t/p/w780/${this.props.movieData.poster_path}`} alt={this.props.movieData.title}/>
                <h2>{this.props.movieData.title}</h2>
                <p>{this.state.description}</p>
                </Link>
                {
                    this.state.description === ''
                    ?<p onClick={()=> this.verMas()}>Mostrar mas</p>
                    :<p onClick={()=> this.verMenos()}>Mostrar menos</p>
                     
                }
                <button>Añadir a favoritos</button>
            </article>
            </React.Fragment>
        )
    }
}


export default MovieCard