import React, { Component } from 'react';
import TarjetaPeli from '../../Components/pelitest/TarjetaPelicula';
import loader from '../../loader.gif';
import './searchresults.css'

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParams: this.props.match.params,
            resultMovies: [],
            loader: true
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&query=${this.state.searchParams.param}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => this.setState({
                resultMovies: data.results,
                loader: false
            }))
            .catch()
    }
    render() {
        return (
            // quiero chequear que 
            <React.Fragment>
                {this.state.loader ? (<img src={loader} alt="aguarde mientras carga la pagina" className='imgLoader' />) : (
                
                <div className='movie-container-all'>
                    {this.state.resultMovies.length === 0 &&
                        <p> No hay resultados de busqueda </p>
                    }
                    {
                        this.state.resultMovies.map((Movie, idx) => <TarjetaPeli key={Movie.title + idx} movieData={Movie} />)
                    }
                </div>
                )}

            </React.Fragment>
        )
    }
}

export default SearchResults