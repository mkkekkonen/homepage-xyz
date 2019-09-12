import React from 'react';

import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';

import TechnologyGridLayout from './TechnologyGridLayout';

import iconData from '../../assets/data/technologyIcons.json';

export interface TechnologyIconData {
  name: string
  iconProp: IconName | IconProp
}

export default class TechnologyGridView extends React.Component {
  render() {
    return (
      <TechnologyGridLayout
        iconData={iconData as TechnologyIconData[]}
      />
    );
  }
}
