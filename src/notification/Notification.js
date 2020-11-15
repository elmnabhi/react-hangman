import React from 'react'
import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'


const Notification = ({ type }) => (
    <Alert variant={type}>
        {type === "success" ? (
            <div>
                <Alert.Heading>Hey, nice you have won</Alert.Heading>
                <hr />
                <p className="mb-0">
                    Next word
            </p>
            </div>
        ) : (
                <div>
                    <Alert.Heading>Oups !!</Alert.Heading>
                    <hr />
                    <p className="mb-0">
                        Try again
                      </p>
                </div>
            )
        }
    </Alert>

);

Notification.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Notification