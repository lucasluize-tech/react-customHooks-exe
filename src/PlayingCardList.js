import React from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./hooks";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function PlayingCardList() {
  const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/";
  const [cards, addCard, removeCard] = useAxios(BASE_URL, []);
  return (
    <div className='PlayingCardList'>
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
        <button onClick={removeCard}>remove all cards!</button>
      </div>
      <div className='PlayingCardList-card-area'>
        {cards.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

PlayingCardList.defaultProps = {};

export default PlayingCardList;
