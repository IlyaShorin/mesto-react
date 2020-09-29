import React from "react";
import editButton from "../images/edit-button.svg";
import addButton from "../images/add-button.svg";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Main = (props) => {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <section className="profile__avatar" style={{ background: `url('${currentUser.avatar}') 0 0 / 100% 100% no-repeat` }}>
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar}></div>
        </section>
        <div className="profile__info">
          <div className="profile__alignment">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button onClick={props.onEditProfile} type="button" className="profile__button-edit">
              <img src={editButton} alt="Кнопка редактирования" className="profile__button-edit-pencil" />
            </button>
          </div>
          <p className="profile__title">{currentUser.about}</p>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__button-add">
          <img src={addButton} alt="Кнопка добавления" className="profile__button-add-plus" />
        </button>
      </section>
      <ul className="cards">
        {props.cards.map((card, i) => (
          <Card key={i} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
        ))}
      </ul>
    </main>
  );
};
export default Main;
