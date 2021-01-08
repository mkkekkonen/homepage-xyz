import React from 'react';

import { storiesOf } from '@storybook/react';

import TechnologyEntry from './TechnologyEntry';

const techs = [
  {
    name: 'React',
    link: '#',
  },
  {
    name: 'Redux',
    link: '#',
  },
];

storiesOf('TechnologyEntry', module)
  .add('default', () => (
    <TechnologyEntry
      iconProp={['fab', 'js']}
      techs={techs}
    />
  ));
