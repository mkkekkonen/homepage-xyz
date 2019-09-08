import React from 'react';
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 75px;
`

const BodyContainer = styled.div`
  display: flex;
  min-height: 40rem;
  padding: 1rem;
`

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 1rem;
`

interface Props {
  header: React.ReactNode
  body: React.ReactNode
  sidebar: React.ReactNode
  footer: React.ReactNode
}

interface State {}

export default class BasicTemplate extends React.Component<Props, State> {
  static defaultProps = {
    header: 'This is a header',
    body: 'Body text',
    sidebar: 'Sidebar',
    footer: 'Maija Kekkonen 2019'
  }

  render() {
    const { header, body, sidebar, footer } = this.props;

    return (
      <Container>
        <Row>
          <Col
            lg={12}
            xl={{ span: 10, offset: 1 }}
          >
            <HeaderContainer>
              {header}
            </HeaderContainer>
          </Col>
        </Row>

        <Row>
          <Col
            lg={9}
            xl={{ span: 8, offset: 1 }}
          >
            <BodyContainer>
              {body}
            </BodyContainer>
          </Col>
          <Col
            lg={3}
            xl={{ span: 2 }}
          >
            {sidebar}
          </Col>
        </Row>

        <Row>
          <Col
            lg={12}
            xl={{ span: 10, offset: 1 }}
          >
            <FooterContainer>
              {footer}
            </FooterContainer>
          </Col>
        </Row>
      </Container>
    )
  }
}

