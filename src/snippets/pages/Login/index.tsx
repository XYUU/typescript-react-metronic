import React from 'react';
import classNames from 'classnames';
import { RouteComponentProps } from '@reach/router';
import * as Actions from '../../../actions';
import { RootState } from '../../../models/RootState';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.scss';
import formData from '../../../utils/formData';

export interface LoginProps extends RouteComponentProps {
    signIn: typeof Actions.signIn
    signUp: typeof Actions.signUp
    forgetPassword: typeof Actions.forgetPassword
    message: string[]
}

type view = 'signin' | 'signup' | 'forget-password'

export interface LoginStates {
    show?: view
}

export class Login extends React.Component<LoginProps, LoginStates> {
    constructor(props?: LoginProps, context?: any) {
        super(props, context);
        this.state = {};
    }

    toggle = (view: view) => () => this.setState({ show: view });

    signIn = () => this.props.signIn({
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData(this.state)
    });

    signUp = () => this.props.signUp({
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData(this.state)
    });

    forgetPassword = () => this.props.forgetPassword({
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData(this.state)
    });

    render() {
        const { toggle, signIn, signUp, forgetPassword } = this,
            { show } = this.state,
            { message } = this.props, error = message.pop();
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
                                <div className="m-login__signin animated flipInX">
                                    <div className="m-login__head">
                                        <h3 className="m-login__title">Sign In To Admin</h3>
                                    </div>
                                    <div className="m-login__form m-form">
                                        <div className="form-group m-form__group has-danger">
                                            <input className="form-control m-input" type="text" placeholder="Email" name="email" autoComplete="off" />
                                            <div id="email-error" className="form-control-feedback">{error}</div>
                                        </div>
                                        <div className="form-group m-form__group">
                                            <input className="form-control m-input m-login__form-input--last" type="password" placeholder="Password" name="password" />
                                        </div>
                                        <div className="row m-login__form-sub">
                                            <label className="m-checkbox  m-checkbox--focus">
                                                <input type="checkbox" name="remember" />
                                                Remember me
                                                <span />
                                            </label>
                                            <a href="javascript:;" onClick={toggle('forget-password')} className="m-link">Forget Password ?</a>
                                        </div>
                                        <div className="m-login__form-action">
                                            <button className="btn btn-focus m-btn m-btn--custom m-btn--air m-login__btn m-login__btn--primary" onClick={signIn}>Sign In</button>
                                        </div>
                                    </div>
                                    <div className="m-login__account">
                                        <div>
                                            <span className="m-login__account-msg">其他登录方式</span>
                                            <i className="socicon-weibo"></i>
                                            <i className="socicon-qq"></i>
                                            <i className="socicon-douban"></i>
                                            <i className="socicon-github"></i>
                                            <i className="socicon-baidu"></i>
                                            <i className="socicon-wechat"></i>
                                            <i className="socicon-google"></i>
                                            <i className="socicon-apple"></i>
                                        </div>
                                        <a href="javascript:;" onClick={toggle('signup')} className="m-link m-link--light m-login__account-link">Sign Up</a>
                                    </div>
                                </div>
                                <div className="m-login__signup animated flipInX">
                                    <div className="m-login__head">
                                        <h3 className="m-login__title">Sign Up</h3>
                                        <div className="m-login__desc">Enter your details to create your account:</div>
                                    </div>
                                    <div className="m-login__form m-form">
                                        <div className="form-group m-form__group">
                                            <input className="form-control m-input" type="text" placeholder="Fullname" name="fullname" />
                                        </div>
                                        <div className="form-group m-form__group">
                                            <input className="form-control m-input" type="text" placeholder="Email" name="email" autoComplete="off" />
                                        </div>
                                        <div className="form-group m-form__group">
                                            <input className="form-control m-input" type="password" placeholder="Password" name="password" />
                                        </div>
                                        <div className="form-group m-form__group">
                                            <input className="form-control m-input m-login__form-input--last" type="password" placeholder="Confirm Password" name="rpassword" />
                                        </div>
                                        <div className="row form-group m-form__group m-login__form-sub">
                                            <div>
                                                <label className="m-checkbox m-checkbox--focus">
                                                    <input type="checkbox" name="agree" />I Agree the<a href="#" className="m-link m-link--focus">terms and conditions</a>.
                                                <span />
                                                </label>
                                                <span className="m-form__help" />
                                            </div>
                                        </div>
                                        <div className="m-login__two-action">
                                            <button className="btn btn-focus m-btn m-btn--custom m-btn--air" onClick={signUp}>Sign Up</button>
                                            <button onClick={toggle('signin')} className="btn btn-outline-focus m-btn m-btn--custom">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-login__forget-password animated flipInX">
                                    <div className="m-login__head">
                                        <h3 className="m-login__title">Forgotten Password ?</h3>
                                        <div className="m-login__desc">Enter your email to reset your password:</div>
                                    </div>
                                    <div className="m-login__form m-form">
                                        <div className="form-group m-form__group">
                                            <input className="form-control m-input" type="text" placeholder="Email" name="email" id="m_email" autoComplete="off" />
                                        </div>
                                        <div className="m-login__two-action">
                                            <button className="btn btn-focus m-btn m-btn--custom m-btn--air m-login__btn--primaryr" onClick={forgetPassword}>Request</button>
                                            <button onClick={toggle('signin')} className="btn btn-outline-focus m-btn m-btn--custom">Cancel</button>
                                        </div>
                                    </div>
                                </div>
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
        message: state.message
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