import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CursiveHeading from '../CursiveHeading';

import { SocialLinkData } from './HeaderView';

const HeaderContainer = styled.div`
  background-color: #a1c657;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  width: 100%;
  & h3 {
    font-weight: 100;
  }
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
}

export default class HeaderLayout extends React.Component<Props> {
  render() {
    const { title, subtitle, socialLinks } = this.props;

    return (
      <HeaderContainer>
        <div>
          <CursiveHeading>{title}</CursiveHeading>
          <h3>{subtitle}</h3>
        </div>

        <SocialLinkContainer>
          {socialLinks.map(socialLink => <SocialLink data={socialLink} />)}
        </SocialLinkContainer>
      </HeaderContainer>
    );
  }
}
