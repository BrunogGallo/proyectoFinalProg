import React, { Component } from 'react'
import MovieCard from '../../Components/MovieCard/MovieCard'
import './home.css'


class Home extends Component {

    constructor() {
        super()
        this.state = {
            busqueda: '',
            popularMovies: [],
            topRatedMovies: [],
            popularSeries: [],
            topRatedSeries: [], 
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1')
            .then(res => res.json())
            .then(data => this.setState({
                popularMovies: data.results,
            }))

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1')
            .then(res => res.json())
            .then(data => this.setState({
                topRatedMovies: data.results
            }))
        // fetch('https://api.themoviedb.org/3/tv/popular?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1')
        //     .then(res => res.json())
        //     .then(data => this.setState({
        //         popularSeries: data.results,
        //         tituloSerie: data.results.name
        //     }))
        // fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1')
        //     .then(res => res.json())
        //     .then(data => this.setState({
        //         topRatedSeries: data.results
        //     }))
    }

    render() {

        return (
            <React.Fragment>

                <h1>Peliculas Populares</h1>
                <section className='movie-container'>
                    {
                        this.state.popularMovies.slice(0, 6).map((Movie, idx) => <MovieCard key={Movie.title + idx} movieData={Movie} />)
                    }
                </section>
                <h1>Lo Mejor en Peliculas</h1>
                <section className='movie-container'>
                    {
                        this.state.topRatedMovies.slice(0, 6).map((Movie, idx) => <MovieCard key={Movie.title + idx} movieData={Movie} />)
                    }
                </section>

                {/* <h1>Series Populares</h1>
                <section className='movie-container'>
                    {
                        this.state.popularSeries.slice(0, 6).map((Movie, idx) => <MovieCard key={Movie.title + idx} movieData={Movie} title={this.state.seriesTitle}/>)
                    }
                </section>
                <h1>Lo Mejor en Series</h1>
                <section className='movie-container'>
                    {
                        this.state.topRatedSeries.slice(0, 6).map((Movie, idx) => <MovieCard key={Movie.title + idx} movieData={Movie} />)
                    }
                </section> */}


            </React.Fragment>
        )
    }
}

export default Home