import React, { Component } from 'react'
import TarjetaPeli from '../../Components/pelitest/TarjetaPelicula';
import loader from '../../loader.gif'
import './favorites.css';



class Favorites extends Component {

    constructor() {
        super()
        this.state = {
            movies: [],
            loader: true,
            favoritos: true
            
        }
    }

    componentDidMount() {
        let recuperoFavs = localStorage.getItem('favoritos');

        if(recuperoFavs !== null){
            
            let movieFav = JSON.parse(recuperoFavs);
            let movies = [];



            movieFav.forEach((id) => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cbe0b85cca8ab920f1387b58d1b0ce3a`)
                .then( response => response.json())
                .then( data => {
                    movies.push(data);
                    this.setState({
                        movies: movies,
                        loader: false
                    });
                    console.log(movies);
                })
                .catch(error => console.log(error))
        
            });
            

        }

        
    }

    borrar(id) {
        // borrar un objeto del array.
        let favoritos = this.state.movies.filter(oneMovie => oneMovie.id !== id);

        this.setState({
            movies: favoritos
        })
        

        //borrar un id de localStorage
        let recuperoStorage = JSON.parse(localStorage.getItem('favoritos'));
        

        let favoritosStorage = recuperoStorage.filter(oneId => oneId !== id);


        let favoritosToString = JSON.stringify(favoritosStorage);
        localStorage.setItem('favoritos', favoritosToString)

        
        
    }

    




    render() {

        return (
            this.state.loader ? 
            <div> 
                <h1 className="favs-title">No Tienes Favoritos</h1>
            </div>
            
            : <div>

                <h1 className="favs-title">Favoritos</h1>
                <section className='movie-container-all'>
                    
                    {
                        this.state.movies.map((Movie, idx) => <TarjetaPeli key={Movie.title + idx} movieData={Movie} fav={this.state.favoritos} borrar={(idx) => this.borrar(idx)}/>)
                    }
                </section>
                

            </div>
        )
    }
}

export default Favorites