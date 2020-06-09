import React from "react";
import { render } from "react-dom";

class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer:""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(event) {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  handleSubmit(event) {
    const newCard = {
      question: this.state.question,
      answer: this.state.answer
    };
    this.props.onSubmit(newCard);
    this.setState({
      question: "",
      answer: ""
    });
  }

  reset(event) {
    event.preventDefault();
    this.setState({
      question: "",
      answer: ""
    });
  }

  render() {
    return (
    <h1>Create New Card</h1>
    <form>
      <div className="question-container">
        <label htmlFor="question">Question:</label>
        <textarea name="question" id="question" value={this.state.question} onChange={this.handleChange.bind(this)} cols="30" rows="10"></textarea>
      </div>
      <div className="answer-container">
        <label htmlFor="answer">Answer:</label>
        <textarea name="answer" id="answer" value={this.state.answer} onChange={this.handleChange.bind(this)} cols="30" rows="10"></textarea>
      </div>
      <div className="button-container">
        <button type="submit" onClick={this.handleSubmit} className="btn btn-success mr-3">Save Card</button>
        <button type="reset" onClick={this.reset} className="btn btn-outline-dark">Cancel</button>
      </div>
    </form>
    );
  }
}

export default CreateCard;
