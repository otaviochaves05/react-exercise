import { useState } from "react"
import './frame.css'



function Frame() {

    const [showImg, setShowImg] = useState(true);

    function handleClick() {
        setShowImg(!showImg)
    }

    return (
        <div className='foto'>
            <button onClick={handleClick}>
                {showImg ? 'Esconder filme' : 'Clique para descobrir o filme'}
            </button>
            {showImg && <img src='' />}
        </div>
    )
}

export default Frame