import React from 'react'
import './styles.css'
import ListGroup from 'react-bootstrap/ListGroup'

function EventsList() {
    return (
        <div className='events-list'>
            <div className='event-background'>
                {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (
                    <ListGroup horizontal={breakpoint} className="my-3">
                        <ListGroup.Item className='event-item'>Nome do Evento</ListGroup.Item>
                        <ListGroup.Item className='event-item'>Infos</ListGroup.Item>
                    </ListGroup>
                ))}

            </div>
        </div>
    )
}

export default EventsList