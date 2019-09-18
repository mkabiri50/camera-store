import React, { Component } from 'react';
import Header from '../components/nav/Header';
import Title from '../components/nav/Title';
class More extends Component {
  render() {
    return (
      <div>
        <Header branding='Explore' />
        <Title pageTitle='Explore' />
      </div>
    );
  }
}

export default More;
