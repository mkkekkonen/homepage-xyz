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
`

const FooterContainer = styled.div`
  min-height: 50px;
`

interface Props {
  header: React.ReactNode
  body: React.ReactNode
  sidebar: React.ReactNode
  footer: React.ReactNode
  showSidebar?: boolean
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
    const { header, body, sidebar, footer, showSidebar } = this.props;

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
            xl={{ span: showSidebar ? 8 : 10, offset: 1 }}
          >
            <BodyContainer>
              {body}
            </BodyContainer>
          </Col>
          {showSidebar && (
            <Col
              lg={3}
              xl={{ span: 2 }}
            >
              {sidebar}
            </Col>
          )}
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

