import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CursiveHeading from '../CursiveHeading';
import Navbar, { LinkData } from '../Navbar';

import { SocialLinkData } from './HeaderView';

const OuterContainer = styled.div`
  width: 100%;
`

const HeaderContainer = styled.div`
  background-color: #a1c657;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`;

const SocialLinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 10.8rem;
`

const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  margin: 0.3rem;
`

const Subtitle = styled.h3`
  padding: 0;
  text-align: left;
`

interface SocialProps {
  data: SocialLinkData
}

const SocialLink = ({ data, ...props }: SocialProps) => {
  return (
    <a href={data.url} title={data.name}>
      <SocialIcon icon={data.iconProp} {...props} />
    </a>
  )
}

interface Props {
  title: string
  subtitle: string
  socialLinks: SocialLinkData[]
  navLinks: LinkData[]
}

export default class HeaderLayout extends React.Component<Props> {
  render() {
    const { title, subtitle, socialLinks, navLinks } = this.props;

    return (
      <OuterContainer>
        <HeaderContainer>
          <div>
            <CursiveHeading>{title}</CursiveHeading>
            <Subtitle>{subtitle}</Subtitle>
          </div>

          <SocialLinkContainer>
            {socialLinks.map(socialLink => <SocialLink key={socialLink.name} data={socialLink} />)}
          </SocialLinkContainer>
        </HeaderContainer>
        <Navbar links={navLinks} />
      </OuterContainer>
    );
  }
}
