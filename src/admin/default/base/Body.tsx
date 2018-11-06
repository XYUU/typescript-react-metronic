import React from 'react';
import LeftAside from '../aside/LeftAside';
import { Router } from '@reach/router';
import { Dashboard } from '../Dashboard';
import { PopoverPage } from './../PopoverPage';
// import './body.scss';


export interface BodyProps {

}
export interface BodyStates {

}
export class Body extends React.Component<BodyProps, BodyStates> {
  constructor(props?: BodyProps, context?: any) {
    super(props, context);
  }
  render() {
    return (
      <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
        <LeftAside />
        <div className="m-grid__item m-grid__item--fluid m-wrapper">
          <Router>
            <Dashboard default path="home" />
            <PopoverPage path="popover" />
          </Router>
        </div>
      </div>
    );
  }
}