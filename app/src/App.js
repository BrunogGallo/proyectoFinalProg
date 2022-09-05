import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from './Screens/NotFound/NotFound';
import Home from './Screens/Home/Home'
import Movies from './Screens/Movies/Movies'
import MovieDetail from './Screens/MovieDetail/MovieDetail'
import Favorites from './Screens/Favorites/Favorites'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <main>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/movie' exact={true} component={Movies} />
          <Route path='/movie/id/:id' exact={true} component={MovieDetail} />
          <Route path='/favorites' exact={true} component={Favorites} />
          <Route path='' component={NotFound} />
        </Switch>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
