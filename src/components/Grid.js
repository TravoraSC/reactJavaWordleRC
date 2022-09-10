import React from 'react'
import Row from "./components/Row"

export default function Grid({ guesses}){
    return(
        <div>{guesses.map((char) => {
            return <Row key={char} />
        })}
        </div>
    )
}