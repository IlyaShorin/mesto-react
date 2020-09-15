import React from "react";

const PopupWithForm = (props) => {
  const cls = `popup popup_${props.name} ${props.isOpen ? 'popup_opened': ''}`;

  const button = () => {
    if (props.name === "delete-card") {
      return (
        <button type="submit" className={`popup__button-save popup__button-save-${props.name}`}>
          Да
        </button>
      );
    } else {
      return (
        <button type="submit" className={`popup__button-save popup__button-save-${props.name}`}>
          Сохранить
        </button>
      );
    }
  };
  return (
    <section className={cls}>
      <div className={"popup__container"}>
        <button type="button" className={`popup__button-close popup__button-close_${props.name}`} onClick={props.onClose}></button>
        <form name="popup_form" className={`form form-${props.name}`}>
          <h2 className={"popup__heading"}>{props.title}</h2>
          {props.children}
          {button()}
        </form>
      </div>
    </section>
  );
};
export default PopupWithForm;
