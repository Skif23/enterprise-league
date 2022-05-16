import React from "react";

function NewsCard({ image, title, text }) {
  return (
    <div className="newsroom-page-news-item shadow">
      <div className="newsroom-page-news-item-image">
        <img src={image} alt="" />
      </div>

      <h5 className="newsroom-page-news-item-title h4 left-align">{title}</h5>
      <p className="newsroom-page-news-item-text body2 left-align">{text}</p>
    </div>
  );
}

export default NewsCard;
