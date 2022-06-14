import { React, useState } from 'react';
import './styles.css'
import { useNavigate } from "react-router-dom";
import logo from '../../Assets/Img/logo.png'
import { Form } from 'react-bootstrap'

function LoginForm() {

    const [visible, setVisible] = useState(false)
    function visibility() {
        setVisible(!visible)
    }

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/Home';
        navigate(path);
    }

    return (
        <div className='login'>
            <form className='background'>
                <img
                    alt='logo'
                    src={logo}
                    className='logo'
                />
                <>
                    <Form.Floating>
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                            className='input'
                        />
                        <label htmlFor="floatingInputCustom">E-mail</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type={visible ? 'text' : 'password'}
                            placeholder="Password"
                            className='input'
                        />
                        <label htmlFor="floatingPasswordCustom">Senha</label>
                    </Form.Floating>
                </>
                <div >
                    <input classname='checkbox' type='checkbox' name='visibility' id='checkbox' onClick={() => visibility()} />
                    <label className='checklabel'>show password</label>
                </div>
                <input type='submit' value='Entrar' className='buttom' onClick={routeChange} />
            </form>

        </div>
    );

}

export default LoginForm;