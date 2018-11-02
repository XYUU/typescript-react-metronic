import React from 'react';
import Header from '../header/Header';
import { Body } from './Body';
import { Footer } from '../footer/Footer';
// import './page.scss';

export interface PageProps {

}
export interface PageStates {

}
export class Page extends React.Component<PageProps, PageStates> {
    constructor(props?: PageProps, context?: any) {
        super(props, context);
    }

    render() {
        return (
            <div className="m-grid m-grid--hor m-grid--root m-page">
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}