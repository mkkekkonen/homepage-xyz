import React from 'react';

import { storiesOf } from '@storybook/react';

import CursiveHeading from './CursiveHeading';

storiesOf('CursiveHeading', module)
  .add('default', () => (
    <CursiveHeading>Maija Kekkonen</CursiveHeading>
  ));
