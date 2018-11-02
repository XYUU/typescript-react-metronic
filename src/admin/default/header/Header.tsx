import React from 'react';
import BrandTools from './BrandTools';
import * as  Actions from '../../../actions';

import { RootState } from '../../../models/RootState';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { HeaderMenu } from '../menu-header/HeaderMenu';
import Topbar from './Topbar';
// import './header.scss';

export interface HeaderProps {
    asideHeaderMenuOn: boolean
    asideHeaderMenuToggle: typeof Actions.asideHeaderMenuToggle
}

export class Header extends React.Component<HeaderProps> {

    constructor(props?: HeaderProps, context?: any) {
        super(props, context);
        this.asideHeaderMenuToggle = this.asideHeaderMenuToggle.bind(this);
    }

    asideHeaderMenuToggle() {
        this.props.asideHeaderMenuToggle();
    }

    render() {
        const { asideHeaderMenuOn } = this.props,
            overlay = asideHeaderMenuOn ? <div onClick={this.asideHeaderMenuToggle} className="m-aside-header-menu-mobile-overlay"></div> : null;
        return (
            <header className="m-grid__item m-header">
                <div className="m-container m-container--fluid m-container--full-height">
                    <div className="m-stack m-stack--ver m-stack--desktop">
                        <div className="m-stack__item m-brand m-brand--skin-dark">
                            <div className="m-stack m-stack--ver m-stack--general">
                                <div className="m-stack__item m-stack__item--middle m-brand__logo">
                                    <a href="index.html" className="m-brand__logo-wrapper">
                                        <img alt="" src="assets/demo/default/media/img/logo/logo_default_dark.png" />
                                    </a>
                                </div>
                                <BrandTools />
                            </div>
                        </div>
                        <div className="m-stack__item m-stack__item--fluid m-header-head">
                            <button onClick={this.asideHeaderMenuToggle} className="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark " id="m_aside_header_menu_mobile_close_btn">
                                <i className="la la-close" />
                            </button>
                            <HeaderMenu asideHeaderMenuOn={asideHeaderMenuOn} />
                            {overlay}
                            <Topbar />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state: RootState) {
    return {
        asideHeaderMenuOn: state.asideHeaderMenuOn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        asideHeaderMenuToggle: bindActionCreators(Actions.asideHeaderMenuToggle, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)