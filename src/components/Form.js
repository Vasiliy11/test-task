import React, { Component } from "react";
import NavigationBtn from "./Navigation";
import { TabContent, TabPane, Row, Col, Form, Button } from "reactstrap";
import FileLoadTab from "./FileLoadTab";
import CheckServiceTab from "./CheckServiceTab";
import StatusTab from "./StatusTab";
import PhoneTab from "./PhoneTab";

class FormData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      status: "",
      description: "",
      turnOnOff: false,
      phone: "",
      email: "",
      service1: false,
      service2: false,
      service3: false,
      service4: false,
      service5: false,
    };
  }

  toggle = (tab) => {
    this.setState({ activeTab: tab });
  };
  saveData = (event) => {
    event.preventDefault(event);
    console.log(this.state);
    this.setState({
      activeTab: "1",
      status: "",
      description: "",
      turnOnOff: false,
      phone: "",
      email: "",
      service1: false,
      service2: false,
      service3: false,
      service4: false,
      service5: false,
    });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      activeTab,
      status,
      description,
      turnOnOff,
      phone,
      email,
      services,
    } = this.state;
    return (
      <div className="bg-dark text-white p-2 w-75 container-sm mt-5 position-relative">
        <Form
          className="mx-auto"
          style={{ height: 70 + "vh" }}
          onSubmit={this.saveData}
        >
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="10" className="m-auto">
                  <StatusTab
                    handleInputChange={this.handleInputChange}
                    {...this.state}
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="10" className="m-auto">
                  <PhoneTab
                    handleInputChange={this.handleInputChange}
                    {...this.state}
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="10" className="m-auto">
                  <FileLoadTab handleInputChange={this.handleInputChange} />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4">
              <Row>
                <Col sm="10" className="m-auto">
                  <CheckServiceTab
                    services={services}
                    handleInputChange={this.handleInputChange}
                  />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          {activeTab === "4" ? (
            <Button
              color="primary"
              size="lg"
              type="submit"
              className="position-absolute"
              style={{ bottom: 23 + "px", left: 23 + "px" }}
            >
              Save Data
            </Button>
          ) : null}
        </Form>
        <NavigationBtn activeTab={activeTab} toggle={this.toggle} />
      </div>
    );
  }
}

export default FormData;
