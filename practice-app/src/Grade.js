import "./Grade.css";
import { useState } from "react";
function Grade(){
    let grade="";
    const [marks, setMarks] = useState("");
    if(marks>=90){
        grade="A";
    }
    else if(marks>=75){
        grade="B";
    }
    else if(marks>=60){
        grade="C";
    }
    else if(marks>=40){
        grade="D";
    }
    else if(marks!=="" && marks<40){
        grade="F";
    }
    return(
        <div>
            <h1>Grading Page</h1>
            <label>Enter your marks:</label>
            <input type="text" onChange={(e) => setMarks(e.target.value)} />
            <p>{grade==="" ? "Please enter your marks" : `Your grade is: ${grade}`}</p>
        </div>
    )
}
export default Grade;