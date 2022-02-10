import React from "react";
import { Input, Checkbox } from "antd";
import Country from "./Country";

function Step1(props) {
  console.log(props);
  return (
    <div>
      <p>
        <Input
          placeholder="First Name"
          name="name"
          value={props.getState("name", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        <Input
          placeholder="Last Name"
          name="surname"
          value={props.getState("surname", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        <Input
          placeholder="Email"
          name="Email"
          value={props.getState("email", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        <Input
          placeholder="Organization"
          name="organization"
          value={props.getState("organization", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        <Input
          placeholder="PAN/VAT/GST"
          name="PAN/VAT/GST"
          value={props.getState("no", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        <Country />
      </p>
      <p>
        <Checkbox>I want to get notified</Checkbox>
      </p>
    </div>
  );
}

export default Step1;
