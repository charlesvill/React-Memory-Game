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
          handleClick={cardClick}
        />
      )
    }
  )
  function cardClick(id) {
    if (seenCards.includes(id)) {
      updateMax();
      resetScore();
    } else {
      setSeenCard([...seenCards, id]);
      incrementScore();
      updateMax();
    }
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
