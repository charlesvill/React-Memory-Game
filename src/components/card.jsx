export default function Card({ imgSrc, id, handleClick }) {
  console.log(id);
  return (
    <div className={"card"} onClick={()=>handleClick(id)}>
      <img src={imgSrc} alt="card image" className={"cardImg"} />
    </div>
  )

}
