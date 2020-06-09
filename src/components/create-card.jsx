import React from "react";
import Nav from "./nav"

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
    event.preventDefault();
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
    this.props.setView("view-cards")
  }

  render() {
    return (
      <div>
        <h1>Create New Card</h1>
        <div className="form-container">
          <form>
            <div className="question-container">
              <div>
                <label className="text-left mt-1 mb-0" htmlFor="question">Question:</label>
              </div>
              <textarea name="question" id="question" value={this.state.question} onChange={this.handleChange.bind(this)} cols="60" rows="5"></textarea>
            </div>
            <div className="answer-container">
              <div>
                <label className="text-left mt-3 mb-0" htmlFor="answer">Answer:</label>
              </div>
              <textarea name="answer" id="answer" value={this.state.answer} onChange={this.handleChange.bind(this)} cols="60" rows="5"></textarea>
            </div>
            <div className="button-container mt-3">
              <button type="submit" onClick={this.handleSubmit} className="btn btn-success mr-3">Save Card</button>
              <button type="reset" onClick={this.reset} className="btn btn-outline-dark">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateCard;
