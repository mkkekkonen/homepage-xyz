import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import * as H from 'history';

const NavbarContainer = styled.div`
  background-color: #444;
  display: flex;
  justify-content: center;
  color: #fff;
  text-transform: uppercase;
  & a:link, & a:visited {
    text-decoration: none;
  }
`

const StyledLink = styled(Link)`
  border-left: 1px solid #fff;
  padding: 0.5rem;
  &:last-child {
    border-right: 1px solid #fff;
  }
  &:hover {
    background-color: #666;
  }
`

export interface LinkData {
  name: string
  to: string
}

interface Props {
  links: LinkData[]
}

export default class Navbar extends React.Component<Props> {
  render() {
    const { links } = this.props;

    return (
      <NavbarContainer>
        {links.map(link => (
          <StyledLink key={link.name} to={link.to}>{link.name}</StyledLink>
        ))}
      </NavbarContainer>
    )
  }
}
