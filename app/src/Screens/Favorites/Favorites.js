import React, { Component } from 'react'
import MovieCard from '../../Components/MovieCard/MovieCard'


class Favorites extends Component {

    constructor() {
        super()
        this.state = {
            movies: [],
            
        }
    }

    componentDidMount() {
        let recuperoFavs = localStorage.getItem('favorites');
        let favs = [];

        if(recuperoFavs !== null){
            
            let movieFav = JSON.parse(recuperoFavs);
            let movies = [];



            movieFav.forEach((id) => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cbe0b85cca8ab920f1387b58d1b0ce3a`)
                .then( response => response.json())
                .then( data => {
                    favs.push(data);
                    console.log(this.state.movies.length);
    
                    this.setState({
                        movies: movies
                    });
                })
                .catch(error => console.log(error))
        
            });
            
            console.log(movies);

        }

        
    }

    render() {

        return (
            <div>

                <h2>Favoritos</h2>
                <section>
                {
                        this.state.movies.map((data, id) => <MovieCard key={data + '_' + id} data={data} />)
                    }
                </section>

            </div>
        )
    }
}

export default Favorites