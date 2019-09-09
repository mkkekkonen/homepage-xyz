import React from 'react';

import BasicTemplate from '../../templates/BasicTemplate';

import Header from '../../components/Header';

export default class FrontPage extends React.Component {
  render() {
    return (
      <BasicTemplate
        header={<Header />}
      />
    );
  }
}
