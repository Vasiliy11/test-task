import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const CheckServiceTab = (props) => {
  const { service1, service2, service3, service4, service5 } = props;
  return (
    <>
      <p>Choose your special services</p>
      <FormGroup check className="mb-3">
        <Label check>
          <Input
            type="checkbox"
            name="service1"
            value={service1}
            onChange={props.handleInputChange}
          />{" "}
          Service 1
        </Label>
      </FormGroup>
      <FormGroup check className="mb-3">
        <Label check>
          <Input
            type="checkbox"
            name="service2"
            value={service2}
            onChange={props.handleInputChange}
          />{" "}
          Service 2
        </Label>
      </FormGroup>
      <FormGroup check className="mb-3">
        <Label check>
          <Input
            type="checkbox"
            name="service3"
            value={service3}
            onChange={props.handleInputChange}
          />{" "}
          Service 3
        </Label>
      </FormGroup>
      <FormGroup check className="mb-3">
        <Label check>
          <Input
            type="checkbox"
            name="service4"
            value={service4}
            onChange={props.handleInputChange}
          />{" "}
          Service 4
        </Label>
      </FormGroup>
      <FormGroup check className="mb-3">
        <Label check>
          <Input
            type="checkbox"
            name="service5"
            value={service5}
            onChange={props.handleInputChange}
          />{" "}
          Service 5
        </Label>
      </FormGroup>
    </>
  );
};

export default CheckServiceTab;
