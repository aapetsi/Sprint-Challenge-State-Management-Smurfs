import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions/smurfs";

const SmurfCard = ({ id, name, age, height, dispatch }) => {
  const smurfToDelete = { id, name, age, height };
  const handleClick = () => {
    dispatch(deleteSmurf(smurfToDelete));
  };
  return (
    <div className="card">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Height: {height}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default connect(
  null,
  null
)(SmurfCard);
