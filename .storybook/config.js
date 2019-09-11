import { configure } from '@storybook/react';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faFacebook,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

import '../src/assets/css/bootstrap.css';
import '../src/assets/css/bootstrap-grid.css';
import '../src/assets/css/bootstrap-reboot.css';

import '../src/assets/css/global.css';

library.add(
  faInstagram,
  faTwitter,
  faGithub,
  faFacebook,
  faReact,
);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
