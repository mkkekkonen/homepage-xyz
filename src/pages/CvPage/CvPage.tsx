import React from 'react';
import styled from 'styled-components';

import BasicTemplate from '../../templates/BasicTemplate';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CvPageBody from '../../components/CvPageBody';

export default class CvPage extends React.Component {
  render() {
    return (
      <BasicTemplate
        header={<Header />}
        body={<CvPageBody />}
        footer={<Footer />}
      />
    )
  }
}

