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
  }

  setView(viewState) {
    this.setState({
      view: viewState
    });
  }

  saveCards() {
    localStorage.flash-cards = JSON.stringify(this.state.cards)
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard />;
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
