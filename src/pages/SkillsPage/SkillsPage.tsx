import React from 'react';

import BasicTemplate from '../../templates/BasicTemplate';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SkillsPageBody from '../../components/SkillsPageBody';

export default class SkillsPage extends React.Component {
  render() {
    return (
      <BasicTemplate
        header={<Header />}
        body={<SkillsPageBody />}
        footer={<Footer />}
      />
    );
  }
}
