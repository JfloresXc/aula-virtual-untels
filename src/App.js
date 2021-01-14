import React from 'react'

/* Components */
import LoginWrap from './Components/LoginWrap'
import Loading from './Components/Loading'


function App() {
    return (
        <>
            <Loading />
            <main>
                <LoginWrap />
            </main>
        </>
    )
}

export default App