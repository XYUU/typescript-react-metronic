import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as Actions from '../../../actions';

export const SignIn = (props) => {
    const { error, handleSubmit, submitting, toggle } = props;
    return (
        <div className="m-login__signin animated flipInX">
                <div className="m-login__head">
                    <h3 className="m-login__title">Sign In To Admin</h3>
                </div>
                <div className="m-login__form m-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group m-form__group has-danger">
                            <Field component="input" className="form-control m-input" type="text" placeholder="Email" name="email" autoComplete="off" />
                            <div id="email-error" className="form-control-feedback">{error}</div>
                        </div>
                        <div className="form-group m-form__group">
                            <Field component="input" className="form-control m-input m-login__form-input--last" type="password" placeholder="Password" name="password" />
                        </div>
                        <div className="row m-login__form-sub">
                            <label className="m-checkbox  m-checkbox--focus">
                                <Field component="input" type="checkbox" name="remember" />
                                Remember me
                                <span />
                            </label>
                            <a href="javascript:;" onClick={()=>toggle('forget-password')} className="m-link">Forget Password ?</a>
                        </div>
                        <div className="m-login__form-action">
                            <button type="submit" disabled={submitting} className="btn btn-focus m-btn m-btn--custom m-btn--air m-login__btn m-login__btn--primary">Sign In</button>
                        </div>
                    </form>
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
                    <a href="javascript:;" onClick={()=>toggle('signup')} className="m-link m-link--light m-login__account-link">Sign Up</a>
                </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        toggle: bindActionCreators(Actions.loginToggle, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'signIn'
})(SignIn));