import React from 'react';
// import './scrolltop.scss';

export interface ScrollTopProps {

}
export interface ScrollTopStates {

}
export class ScrollTop extends React.Component<ScrollTopProps, ScrollTopStates> {
    constructor(props?: ScrollTopProps, context?: any) {
        super(props, context);

    }
    render() {
        return (
            <div className="m-scroll-top">
                <i className="la la-arrow-up" />
            </div>
        );
    }
}