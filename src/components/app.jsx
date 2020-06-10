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
      cards: [
        {
          question: "What is React?",
          answer: "A JavaScript Framework."
        },
        {
          question: "What is Node.js?",
          answer: "JavaScript outside of a browser."
        },
        {
          question: "What does HTML stand for?",
          answer: "Hyper Text Markup Language."
        },
        {
          question: "In React JSX, what do curly brackets represent?",
          answer: "A JavaScript expression."
        },
        {
          question: "What does CSS stand for?",
          answer: "Cascading Style Sheet."
        }
      ]
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
    console.log(this.state.cards);
  }

  addCard(card) {
    this.setState({
      cards: this.state.cards.concat(card)
    }, this.saveCards);
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard onSubmit={this.addCard} setView={this.setView}/>;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards cards={this.state.cards}/>;
      default:
        return null;
    }
  }

  render() {
    const { viewState } = this.state.view;
    return (
      <div>
        <div className="text-center col-10 offset-1">
        <Nav viewState={viewState} setView={this.setView} whatIsState={this.state.view}/>
        { this.getView() }
      </div>
      </div>
    );
  }
}

export default App;
