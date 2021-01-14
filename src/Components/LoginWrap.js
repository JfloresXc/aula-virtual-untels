import React from 'react'

import ModalEmpty from "./ModalEmpty";
import LoginForm from './LoginForm'
import '../css/loginwrap.css'
import {db} from '../firesbase'

function LoginWrap(){

     const addData = async (data) => {
        await db.collection('users').doc().set(data)
     }

    const handleForm = (e) => {
        const {name} = e.target
        if(e.target.checked && name === 'tab1'){
            document.getElementById('tab2-label').classList.remove('login-wrap__select')
            document.getElementById('tab1-label').classList.add('login-wrap__select')
            document.querySelector('.form__login-up').classList.remove('animate__flipOutY')
            document.querySelector('.form__login-in').classList.add('animate__flipOutY')
            document.querySelector('.form__login-in').classList.remove('form__login-in-inactived')
            document.querySelector('.form__login-up').classList.add('form__login-up-inactived')
            document.querySelector('.form__button-submit').innerHTML = 'Aceptar'
        }else{
            document.getElementById('tab1-label').classList.remove('login-wrap__select')
            document.getElementById('tab2-label').classList.add('login-wrap__select')
            document.querySelector('.form__login-up').classList.remove('form__login-up-inactived')
            document.querySelector('.form__login-up').classList.add('animate__flipOutY')
            document.querySelector('.form__login-in').classList.remove('animate__flipOutY')
            document.querySelector('.form__login-in').classList.add('form__login-in-inactived')
            document.querySelector('.form__button-submit').innerHTML = 'Enviar'
        }
    }

    return(
        <div className="login-wrap">
            <div className="login-wrap__subwrap">
                <h1 className="login-wrap__title">Aula Virtual</h1>
                <div className="login-wrap__group-subtitle">
                    <input type="radio" className="login-wrap__input-checked" id="tab1" onClick={handleForm} name="tab1" checked/>
                    <label for="tab1" className="login-wrap__tab login-wrap__select" id="tab1-label">Ingresar</label>
                    <input type="radio" className="login-wrap__input-checked" id="tab2" onClick={handleForm} name="tab2"/>
                    <label for="tab2" className="login-wrap__tab" id="tab2-label">Olvide Contraseña</label>
                </div>

                <LoginForm addData = {addData}/>
            </div>

            <ModalEmpty />
        </div>

    )
}

export default LoginWrap