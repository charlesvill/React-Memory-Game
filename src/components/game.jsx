/* eslint-disable react/prop-types */
export default function Game({cards}){
    console.dir(cards)
    return(
        <>
            <div className={"gameContainer"}>
                game container
                <div className={"cardContainer"}>
                    cards container
                </div>
            </div>
        </>
    )

}