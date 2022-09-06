import React, { Component } from 'react';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParams: this.props.match.params,
            personajes: []
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=0002daaf86f106b6b8226fa0a789628f&language=en-US&query=${this.state.searchParams.param}&page=1&include_adult=true`)
            .then(res => res.json())
            .then(data => this.setState({
                personajes: data.results
            }))
            .catch()
    }
    render() {
        console.log(this.state.personajes);
        return (
            <React.Fragment>
                {this.state.searchParams.param === undefined ? (<h1> No hay resultados para tu busqueda</h1>) : (
                    <div>
                        <h1> Hay resultados para tu busqueda: </h1>)
                        
                    </div> 
                )}
            </React.Fragment>
        )
    }
}

export default SearchResults