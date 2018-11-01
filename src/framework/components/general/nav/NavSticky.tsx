import React from 'react';
// import './navsticky.scss';

export interface NavStickyProps {

}
export interface NavStickyStates {

}
export class NavSticky extends React.Component<NavStickyProps, NavStickyStates> {
    constructor(props?: NavStickyProps, context?: any) {
        super(props, context);
    }
    render() {
        return (
            <ul className="m-nav-sticky" style={{ marginTop: 30 }}>
                <li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Purchase" data-placement="left">
                    <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" target="_blank">
                        <i className="la la-cart-arrow-down" />
                    </a>
                </li>
                <li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Documentation" data-placement="left">
                    <a href="https://keenthemes.com/metronic/documentation.html" target="_blank">
                        <i className="la la-code-fork" />
                    </a>
                </li>
                <li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Support" data-placement="left">
                    <a href="https://keenthemes.com/forums/forum/support/metronic5/" target="_blank">
                        <i className="la la-life-ring" />
                    </a>
                </li>
            </ul>
        );
    }
}