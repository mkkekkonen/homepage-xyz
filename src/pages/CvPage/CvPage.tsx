import React from 'react';

import BasicTemplate from '../../templates/BasicTemplate';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class CvPage extends React.Component {
  render() {
    return (
      <BasicTemplate
        header={<Header />}
        footer={<Footer />}
      />
    )
  }
}

