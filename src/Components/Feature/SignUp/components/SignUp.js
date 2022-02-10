import React, { useState, useRef } from "react";
import SignUpStyleWrapper from "./SignUp.Styles";
import { Link, useHistory } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton, { button } from "react-validation/build/button";
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

function SignUp() {
  const form = useRef();
  const checkBtn = useRef();

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [organization, setorganization] = useState("");
  const [companyNo, setCompanyNo] = useState("");
  const [Country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeFname = (e) => {
    const fname = e.target.value;
    setfname(fname);
  };

  const onChangeLname = (e) => {
    const lname = e.target.value;
    setlname(lname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setemail(email);
  };

  const onChangeOrganization = (e) => {
    const organization = e.target.value;
    setorganization(organization);
  };

  const onChangeCompanyNo = (e) => {
    const companyNo = e.target.value;
    setCompanyNo(companyNo);
  };

  const onChangeCountry = (e) => {
    const Country = e.target.value;
    setCountry(Country);
  };

  let history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(fname, lname, email, organization).then(
        () => {
          //props.history.push("/home");
          console.log("SignUp successfull");
          AuthService.isAuthenticated = true;
          history.push("/");
          console.log(history);
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
    <SignUpStyleWrapper className="isoSignUpPage">
      <div className="isoSignUpContentWrapper">
        <div className="isoSignUpContent ">
          <div className="isoSignInForm signup-form">
            <div className="isoLogoWrapper">
              <h3>Register</h3>
            </div>
            <Form onSubmit={handleLogin} ref={form} className="signup">
              <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="fname"
                  value={fname}
                  onChange={onChangeFname}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="lname"
                  value={lname}
                  onChange={onChangeLname}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <Input
                  type="text"
                  className="form-control"
                  name="Organization"
                  value={organization}
                  onChange={onChangeOrganization}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Company">Company GST/VAT/PAN*</label>
                <Input
                  type="text"
                  className="form-control"
                  name="CompanyNo"
                  value={companyNo}
                  onChange={onChangeCompanyNo}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Country">Country</label>
                <Input
                  type="text"
                  className="form-control"
                  name="Country"
                  value={Country}
                  onChange={onChangeCountry}
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <button
                  className="btn btn-primary btn-block signup-button"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>SignUp</span>
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
            <div style={{ marginBottom: 20 }}>
              Already have an account?<Link to="/login">login</Link>
            </div>
          </div>
        </div>
        <div className="isoSignUpContent CassBy">CassBy</div>
      </div>
    </SignUpStyleWrapper>
  );
}

export default SignUp;
