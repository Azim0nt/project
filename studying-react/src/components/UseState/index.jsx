import { useState } from "react";
import './style.scss'
function UseState() {
    const [count, setConut] = useState(1)
    return ( 
        <div id="main">
            <h1>Set Count</h1>
            <br />
            <br />
            <h1>Count:{count}</h1>
            <button onClick={() => setConut(count + 1)}>+</button>
            <button onClick={() => setConut(count - 1)}>-</button>
        </div>
     );
}

export default UseState;