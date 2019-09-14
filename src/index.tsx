import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HashRouter as Router, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMobileAlt, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
  faReact,
  faJs,
  faPython,
  faMicrosoft,
  faJava,
} from '@fortawesome/free-brands-svg-icons';

import FrontPage from './pages/FrontPage';
import CvPage from './pages/CvPage';
import PortfolioPage from './pages/PortfolioPage';

import './assets/css/bootstrap.css';
import './assets/css/bootstrap-grid.css';
import './assets/css/bootstrap-reboot.css';

import './assets/css/global.css';

library.add(
  faMobileAlt,
  faGlobeEurope,
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
  faReact,
  faJs,
  faPython,
  faMicrosoft,
  faJava,
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={FrontPage} />
        <Route path="/cv/" component={CvPage} />
        <Route path="/portfolio/" component={PortfolioPage} />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
