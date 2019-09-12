import React from 'react';

import BasicTemplate from '../../templates/BasicTemplate';

import Header from '../../components/Header';
import FrontPageBody from '../../components/FrontPageBody';
import Footer from '../../components/Footer';

export default class FrontPage extends React.Component {
  render() {
    return (
      <BasicTemplate
        header={<Header />}
        body={<FrontPageBody />}
        footer={<Footer />}
      />
    );
  }
}
