export default function Card({imgSrc, desc}){
  return (
    <div className={"card"}>
      <img src={imgSrc} alt="card image" className={"cardImg"} />
      <p className={"cardDescription"}>{desc}</p>
    </div>
  )

}
