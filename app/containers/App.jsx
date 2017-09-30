// @flow
import React, { Component } from 'react';
import type { Node } from 'react';

type Props = {
  children: Node
}

/* eslint-disable react/prefer-stateless-function */
export default class App extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
