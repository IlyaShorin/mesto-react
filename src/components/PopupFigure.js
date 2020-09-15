import React from "react";

const PopupFigure = (props) => {
  const cls = `popup popup_figure ${props.card ? "popup_opened" : ""}`;
  let imageLink = "";
  let imageName = "";
  if (props.card) {
    imageLink = props.card.link;
    imageName = props.card.name;
  }
  return (
    <section className={cls}>
      <div className="popup__container popup__container_figure">
        <button type="button" className="popup__button-close popup__button-close_figure" onClick={props.onClose}></button>
        <figure className="popup__figure">
          <img src={imageLink} alt={imageName} className="popup__image" />
          <figcaption className="popup__caption">{imageName}</figcaption>
        </figure>
      </div>
    </section>
  );
};
export default PopupFigure;
