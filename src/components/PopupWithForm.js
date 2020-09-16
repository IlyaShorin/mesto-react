import React from "react";

const PopupWithForm = (props) => {
  return (
    <section className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className={"popup__container"}>
        <button type="button" className={`popup__button-close popup__button-close_${props.name}`} onClick={props.onClose}></button>
        <form name="popup_form" className={`form form-${props.name}`}>
          <h2 className={"popup__heading"}>{props.title}</h2>
          {props.children}
          <button type="submit" className={`popup__button-save popup__button-save-${props.name}`}>
            {props.button}
          </button>
        </form>
      </div>
    </section>
  );
};
export default PopupWithForm;
