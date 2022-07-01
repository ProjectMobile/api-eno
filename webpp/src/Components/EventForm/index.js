import React, { useState } from 'react'
import './styles.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function EventForm() {
    const [allDay, setAllDay] = useState(false)
    const [controled, setControled] = useState(false)

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
                                    <Form.Control required type="text" placeholder="Nome" />
                                </Form.Group>
                                <Form.Group className="Event_Adress" controlId="AdressOfEventPT">
                                    <Form.Label>Endereço:</Form.Label>
                                    <Form.Control required type="text" placeholder="Endereço" />
                                </Form.Group>
                                <Form.Group className="Event_Description" controlId="DescriptionOfEventPT">
                                    <Form.Label>Descrição:</Form.Label>
                                    <Form.Control required as="textarea" rows={5} />
                                </Form.Group>
                            </div>
                        </Col>
                        <Col>
                            <Form.Label size="lg">Dados em Espanhol:</Form.Label>
                            <div className="name_adress_Description">
                                <Form.Group className="Event_Name" controlId="NameOfEventES">
                                    <Form.Label>Nombre:</Form.Label>
                                    <Form.Control required type="text" placeholder="Nombre" />
                                </Form.Group>
                                <Form.Group className="Event_Adress" controlId="AdressOfEventES">
                                    <Form.Label>Dirección:</Form.Label>
                                    <Form.Control required type="text" placeholder="Dirección" />
                                </Form.Group>
                                <Form.Group className="Event_Description" controlId="DescriptionOfEventES">
                                    <Form.Label>Descripción:</Form.Label>
                                    <Form.Control required as="textarea" rows={5} />
                                </Form.Group>
                            </div>
                        </Col>
                    </Row>
                    <Form.Label>Dados Universais:</Form.Label>
                    <Form.Group className="Event_Description" controlId="DescriptionOfEventES">
                        <Form.Label>Tipo do evento:</Form.Label>
                        <Form.Select className="EventType" aria-label="Default select example" defaultValue={1}>
                            <option value="0">Outros</option>
                            <option value="1">Feira</option>
                            <option value="2">Forum </option>
                            <option value="3">Apresentação</option>
                            <option value="4">Palestra</option>
                            <option value="5">MiniCurso</option>
                            <option value="6">Show </option>
                            <option value="7">Painel</option>
                            <option value="8">Degustação</option>
                            <option value="9">Oficina </option>
                        </Form.Select>
                    </Form.Group>
                    <div className="others_elements">
                        <Form.Group className="Event_Locate" controlId="LocateOfEvent">
                            <Form.Label>Localização no mapa:</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control required type="number" placeholder="Latitude" />
                                </Col>
                                <Col>
                                    <Form.Control required type="number" placeholder="Longititude" />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="Event_Date" controlId="InitialDateOfEvent">
                            <Form.Label>Data de Inicio:</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control required type="Date" placeholder="dd/mm/aaaa" />
                                </Col>
                                <Col>
                                    <Form.Control required type="Time" placeholder="00:00" />
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
                                    <Form.Control required type="Date" placeholder="dd/mm/aaaa" />
                                </Col>
                                <Col>
                                    <Form.Control required={allDay} type="Time" placeholder="00:00" disabled={allDay} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="Event_TicketControl" controlId="TicketControlOfEvent">
                            <Form.Label>Haverá controle de ingressos?</Form.Label>
                            <br />
                            <ToggleButtonGroup type="radio" name="RadioTicketOfEvent" id="HasTicketControlOfEvent" defaultValue={false}>
                                <ToggleButton id="HasTicketControl" value={true} onClick={() => { setControled(true) }}>
                                    Sim
                                </ToggleButton>
                                <ToggleButton id="HasnTicketControl" value={false} onClick={() => { setControled(false) }}>
                                    Não
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <div className="IfControledEvent" >
                            <Form.Group className="Event_IsPay" controlId="IsPayOfEvent">
                                <Form.Label>O evento é pago?</Form.Label>
                                <br />
                                <ToggleButtonGroup type="radio" name="RadioPayOfEvent" id="IsPayButtonOfEvent" defaultValue={false}>
                                    <ToggleButton id="IsPayButton" value={true} disabled={!controled}>
                                        Sim
                                    </ToggleButton>
                                    <ToggleButton id="IsnPayButton" value={false} disabled={!controled}>
                                        Não
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Form.Group>
                            <Form.Group className="EventTicket" controlId="HasTicketsOfEvent">
                                <Form.Label>O evento ainda possui ingressos?</Form.Label>
                                <br />
                                <ToggleButtonGroup type="radio" name="RadioHasTicketsOfEvent" id="RadioHasTicketsOfEvent" defaultValue={false}>
                                    <ToggleButton id="HasTicketsButton" value={true} disabled={!controled}>
                                        Sim
                                    </ToggleButton>
                                    <ToggleButton id="HasnTicketsButton" value={false} disabled={!controled}>
                                        Não
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Form.Group>
                            <Form.Group className="Event_Link" controlId="SellLinkOfEvent">
                                <Form.Label>Link para Vendas/Controle de Ingressos:</Form.Label>
                                <Form.Control type="Link" placeholder="https//:" disabled={!controled} />
                            </Form.Group>
                        </div>
                    </div>
                </Form>
                <div className='salvarOuCancelar'>
                <Button variant="primary">Salvar</Button>{' '}
                <Button variant="secondary">Cancelar</Button>{' '}
                </div> 
            </div>
        </div >
    )
}

export default EventForm