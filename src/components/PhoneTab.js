import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const PhoneTab = ({ phone, email, handleInputChange }) => {
  return (
    <>
      <FormGroup>
        <Label for="phone">Phone</Label>
        <Input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Your phone number"
          value={phone}
          onChange={handleInputChange}
          required={true}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          value={email}
          onChange={handleInputChange}
        />
      </FormGroup>
    </>
  );
};

export default PhoneTab;
