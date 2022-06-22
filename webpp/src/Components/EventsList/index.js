import React, { useEffect, useState } from 'react'
import './styles.css'
import ListGroup from 'react-bootstrap/ListGroup'
import { Button } from 'react-bootstrap'
import axios from 'axios'

function EventsList() {


    useEffect(() => {
        axios.get('http://localhost:3030/api/event').then(function (response) {
            setVariavel(response.data)
        })
    }, [])
    
    const [variavel, setVariavel] = useState([])
    
    return (
        <div className='events-list'>
            <div className='event-background'>
                <div className='btn-div'>
                    <Button className='new-event-btn' variant="light" href='/NewEvent'>Novo Evento</Button>
                </div>
                {variavel.map((breakpoint) => (
                    <ListGroup horizontal={breakpoint} className="my-3">
                        <ListGroup.Item className='event-item'>{breakpoint.name}</ListGroup.Item>
                        <ListGroup.Item className='event-item'>{breakpoint.date}</ListGroup.Item>
                    </ListGroup>
                ))}

            </div>
        </div>
    )
}

export default EventsList