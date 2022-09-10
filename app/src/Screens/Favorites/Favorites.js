import React, { Component } from 'react'
import MovieCard from '../../Components/MovieCard/MovieCard'
import loader from '../../loader.gif'


class Favorites extends Component {

    constructor() {
        super()
        this.state = {
            movies: [],
            loader: true
            
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

    render() {

        return (
            this.state.loader === true ? 

            (<img src={loader} alt="aguarde mientras carga la pagina" className='imgLoader' />)
            : <div>

                <h2>Favoritos</h2>
                <section className='movie-container'>
                    {
                        this.state.movies.map((Movie, idx) => <MovieCard key={Movie.title + idx} movieData={Movie} />)
                    }
                </section>
                

            </div>
        )
    }
}

export default Favorites