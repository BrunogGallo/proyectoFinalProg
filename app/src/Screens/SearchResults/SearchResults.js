import React, { Component } from 'react';
import MovieCard from '../../Components/MovieCard/MovieCard';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParams: this.props.match.params,
            movies: []
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&query=${this.state.searchParams.param}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => this.setState({
                movies: data.results
            }))
            .catch()
    }
    render() {
        return (
            // quiero chequear que 
            <React.Fragment>
                    <div className='movie-container'>
                        {this.state.movies.length === 0 && 
                        <p> No hay resultados de busqueda </p>
                        }
                        {
                            this.state.movies.map((Movie, idx) => <MovieCard key={Movie.title + idx} movieData={Movie} />)
                        }
                    </div>
            </React.Fragment>
        )
    }
}

export default SearchResults