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
        
    }

    render() {

        return (
            <React.Fragment>

                <h2>Favoritos</h2>
                

            </React.Fragment>
        )
    }
}

export default Favorites