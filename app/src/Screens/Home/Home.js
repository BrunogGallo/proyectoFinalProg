import React, { Component } from 'react'
import MovieCard from '../../Components/MovieCard/MovieCard'
import './home.css';
import loader from '../../loader.gif'
import { Link } from "react-router-dom";


class Home extends Component {

    constructor() {
        super()
        this.state = {
            busqueda: '',
            popularMovies: [],
            topRatedMovies: [],
            popularSeries: [],
            topRatedSeries: [],
            loader: true
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1')
            .then(res => res.json())
            .then(data => this.setState({
                popularMovies: data.results,
                loader: false
            }))

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1')
            .then(res => res.json())
            .then(data => this.setState({
                topRatedMovies: data.results,
                loader: false
            }))
    }

    render() {

        return (

            this.state.loader === true ?

                (<img src={loader} alt="aguarde mientras carga la pagina" className='imgLoader' />)
                : <React.Fragment>

                    <h1>Peliculas Populares</h1>
                    <Link to="/popular">
                        <p className='all-button'>Ver Todas</p>
                    </Link>
                    <section className='movie-container'>
                        {
                            this.state.popularMovies.slice(0, 6).map((Movie, idx) => <MovieCard key={Movie.title + idx} movieData={Movie} />)
                        }
                    </section>
                    <h1>Lo Mejor en Peliculas</h1>
                    <Link to="/top-rated">
                        <p className='all-button'>Ver Todas</p>
                    </Link>
                    <section className='movie-container'>
                        {
                            this.state.topRatedMovies.slice(0, 6).map((Movie, idx) => <MovieCard key={Movie.title + idx} movieData={Movie} />)
                        }
                    </section>

                </React.Fragment>
        )
    }
}

export default Home