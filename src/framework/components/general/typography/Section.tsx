import React from 'react';
import classNames from 'classnames';

export const Section = (props) => {
    const { children } = props;
    return (
        <div className="m-section">
            {children}
        </div>
    );
}

export const SectionHeader = (props) => {
    const { children } = props;
    return (
        <h3 className="m-section__heading">
            {children}
        </h3>
    );
}

export const SectionSub = (props) => {
    const { children } = props;
    return (
        <span className="m-section__sub">
            {children}
        </span>
    );
}

export interface SectionContentProps {
    className?: string
}
export class SectionContent extends React.PureComponent<SectionContentProps> {
    constructor(props?: SectionContentProps, context?: any) {
        super(props, context);
    }
    render() {
        const { children, className } = this.props;
        return (
            <div className={classNames("m-section__content", className)}>
                {children}
            </div>
        );
    }
}