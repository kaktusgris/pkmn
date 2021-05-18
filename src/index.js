import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home';
import WizardChallenge from './pages/wizardchallenge';
import MagicBabies from './pages/magicbabies';


const App = () => <Router>
  <div>
    <ul>
      <li>
        <Link to="/pkmn/">Home</Link>
      </li>
      <li>
        <Link to="/pkmn/wizard">Wizard</Link>
      </li>
      <li>
        <Link to="/pkmn/magicbabies">Magic Babies</Link>
      </li>
    </ul>
    <hr />
    <Switch>
      <Route exact path="/pkmn/">
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
</Router>

ReactDOM.render(
  <App />,
  document.getElementById('root')
  );