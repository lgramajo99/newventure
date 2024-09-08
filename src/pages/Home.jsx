import React from 'react'
import reactLogo from '../assets/react.svg'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/features/counter/counterSlice';


function Home() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()


    return (<div>
        <h1>Pagina de inicio</h1>

        <button aria-label="Increment value" onClick={() => dispatch(increment())}>Incrementar</button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrementar</button>
    </div>)
}

export default Home;