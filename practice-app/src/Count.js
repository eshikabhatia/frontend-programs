import './Count.css';
import { useState } from "react";
function Count(){
    const [count, setCount] = useState(0);
    return(
        <div className="container">
            <label>Type here:</label>
            <input type="text" onChange={(e) => setCount(e.target.value.length)} />
            <p>Character Count: {count}</p>
        </div>
    )
}
export default Count;