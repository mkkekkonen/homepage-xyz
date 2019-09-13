import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  font-family: 'Beth Ellen', cursive;
  padding-top: 0;
`

interface Props {
  children: React.ReactNode
}

export default class CursiveHeading extends React.Component<Props> {
  render() {
    const { children } = this.props;

    return (
      <Heading {...this.props}>{children}</Heading>
    );
  }
}
