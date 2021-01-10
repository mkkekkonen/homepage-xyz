import React from 'react';
import styled from 'styled-components';

import TechnologyIcon from '../TechnologyIcon';

import { TechnologyIconData } from './TechnologyGridView';

const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 600px;
`

interface Props {
  iconData: TechnologyIconData[]
}

export default class TechnologyGridLayout extends React.Component<Props> {
  render() {
    const { iconData } = this.props;

    return (
      <OuterWrapper>
        <GridWrapper>
          {iconData.map(data => (
            <TechnologyIcon
              key={data.name}
              name={data.name}
              iconProp={data.iconProp}
            />
          ))}
        </GridWrapper>
      </OuterWrapper>
    );
  }
}
