import React from 'react';

import { storiesOf } from '@storybook/react';

import { BrowserRouter as Router } from 'react-router-dom';

import HeaderLayout from './HeaderLayout';
import { SocialLinkData } from './HeaderView'

storiesOf('Header', module)
  .add('default', () => {
    const socialLinks: SocialLinkData[] = [
      {
        name: 'Instagram',
        url: '#',
        iconProp: ['fab', 'instagram']
      },
      {
        name: 'Twitter',
        url: '#',
        iconProp: ['fab', 'twitter']
      },
      {
        name: 'GitHub',
        url: '#',
        iconProp: ['fab', 'github']
      },
      {
        name: 'Facebook',
        url: '#',
        iconProp: ['fab', 'facebook']
      }
    ]

    const navLinks = [
      {
        name: 'Home',
        to: '/',
      },
      {
        name: 'CV',
        to: '/cv/'
      }
    ];

    return (
      <Router>
        <HeaderLayout
          title="Maija Kekkonen"
          subtitle="Software Engineer"
          socialLinks={socialLinks}
          navLinks={navLinks}
        />
      </Router>
    );
  });
