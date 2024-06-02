/* eslint-disable react/prop-types */
export default function Header({score=0, max=0}){
    return(
        <>
            <div>
                <h1>
                    Memory Title
                </h1>
                <span>Click cards to get points</span>
                <span>Avoid repeats to get max score</span>
            </div>
            <div>
                <span>
                    Score: {score}
                </span>
                <span>
                    Max: {max}
                </span>
            </div>
        </>
    )
}