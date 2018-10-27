import * as React from 'react';
import { AsideMenu } from './AsideMenu';
import classNames from 'classnames';
import { RootState } from '../../models/RootState';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as  Actions from '../../actions';

export interface LeftAsideProps {
    asideLeftOn: boolean
    asideLeftMobileToggle: typeof Actions.asideLeftMobileToggle
}
export interface LeftAsideStates {

}

class LeftAside extends React.Component<LeftAsideProps, LeftAsideStates> {
    constructor(props?: LeftAsideProps, context?: any) {
        super(props, context);
    }

    asideLeftMobileToggle = () => this.props.asideLeftMobileToggle();

    render() {
        const { asideLeftMobileToggle } = this,
            { asideLeftOn } = this.props,
            overlay = asideLeftOn ? <div onClick={asideLeftMobileToggle} className="m-aside-left-overlay"></div> : null;
        return (
            <React.Fragment>
                <button onClick={asideLeftMobileToggle} className="m-aside-left-close  m-aside-left-close--skin-dark ">
                    <i className="la la-close" />
                </button>
                <div className={classNames("m-grid__item", "m-aside-left", "m-aside-left--skin-dark", { "m-aside-left--on": asideLeftOn })}>
                    <AsideMenu />
                </div>
                {overlay}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state: RootState) {
    return {
        asideLeftOn: state.asideLeftOn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        asideLeftMobileToggle: bindActionCreators(Actions.asideLeftMobileToggle, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftAside)