import React from 'react';

export interface PortletsProps {
    title?: React.ReactChild
}
export interface PortletsStates {

}
export class Portlets extends React.Component<PortletsProps, PortletsStates> {
    constructor(props?: PortletsProps, context?: any) {
        super(props, context);

    }
    render() {
        const { title, children } = this.props;
        return (
            <div className="m-portlet">
                <div className="m-portlet__head">
                    <div className="m-portlet__head-caption">
                        <div className="m-portlet__head-title">
                            <h3 className="m-portlet__head-text">
                                {title}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="m-portlet__body">
                    {children}
                </div>
            </div>
        );
    }
}