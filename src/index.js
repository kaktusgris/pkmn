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
import Rules from './pages/rules/rules';
import 'bootstrap';
import './index.scss';
import Button from './common/button';

const HomeTab = () =>
  <Link className='home-tab m-1' to="/pkmn/">
    <img src='images/favicon.ico' alt='home' />
  </Link>

const HeaderTab = ({ title, path }) =>
  <Link className='header-tab' to={"/pkmn/" + path}>
    {<Button title={title} />}
  </Link>;

const Header = () =>
  <div className='header'>
    <HomeTab />
    <HeaderTab title='Wizard' path='wizard' />
    <HeaderTab title='Magic Babies' path='magicbabies' />
    <HeaderTab title='Rules' path='rules' />
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
        <Route path="/pkmn/rules">
          <Rules />
        </Route>
      </Switch>
    </div>
  </Router>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);