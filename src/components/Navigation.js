import React from "react";
import { Button } from "reactstrap";

const NavigationBtn = ({ toggle, activeTab }) => {
  return (
    <div className="d-flex justify-content-center mx-3 mb-3">
      {activeTab === "1" ? (
        <Button
          color="success"
          size="lg"
          type="button"
          onClick={() => {
            toggle("2");
          }}
        >
          Next
        </Button>
      ) : activeTab === "2" ? (
        <>
          <Button
            color="success"
            size="lg"
            className="mx-3"
            onClick={() => {
              toggle("1");
            }}
          >
            Prev
          </Button>
          <Button
            color="success"
            size="lg"
            onClick={() => {
              toggle("3");
            }}
          >
            Next
          </Button>
        </>
      ) : activeTab === "3" ? (
        <>
          <Button
            color="success"
            size="lg"
            className="mx-3"
            onClick={() => {
              toggle("2");
            }}
          >
            Prev
          </Button>
          <Button
            color="success"
            size="lg"
            onClick={() => {
              toggle("4");
            }}
          >
            Next
          </Button>
        </>
      ) : activeTab === "4" ? (
        <>
          <Button
            color="success"
            size="lg"
            onClick={() => {
              toggle("3");
            }}
          >
            Prev
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default NavigationBtn;
