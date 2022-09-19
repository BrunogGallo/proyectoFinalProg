import React, { Component } from 'react'
import './home.css';
import loader from '../../loader.gif'
import { Link } from "react-router-dom";
import MovieCardHome from '../../Components/MovieCardHome/MovieCardHome';


class Home extends Component {

    constructor() {
        super()
        this.state = {
            busqueda: '',
            popularMovies: [],
            allTopMovies: [],
            allPopMovies: [],
            topRatedMovies: [],
            popularSeries: [],
            topRatedSeries: [],
            loader: true,
            indexPop: 0,
            indexRat: 0
        }
    }

    

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1')
            .then(res => res.json())
            .then(data => this.setState({
                allPopMovies: [data.results.slice(0, 4), data.results.slice(4, 8), data.results.slice(8, 12), data.results.slice(12, 16), data.results.slice(16, 20)],
                popularMovies: data.results.slice(0, 4), //agregar reverse
                loader: false,
            }))

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&page=1')
            .then(res => res.json())
            .then(data => this.setState({
                allTopMovies: [data.results.slice(0, 4), data.results.slice(4, 8), data.results.slice(8, 12), data.results.slice(12, 16), data.results.slice(16, 20)],
                topRatedMovies: data.results.slice(0, 4),
                loader: false
            }))
    }

    flechaDerechaPop() {
        this.setState({
            popularMovies: this.state.allPopMovies[this.state.indexPop + 1],
            indexPop: this.state.indexPop + 1
        })
    }
    flechaIzquierdaPop() {
        if (this.state.indexPop !== 0) {
            this.setState({
                popularMovies: this.state.allPopMovies[this.state.indexPop - 1],
                indexPop: this.state.indexPop - 1
            })
        }
    }

    flechaDerechaTop() {

        this.setState({
            topRatedMovies: this.state.allTopMovies[this.state.indexRat + 1],
            indexRat: this.state.indexRat + 1
        })
    }

    flechaIzquierdaTop() {
        if (this.state.indexRat !== 0) {
            this.setState({
                topRatedMovies: this.state.allTopMovies[this.state.indexRat - 1],
                indexRat: this.state.indexRat - 1
            })
        }
    }
    render() {
        return (

            this.state.loader === true ?

                (<img src={loader} alt="aguarde mientras carga la pagina" className='imgLoader' />)
                : <React.Fragment>
                    <div className='bg-image'>
                        <img className="imagen-central" src={"/img/bg.jpg"} alt='Home Banner' />
                        <div>
                            <h1 id='texto-centrado-en-home'> Sigue todas las películas que viste. </h1>
                            <h1 id='texto-centrado-en-home2'> Diviertete junto a tus amigos. </h1>
                            <h1 id='texto-centrado-en-home3'> <em>Filmoh</em>: tu guía al cine. </h1>
                        </div>
                    </div>
                    <div className='show-all-and-title'>
                        <h3>Peliculas Populares esta semana</h3>
                        <Link to="/popular">
                            <p className='button'>Ver Todas</p>
                        </Link>
                    </div>
                    <section className='movie-container'>
                        {this.state.indexPop === 0
                            ?
                            (
                                <div className='flechas' id="flecha-izquierda-mover">
                                    <button id="flecha-especial">
                                        <i class="fa-solid fa-chevron-left"></i>
                                    </button>
                                </div>
                            )
                            :
                            (<div className='flechas' id="flecha-izquierda-mover">
                                <button onClick={() => this.flechaIzquierdaPop()} id="flecha-izquierda">
                                    <i class="fa-solid fa-chevron-left"></i>
                                </button>
                                </div>
                            )
                        }

                        {this.state.popularMovies.map((Movie, idx) => <MovieCardHome key={Movie.title + idx} movieData={Movie} />)}

                        {this.state.indexPop === 3 
                        ? 
                        (<div className='flechas' id="flecha-derecha-mover">
                            <button id='flecha-especial'>
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                        )
                        :
                        (<div className='flechas' id='flecha-derecha-mover'>
                            <button onClick={() => this.flechaDerechaPop()} id='flecha-derecha'> <i class="fa-solid fa-chevron-right"></i></button></div>)}
                    </section>

                    <div className='show-all-and-title'>
                        <h3>Lo Mejor en Peliculas</h3>
                        <Link to="/top-rated">
                            <p className='button'>Ver Todas</p>
                        </Link>
                    </div>
                    <section className='movie-container'>
                        {this.state.indexRat === 0 ? (<div className='flechas'><button id="flecha-especial"> <i class="fa-solid fa-chevron-left"></i></button></div>) : (<div className='flechas'><button onClick={() => this.flechaIzquierdaTop()} id="flecha-izquierda"> <i class="fa-solid fa-chevron-left"></i></button></div>)}
                        {this.state.topRatedMovies.map((Movie, idx) => <MovieCardHome key={Movie.title + idx} movieData={Movie} />)}
                        {this.state.indexRat === 3 ? (<div className='flechas'><button id='flecha-especial'> <i class="fa-solid fa-chevron-right"></i></button></div>) : (<div className='flechas'><button onClick={() => this.flechaDerechaTop()} id='flecha-derecha'> <i class="fa-solid fa-chevron-right"></i></button></div>)}

                    </section>
                    
                </React.Fragment>
                
        )
    }
}

export default Home