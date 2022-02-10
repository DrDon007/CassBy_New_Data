import React from "react";

function FinalStep(props) {
  return (
    <div style={{ textAlign: "left" }}>
      <p>
        <b>Name:</b> {props.state.name}
      </p>
      <p>
        <b>Surname:</b> {props.state.surname}
      </p>
      <p>
        <b>Email:</b> {props.state.email}
      </p>
      <p>
        <b>Organization:</b> {props.state.organization}
      </p>
      <p>
        <b>PAN/VAT/GST:</b> {props.state.no}
      </p>
    </div>
  );
}

export default FinalStep;
