import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home';
import WizardChallenge from './pages/wizard/wizard';
import MagicBabies from './pages/magicbabies/magicbabies';
import 'bootstrap';
import './index.scss';

const HomeTab = () =>
  <Link className='home-tab m-1' to="/pkmn/">
    <img src='favicon.ico' alt='home' />
  </Link>

const HeaderTab = ({ title, path }) =>
  <Link
    className='header-tab btn btn-primary m-1'
    to={"/pkmn/" + path}>
    {title}
  </Link>;

const Header = () =>
  <div className='header'>
    <HomeTab />
    <HeaderTab title='Wizard' path='wizard' />
    <HeaderTab title='Magic Babies' path='magicbabies' />
  </div>;

const App = () =>
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/pkmn">
          <Home />
        </Route>
        <Route path="/pkmn/wizard">
          <WizardChallenge />
        </Route>
        <Route path="/pkmn/magicbabies">
          <MagicBabies />
        </Route>
      </Switch>
    </div>
  </Router>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);