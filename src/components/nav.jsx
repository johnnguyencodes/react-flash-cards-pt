import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
      const whatIsState = this.props.whatIsState;
      let buttonViewCards;
      let buttonReview;
      let buttonCreateCard;
      if (whatIsState === "create-card") {
        buttonViewCards = "btn btn-link";
        buttonReview = "btn btn-link";
        buttonCreateCard = "btn btn-primary"
      } else if (whatIsState === "review-cards") {
        buttonViewCards = "btn btn-link";
        buttonReview = "btn btn-primary";
        buttonCreateCard = "btn btn-link"
      } else if (whatIsState === "view-cards") {
        buttonViewCards = "btn btn-primary";
        buttonReview = "btn btn-link";
        buttonCreateCard = "btn btn-link"
      }
  return (
    <div className="row">
      <div className="col-9"></div>
      <nav className="navbar navbar-default col-3">
        <button onClick={() =>  {this.props.setView("view-cards")}} className={buttonViewCards}>View Cards</button>
        <button onClick={() =>  {this.props.setView("review-cards")}} className={buttonReview}>Review</button>
        <button onClick={() =>  {this.props.setView("create-card")}} className={buttonCreateCard}>Create Card</button>
      </nav>
    </div>
    );
  }
}

export default Nav;
