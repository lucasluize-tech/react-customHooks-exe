import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useFlip = (initialState = true) => {
  const [isUp, setIsUp] = useState(initialState);
  const flip = () => {
    setIsUp((up) => !up);
  };
  return [isUp, flip];
};

const useAxios = (url, initialState = []) => {
  const [cards, setCards] = useState(initialState);

  const addCard = async function (name) {
    let response;
    if (name.length > 0) {
      response = await axios.get(`${url}/${name}/`);
    } else {
      response = await axios.get(url);
    }
    setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
  };

  const removeCard = () => {
    setCards(initialState);
  };
  return [cards, addCard, removeCard];
};

export { useFlip, useAxios };
