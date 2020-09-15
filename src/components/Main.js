import React, { useState, useEffect } from "react";
import editButton from "../images/edit-button.svg";
import addButton from "../images/add-button.svg";
import api from "../utils/api";
import Card from "./Card";

const Main = (props) => {
  const [userName, setUserName] = useState("");
  const [userTitle, setUserTitle] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserTitle(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((res) => {
        console.log(res);
      });
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((res) => {
        console.log(res);
      });
  });

  return (
    <main className="content">
      <section className="profile">
        <section className="profile__avatar" style={{ background: `url('${userAvatar}') 0 0 / 100% 100% no-repeat` }}>
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar}></div>
        </section>
        <div className="profile__info">
          <div className="profile__alignment">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={props.onEditProfile} type="button" className="profile__button-edit">
              <img src={editButton} alt="Кнопка редактирования" className="profile__button-edit-pencil" />
            </button>
          </div>
          <p className="profile__title">{userTitle}</p>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__button-add">
          <img src={addButton} alt="Кнопка добавления" className="profile__button-add-plus" />
        </button>
      </section>
      <ul className="cards">
        {cards.map((card, i) => (
          <Card key={i} card={card} onCardClick={props.onCardClick} />
        ))}
      </ul>
    </main>
  );
};
export default Main;
