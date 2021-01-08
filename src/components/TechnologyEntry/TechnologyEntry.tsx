import React from 'react';
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';

import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  max-width: 767px;
  padding: 1.5em;
  position: relative;
`;

const InnerContainer = styled.div`
  border: 2px solid #070;
  border-radius: 10px;
`;

const Bubble = styled.span`
  background-color: #fff;
  border: 2px solid #070;
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 70px;
  height: 70px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 50px;
  color: #070;
`;

const TitleContainer = styled.div`
  background-color: #fff;
  border-bottom: 2px solid #070;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Title = styled.h3`
  color: #070;
  font-family: Viga, sans-serif;
  margin: 0;
  padding: 1rem;
  padding-left: 35px;
  text-align: left;
`;

const TechContainer = styled.div`
  padding: 1.5rem;

  & > * {
    margin: 0.25rem 0.5rem;
  }
`;

const ButtonIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
  font-size: 12px;
`;

interface TechDefinition {
  name: string
  link: string
}

interface Props {
  iconProp: IconName | IconProp
  techs: TechDefinition[]
}

export default class TechnologyEntry extends React.Component<Props> {
  render() {
    const { iconProp, techs } = this.props;

    return (
      <Container>
        <Bubble>
          <Icon icon={iconProp} />
        </Bubble>

        <InnerContainer>
          <TitleContainer>
            <Title>JavaScript</Title>
          </TitleContainer>

          <TechContainer>
            {techs.map(tech => (
              <Button
                variant="dark"
                href={tech.link}
              >
                {tech.name}
                <ButtonIcon icon={['fas', 'external-link-alt']} />
              </Button>
            ))}
          </TechContainer>
        </InnerContainer>
      </Container>
    );
  }
}
