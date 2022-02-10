import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import SignInStyleWrapper from "./home.styles";
import AuthService from "../../../../Services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Home = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [registeredName, setRegisteredName] = useState("");
  const [pan, setPan] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onRegisteredName = (e) => {
    const name = e.target.value;
    setRegisteredName(name);
  };

  const onChangePan = (e) => {
    const pan = e.target.value;
    setPan(pan);
  };

  const onChangeCountryOfOrigin = (e) => {
    const origin = e.target.value;
    setCountryOfOrigin(origin);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.organization(registeredName, pan, countryOfOrigin).then(
        () => {
          props.history.push("/organization");
          //window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <div>
              <h3>Organisation</h3> 
              <p>Create the Organisation</p>
            </div>
          </div>
          <div className="isoSignInForm">
            <Form onSubmit={handleLogin} ref={form}>
              <div className="form-group">
                <label htmlFor="registeredName">RegisteredName</label>
                <Input
                  type="text"
                  className="form-control"
                  name="registeredName"
                  value={registeredName}
                  onChange={onRegisteredName}
                  //validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pan">Pan</label>
                <Input
                  type="text"
                  className="form-control"
                  name="pan"
                  value={pan}
                  onChange={onChangePan}
                />
              </div>
              <div className="form-group">
                <label htmlFor="countryOfOrigin">CountryOfOrigin</label>
                <Input
                  type="text"
                  className="form-control"
                  name="countryOfOrigin"
                  value={countryOfOrigin}
                  onChange={onChangeCountryOfOrigin}
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Add Organisation</span>
                </button>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
            
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
};

export default Home;
