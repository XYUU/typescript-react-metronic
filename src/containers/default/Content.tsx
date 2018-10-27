import * as React from 'react';
import { Dashboard } from './Dashboard';

export interface ContentProps {

}
export interface ContentStates {

}

export class Content extends React.Component<ContentProps, ContentStates> {
    constructor(props?: ContentProps, context?: any) {
        super(props, context);
    }

    render() {
        return (
            <div className="m-content">
                <Dashboard />
            </div>
        );
    }
}