import React from 'react';
import CreateCard from "./create-card";
import ReviewCards from "./review-cards";
import ViewCards from "./view-cards";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "view-cards"
    }
  }

  setView(viewState) {
    this.setState({
      view: viewState
    });
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
    return (
      <div>
        {this.getView()}
      </div>
    );
  }
}

export default App;
