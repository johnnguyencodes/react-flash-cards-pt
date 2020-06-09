import React from "react";

function CreateCard(props) {
  return (
    <h1>Create New Card</h1>
    <form>
      <label htmlFor="card-front">Question:</label>
      <textarea name="card-front" id="card-front" cols="30" rows="10"></textarea>
      <label htmlFor="card-back">Answer:</label>
      <textarea name="card-back" id="card-back" cols="30" rows="10"></textarea>
      <button type="submit" onClick={props.addCard} className="btn btn-success mr-3">Add</button>
      <button type="reset" onClick={} className="btn btn-outline-dark">Cancel</button>
    </form>
  );
}

export default CreateCard;
