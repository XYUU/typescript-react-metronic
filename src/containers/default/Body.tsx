import * as React from 'react';
import { Content } from './Content';
import { SubHeader } from '../../components/SubHeader';
import LeftAside from './LeftAside';

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
          <SubHeader title="Dashboard">
            <div>
              <span className="m-subheader__daterange">
                <span className="m-subheader__daterange-label">
                  <span className="m-subheader__daterange-title" />
                  <span className="m-subheader__daterange-date m--font-brand" />
                </span>
                <a href="#" className="btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill">
                  <i className="la la-angle-down" />
                </a>
              </span>
            </div>
          </SubHeader>
          <Content />
        </div>
      </div>
    );
  }
}