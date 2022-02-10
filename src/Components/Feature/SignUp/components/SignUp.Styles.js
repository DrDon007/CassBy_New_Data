import styled from "styled-components";
import { palette } from "styled-theme";
import bgImage from "../../../../assets/images/work.jpg";
import WithDirection from "../../../../shared/library/helpers/rtl";

const SignUpStyleWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  .welcomeText {
    color: #0f4d80;
    font-size: 34px;
    margin: 0;
  }

  .signup-form {
    border: 1px solid #0000002b;
    box-shadow: 0px 7px 23px rgb(0 0 0 / 25%);
    width: 75%;
    margin: 0 auto;
  }

  .signup .form-group {
    margin-bottom: 20px;
  }

  .CassBy {
    background-color: #0f4d80;
    color: #fff;
    min-height: 80%;
  }

  .signup .signup-button {
    font-weight: 500;
    width: 100%;
    height: 40px;
    background: #0f4d80;
    color: #fff;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }

  .signup {
    text-align: left;
    width: 70%;
    margin: 0 auto;
  }
  .signup .form-control {
    width: 100%;
    border: 1px solid #0003;
    height: 40px;
    border-radius: 6px;
  }
  .isoSignUpContentWrapper {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    z-index: 10;
    position: relative;
  }

  .isoSignUpContent {
    display: flex;
    flex-direction: column;
    padding: 70px 50px;
    position: relative;
    width: 50%;
    float: left;

    @media only screen and (max-width: 767px) {
      width: 100%;
      padding: 70px 20px;
    }

    .isoLogoWrapper {
      width: 100%;
      display: flex;
      margin-bottom: 5px;
      justify-content: center;
      flex-shrink: 0;

      a {
        font-size: 24px;
        font-weight: 300;
        line-height: 1;
        text-transform: uppercase;
        color: ${palette("secondary", 2)};
      }
    }

    .isoSignUpForm {
      width: 100%;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;

      .isoInputWrapper {
        margin-bottom: 15px;

        &:last-child {
          margin-bottom: 0;
        }

        input {
          &::-webkit-input-placeholder {
            color: ${palette("grayscale", 0)};
          }

          &:-moz-placeholder {
            color: ${palette("grayscale", 0)};
          }

          &::-moz-placeholder {
            color: ${palette("grayscale", 0)};
          }
          &:-ms-input-placeholder {
            color: ${palette("grayscale", 0)};
          }
        }
      }

      .isoLeftRightComponent {
        input {
          width: calc(100% - 10px);

          &:first-child {
            margin-right: ${(props) =>
              props["data-rtl"] === "rtl" ? "inherit" : "20px"};
            margin-left: ${(props) =>
              props["data-rtl"] === "rtl" ? "20px" : "inherit"};
          }
        }
      }

      .isoHelperWrapper {
        margin-top: 35px;
        flex-direction: column;
      }

      .isoForgotPass {
        font-size: 12px;
        color: ${palette("text", 2)};
        margin-bottom: 10px;

        &:hover {
          color: ${palette("primary", 0)};
        }
      }

      button {
        font-weight: 500;
        width: 100%;
        height: 42px;
        border: 0;

        &.btnFacebook {
          background-color: ${palette("color", 7)};

          &:hover {
            background-color: ${palette("color", 8)};
          }
        }

        &.btnGooglePlus {
          background-color: ${palette("color", 9)};
          margin-top: 15px;

          &:hover {
            background-color: ${palette("color", 10)};
          }
        }

        &.btnAuthZero {
          background-color: ${palette("color", 11)};
          margin-top: 15px;

          &:hover {
            background-color: ${palette("color", 12)};
          }
        }

        &.btnFirebase {
          background-color: ${palette("color", 5)};
          margin-top: 15px;

          &:hover {
            background-color: ${palette("color", 6)};
          }
        }

        &.btnAccountKit {
          ${"" /* background-color: rgb(150, 189, 235); */}
          margin-top: 15px;

          &:hover {
            ${"" /* background-color: ${palette('color', 6)}; */}
          }
        }
      }
    }
  }
`;

export default WithDirection(SignUpStyleWrapper);
