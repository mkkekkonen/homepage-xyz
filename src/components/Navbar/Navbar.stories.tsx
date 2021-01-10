import React from 'react';

import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar, { LinkData } from './Navbar';

const links = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'CV',
    to: '/cv/'
  }
];

storiesOf('Navbar', module)
  .add('default', () => (
    <Router>
      <Navbar links={links} />
    </Router>
  ));
