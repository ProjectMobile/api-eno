import { React, useState } from 'react';
import './styles.css'
import { useNavigate } from "react-router-dom";

// import { Input, Label, Button, FormGroup } from 'reactstrap';

function Form() {
    
    const [visible, setVisible] = useState(false)
    function visibility() {
        setVisible(!visible)
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/Home'; 
      navigate(path);
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
                <div >
                    <input classname='checkbox' type='checkbox' name='visibility' id='checkbox' onClick={() => visibility()} />
                    <label className='checklabel'>show password</label>
                </div>
                <input type='submit' value='Login' className='buttom' onClick={routeChange} />
            </form>

        </div>
    );

}

export default Form;