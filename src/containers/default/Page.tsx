import * as React from 'react';
import Header from './Header';
import { Body } from './Body';
import { Footer } from './Footer';

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