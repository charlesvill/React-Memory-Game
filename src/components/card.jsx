export default function Card({imgSrc, id}){
  return (
    <div key={id} className={"card"}>
      <img src={imgSrc} alt="card image" className={"cardImg"} />
    </div>
  )

}
