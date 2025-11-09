import React from "react";
import "./LatestSubarticle.scss";

const LatestSubarticle = (props) => {
  const { articleTitle, articleDetails, articleAuthor, articleDateAndTime } =
    props;
  return (
    <div className="latest-article">
      <div className="latest-article__info">
        <h2 className="latest-article__info__title"> {articleTitle} </h2>
        <h3 className="latest-article__info__details"> {articleDetails} </h3>
        <h3 className="latest-article__info__author"> {articleAuthor} </h3>
        <h3 className="latest-article__info__date-time">
          {" "}
          {articleDateAndTime}{" "}
        </h3>
      </div>
      <img
        src="https://placebear.com/140/100"
        className="latest-article__picture"
        alt="article"
      ></img>
    </div>
  );
};

export default LatestSubarticle;
