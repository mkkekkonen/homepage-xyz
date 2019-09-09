import React from 'react';

import { storiesOf } from '@storybook/react';

import HeaderLayout from './HeaderLayout';
import { SocialLinkData } from './HeaderView'

storiesOf('Header', module)
  .add('default', () => {
    const socialLinks: SocialLinkData[] = [
      {
        name: 'Instagram',
        url: '#',
        iconName: ['fab', 'instagram']
      },
      {
        name: 'Twitter',
        url: '#',
        iconName: ['fab', 'twitter']
      },
      {
        name: 'GitHub',
        url: '#',
        iconName: ['fab', 'github']
      },
      {
        name: 'Facebook',
        url: '#',
        iconName: ['fab', 'facebook']
      }
    ]

    return (
      <HeaderLayout
        title="Maija Kekkonen"
        subtitle="Software Engineer"
        socialLinks={socialLinks}
      />
    );
  });
