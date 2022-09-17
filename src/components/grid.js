import React from 'react'
import {useState} from 'react'
import Row from './row'

export default function Grid() {
    const [guesses, setGuesses] = useState([...Array(5)])
    console.log(setGuesses)
    return(
        <div>
            {guesses.map((g, i) => {
                
                return <Row key={i} guess={g}/>
            })}
        </div>
    )
}