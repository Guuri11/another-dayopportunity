import React, { useState } from 'react'
import Footer from '../utils/Footer'
import Header from '../utils/Header'

export default function Subscribe(props) {

    const [unsubscribe, setUnsubscribe] = useState(false)
    const {theme, setTheme} = props;


    const processUnsubscribe = () => {
        navigator.serviceWorker.getRegistration().then( swReg => {
    
          swReg.pushManager.getSubscription().then( subs => {
    
            subs.unsubscribe().then( () =>  setUnsubscribe(true) );
    
        });
      });
      }
    

    return (
        <>
        <Header theme={theme} setTheme={setTheme}/>
            <div className="container height-100">
                <div className="height-100 justify-content-center align-items-center text-center">
                    <div className="w-100 dark">
                        <h1 className="text-center title">Another day,<br/> another opportunity. </h1>
                        <h4 className="subtitle">Dejar de recibir notificaciones</h4>
                        {
                            unsubscribe ?
                            <p>¡Suscripción finalizada! Espero que al menos te hayas levantado cada mañana con un poco más de energias gracias a esto. Puedes volver a 
                                suscribirte siempre que quieras bro! 💯
                            </p>
                            :
                            <button 
                            className="btn btn-dark mt-3" 
                            onClick={processUnsubscribe}
                            >Desuscríbete aquí</button>
                        }
                    </div>
                </div>
            </div>        
        
            <Footer/>
        </>
    )
}
