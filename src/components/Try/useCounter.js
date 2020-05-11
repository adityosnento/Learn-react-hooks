import {useState} from 'react'

export default function useCounter() {
    const[state,setState]=useState(0)
    const handleState = () => {
        setState(currentState => currentState + 1)
    }

    const handleTripleLike = () => {
        handleState()
        handleState()
        handleState()
       
}

    return [
        state,
        handleState,
        handleTripleLike
    ]
}
