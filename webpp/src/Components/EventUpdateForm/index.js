import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { eventType } from '../EventForm/data'
import { useNavigate } from 'react-router-dom'
import { api, event } from '../../Api'
import { getEventToBeEdited, getEventToBeEditedES } from './data'



function EventUpdateForm() {

    const [controlled, setControlled] = useState(false)
    const [stillTickets, setStillTickets] = useState(false)

    const eventPT = getEventToBeEdited()
    const eventES = getEventToBeEditedES()

    var eventTYPE = eventType.find(element => { if (element.name === eventPT.type) { return element } });

    const [allDay, setAllDay] = useState(eventPT.allDay)
    const [namePT, setNamePT] = useState(eventPT.name)
    const [descriptionPT, setDescriptionPT] = useState(eventPT.description)
    const [addressPT, setAddressPT] = useState(eventPT.address)
    const [nameES, setNameES] = useState(eventES.name)
    const [addressES, setAddressES] = useState(eventES.address)
    const [descriptionES, setDescriptionES] = useState(eventES.description)
    const [eventTypeSelect, setEventTypeSelect] = useState(() => {
        if (eventTYPE !== undefined) {
            return eventTYPE.id
        } else {
            return 0;
        }
    })
    const [lat, setLat] = useState(eventPT.lat)
    const [long, setLong] = useState(eventPT.long)

    const data = new Date(eventPT.date)


    const [dateEvent, setDateEvent] = useState(data.getUTCFullYear() + '-' +
        String(data.getUTCMonth()).padStart(2, '0') + '-' + String(data.getUTCDate()).padStart(2, '0'))

    const [hourEvent, setHourEvent] = useState(String(data.getUTCHours()).padStart(2, '0') + ':'
        + String(data.getUTCMinutes()).padStart(2, '0'))

    const finalData = new Date(eventPT.endDate)

    const [endEventDate, setEndEventDate] = useState(finalData.getUTCFullYear() + '-' +
        String(finalData.getUTCMonth()).padStart(2, '0') + '-' + String(finalData.getUTCDate()).padStart(2, '0'))

    const [endEventHour, setEndEventHour] = useState(String(finalData.getUTCHours()).padStart(2, '0') + ':'
        + String(finalData.getUTCMinutes()).padStart(2, '0'))

    const [url, setUrl] = useState(eventPT.url)
    const navigate = useNavigate()

    function veriFyType() {
        return (
            eventType.find(element => {
                if (element.id === Number(eventTypeSelect)) {
                    return element.name
                }
            })
        )
    }

    function eventFormSender() {




        console.log({
            namePT,
            descriptionPT,
            addressPT,
            nameES,
            descriptionES,
            addressES,
            allDay,
            simpla: url,
            date: formattedDate(dateEvent, hourEvent),
            lat: Number(lat),
            long: Number(long),
            type: veriFyType().name
        })


        api.post('event-update/' + eventPT.id, {
            namePT,
            descriptionPT,
            addressPT,
            nameES,
            descriptionES,
            addressES,
            allDay,
            simpla: url,
            date: formattedDate(dateEvent, hourEvent),
            lat: Number(lat),
            long: Number(long),
            type: veriFyType().name,
            endDate: formattedDate(endEventDate, endEventHour),
        }).then((res) => {
            if (res.status === 200) {
                alert('Evento Editado com sucesso!')
                navigate('/home')
            }
        }).catch((err) => {
            alert(err.message);
        })
    }


    function formattedDate(dateEvent, hourEvent) {
        if(dateEvent !== undefined && hourEvent !== undefined){
            return dateEvent + 'T' + hourEvent + ':00Z'
        }else{
            return undefined
        }
    }

    return (
        <div className='event-form'>
            <div className='event-background'>
                <Form>
                    <Row>
                        <Col>
                            <Form.Label>Dados em Português:</Form.Label>
                            <div className="name_adress_Description">
                                <Form.Group className="Event_Name" controlId="NameOfEventPT">
                                    <Form.Label>Nome:</Form.Label>
                                    <Form.Control required type="text" placeholder="Nome" value={namePT} onChange={(e) => {
                                        setNamePT(e.target.value)
                                    }} />
                                </Form.Group>
                                <Form.Group className="Event_Adress" controlId="AdressOfEventPT" >
                                    <Form.Label>Endereço:</Form.Label>
                                    <Form.Control required type="text" placeholder="Endereço" value={addressPT} onChange={(e) => { setAddressPT(e.target.value) }} />
                                </Form.Group>
                                <Form.Group className="Event_Description" controlId="DescriptionOfEventPT">
                                    <Form.Label>Descrição:</Form.Label>
                                    <Form.Control required as="textarea" rows={3} value={descriptionPT} onChange={(e) => { setDescriptionPT(e.target.value) }} />
                                </Form.Group>
                            </div>
                        </Col>
                        <Col>
                            <Form.Label size="lg">Dados em Espanhol:</Form.Label>
                            <div className="name_adress_Description">
                                <Form.Group className="Event_Name" controlId="NameOfEventES">
                                    <Form.Label>Nombre:</Form.Label>
                                    <Form.Control required type="text" placeholder="Nombre" value={nameES} onChange={(e) => { setNameES(e.target.value) }} />
                                </Form.Group>
                                <Form.Group className="Event_Adress" controlId="AdressOfEventES">
                                    <Form.Label>Dirección:</Form.Label>
                                    <Form.Control required type="text" placeholder="Dirección" value={addressES} onChange={(e) => { setAddressES(e.target.value) }} />
                                </Form.Group>
                                <Form.Group className="Event_Description" controlId="DescriptionOfEventES">
                                    <Form.Label>Descripción:</Form.Label>
                                    <Form.Control required as="textarea" rows={3} value={descriptionES} onChange={(e) => { setDescriptionES(e.target.value) }} />
                                </Form.Group>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Form.Label>Dados Gerais:</Form.Label>
                    <Form.Group className="Event_Description" controlId="DescriptionOfEventES">
                        <Form.Label>Tipo do evento:</Form.Label>
                        <Form.Select className="EventType" aria-label="Default select example" defaultValue={eventTypeSelect}
                            onChange={(e) => {
                                setEventTypeSelect(e.target.value)
                            }}>
                            {eventType.map((type) => {
                                return (
                                    <option value={type.id} key={type.id}>{type.name}</option>
                                )
                            })}
                        </Form.Select>
                    </Form.Group>
                    <div className="others_elements">
                        <Form.Group className="Event_Locate" controlId="LocateOfEvent">
                            <Form.Label>Localização no mapa:</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control required type="number" placeholder="Latitude" value={lat} onChange={(e) => {
                                        setLat(e.target.value)
                                    }} />
                                </Col>
                                <Col>
                                    <Form.Control required type="number" placeholder="Longititude" value={long} onChange={(e) => {
                                        setLong(e.target.value)
                                    }} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="Event_Date" controlId="InitialDateOfEvent">
                            <Form.Label>Data de Inicio:</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control required type="Date" value={dateEvent} onChange={(e) => {
                                        setDateEvent(e.target.value)
                                    }} />
                                </Col>
                                <Col>
                                    <Form.Control required type="Time" placeholder="00:00" value={hourEvent} onChange={(e) => {
                                        setHourEvent(e.target.value)
                                    }} />
                                </Col>
                            </Row>
                            <Form.Group className="Event_AllDay" controlId="AllDayOfEvent">
                                <Form.Label>Este evento se repete todos os dias?</Form.Label>
                                <br />
                                <ToggleButtonGroup type="radio" name="RadioAllDayOfEvent" id="IsAllDayOfEvent" defaultValue={false}>
                                    <ToggleButton id="IsAllDayControl" value={true} onClick={() => { setAllDay(true) }}>
                                        Sim
                                    </ToggleButton>
                                    <ToggleButton id="IsnAllDayControl" value={false} onClick={() => { setAllDay(false) }}>
                                        Não
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Form.Group>
                        </Form.Group>
                        <Form.Group className="Event_Date" controlId="EndDateOfEvent">
                            <Form.Label>Data de Fim:</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control required type="Date" placeholder="dd/mm/aaaa" value={endEventDate} onChange={(element) => {
                                        setEndEventDate(element.target.value)
                                    }} />
                                </Col>
                                <Col>
                                    <Form.Control required={allDay} type="Time" placeholder="00:00" disabled={allDay} value={endEventHour} onChange={(e) => {
                                        setEndEventHour(e.target.value)
                                    }} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <br />
                        <Form.Group className="Event_TicketControl" controlId="TicketControlOfEvent">
                            <Form.Label>Haverá controle de ingressos?</Form.Label>
                            <br />
                            <ToggleButtonGroup type="radio" name="RadioTicketOfEvent" id="HasTicketControlOfEvent" defaultValue={false}>
                                <ToggleButton id="HasTicketControl" value={true} onClick={() => { setControlled(true) }}>
                                    Sim
                                </ToggleButton>
                                <ToggleButton id="HasnTicketControl" value={false} onClick={() => { setControlled(false) }}>
                                    Não
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <div className="IfControledEvent" >
                            <Form.Group className="Event_IsPay" controlId="IsPayOfEvent">
                                <Form.Label>O evento é pago?</Form.Label>
                                <br />
                                <ToggleButtonGroup type="radio" name="RadioPayOfEvent" id="IsPayButtonOfEvent" defaultValue={false}>
                                    <ToggleButton id="IsPayButton" value={true} disabled={!controlled}>
                                        Sim
                                    </ToggleButton>
                                    <ToggleButton id="IsnPayButton" value={false} disabled={!controlled}>
                                        Não
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Form.Group>
                            <Form.Group className="EventTicket" controlId="HasTicketsOfEvent">
                                <Form.Label>O evento ainda possui ingressos?</Form.Label>
                                <br />
                                <ToggleButtonGroup type="radio" name="RadioHasTicketsOfEvent" id="RadioHasTicketsOfEvent" defaultValue={false}>
                                    <ToggleButton id="HasTicketsButton" value={true} disabled={!controlled} onClick={() => { setStillTickets(true) }}>
                                        Sim
                                    </ToggleButton>
                                    <ToggleButton id="HasnTicketsButton" value={false} disabled={!controlled} onClick={() => { setStillTickets(false) }}>
                                        Não
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Form.Group>
                            <Form.Group className="Event_Link" controlId="SellLinkOfEvent">
                                <Form.Label>Link para Vendas/Controle de Ingressos:</Form.Label>
                                <Form.Control type="Link" placeholder="https//:" disabled={!controlled || !stillTickets} value={url} onChange={(e) => {
                                    setUrl(e.target.value)
                                }} />
                            </Form.Group>
                        </div>
                    </div>
                </Form>
                <div className='salvarOuCancelar'>
                    <Button variant="primary" onClick={() => {
                        eventFormSender()
                    }}>Salvar</Button>{' '}
                    <Button variant="secondary" onClick={() => {
                        navigate('/home')
                    }}>Cancelar</Button>{' '}
                </div>
            </div>
        </div >
    )
}

export default EventUpdateForm