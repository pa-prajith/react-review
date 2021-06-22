import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const numPeople = people.length - 1;

  const resetIndex = (selIndex) => {
    if (selIndex < 0) {
      return numPeople;
    } else if (selIndex > numPeople) {
      return 0;
    }
    return selIndex;
  };

  const prevNav = (e) => {
    e.preventDefault();
    setIndex((index) => resetIndex(index - 1));
  };

  const nextNav = (e) => {
    e.preventDefault();
    setIndex((index) => resetIndex(index + 1));
  };

  const randomReview = (e) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * people.length);
    setIndex(randomIndex);
  };

  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevNav} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextNav} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomReview} className="random-btn">
        Surprise ME!
      </button>
    </div>
  );
};

export default Review;
