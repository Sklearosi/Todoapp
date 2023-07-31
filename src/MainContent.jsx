
import Ul from "./Ul"
import StartingMainContentDiv from "./StartingMainContentDiv"
import { useState } from "react"

function Maincontent () {

    const [dark, setDark] = useState("")



    return(
    <>
    
    <StartingMainContentDiv dark={dark}/>
    
    </>
    )
}


export default Maincontent