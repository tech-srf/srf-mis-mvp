import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'

const BoxContainer = ({children}) => {
    return (
        <Container>
            <Row className="justify-content-md-center m-4">
                <Col xs={14} s={12} md={8}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default BoxContainer