import React from "react";
import { Steps, Step } from "react-step-builder";
import Step1 from "./Step1";
import Step2 from "./Step2";
import FinalStep from "./FinalStep";
import {Row, Col, Button} from 'antd';
import AuthService from "../../../../Services/auth.service";


const Navigation = (props) => {
  console.log({ props });
  return (
    <Row align="center">
      <Col>
        <Button type="primary" onClick={props.next}>
          Submit
        </Button>
      </Col>
    </Row>
  );
};

function SignUpForm() {
  const config = {
    navigation: {
      component: Navigation, // a React component with special props provided automatically
      location: "after" // or before
    }
  };

  return (
    <div className="App">
      
      <Steps config={config}>
        <Step component={Step1} />
        <Step component={Step2} />
        <Step component={FinalStep} />
      </Steps>
    </div>
  );
}

export default SignUpForm;
