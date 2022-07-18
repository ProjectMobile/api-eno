import { React, useState } from 'react';
import './styles.css'
import { useNavigate } from "react-router-dom";
import { setRefresh, setToken } from './../../cookies/setCookies'
import logo from '../../Assets/Img/logo.png'
import { Form, Button } from 'react-bootstrap'
import { api } from '../../Api/'

function LoginForm() {

    const tryLog = () => {
        api.post('auth', {
            email,
            password
        }).then((res) => {
            if (res.status === 200) {
                setToken(res.data.token)
                setRefresh(res.data.refreshT)
                navigate('/home')
            }
        }).catch((error) => {
            alert('Senha ou Usuário Incorretos!')
        })
    }

    const navigate = useNavigate();

    const [visible, setVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function visibility() {
        setVisible(!visible)
    }

    return (
        <div className='login'>
            <form className='login-background'>
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
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <label htmlFor="floatingInputCustom">E-mail</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type={visible ? 'text' : 'password'}
                            placeholder="Password"
                            className='input'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <label htmlFor="floatingPasswordCustom">Senha</label>
                    </Form.Floating>
                </>
                <div >
                    <input className='checkbox' type='checkbox' name='visibility' id='checkbox' onClick={() => visibility()} />
                    <label className='checklabel'>show password</label>
                </div>
                <Button variant='outline-light' className='buttom' onClick={() => { tryLog() }}>Entrar</Button>
            </form>
        </div>
    );

}

export default LoginForm;