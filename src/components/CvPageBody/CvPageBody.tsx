import React from 'react';
import styled from 'styled-components';

import Markdown from '../Markdown';

const BodyContainer = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  padding: 1rem;
  text-align: justify;
  width: 100%;
`
export default class CvPageBody extends React.Component {
  render() {
    return (
      <BodyContainer>
        <Markdown markdownFileName="cv" />
      </BodyContainer>
    )
  }
}
