import React from 'react'

export default function Row({ guess, currentGuess }) {

    if(guess){
        return(
            <div className="row past">
                {guess.map((char, i) => {
                    return <div key={i} className={char.color}>{char.key}</div>
                })}
            </div>
        )
    }

    if(currentGuess) {
        let letters = currentGuess.split('')

        return(
            <div className='row current'>
                {letters.map((letter, i) => (
                    <div key={i} className="filled">{letter}</div>
                ))}
                {[...Array(5 - letters.length)].map((_, i) =>(
                    <div key={i}></div>
                ))}
            </div>
        )
    }

    return(
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}