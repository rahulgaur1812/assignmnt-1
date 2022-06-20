import React, { useState } from "react";
import { Col,Row,Container, Button } from "react-bootstrap";
import ShowTodo from "./ShowTodo";
import './style.scss';
const Todo = () => {
    const [task,setTask] = useState('Add Some task');
    const [data,setData] = useState([]);
    const onChnageFunc = (event) =>{
        console.log(event);
        setTask(event.target.value)
    }
    const onsubmitHandler = (e) => {
        e.preventDefault();
        console.log(e);
        const newData = task;
        setData([...data,newData]);
        setTask('');
    }

    const deleteItem = (value) => {
        console.log("deleted");
        const finalData = data.filter((item,index)=>{
            return index!=value;
        })
        setData(finalData);
    }
   
    return(
        <Container>
            <Row>
                <Col>
                <div className="to-do-wrapper w-50 mx-auto">
                    <div className="title"><Button className="w-100 p-2 mt-3"> To Do App</Button></div>
                    <form onSubmit={onsubmitHandler}>
                    <div className="todo-units w-100 p-3 shadow-lg rounded">
                        <Row className="unit mt-2">
                            <Col md={9}>
                            <input type='text' className="w-100 input-field" value={task} onChange={onChnageFunc}/>
                            </Col>
                            <Col md={3}>
                            <Button type="submit" className="w-20">Add Task</Button>
                            </Col>
                           
                        </Row>
                    </div>
                    </form>
                    <div className="to-do-list-container">
                    {
                        data.map((item,index)=>{
                            return(
                                    <ShowTodo data={item} key={index} id={index} onSelect={deleteItem}/>
                            )
                            
                        })
                    }
                    </div>
                    
                    
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Todo;