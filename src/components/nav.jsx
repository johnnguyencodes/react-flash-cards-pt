import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isViewCardsClicked: false,
      isReviewClicked: false,
      isCreateCardClicked: false
    };
    this.handleViewCardsClick = this.handleViewCardsClick.bind(this);
    this.handleReviewClick = this.handleReviewClick.bind(this);
    this.handleCreateCardClick = this.handleCreateCardClick.bind(this);
  }

    handleViewCardsClick() {
      this.setState(state => ({
        isViewCardsClicked: true,
        isReviewClicked: false,
        isCreateCardClicked: false
      })
      );
    }

    handleReviewClick() {
      this.setState(state => ({
        isViewCardsClicked: false,
        isReviewClicked: true,
        isCreateCardClicked: false
      })
      );
    }

    handleCreateCardClick() {
      this.setState(state => ({
        isViewCardsClicked: false,
        isReviewClicked: false,
        isCreateCardClicked: true
      })
      );
    }

    render() {
      const { isViewCardsClicked } = this.state;
      const { isReviewClicked } = this.state;
      const { isCreateCardClicked } = this.state;
      const buttonViewCards = isViewCardsClicked
        ? "btn btn-primary"
        : "btn btn-link";
      const buttonReview = isReviewClicked
        ? "btn btn-primary"
        : "btn btn-link";
      const buttonCreateCard = isCreateCardClicked
        ? "btn btn-primary"
        : "btn btn-link";
  return (
    <div className="row">
      <div className="col-9"></div>
      <nav className="navbar navbar-default col-3">
        <button onClick={() =>  {this.props.setView("view-cards"); this.handleViewCardsClick() }} className={buttonViewCards}>View Cards</button>
        <button onClick={() =>  {this.props.setView("review-cards"); this.handleReviewClick() }} className={buttonReview}>Review</button>
        <button onClick={() =>  {this.props.setView("create-card"); this.handleCreateCardClick() }} className={buttonCreateCard}>Create Card</button>
      </nav>
    </div>
    );
  }
}

export default Nav;
