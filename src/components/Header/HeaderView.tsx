import React from 'react';

import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';

import HeaderLayout from './HeaderLayout';

import socialLinks from '../../assets/data/socialLinks.json';

export interface SocialLinkData {
  name: string
  url: string
  iconProp: IconName | IconProp
}

export default class HeaderView extends React.Component {
  render() {
    return (
      <HeaderLayout
        title="Maija Kekkonen"
        subtitle="Software Engineer"
        socialLinks={socialLinks as SocialLinkData[]}
      />
    );
  }
}
