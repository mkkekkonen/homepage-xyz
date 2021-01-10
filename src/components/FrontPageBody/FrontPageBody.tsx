import React from 'react';
import styled from 'styled-components';

import Markdown from '../Markdown';
import TechnologyGrid from '../TechnologyGrid';

const BodyContainer = styled.div`
  background-color: #fff;
  padding: 1rem;
  text-align: justify;
`

export default class FrontPageBody extends React.Component {
  render() {
    return (
      <BodyContainer>
        <Markdown markdownFileName="frontPage" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        <h3>Core Competencies</h3>

        <TechnologyGrid />
      </BodyContainer>
    );
  }
}
