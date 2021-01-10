import React from 'react';

import BasicTemplate from '../../templates/BasicTemplate';

import Header from '../../components/Header';
import PortfolioPageBody from '../../components/PortfolioPageBody';
import Footer from '../../components/Footer';

export default class PortfolioPage extends React.Component {
  render() {
    return (
      <BasicTemplate
        header={<Header />}
        body={<PortfolioPageBody />}
        footer={<Footer />}
      />
    );
  }
}
