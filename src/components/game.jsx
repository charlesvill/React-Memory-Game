import Card from "./card"
import { useState } from "react"

/* eslint-disable react/prop-types */

export default function Game({
  cardData,
  incrementScore,
  resetScore,
  updateMax
}) {
  const [seenCards, setSeenCard] = useState([]);

  const cards = cardData.map(
    (element) => {
      return (
        <Card
          imgSrc={element.download_url}
          key={element.id}
          id={element.id}
          handleClick={cardClick}
        />
      )
    }
  )

  function cardClick(id) {
    console.log(id + " is being checked");
    console.dir(seenCards)
    if (seenCards.includes(id)) {
      console.log("resetting");
      console.dir(seenCards);
      updateMax();
      resetScore();
      setSeenCard([]);
    } else {
      console.log("adding " + id + "to seencards arr");
      setSeenCard([...seenCards, id]);
      incrementScore();
    }
    // const shuffled = shuffle(cards)
    // setCards(shuffled);
  }

  return (
    <>
      <div className={"gameContainer"}>
        game container
        <div className={"cardContainer"}>
          {cards}
        </div>
      </div>
    </>
  )

}
