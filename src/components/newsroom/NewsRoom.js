import React from "react";
import "./newsroom.css";

function NewsRoom({ setNewsOpen, newsOpen }) {
  return (
    <div>
      <main className="newsroom">
        <div className="news-title active-tab">
          <h1 className="h1 light-gray">
            Enterprise League&nbsp;
            <span>{newsOpen ? "In the News" : "Press"}</span>
          </h1>
        </div>

        <div className="newsroom-page-tab-buttons">
          <button
            className={`newsroom-page-tab-buttons-link h3 ${
              newsOpen ? "active-tab-link" : ""
            }`}
            onClick={() => setNewsOpen(true)}
          >
            In the News
          </button>
          <button
            className={`newsroom-page-tab-buttons-link h3 ${
              !newsOpen ? "active-tab-link" : ""
            }`}
            onClick={() => setNewsOpen(false)}
          >
            Press
          </button>
        </div>
      </main>
    </div>
  );
}

export default NewsRoom;
