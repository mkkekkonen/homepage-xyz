import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';

const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 6rem;
  padding: 0 0.3rem;
`

const Name = styled.span`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 0.3rem;
  text-align: center;
  width: 120px;
`

export interface Props {
  name: string
  iconProp: IconName | IconProp
}

export default class TechnologyIcon extends React.Component<Props> {
  render() {
    const { name, iconProp } = this.props;

    return (
      <IconContainer>
        <Icon icon={iconProp} />
        <Name>{name}</Name>
      </IconContainer>
    )
  }
}
