import React, { Component } from 'react';
import Header from '../components/nav/Header';
import Title from '../components/nav/Title';

export class Journal extends Component {
  render() {
    return (
      <div>
        <Header branding='Journal' />
        <Title pageTitle='Journal' />
      </div>
    );
  }
}

export default Journal;
