import React from 'react';
import styled from 'styled-components';

import Markdown from '../Markdown';

const BodyContainer = styled.div`
  background-color: #fff;
  padding: 1rem;
  text-align: justify;
`

export default class PortfolioPageBody extends React.Component {
  render() {
    return (
      <BodyContainer>
        <Markdown markdownFileName="portfolio" />
      </BodyContainer>
    )
  }
}
