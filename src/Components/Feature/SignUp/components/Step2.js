import { Input } from "antd";
import React from "react";

function Step2(props) {
  return (
    <div>
      <p>
        <Input
          placeholder="OTP"
          name="OTP"
          value={props.getState("OTP", "")}
          onChange={props.handleChange}
        />
      </p>
    </div>
  );
}

export default Step2;
