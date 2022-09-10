import React from 'react'

export default function Row({ guess }) {

    if(guess){
        return(
            <div className="row past">
                {guess.map((char, i) => {
                    return <div key={i} className={char.color}>{char.key}</div>
                })}
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