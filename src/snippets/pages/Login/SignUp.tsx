import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as Actions from '../../../actions';

export const SignUp = (props) => {
    const { error, handleSubmit, submitting, toggle } = props;
    return (
        <div className="m-login__signup animated flipInX">
            <form onSubmit={handleSubmit}>
                <div className="m-login__head">
                    <h3 className="m-login__title">Sign Up</h3>
                    <div className="m-login__desc">Enter your details to create your account:</div>
                </div>
                <div className="m-login__form m-form">
                    <div className="form-group m-form__group">
                        <Field component="input"  className="form-control m-input" type="text" placeholder="Fullname" name="fullname" />
                        {error && <strong>{error}</strong>}
                    </div>
                    <div className="form-group m-form__group">
                        <Field component="input" className="form-control m-input" type="text" placeholder="Email" name="email" autoComplete="off" />
                        {error && <strong>{error}</strong>}
                    </div>
                    <div className="form-group m-form__group">                       
                        <Field component="input" className="form-control m-input" type="password" placeholder="Password" name="password" />
                        {error && <strong>{error}</strong>}
                    </div>
                    <div className="form-group m-form__group">                   
                        <Field component="input" className="form-control m-input m-login__form-input--last" type="password" placeholder="Confirm Password" name="rpassword" />
                        {error && <strong>{error}</strong>}
                    </div>
                    <div className="row form-group m-form__group m-login__form-sub">
                        <div>
                            <label className="m-checkbox m-checkbox--focus">
                                <input type="checkbox" name="agree" />I Agree the<a href="#" className="m-link m-link--focus">terms and conditions</a>.<span />
                            </label>
                            <span className="m-form__help" />
                        </div>
                    </div>
                    <div className="m-login__two-action">
                        <button type="submit" disabled={submitting} className="btn btn-focus m-btn m-btn--custom m-btn--air">Sign Up</button>
                        <button onClick={()=>toggle('signin')} className="btn btn-outline-focus m-btn m-btn--custom">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        toggle: bindActionCreators(Actions.loginToggle, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'signUp'
})(SignUp));