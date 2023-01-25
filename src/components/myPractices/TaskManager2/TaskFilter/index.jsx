
import { Button, ButtonGroup } from "react-bootstrap";
import { filterTask } from "../../../../constants";

export const TaskFilter = ({onChangeFilter, statusFilter}) => {
  return (
    <ButtonGroup>
      <Button variant={`${statusFilter === "ALL" ? "primary" : "outline-secondary"}`} onClick={() => onChangeFilter(filterTask.ALL)}>Todos</Button>
      <Button variant={`${statusFilter === "IN_PROCESS" ? "primary" : "outline-secondary"}`} onClick={() => onChangeFilter(filterTask.PROCESS)}>En proceso</Button>
      <Button variant={`${statusFilter === "PENDING" ? "primary" : "outline-secondary"}`} onClick={() => onChangeFilter(filterTask.PENDING)}>Pendiente</Button>
      <Button variant={`${statusFilter === "COMPLETED" ? "primary" : "outline-secondary"}`} onClick={() => onChangeFilter(filterTask.COMPLETED)}>Completado</Button>
    </ButtonGroup>
  );
};