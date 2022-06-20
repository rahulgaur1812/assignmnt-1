import React from "react";
import { Col,Row,Container, Button } from "react-bootstrap";
const ShowTodo = (props) =>{
    return(
        <Container className="show-todo">
            <Row className="d-flex align-items-center">
                <Col md={10}>{props.data}</Col>
                <Col md={2} className="float-end"><Button onClick={()=>{
                    props.onSelect(props.id)
                }}>X</Button></Col>
            </Row>
        </Container>
    )
}

export default ShowTodo;