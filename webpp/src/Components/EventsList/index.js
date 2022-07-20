import React, { useEffect, useState } from 'react'
import './styles.css'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import { BiEditAlt } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { api } from '../../Api'
import { useNavigate } from 'react-router-dom'
import { setEventToBeEdited, setEventToBeEditedES } from '../EventUpdateForm/data'

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
        }).catch(erro => { })
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
            setEvents(ptEvents);

        })
    }, [])

    const [events, setEvents] = useState([]);
    const [deleteEvent, setDeleteEvent] = useState('');
    const [showDelete, setShowDelete] = useState(false);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const [showEvent, setShowEvent] = useState(false);
    const handleCloseEvent = () => setShowEvent(false);
    const handleShowEvent = () => setShowEvent(true);
    const [viewEvent, setViewEvent] = useState('');


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
                    <Button className='new-event-btn' variant="light" href='/NewEvent' >Novo Evento</Button>
                </div>

                {events.map((breakpoint) => (
                    <ListGroup key={breakpoint.id} horizontal={'sm'} className="my-3">
                        <ListGroup.Item className='event-item' onClick={() => { setViewEvent(breakpoint); handleShowEvent() }}>
                            {breakpoint.name}
                        </ListGroup.Item>
                        <ListGroup.Item className='event-item'>
                            {formattedDate(breakpoint.date)}
                            <div>
                                <BiEditAlt size={25} className='edit-icon' onClick={() => {

                                    setEventToBeEditedES(events.find(element => element.eventCode === breakpoint.eventCode))
                                    setEventToBeEdited(breakpoint);

                                    ; navigate('/UpdateEvent')
                                }} />
                                <BsTrash size={25} color='red' onClick={() => { handleShowDelete(); setDeleteEvent(breakpoint.id) }} />
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                ))}

            </div>

            <>
                <Modal show={showEvent} onHide={handleCloseEvent}>
                    <Modal.Header >
                        <Modal.Title> {viewEvent.name} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='event-description'>{viewEvent.address}</Modal.Body>
                    <Modal.Body className='event-description'>{viewEvent.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseEvent}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

            <>
                <Modal
                    show={showDelete}
                    onHide={handleCloseDelete}
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
                        <Button variant="secondary" onClick={handleCloseDelete}>
                            Fechar
                        </Button>
                        <Button variant="danger" onClick={() => { eventDelete(deleteEvent) }}>Deletar</Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
}

export default EventsList