import Card from "./card"
import { useState } from "react"
import { shuffle } from "./utils"

/* eslint-disable react/prop-types */

export default function Game({
  cardData,
  incrementScore,
  resetScore,
  updateMax
}) {
  const [seenCards, setSeenCard] = useState([]);
  const [cards, setCards] = useState(
    cardData.map(
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
  )

  function cardClick(id) {
    const shuffled = shuffle(cards);
    console.dir(shuffled);
    setCards(shuffled);
    if (seenCards.includes(id)) {
      updateMax();
      resetScore();
    } else {
      setSeenCard([...seenCards, id]);
      incrementScore();
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
