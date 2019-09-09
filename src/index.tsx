import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import FrontPage from './pages/FrontPage';

import './assets/css/bootstrap.css';
import './assets/css/bootstrap-grid.css';
import './assets/css/bootstrap-reboot.css';

import './assets/css/global.css';

library.add(faInstagram, faTwitter, faGithub);

ReactDOM.render(<FrontPage />, document.getElementById('app'));
