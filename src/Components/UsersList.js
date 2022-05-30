import React from "react";
import { Component } from "react";
export default class USersList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        usersList: []
    };
  }
  render() {
    return <>{this.props.task}</>;
  }
}
