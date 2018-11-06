import React from 'react';
import classNames from 'classnames';

export interface SectionProps {

}
export interface SectionStates {

}
export class Section extends React.Component<SectionProps, SectionStates> {

    constructor(props?: SectionProps, context?: any) {
        super(props, context);
    }

    render() {
        const { children } = this.props;
        return (
            <div className="m-section">
                {children}
            </div>
        );
    }
}

export class SectionHeader extends React.PureComponent {
    constructor(props?: SectionProps, context?: any) {
        super(props, context);
    }
    render() {
        const { children } = this.props;
        return (
            <h3 className="m-section__heading">
                {children}
            </h3>
        );
    }
}

export class SectionSub extends React.PureComponent {
    constructor(props?: SectionProps, context?: any) {
        super(props, context);
    }
    render() {
        const { children } = this.props;
        return (
            <span className="m-section__sub">
                {children}
            </span>
        );
    }
}

export interface SectionContentProps {
    className?: string
}
export class SectionContent extends React.PureComponent<SectionContentProps> {
    constructor(props?: SectionProps, context?: any) {
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