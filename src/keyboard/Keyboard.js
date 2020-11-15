import React from 'react'
import PropTypes from 'prop-types'
import './Keyboard.css'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { CHARACTERS1, CHARACTERS2, CHARACTERS3 } from '../repository/Data'

const Keyboard = ({ error, won, onClick }) => (
    <div className="margin-top">
        <Row className="justify-content-md-center" >
            {
                CHARACTERS1.map(({ id, value }) => (

                    <Col md="auto" key={id}>
                        <Button disabled={error > 6 || won} onClick={() => onClick(value)} >{value}</Button>
                    </Col>
                ))
            }
        </Row>
        <br />

        <Row className="justify-content-md-center" >
            {
                CHARACTERS2.map(({ id, value }) => (

                    <Col md="auto" key={id}>
                        <Button disabled={error > 6 || won} onClick={() => onClick(value)} >{value}</Button>
                    </Col>
                ))
            }
        </Row>
        <br />

        <Row className="justify-content-md-center" >
            {
                CHARACTERS3.map(({ id, value }) => (

                    <Col md="auto" key={id}>
                        <Button disabled={error > 6 || won} onClick={() => onClick(value)} >{value}</Button>
                    </Col>
                ))
            }
        </Row>
    </div>
);

Keyboard.propTypes = {
    onClick: PropTypes.func.isRequired,
    error: PropTypes.number.isRequired,
    won: PropTypes.bool.isRequired,
};

export default Keyboard