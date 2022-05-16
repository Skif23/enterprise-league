import React from "react";
import "./media.css";

function Media() {
  return (
    <div className="media">
      <div className="media-banner">
        <img
          className="media-banner-image"
          src="https://enterpriseleague.com/public/img/featured/news/media.svg"
          alt=""
        />
        <div className="media-banner-text">
          <h3 className="left-align">Media</h3>
          <p className="body3 left-align">
            <a
              href="https://drive.google.com/drive/folders/1a6s5iZdMBySIpOKtSciioqbewA711hnA"
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
            &nbsp;our logos and brand photography for media use.
          </p>
        </div>
      </div>

      <div className="contact-banner">
        <img
          className="contact-banner-image"
          src="https://enterpriseleague.com/public/img/featured/news/contact.svg"
          alt=""
        />
        <div className="contact-banner-text">
          <h3 className="left-align">Contact</h3>
          <p className="body3 left-align">
            For additional information contact us on
            <br />
          </p>
          <p className="mail">
            <a href="mailto:info@enterpriseleague.com?subject=Press%20Enquiry">
              info@enterpriseleague.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Media;
