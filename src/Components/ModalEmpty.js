import React from 'react'

import '../css/modalempty.css'

function ModalEmpty() {
    const handleModal = () => {
        document.getElementById("modal-empty").classList.remove('modal-empty__overlay-show')
        document.getElementById("modal-empty").classList.add('modal-empty__overlay-hidden')
    }

    return (
        <div className="modal-empty__overlay modal-empty__overlay-hidden" id="modal-empty">
            <div className="modal-empty__modal animate__animated animate__bounceIn">
                <span className="modal-empty__icon material-icons">error_outline</span>
                <h1 className="modal-empty__title">Aula Virtual</h1>
                <p className="modal-empty__text">Completa los datos</p>
                <div className="modal-empty__footer">
                    <button className="modal-empty__button" onClick={handleModal}>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default ModalEmpty
