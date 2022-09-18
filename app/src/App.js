import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from './Screens/NotFound/NotFound';
import Home from './Screens/Home/Home'
import MovieDetail from './Screens/MovieDetail/MovieDetail'
import Favorites from './Screens/Favorites/Favorites'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SearchResults from './Screens/SearchResults/SearchResults';
import PopularMovies from './Screens/PopularMovies/PopularMovies';
import TopRatedMovies from './Screens/TopRatedMovies/TopRatedMovies';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/popular' exact={true} component={PopularMovies} />
          <Route path='/top-rated' exact={true} component={TopRatedMovies} />
          <Route path='/movie/id/:id' exact={true} component={MovieDetail} />
          <Route path='/favorites' exact={true} component={Favorites} />
          <Route path='/searchResults/:param?' exact={true} render={(props) => (
            <SearchResults key= {props.match.params.param} {...props} />
            // cuando usas component le llegan una serie de proiedades. prpiedades default. recibe las props por paraemtro. esas props las pasa con el spread operator. 
            // se las pasa al bhijo. pasas a mano las props. spread opertaor: si props tiene. Por m[as que cambies la url, render siempre te muestra el mismo componente. Cada vez que vos cambies el params, cambie el componente.
            // el param es lo que escribio el usuario. cada vez que escriba algo diferente cambia la key. 
            // cambia la key, se renderiza de nuevo. Si la key es distinta, se renderiza de nuevo. 
            // eso de los puntitios hace que todas las propiedades del ojbeto prop se pasen al hijo (spread operator.)


          )} />
          <Route path='' component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
