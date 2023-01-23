import React, { useState } from 'react'
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap'

export const Counter = () => {
    const [now, setNow] = useState(0);

    const handleUp = () =>{
        setNow(now + 1)
    }
    const handleUp10 = () =>{
        setNow(now + 10)
    }
    const handleUp100 = () =>{
        setNow(now + 100)
    }
    const handleDown = () =>{
        now !== 0 && setNow(now - 1)
    }
    const handleDown10 = () =>{
        now > 9 && setNow(now - 10)
    }
    const handleDown100 = () =>{
        now > 99 && setNow(now - 100)
    }
    const handleReset = () =>{
        setNow(0)
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-center">
                    <Card className="text-center">
                        <Card.Header>Contador</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <ButtonGroup aria-label="Basic example" className="m-auto">
                                    <Button variant="info" onClick={handleDown100} size="sm">-100</Button>
                                    <Button variant="Light" onClick={handleDown10} size="sm">-10</Button>
                                    <Button variant="Light" onClick={handleDown} size="sm">-1</Button>
                                    <Button variant="warning" size="lg" disabled>{now}</Button>
                                    <Button variant="Light" onClick={handleUp} size="sm">+1</Button>
                                    <Button variant="Light" onClick={handleUp10} size="sm">+10</Button>
                                    <Button variant="info" onClick={handleUp100} size="sm">+100</Button>
                                </ButtonGroup>
                            </Card.Text>
                            <Button variant="danger" onClick={handleReset}>Reiniciar</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">La scaloneta papá</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
