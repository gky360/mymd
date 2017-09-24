// @flow
import React, { Component } from 'react';
import type { Element } from 'react';


type Props = {
  children: Element<any>
}

export default class App extends Component<Props> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
