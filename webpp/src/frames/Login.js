import { useState } from 'react';
import '../css/Login.css';

function Login() {
    const [visible, setVisible] = useState(false)

    function visibility() {
        setVisible(!visible)
    }

    return (
        <div className='login'>
            <form className='form'>
                <div className='title'>
                    <label> 7ª</label>
                    <label> FRONTEIRA</label>
                </div>
                <div className='logo'>
                    <label> FESTIVAL BINACIONAL </label>
                    <label> DE ENOGASTRONOMIA </label>
                </div>
                    <input type='text' name='e-Mail' placeholder='E-mail' className='input' />
                    <input type={visible ? 'text' : 'password'} name='password' placeholder='Password' className='input' />
                <div className='checkboxDiv'>
                    <input type='checkbox' name='visibility' id='checkbox' onClick={() => visibility()} />
                    <label className='checkbox'>show password</label>
                </div>
                <input type='submit' value='Login' className='buttom' />
            </form>
        </div>
    );
}

export default Login;