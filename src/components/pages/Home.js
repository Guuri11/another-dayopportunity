import React, { useEffect, useState } from 'react'
import Footer from '../utils/Footer'
import Header from '../utils/Header'
import vapid from "../../utils/vapid"

export default function Home(props) {

    const [subscription, setSubscription] = useState({})
    const [sendSubscription, setsendSubscription] = useState(false)
    const {theme, setTheme} = props;
    const [subscribed, setSubscribed] = useState(false)

    useEffect(() => {

        if (sendSubscription) {
        fetch('api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( subscription )
        }).then( () => {
            setsendSubscription(false)
        })
        .catch( console.log );
        }
  }, [sendSubscription])

    const notify = () => {

            if (window.Notification) {

                if (Notification.permission === 'granted') {
                    subscribe()
            
                } else if (Notification.permission !== "denied" || Notification.permission === "default") {
                    
                    setSubscribed(true);

                    Notification.requestPermission( permission => {

                    if (permission === 'granted') {
                        subscribe()
                    }
                    } ).catch(console.log())
                }
            
                } else {
                    alert('No están permitidas las notificaciones en este navegador, prueba con otro.')
                }

    }
  
    const subscribe = () => {
  
        navigator.serviceWorker.getRegistration().then(swReg => {
        swReg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: vapid.key
        })
        .then(res => res.toJSON())
        .then(subscription => {
            setSubscription(subscription)
            setsendSubscription(true);
        })
            
        })
    
    }


    return (
        <>
        <Header theme={theme} setTheme={setTheme}/>
        <div className="container height-100">
            <div className="row height-100 justify-content-center align-items-center text-center">
                <div className={"w-100 "+theme}>
                    <h1 className="text-center title">Another day,<br/> another opportunity. </h1>
                    <h4 className="subtitle">Obtén tu notificación diaria</h4>
                    <button 
                    className="btn btn-dark mt-3" 
                    onClick={notify}>
                    Subscríbete 💯
                    </button>
                    <br/>
                    <p className="mt-2 text-justify">
                    Se te preguntará si deseas aceptar recibir notificaciones de esta página en el dispositivo que estás utilizando ahora mismo. 
                    Pulsa en <em><strong>Permitir notificaciones</strong></em> y recibiras la confirmación de suscripción. Cada mañana te llegará tu notificación para empezar el día con 
                    más fuerza y motivación, podrás cancelar la suscripción siempre que quieras (ver en guía).
                    En caso de haber negado por error el recibir las notificaciones, puedes cambiar esto en la configuración del navegador que estás utilizando
                    </p>
                </div>
            </div>
        </div>        
        <Footer theme={theme} relative={ subscribed }/>
        </>
    )
}