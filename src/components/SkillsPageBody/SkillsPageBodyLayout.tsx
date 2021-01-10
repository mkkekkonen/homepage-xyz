import React, { Fragment } from 'react';
import styled from 'styled-components';

import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';

import TechnologyEntry, { TechDefinition } from '../TechnologyEntry';

interface SkillCategory {
  categoryName: string
  iconProp: IconName | IconProp
  techs: TechDefinition[]
}

interface Props {
  skillCategories: SkillCategory[]
}

const BodyContainer = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
`;

export default class SkillsPageBodyLayout extends React.Component<Props> {
  render() {
    const { skillCategories } = this.props;

    return (
      <BodyContainer>
        <Title>Skills</Title>

        {skillCategories.map(skillCategory =>
          <TechnologyEntry {...skillCategory} />
        )}
      </BodyContainer>
    );
  }
}
