import React, { Component } from "react";
import './PopularMovies.css'
import loader from '../../loader.gif'
import TarjetaPeli from "../../Components/pelitest/TarjetaPelicula";

class PopularMovies extends Component {

    constructor() { //permite setear el valor inicial del componente, recibes las props que son pasadas al componente
        super()
        this.state = {
            movies: [],
            allMovies: [],
            counter: 1,
            loader: true,
            filterValue: ''
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1')
            .then(res => res.json())
            .then(data => this.setState({
                movies: data.results,
                allMovies: data.results,
                counter: this.state.counter + 1,
                loader: false
            }))
            .catch(er => console.log(er))
    }

    buscarMas() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=' + this.state.counter)
            .then(res => res.json())
            .then(data => this.setState({
                movies: this.state.movies.concat(data.results),
                allMovies: this.state.allMovies.concat(data.results),
                counter: this.state.counter + 1,
                loader: false
            }))
            .catch(er => console.log(er))
    }

    cambiarDatos (e) {
        this.setState({
            filterValue: e.target.value
        },
        ()=> this.filterMovies(this.state.filterValue)
        )
    }

    filterMovies (text) {
        let filteredMovies = this.state.allMovies.filter(movie => movie.title.toLowerCase().includes(text.toLowerCase()))

        this.setState({
            movies: filteredMovies
        })
    }

    evitarSubmit (e) {
        e.preventDefault()
    }

    render() {
        return (
            
            this.state.loader === true ? 

            (<img src={loader} alt="aguarde mientras carga la pagina" className='imgLoader' />)
            : <React.Fragment>

                    <h1 className="page-title">Todas las Peliculas Populares</h1>
                    <form className="movie-filter" onSubmit={(e)=> this.evitarSubmit(e)}>
                        <input type='text' onChange={(e) => this.cambiarDatos(e)} value={this.state.filterValue} placeholder='Filtrar peliculas por titulo'></input>
                    </form>
                <section className="top-content">
                    <button className="more" onClick={() => this.buscarMas()}>Cargar Mas</button>
                        
                </section>
                {
                    <section className='movie-container-all'>
                        {
                            this.state.movies.map((Movie, idx) => <TarjetaPeli key={Movie.title + idx} movieData={Movie} />)
                        }
                    </section>
                }
                <section className="top-content">
                    <button className="more" onClick={() => this.buscarMas()}>Cargar Mas</button>
                </section>

            </React.Fragment>
            
            

        )
    }
}

export default PopularMovies