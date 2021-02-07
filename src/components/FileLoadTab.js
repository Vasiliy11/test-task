import React from "react";
import { FormGroup, Label, Input, FormText } from "reactstrap";

const FileLoadTab = (props) => {
  let fileInput = React.createRef();
  return (
    <>
      <p>Choose your files</p>
      <FormGroup>
        <Label for="exampleFile">File 1</Label>
        <Input
          type="file"
          name="file"
          id="exampleFile"
          ref={fileInput}
          onChange={props.handleInputChange}
        />
        <FormText color="muted">Choose file #1</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File 2</Label>
        <Input
          type="file"
          name="file"
          id="exampleFile"
          ref={fileInput}
          onChange={props.handleInputChange}
        />
        <FormText color="muted">Choose file #2</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File 3</Label>
        <Input
          type="file"
          name="file"
          id="exampleFile"
          ref={fileInput}
          onChange={props.handleInputChange}
        />
        <FormText color="muted">Choose file #3</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File 4</Label>
        <Input
          type="file"
          name="file"
          id="exampleFile"
          ref={fileInput}
          onChange={props.handleInputChange}
        />
        <FormText color="muted">Choose file #4</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File 5</Label>
        <Input
          type="file"
          name="file"
          id="exampleFile"
          ref={fileInput}
          onChange={props.handleInputChange}
        />
        <FormText color="muted">Choose file #5</FormText>
      </FormGroup>
    </>
  );
};

export default FileLoadTab;
