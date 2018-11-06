import React from 'react';

export interface SeparatorProps {

}
export interface SeparatorStates {

}
export class Separator extends React.Component<SeparatorProps, SeparatorStates> {
    constructor(props?: SeparatorProps, context?: any) {
        super(props, context);

    }
    render() {
        return (
            <div className="m-separator m-separator--dashed" />
        );
    }
}