import { Form, Button, Image } from "react-bootstrap";
import classes from './style.module.css';
export const FormTask = ({
  onChange,
  inputsValues,
  onSubmit,
  refForm,
  action,
  onReset
}) => {
  return (
    <Form onSubmit={onSubmit} ref={refForm}>
      <Form.Group className="mb-3">
        <Form.Label>Titulo</Form.Label>
        <Form.Control
          placeholder="Ingresar un titulo"
          value={inputsValues.title}
          onChange={onChange}
          name="title"
        />
      </Form.Group>

      <Form.Group className="mb-3">

        <Image className={classes.imgPreview} fluid src={inputsValues.img ? inputsValues.img : "https://www.freeiconspng.com/uploads/no-image-icon-13.png"}/>

        <Form.Label>Imagen</Form.Label>
        <Form.Control
          placeholder="Ingresar un url"
          value={inputsValues.img ? inputsValues.img : "https://www.freeiconspng.com/uploads/no-image-icon-13.png"}
          onChange={onChange}
          name="img"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          name="description"
          placeholder="Ingresar una descripción"
          onChange={onChange}
          as={"textarea"}
          defaultValue={inputsValues.description}
        />
      </Form.Group>

      <Button
        variant={action === "CREATE" ? "success" : "info"}
        type="submit"
        className="mx-2"
      >
        {action === "CREATE" ? "Crear" : "Actualizar"}
      </Button>
      <Button variant="danger" type="reset" onClick={onReset}>
        {action === "CREATE" ? "Reiniciar" : "Cancelar"}
      </Button>
    </Form>
  );
};