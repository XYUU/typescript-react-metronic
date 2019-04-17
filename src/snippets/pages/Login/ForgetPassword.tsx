import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as Actions from '../../../actions';

export const ForgetPassword = (props) => {
    const { error, handleSubmit, submitting, toggle } = props;
    return (
        <div className="m-login__forget-password animated flipInX">
            <form onSubmit={handleSubmit}>
                <div className="m-login__head">
                    <h3 className="m-login__title">Forgotten Password ?</h3>
                    <div className="m-login__desc">Enter your email to reset your password:</div>
                </div>
                <div className="m-login__form m-form">
                    <div className="form-group m-form__group">
                        <Field
                            name="email"
                            type="text"
                            component="input"
                            className="form-control m-input"
                            placeholder="Email"
                        />
                        {error && <strong>{error}</strong>}
                    </div>
                    <div className="m-login__two-action">
                        <button type="submit" disabled={submitting} className="btn btn-focus m-btn m-btn--custom m-btn--air m-login__btn--primaryr">Request</button>
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
    form: 'forget-password'
})(ForgetPassword));