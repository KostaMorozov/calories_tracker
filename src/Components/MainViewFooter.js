import React from "react";
import Badge from "react-bootstrap/Badge";

export default function MainViewFooter({ caloriesDetails }) {
  const { carb, protein, fat, totalCalories } = caloriesDetails;
  return (
    <div className="row d-flex">
      <div className="col-6">
        <div className="mt-4 d-flex">
          <h1 className="d-flex align-items-baseline">
            <p>Consumed :</p>&nbsp;<Badge bg="dark">{carb}</Badge> &nbsp;
            <p>carb</p>
          </h1>
        </div>
        <div className="mt-4 d-flex">
          <h1 className="d-flex align-items-baseline">
            <p>Consumed :</p>&nbsp;<Badge bg="dark">{protein}</Badge> &nbsp;
            <p>protein</p>
          </h1>
        </div>
        <div className="mt-4 d-flex">
          <h1 className="d-flex align-items-baseline">
            <p>Consumed :</p>&nbsp;<Badge bg="dark">{fat}</Badge> &nbsp;
            <p>fat</p>
          </h1>
        </div>
      </div>
      <div className="container m-0 col-6">
        <div className="row">
          <h3 className="d-flex justify-content-center align-items-center">
            <b>Total Calories Left :</b>
          </h3>
        </div>
        <div className="row h-75" style={{ fontSize: "150px" }}>
          <Badge
            className="d-flex justify-content-center align-items-center"
            bg="success"
          >
            {totalCalories}
          </Badge>
        </div>
        <div className="row" />
      </div>
    </div>
  );
}
