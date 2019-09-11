import React from 'react';
import styled from 'styled-components';

import Markdown from '../Markdown';
import TechnologyGrid from '../TehcnologyGrid';

const BodyContainer = styled.div`
  background-color: #fff;
  padding: 1rem;
  text-align: justify;
`

const Subheading = styled.h3`
  padding: 2rem;
  text-align: center;
`

export default class FrontPageBody extends React.Component {
  render() {
    return (
      <BodyContainer>
        <Markdown markdownFileName="frontPage" />

        <Subheading>Core Competences</Subheading>
        <TechnologyGrid />
      </BodyContainer>
    );
  }
}
