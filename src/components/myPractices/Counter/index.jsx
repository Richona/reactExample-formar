import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Counter = () => {
  return (
    <Container>
        <Row>
            <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-center">
                Counter
            </Col>
        </Row>
    </Container>
  )
}
