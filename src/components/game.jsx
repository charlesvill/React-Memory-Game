import Card from "./card"
const exArr = [{id:0, download_url:"hello world"},{id:1, download_url:"hello world"}]
/* eslint-disable react/prop-types */
export default function Game({ cardData }) {
  console.dir(cardData)
  const cards = cardData.map(
    (element) => {
      return <Card imgSrc={element.download_url} id={element.id}/>
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
