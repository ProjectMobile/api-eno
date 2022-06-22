import React from 'react'
import './styles.css'
import Form from 'react-bootstrap/Form'

function EventForm() {
    return (
        <div className='event-form'>
            <div className='event-background'>
                <Form>
                    <Form.Label>Dados em Português:</Form.Label>
                    <div className="name_adress_Description">
                        <Form.Group className="Event_Name" controlId="NameOfEventPT">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control type="text" placeholder="Nome" />
                        </Form.Group>
                        <Form.Group className="Event_Adress" controlId="AdressOfEventPT">
                            <Form.Label>Endereço:</Form.Label>
                            <Form.Control type="text" placeholder="Endereço" />
                        </Form.Group>
                        <Form.Group className="Event_Description" controlId="DescriptionOfEventPT">
                            <Form.Label>Descrição:</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                    </div>
                    <Form.Label size="lg">Dados em Espanhol:</Form.Label>
                    <div className="name_adress_Description">
                        <Form.Group className="Event_Name" controlId="NameOfEventES">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" />
                        </Form.Group>
                        <Form.Group className="Event_Adress" controlId="AdressOfEventES">
                            <Form.Label>Dirección:</Form.Label>
                            <Form.Control type="text" placeholder="Dirección" />
                        </Form.Group>
                        <Form.Group className="Event_Description" controlId="DescriptionOfEventES">
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                    </div>
                    <Form.Label>Dados Universais:</Form.Label>
                    <div className="others_elements">
                        <Form.Group className="Event_Locate" controlId="LocateOfEvent">
                            <Form.Label>Localização</Form.Label>
                            <Form.Control type="number" placeholder="Latitude" />
                            <Form.Control type="number" placeholder="Longititude" />
                        </Form.Group>
                        <Form.Group className="Event_Date" controlId="DateOfEvent">
                            <Form.Label>Data:</Form.Label>
                            <Form.Control type="Date" placeholder="dd/mm/aaaa" />
                        </Form.Group>
                        <Form.Group className="Event_CheckBoxes" controlId="CheckOfEvents">
                            <Form.Check type="checkbox" id="IsPayOfEvent" label="Evento pago" />
                            <Form.Check type="checkbox" id="HaveTiketsOfEvent" label="Ingressos Disponíveis" />
                        </Form.Group>
                        <Form.Group className="Event_Link" controlId="SellLinkOfEvent">
                            <Form.Label>Link para vendas:</Form.Label>
                            <Form.Control type="Link" placeholder="https//:" />
                        </Form.Group>
                    </div>
                </Form>
            </div>
        </div >
    )
}

export default EventForm