/* eslint-disable react/prop-types */
export default function Header({ score = 0, max = 0 }) {
  return (
    <>
      <h1>
        Memory Game
      </h1>
      <div className={"headContentCont"}>
        <div className={"instrCont"}>
          <span>Click cards to get points</span>
          <span>Avoid repeats to get max score</span>
        </div>
        <div className={"scoreCont"}>
          <span>
            Score: {score}
          </span>
          <span>
            Max: {max}
          </span>
        </div>
      </div>
    </>
  )
}
