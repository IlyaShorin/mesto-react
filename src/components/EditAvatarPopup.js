import React from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  const avatarLink = React.useRef(null);

  React.useEffect(() => {
    if (props.isOpen) {
      avatarLink.current.value = "";
    }
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarLink.current.value,
    });
    avatarLink.current.value = "";
  }
  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} button="Сохранить">
      <input ref={avatarLink} type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input-avatar-link" id="popup__input-avatar-link" required />
      <span className="popup__input_type_error" id="popup__input-avatar-link-error" />
    </PopupWithForm>
  );
};
export default EditAvatarPopup;
