import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../../redux/actions/user.action";
import { Button, Checkbox, Input } from "antd";
import SignInStyleWrapper from "./login.styles";

export default function Form() {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };
  // const handleSubmit = (data) => {
  //   // navigation.navigate("AwaitingSolutionScreen")
  //   console.log(data);
  //   // dispatch(
  //   //   login("", {
  //   //     userName: data.username,
  //   //     password: data.password,
  //   //   })
  //   // );
  // };

  return (
    <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <div>
              <h3>Welcome Back</h3>
              <p>Enter your email and password to sign in</p>
            </div>
          </div>
          <div className="isoSignInForm">
            <form onSubmit={handleSubmit}>
              <div className="isoInputWrapper">
                <Input
                  size="large"
                  placeholder="Email/Phone Number"
                  autoComplete="true"
                />
              </div>

              <div className="isoInputWrapper">
                <Input
                  size="large"
                  type="password"
                  placeholder="Password"
                  autoComplete="false"
                />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>RememberMe</Checkbox>
                <Button type="submit">LogIn</Button>
              </div>
            </form>
            <Link to="/">SignUp</Link>
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
}
