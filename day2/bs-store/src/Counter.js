import React, { useState } from 'react'

function Counter() {
    const [number, setNumber] = useState(55);


    const increase = () => {
        setNumber(number + 1)
        console.log(number)
    }
    const decrease = () => {
        setNumber(number - 1)
        console.log(number)
    }
    const reset=()=>{
        setNumber(0)
        console.log(number)
    }
    const random=()=>{
        setNumber(Math.floor(Math.random()*100))//math random 0 ve 1 arasında sayı üretir,floor tam sayıya yuvarlar.
        console.log(number)
    }

    return (
        <div>
            {number}
            <div>
                <button onClick={() => increase()}>Increase</button>
                <button onClick={() => decrease()} >Decrease</button>
                <button onClick={() => reset()} >Reset</button>
                <button onClick={() => random()} >Random</button>
            </div>

        </div>
    )
}
export default Counter;