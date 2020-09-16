import React from "react";

const ImagePopup = (props) => {
  return (
    <section className={`popup popup_figure ${props.card ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_figure">
        <button type="button" className="popup__button-close popup__button-close_figure" onClick={props.onClose}></button>
        <figure className="popup__figure">
          <img src={props.card ? props.card.link : ""} alt={props.card ? props.card.name : ""} className="popup__image" />
          <figcaption className="popup__caption">{props.card ? props.card.name : ""}</figcaption>
        </figure>
      </div>
    </section>
  );
};
export default ImagePopup;
