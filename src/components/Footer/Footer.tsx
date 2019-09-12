import React from 'react';
import styled from 'styled-components';

import Markdown from '../Markdown';

const FooterContainer = styled.div`
  background-color: #a1c657;
  color: #fff;
  margin-bottom: 2rem;
  padding: 1rem;
`

export default class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <Markdown markdownFileName="footer" />
      </FooterContainer>
    );
  }
}
