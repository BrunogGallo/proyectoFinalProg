import React, { Component } from 'react'
import loader from '../../loader.gif'
import './moviedetail.css'



class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            movies: {
                genres: [
                    { name: "" }
                ]
            },
            loader: true,
            favsMessage: 'Agregar a favoritos',

        }
    }

    componentDidMount() {
        
        
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US`)
            .then(response => response.json())
            .then(data => {
                
                this.setState({
                    movies: data,
                    loader: false
                }, () => console.log(this.state.movies))
                
            })


        

    }


    agregarYQuitarFavoritos(id) {
        // vamos a guardar ids en un array dentro de localStorage.
        //console.log('Agregando y sacando favs');

        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos'); // Esta posicion puede no estar.

        if (recuperoStorage !== null) {

            let storageToArray = JSON.parse(recuperoStorage); //transforma texto en array.

            favoritos = storageToArray
        }



        if (favoritos.includes(id)) { // includes retorna true o false.
            // Cambiar el texto del boton a Quitar de favoritos.
            // Sacar el id del array: usamos filter.
            favoritos = favoritos.filter(cadaIdDelArray => cadaIdDelArray !== id)
            this.setState({
                favsMessage: 'Agregar a Favoritos',
            },
            )

        } else {
            favoritos.push(id);
            this.setState({
                favsMessage:'Quitar de Favoritos' ,
            })
        }



        let favsToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favsToString)

        console.log(localStorage);

        


    }

    render() {
        return (
            this.state.loader === true ?

                (<img src={loader} alt="aguarde mientras carga la pagina" className='imgLoader' />)
                : <React.Fragment>
                    <main className='movie-detail-content'>
                        <div className='movie-detail-poster'>
                            <img src={`https://image.tmdb.org/t/p/w780/${this.state.movies.poster_path}`} alt="foto" /> </div>

                        <div className='movie-detail-data'>
                            <h1>{this.state.movies.title}</h1>
                            <p> Rating: {this.state.movies.vote_average}/10</p>
                            <p> Fecha de estreno: {this.state.movies.release_date}</p>
                            <p> Duración: {this.state.movies.runtime} minutos</p>
                            <div className='genres'>
                                <p> Géneros:</p>
                                <ul>
                                    {this.state.movies.genres.map((genre, idx) => (
                                        <li key={genre.id + idx}> {`| ${genre.name} |`} </li>
                                    ))
                                    }
                                </ul>
                            </div>
                            <p className='overview'>{this.state.movies.overview}</p>
                            <button className='more' onClick={() => this.agregarYQuitarFavoritos(this.state.id)}>{this.state.favsMessage}</button>
                        </div>
                    </main>
                </React.Fragment>
        )
    }
}

export default MovieDetail