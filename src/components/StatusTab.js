import React from "react";
import { FormGroup, Label, Input, CustomInput } from "reactstrap";

const StatusTab = ({ status, description, turnOnOff, handleInputChange }) => {
  return (
    <>
      <FormGroup>
        <Label for="status">Status</Label>
        <Input
          type="text"
          name="status"
          id="status"
          placeholder="Some text"
          value={status}
          onChange={handleInputChange}
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          value={description}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <CustomInput
            type="switch"
            id="turnOnOff"
            name="turnOnOff"
            label="Turn on"
            value={turnOnOff}
            onChange={handleInputChange}
          />
        </Label>
      </FormGroup>
    </>
  );
};

export default StatusTab;
