import * as React from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import * as  Actions from '../actions';
import { RootState } from '../models/RootState';
import { bindActionCreators } from 'redux';

export interface BrandToolsProps {
    asideLeftMinimize: boolean
    asideLeftToggle: typeof Actions.asideLeftToggle
    asideLeftOn: boolean
    asideLeftMobileToggle: typeof Actions.asideLeftMobileToggle
    asideHeaderMenuOn: boolean
    asideHeaderMenuToggle: typeof Actions.asideHeaderMenuToggle
    topbarToggle: typeof Actions.topbarToggle
}

export class BrandTools extends React.Component<BrandToolsProps> {
    constructor(props?: BrandToolsProps, context?: any) {
        super(props, context);
        this.asideLeftToggle = this.asideLeftToggle.bind(this);
        this.asideLeftMobileToggle = this.asideLeftMobileToggle.bind(this);
        this.asideHeaderMenuToggle = this.asideHeaderMenuToggle.bind(this);
        this.topbarToggle = this.topbarToggle.bind(this);
    }

    asideLeftToggle() {
        this.props.asideLeftToggle();
    }

    asideLeftMobileToggle() {
        this.props.asideLeftMobileToggle();
    }

    asideHeaderMenuToggle() {
        this.props.asideHeaderMenuToggle();
    }

    topbarToggle() {
        this.props.topbarToggle();
    }

    render() {
        const { asideLeftMinimize, asideHeaderMenuOn, asideLeftOn } = this.props;
        return (
            <div className="m-stack__item m-stack__item--middle m-brand__tools">
                <a href="javascript:;" onClick={this.asideLeftToggle} className={classNames("m-brand__icon", "m-brand__toggler", "m-brand__toggler--left", "m--visible-desktop-inline-block", { "m-brand__toggler--active": asideLeftMinimize })}>
                    <span />
                </a>
                <a href="javascript:;" onClick={this.asideLeftMobileToggle} className={classNames("m-brand__icon", "m-brand__toggler", "m-brand__toggler--left", "m--visible-tablet-and-mobile-inline-block", { "m-brand__toggler--active": asideLeftOn })}>
                    <span />
                </a>
                <a href="javascript:;" onClick={this.asideHeaderMenuToggle} className={classNames("m-brand__icon", "m-brand__toggler", "m--visible-tablet-and-mobile-inline-block", { "m-brand__toggler--active": asideHeaderMenuOn })}>
                    <span />
                </a>
                <a href="javascript:;" onClick={this.topbarToggle} className="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                    <i className="flaticon-more" />
                </a>
            </div>
        );
    }
}

function mapStateToProps(state: RootState) {
    return {
        asideLeftMinimize: state.asideLeftMinimize,
        asideLeftOn: state.asideLeftOn,
        asideHeaderMenuOn: state.asideHeaderMenuOn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        asideLeftToggle: bindActionCreators(Actions.asideLeftToggle, dispatch),
        asideLeftMobileToggle: bindActionCreators(Actions.asideLeftMobileToggle, dispatch),
        asideHeaderMenuToggle: bindActionCreators(Actions.asideHeaderMenuToggle, dispatch),
        topbarToggle: bindActionCreators(Actions.topbarToggle, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandTools)