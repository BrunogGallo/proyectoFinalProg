import React, { Component } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import './PopularMovies.css'
import loader from '../../loader.gif'

class PopularMovies extends Component {

    constructor() {
        super()
        this.state = {
            movies: [],
            counter: 1,
            loader: true
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1')
            .then(res => res.json())
            .then(data => this.setState({
                movies: data.results,
                counter: this.state.counter + 1,
                loader: false
            }))
            .catch(er => console.log(er))
    }

    buscarMenos



    buscarMas() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=' + this.state.counter)
            .then(res => res.json())
            .then(data => this.setState({
                movies: data.results,
                counter: this.state.counter + 1,
                loader: false
            }))
            .catch(er => console.log(er))
    }

    render() {
        return (
            
            this.state.loader === true ? 

            (<img src={loader} alt="aguarde mientras carga la pagina" className='imgLoader' />)
            : <React.Fragment>

                    <h1>Todas las Peliculas Populares</h1>
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

export default PopularMovies