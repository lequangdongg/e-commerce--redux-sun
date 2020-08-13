import React from "react";

export default function Rating({ navbarShowRating, handleCheckRank }) {
  const showRating = (rating) => {
    let result = [];
    for (let i = 1; i <= rating; i++) {
      result.push(<i key={i} className="fas fa-star"></i>);
    }
    for (let j = 1; j <= 5 - rating; j++) {
      result.push(<i key={j + 100} className="far fa-star"></i>);
    }
    return result;
  };

  return (
    <section className="show_rating">
      <div className="show__rating-type">Ratings</div>
      {navbarShowRating.map((items) => (
        <div
          className="show__rating-star"
          key={items.id}
          onClick={() => handleCheckRank(items.ranking)}
        >
          {showRating(items.ranking)}
          <span className="show_rating-count">& Up {items.quantity}</span>
        </div>
      ))}
    </section>
  );
}
