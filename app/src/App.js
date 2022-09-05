import React from 'react'
import {Route, Switch} from 'react-router-dom'
import NotFound from './Screens/NotFound/NotFound';
import Home from './Screens/Home/Home'
import Movies from './Screens/Movies/Movies'
import MovieDetail from './Screens/MovieDetail/MovieDetail'
import Favorites from './Screens/Favorites/Favorites'


function App() {
  return (
    <React.Fragment>

      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/movie' exact={true} component={Movies}/>
        <Route path='/movie/id/:id' exact={true} component={MovieDetail}/>
        <Route path='/favorites' exact={true} component={Favorites}/>
        <Route path='' component={NotFound}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
