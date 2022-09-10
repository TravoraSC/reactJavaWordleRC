import { useState } from 'react'

const useWordle = (solution) => {
    //tracks what turn the user is on
    const [turn, setTurn] = useState(0)

    //tracking what the user is tracking in current guess
    const [currentGuess, setCurrentGuess] = useState('')

    //tracks guess in an a array with other elements
    const [guesses, setGuesses] = useState([...Array(6)])

    //tracks past guess in array in a string format
    const [history, setHistory] = useState([''])

    //is boolean that tells if user is correct or not
    const [isCorrect, setIsCorrect] = useState(false)
    
    //formats guess into array
    const formatGuess = () => {
        let solutionArr = [...solution]
        let formattedGuess = [...currentGuess].map((char) => {
            return { key: char, color: 'grey' }
        })

        //find green char
        formattedGuess.forEach((char, i) => {
            if(solutionArr[i] === char.key){
                formattedGuess[i].color = 'green'
                solutionArr[i] = null
            }
        })

        //find yellow char
        formattedGuess.forEach((char, i) => {
            if(solutionArr.includes(char.key) && char.color !== 'green')
            formattedGuess[i].color = 'yellow'
            solutionArr[solutionArr.indexOf(char.key)] = null
        })

        return formattedGuess
    }

    //add new guess
    //update
    const addNewGuess = (theGuess) => {
        if(currentGuess === solution){
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = theGuess
            return newGuesses
        })

        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })

        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        setCurrentGuess('')
    }

    //handle keyup events and track current guesses
    //when user press enter, add new guess
    const handleKeyUp = ({ key }) => {
        if(key === "Enter"){
            //only add guess if turn is equal to 5
            if(turn > 5){
                console.log("No More Turns")
                return
            }
            //does not allow duplicate words
            if(history.includes(currentGuess)){
                console.log("You already used that word dummy")
                return
            }
            //word.length === 5
            if(currentGuess.length !== 5){
                console.log("Your word needs to be 5 letter's long")
                return
            }
            
            const formatted = formatGuess()
            addNewGuess(formatted)
        }

        if(key === 'Backspace'){
            setCurrentGuess((prev)=>{
                return prev.slice(0,-1)
            })
            return
        }
        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyUp}
}

export default useWordle