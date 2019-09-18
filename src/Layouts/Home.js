import React, { Component } from 'react';
import Header from '../components/nav/Header';
import Title from '../components/nav/Title';

export class Home extends Component {
  render() {
    return (
      <div>
        <Header branding='Home' />
        <Title pageTitle='Hero Market' />
      </div>
    );
  }
}

export default Home;
