import React from 'react';

import { storiesOf } from '@storybook/react';

import TechnologyIcon from './TechnologyIcon';

storiesOf('TechnologyIcon', module)
  .add('default', () => (
    <TechnologyIcon
      name="React"
      iconProp={['fab', 'react']}
    />
  ))
