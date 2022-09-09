import React, { Component } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import './Movies.css'

class Movies extends Component {

    constructor() {
        super()
        this.state = {
            movies: [],
            counter: 1,
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1')
            .then(res => res.json())
            .then(data => this.setState({
                movies: data.results,
                counter: this.state.counter + 1
            }))
            .catch(er => console.log(er))
    }



    buscarMas() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=' + this.state.counter)
            .then(res => res.json())
            .then(data => this.setState({
                movies: data.results,
                counter: this.state.counter + 1
            }))
            .catch(er => console.log(er))
    }

    render() {
        return (
            <React.Fragment>

                    <h1>Todas las Peliculas</h1>
                <section className="top-content">
                    <button className="more" onClick={() => this.buscarMas()}>Buscar Mas</button>
                    <p>Pagina {this.state.counter - 1}</p>
                </section>
                {
                    <section className='movie-container'>
                        {
                            this.state.movies.slice(0, 18).map((Movie, idx) => <MovieCard key={Movie.title + idx} movieData={Movie} />)
                        }
                    </section>
                }
                <section className="top-content">
                    <button className="more" onClick={() => this.buscarMas()}>Buscar Mas</button>
                    <p>Pagina{this.state.counter - 1}</p>
                </section>

            </React.Fragment>

        )
    }
}

export default Movies