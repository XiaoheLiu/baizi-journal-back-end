import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { authUser, getUser } from "../../actions";

class SignInForm extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    const className = `field ${error && touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} />
        {touched && error && (
          <p style={{ color: "maroon", marginTop: "5px" }}>{error}</p>
        )}
      </div>
    );
  };

  onSignInFormSubmit = async values => {
    const { authUser, history, getUser } = this.props;
    const token = await authUser(values).catch(() => {});
    if (token) {
      localStorage.setItem("baiziUserToken", token);
      history.push("/read");
      getUser();
    }
  };

  render() {
    const { handleSubmit, submitting, invalid, errorMessage } = this.props;

    return (
      <div
        className="ui segment"
        style={{ width: "90%", maxWidth: "500px", margin: "0 auto" }}
      >
        <h1 className="ui center aligned header">登入</h1>
        <form
          className="ui form"
          onSubmit={handleSubmit(this.onSignInFormSubmit)}
        >
          <Field
            name="username"
            label="用户名"
            component={this.renderField}
            type="text"
          />
          <Field
            name="password"
            label="密码"
            component={this.renderField}
            type="password"
          />
          <button
            className="ui button"
            type="submit"
            disabled={submitting | invalid}
          >
            登入
          </button>
        </form>
        {errorMessage && (
          <p style={{ color: "red", marginTop: "5px" }}>{errorMessage}</p>
        )}
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "用户名不能为空";
  }
  if (!values.password) {
    errors.password = "密码不能为空";
  }
  return errors;
};

const mapStateToProps = state => ({
  errorMessage: state.user.errorMessage
});

export default withRouter(
  connect(
    mapStateToProps,
    { authUser, getUser }
  )(
    reduxForm({
      form: "SignIn",
      validate
    })(SignInForm)
  )
);
