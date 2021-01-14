import React from 'react'

import '../css/loading.css'

function Loading() {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('loader__time')
    }, 1000)

    setTimeout(() => {
        document.querySelector('.loader').classList.add('loader__hidden')
    }, 1500)

    return (
        <div className="loader ">
            <div className="loader__into">
            </div>
        </div>
    )
}

export default Loading