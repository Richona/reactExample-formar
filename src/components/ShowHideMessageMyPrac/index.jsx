import { Button, Col, Container, OverlayTrigger, Row, Toast, Tooltip } from "react-bootstrap";
import { useShow } from "../../hook/useShow";

export const ShowHideMessageMyPrac = () => {
    const { show, handleShowMessage } = useShow(false);

    const dateCreate = new Date("2023-01-19");
    console.log(dateCreate)
    function formatDate(date) {
        let diff = new Date() - date; // la diferencia entre ambas, representada en milisegundos
        let sec = Math.floor(diff / 1000); // convierte el resultado en segundos
        let min = Math.floor(diff / 60000); // convierte el resultado en minutos
        let hour = Math.floor(diff / 3600000); // convierte el resultado en horas
        let day = Math.floor(diff / 86400000); // convierte el resultado en dias

        if (diff < 1000) { // menos de 1 segundo
            return 'ahora mismo';
        } else if (sec < 60) { // menos de 1 minuto
            return `hace ${sec} seg.`;
        } else if (min < 60) { //menos de una hora
            return `hace ${min} min.`
        } else if (hour < 24) {
            return `hace ${hour} ${hour === 1 ? 'hora' : 'horas'}.`
        } else if (day < 31) {
            return `hace ${day} ${day === 1 ? 'dia' : 'dias'}.`
        } else {
            return 'hace mucho tiempo';
        }
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {dateCreate.toLocaleDateString()}
        </Tooltip>
    );

    return (
        <Container>
            <Row className="mt-5">
                <Col xs={12} lg={{ span: 6, offset: 3 }} className="text-center">
                    <Button
                        className="mb-2"
                        variant={show ? "danger" : "success"}
                        onClick={handleShowMessage}
                    >
                        {show ? "Ocultar" : "Mostrar"} mensaje
                    </Button>
                    <Toast show={show} onClose={handleShowMessage} className="m-auto">
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">ReactJS</strong>
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                                <Button variant="light"><small className="ms-1">{formatDate(dateCreate)}</small></Button>
                            </OverlayTrigger>
                        </Toast.Header>
                        <Toast.Body>Primer Clase!!</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </Container>
    );
};
