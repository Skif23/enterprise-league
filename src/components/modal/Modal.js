import { useState, useEffect } from "react";
import "./modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("button")) {
        setModal(false);
      } else {
        setModal(true);
      }
    }, 10000);
  }, []);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2 className="modal-heading">Do you need micro business loans?</h2>
            <p className="modal-parapraph">
              Quick loans for businesses, invoice fincancing and flexible loans
            </p>
            <div className="modal-second-content">
              <img
                src="https://test.enterpriseleague.com/static/media/violet.9459dd7e.svg"
                alt="Violet"
              />
              <img
                src="https://test.enterpriseleague.com/static/media/green.f01efa95.svg"
                alt="Green"
              />
            </div>
            <div className="modal-third-content">
              <button
                className="no-button"
                onClick={() => localStorage.setItem("button", "no")}
              >
                Not Really
              </button>
              <button
                className="yes-button"
                onClick={() => localStorage.setItem("button", "yes")}
              >
                Yes! Extra Money
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
