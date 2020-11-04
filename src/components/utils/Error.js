import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Error(props) {

    const {theme, setTheme} = props;

    return (
        <>
        <Header theme={theme} setTheme={setTheme}/>
        <div className="container height-100">
            <div className="height-100 justify-content-center align-items-center text-center">
                <div className="w-100">
                    <h1 className="text-center title">¡Error!</h1>
                    <Link to={'/'}>Vuelve al inicio</Link>
                </div>
            </div>
        </div> 
        <Footer/>
        </>
    )
}
