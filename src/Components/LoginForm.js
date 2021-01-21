import React, { useState } from "react";

import "../css/loginform.css";

function LoginForm(props) {
    const initialsValues = {
        user: '',
        password: '',
        active: false
    }

    const [values, setValues] = useState(initialsValues)

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value, active: true })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.active !== initialsValues.active) {
            props.addData(values)
            setValues(initialsValues)
            console.log('Datos llenos')
        } else {
            console.log('Datos vacios')
            document.getElementById("modal-empty").classList.remove('modal-empty__overlay-hidden')
            document.getElementById("modal-empty").classList.add('modal-empty__overlay-show')
        }
        
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__login-in ">
                {/* Group user */}
                <div className="form__group">
                    <label htmlFor="user" className="form__label">Usuario</label>
                    <input type="text" className="form__input" name="user" id="user" onChange={handleChange} value={values.user} />
                </div>

                {/* Group password */}
                <div className="form__group">
                    <label htmlFor="password" className="form__label">Contraseña</label>
                    <input type="password" className="form__input" name="password" id="password" onChange={handleChange} value={values.password} />
                </div>
            </div>

            <div className="form__login-up form__login-up-inactived">
                <div className="form__group">
                    <label htmlFor="email" className="form__label">Correo Electrónico</label>
                    <input type="email" className="form__input" name="email" id="email" />
                </div>
            </div>

            <button className="form__button-submit" type="submit">Aceptar</button>
            <div className="form__hr"></div>
        </form>
    )
}

export default LoginForm