import React from 'react';
import classNames from 'classnames';

export interface SectionProps {
    title?: React.ReactChild
    subTitle?: React.ReactChild
    className?: string
}
export interface SectionStates {

}
export class Section extends React.Component<SectionProps, SectionStates> {

    constructor(props?: SectionProps, context?: any) {
        super(props, context);
    }

    render() {
        const { title, subTitle, children, className } = this.props;
        return (
            <div className="m-section">
                <h3 className="m-section__heading">
                    {title}
                </h3>
                <span className="m-section__sub">
                    {subTitle}
                </span>
                <div className={classNames("m-section__content", className)}>
                    {children}
                </div>
            </div>
        );
    }
}