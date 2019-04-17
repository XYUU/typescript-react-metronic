import React from 'react';
import classNames from 'classnames';
import { RouteComponentProps } from '@reach/router';
import * as Actions from '../../../actions';
import { RootState } from '../../../models/RootState';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import formData from '../../../utils/formData';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgetPassword from './ForgetPassword';
import './style.scss';

export interface LoginProps extends RouteComponentProps {
    signIn: typeof Actions.signIn
    signUp: typeof Actions.signUp
    forgetPassword: typeof Actions.forgetPassword
    message: string[]
    show?: view
}

type view = 'signin' | 'signup' | 'forget-password'

export class Login extends React.Component<LoginProps> {
    constructor(props?: LoginProps, context?: any) {
        super(props, context);
    }

    // toggle = (view: view) => () => this.setState({ show: view });

    signIn = (values) => this.props.signIn({
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData(values)
    });

    signUp = (values) => this.props.signUp({
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData(values)
    });

    forgetPassword = (values) => this.props.forgetPassword({
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData(values)
    });

    render() {
        const { signIn, signUp, forgetPassword } = this,
            { message, show } = this.props, error = message.pop();
        return (
            <div className="m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">
                <div className="m-grid m-grid--hor m-grid--root m-page">
                    <div className={classNames("m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-2", show ? `m-login--${show}` : null)} style={{ backgroundImage: 'url(../../../assets/app/media/img//bg/bg-3.jpg)' }}>
                        <div className="m-grid__item m-grid__item--fluid m-login__wrapper">
                            <div className="m-login__container">
                                <div className="m-login__logo">
                                    <a href="#">
                                        <img src="../../../assets/app/media/img//logos/logo-1.png" />
                                    </a>
                                </div>
                                <SignIn onSubmit={signIn} />
                                <SignUp onSubmit={signUp} />
                                <ForgetPassword onSubmit={forgetPassword} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: RootState) {
    return {
        message: state.message,
        show: state.loginView
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: bindActionCreators(Actions.signIn, dispatch),
        signUp: bindActionCreators(Actions.signUp, dispatch),
        forgetPassword: bindActionCreators(Actions.forgetPassword, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)