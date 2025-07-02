import "./button.css"
import { useState } from "react";

function CounterButton(){

    const [state, setState] = useState(0);

    const increment = () =>{
        setState(prevCount => prevCount + 1)
    }

    return(
        <button onClick={increment}>
            Likes: {state} 
        </button>
    )
}

export default CounterButton;