import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link
} from "react-router-dom";
import Home from './pages/home';
import WizardChallenge from './pages/wizardchallenge';
import MagicBabies from './pages/magicbabies';
import 'bootstrap';
import './index.scss';

const HeaderTab = ({ title, path }) => <Link
  className='header-tab btn btn-primary m-1'
  to={path}>
  {title}
</Link>;

const App = () => <Router>
  <div>
    <div className='header mt-2 mb-2'>
      <HeaderTab title='Home' path='/' />
      <HeaderTab title='Wizard' path='/wizard' />
      <HeaderTab title='Magic Babies' path='/magicbabies' />
    </div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/wizard">
        <WizardChallenge />
      </Route>
      <Route path="/magicbabies">
        <MagicBabies />
      </Route>
    </Switch>
  </div>
</Router>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);