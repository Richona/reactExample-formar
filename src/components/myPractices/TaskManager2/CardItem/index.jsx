import { useState } from "react";
import { Button, Form, Image, Toast } from "react-bootstrap";
import classes from "./style.module.css";

export const CardItem = ({
  task,
  onUpdate,
  onDelete,
  onActive,
  onCompleted,
}) => {
  const [changed, setChange] = useState(false);
  
  const handleShowBody = () =>{
    setChange(c => !c);
  }
  return (
    <Toast
      onClose={() => onDelete(task.id)}
      bg={task.completed ? "success" : task.active ? "warning" : "secondary"}
      className={classes.toast}
    >
      <Toast.Header>
        <i className={`fa-solid ${changed ? "fa-caret-down" : "fa-caret-up"}`} onClick={handleShowBody}></i>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{task.title}</strong>
        <small>{task.date}</small>
        
      </Toast.Header>
      <Toast.Body className={`${changed ? classes.showBodyCardItem : ''}`}>
        <Image fluid src={task.img} alt="" className={classes["img-100"]} />
        <p className="ps-2 d-inline-block">{task.description}</p>

        <Form.Group className="m-3 d-inline-flex gap-1">
          <Form.Check
            name="active"
            id={`active-${task.id}`}
            onClick={() => onActive(task.id)}
            defaultChecked={task.active}
          />
          <Form.Label htmlFor={`active-${task.id}`}>{task.active ? "En proceso" : "Pendiente"}</Form.Label>
        </Form.Group>

        <Form.Group className="m-3 d-inline-flex gap-1">
          <Form.Check
            name="completed"
            id={`completed-${task.id}`}
            onClick={() => onCompleted(task.id)}
            defaultChecked={task.completed}
          />
          <Form.Label htmlFor={`completed-${task.id}`}>{task.completed ? "Completado" : "Completar"}</Form.Label>
        </Form.Group>

        <Button variant="outline-dark" onClick={() => onUpdate(task.id)}>
          Editar
        </Button>
      </Toast.Body>
    </Toast>
  );
};