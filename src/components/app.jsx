import React from 'react';
import CreateCard from "./create-card";
import ReviewCards from "./review-cards";
import ViewCards from "./view-cards";
import Nav from "./nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "view-cards",
      cards: []
    }
    this.setView = this.setView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  setView(viewState) {
    this.setState({
      view: viewState
    });
  }

  saveCards() {
    localStorage.setItem("flash-cards", JSON.stringify(this.state.cards));
  }

  addCard(card) {
    this.setState({
      cards: this.state.cards.concat(card)
    }, this.saveCards);
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard addCard={this.addCard}/>;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  render() {
    console.log("Cards from App:", this.state.cards);
    return (
      <div className="text-center">
        <Nav setView={this.setView} />
        { this.getView() }
      </div>
    );
  }
}

export default App;
