import React, { Component } from 'react'
import MovieCard from '../../Components/MovieCard/MovieCard'
import './home.css'


class Home extends Component {

    constructor() {
        super()
        this.state = {
            movies: [],
            busqueda: ''
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1')
            .then(res => res.json())
            .then(data => this.setState({
                movies: data.results
            }))
    }

    render() {

        return (
            <React.Fragment>

                <section className='movie-container'>

                    

                    {
                        this.state.movies.map((Movie, idx) => <MovieCard key={Movie.title + idx} movieData={Movie} />)
                    }

                </section>


            </React.Fragment>
        )
    }
}

export default Home