import React, { useEffect, useState } from 'react'
import './styles.css'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import { BiEditAlt } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { api } from '../../Api'
import { Navigate, useNavigate } from 'react-router-dom'

function EventsList() {
    const navigate = useNavigate()

    function eventDelete(id) {
        api.post('event-delete', {
            id
        }).then(res => {
            if (res.status === 200) {
                alert('Deletado!')
                window.location.reload()
            }
        })
    }


    useEffect(() => {
        axios.get('http://localhost:3030/api/event').then(function (response) {
            var eventsData = response.data
            var ptEvents = [];
            eventsData.forEach((event) => {
                if (event.language === 'pt') {
                    ptEvents.push(event);
                }
            })
            // setAllEvents(eventsData)
            setEvents(ptEvents);

        })
    }, [])


    // const [allEvents, setAllEvents] = useState([]);
    const [events, setEvents] = useState([]);
    const [deleteEvent, setDeleteEvent] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function formattedDate(event) {
        const data = new Date(event)
        return String(data.getUTCDate()).padStart(2, '0') + '/'
            + String(data.getUTCMonth()).padStart(2, '0') + '/' + data.getUTCFullYear()
            + ' ' + String(data.getUTCHours()).padStart(2, '0') + ':'
            + String(data.getUTCMinutes()).padStart(2, '0');
    }

    return (
        <div className='events-list'>
            <div className='event-background'>
                <div className='btn-div'>
                    <Button className='new-event-btn' variant="light" href='/NewEvent'>Novo Evento</Button>
                </div>
                {events.map((breakpoint) => (
                    <ListGroup key={breakpoint.id} horizontal={'sm'} className="my-3">
                        <ListGroup.Item className='event-item'>
                            {breakpoint.name}

                        </ListGroup.Item>
                        <ListGroup.Item className='event-item'>
                            {formattedDate(breakpoint.date)}
                            <div>
                                <BiEditAlt size={25} className='edit-icon' />
                                <BsTrash size={25} color='red' onClick={() => { handleShow(); setDeleteEvent(breakpoint.id) }} />
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                ))}

            </div>
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Deletar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Deseja realmente remover este evento?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button variant="danger" onClick={() => { eventDelete(deleteEvent) }}>Deletar</Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default EventsList