import Card from "./card"
/* eslint-disable react/prop-types */
export default function Game({ cardData }) {
  console.dir(cardData)
  const cards = cardData.map(
    (element) => {
      return <Card imgSrc={element.download_url} key={element.id}/>
    }
  )
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
