import * as React from 'react';
import classNames from 'classnames';

export interface SubHeaderNavItem {
    to?: string
    text?: string
}

export interface SubHeaderProps {
    title: string
    items?: SubHeaderNavItem[]
}

export interface SubHeaderStates {

}

export class SubHeader extends React.Component<SubHeaderProps, SubHeaderStates> {
    constructor(props?: SubHeaderProps, context?: any) {
        super(props, context);
    }
    render() {
        const { title, items, children } = this.props;
        return (
            <div className="m-subheader">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h3 className={classNames("m-subheader__title", { "m-subheader__title--separator": items })}>{title}</h3>
                        {
                            items ?
                                <ul className="m-subheader__breadcrumbs m-nav m-nav--inline">
                                    <li className="m-nav__item m-nav__item--home">
                                        <a href="#" className="m-nav__link m-nav__link--icon">
                                            <i className="m-nav__link-icon la la-home" />
                                        </a>
                                    </li>
                                    {
                                        items.map(item =>
                                            <React.Fragment>
                                                <li className="m-nav__separator">-</li>
                                                <li className="m-nav__item">
                                                    <a href={item.to} className="m-nav__link">
                                                        <span className="m-nav__link-text">{item.text}</span>
                                                    </a>
                                                </li>
                                            </React.Fragment>
                                        )
                                    }
                                </ul>
                                :
                                null
                        }
                    </div>
                    {children}
                </div>
            </div>
        );
    }
}