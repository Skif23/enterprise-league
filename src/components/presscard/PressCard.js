import React from "react";
import { useState } from "react";
function PressCard({ image, header, date, longText, shortText }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`newsroom-page-press-card shadow ${open ? "open" : ""}`}>
      <div className="press-image">
        <img src={image} alt="" />
        <h4 className="h3">{header}</h4>
        <p className="left-text date">{date}</p>
        <p className="short-text">{shortText}</p>
        <p className="long-text" style={{ display: open ? "block" : "none" }}>
          {longText}
        </p>
        <div className="clr"></div>
        <button className="read-more" onClick={() => setOpen(!open)}>
          {open ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default PressCard;
