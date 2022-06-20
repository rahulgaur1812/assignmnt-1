import React,{useState} from "react";
import {Button} from "react-bootstrap";
import Heading from "../../atoms/Heading/Heading";
const Counter = () =>{
    const [count,setCount] = useState(0);
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-12"> <Heading type="heading-2" title={`Counter value :  ${count}`}></Heading></div>
        </div>
        <div className="row">
            <div className="col-md-4"><Button variant="primary" onClick={()=>{setCount(count+1)}}>Increment Counter</Button></div>
            <div className="col-md-4"><Button variant="primary" onClick={()=>{setCount(count-1)}}>Decrement Counter</Button></div>
            <div className="col-md-4"><Button variant="primary" onClick={()=>{setCount(0)}}>Reset Counter</Button></div>
        </div>
    </div>
    )

}

export default Counter;