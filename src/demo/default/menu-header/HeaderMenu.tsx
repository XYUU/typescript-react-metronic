import React from 'react';
import classNames = require('classnames');
import { MenuNav } from '../../../framework/components/base/menu/MenuNav';
// import './style.scss';

export interface HeaderMenuProps {
    asideHeaderMenuOn: boolean
}

export interface HeaderMenuStates {

}

export class HeaderMenu extends React.Component<HeaderMenuProps, HeaderMenuStates> {
    constructor(props?: HeaderMenuProps, context?: any) {
        super(props, context);
    }

    render() {
        const { asideHeaderMenuOn } = this.props;
        return (
            <div className={classNames("m-header-menu", "m-aside-header-menu-mobile", "m-aside-header-menu-mobile--offcanvas", "m-header-menu--skin-light", "m-header-menu--submenu-skin-light", "m-aside-header-menu-mobile--skin-dark", "m-aside-header-menu-mobile--submenu-skin-dark", { "m-aside-header-menu-mobile--on": asideHeaderMenuOn })}>
                <MenuNav />
            </div>
        );
    }
}