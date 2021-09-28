import { useReducer } from "react"
import reducer, { ACTIONS } from '../reducers/reducer'

const Counter = () => {
    const [counter, dispatch] = useReducer(reducer, 0)

    return (
        <> 
            <span>{counter}</span>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
            <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
        </>
    )

}

export default Counter
