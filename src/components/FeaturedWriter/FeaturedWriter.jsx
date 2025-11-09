import React from "react";
import Button from "../Button/Button";
import PopularSubarticle from "../PopularSubarticle/PopularSubarticle";
import "./FeaturedWriter.scss";

const FeaturedWriter = (props) => {
  return (
    <div className="featured-writer-wrapper">
      <h2 className="featured-writer-header">FEATURED WRITER</h2>
      <div className="featured-writer">
        <div className="featured-writer__card-1">
          <img
            className="featured-writer__card-1__img"
            src="https://placebear.com/140/200"
            alt="Bear"
          ></img>
          <Button
            buttonText="Follow"
            buttonClass="featured-writer__card-1__btn"
          />
        </div>
        <div className="featured-writer__card-2">
          <h2 className="featured-writer__card-2__header"> Billy Bear </h2>
          <p>
            {" "}
            Always drinking coffee, always coding, and always building beautiful
            websites{" "}
          </p>
        </div>
        <div className="featured-writer__card-3">
          <PopularSubarticle
            articleTitle="How to Study and Pass the AWS Associate Developer Exam"
            articleTime="69 year read"
          />
          <PopularSubarticle
            articleTitle="How to Send Data Between Chrome Extension Scripts"
            articleTime="69 min read"
          />
          <PopularSubarticle
            articleTitle="The Biggest Takeaway From My First Year as a Software Engineer"
            articleTime="69 sec read"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedWriter;
