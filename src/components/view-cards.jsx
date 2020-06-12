import React from "react";

function Card(props) {
  const card = props.card;
  return (
    <div className="col mb-4">
        <div className="card-body bg-dark h-50">
          <h5 className="card-title text-left bg-dark m-0 text-muted mb-1">Question:</h5>
          <p className="card-title text-left bg-dark m-0 text-light">{props.card.question}</p>
        </div>
        <div className="card-body bg-secondary h-50">
        <h5 className="card-title text-left bg-secondary m-0 text-light mb-1">Answer:</h5>
        <p className="card-title text-left bg-secondary m-0 text-light">{props.card.answer}</p>
        </div>
    </div>
  );
}

function ViewCards(props) {
  return (
    <div>
      <h1 className="mt-2 mb-4">My Cards</h1>
      <div className="row row-cols-1 row-cols-md-3">
        {
          props.cards.map(card => {
            return (
              <Card card={card} />
            )
          })
        }
      </div>
    </div>
  );
}

export default ViewCards;
