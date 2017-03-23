import React from 'react';
import Bindable from './Bindable';
import Constants from 'udev-react/commons/Constants';

export default class OutputLabel extends Bindable {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-control">{this.getValue()}</div>
    );
  }



}
