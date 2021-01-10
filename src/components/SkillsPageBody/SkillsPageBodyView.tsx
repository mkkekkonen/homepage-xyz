import React from 'react';

import SkillsPageBodyLayout from './SkillsPageBodyLayout';

import skills from '../../assets/data/skills.json';

export default class SkillsPageBodyView extends React.Component {
  render() {
    return <SkillsPageBodyLayout skillCategories={skills as any} />;
  }
}
