import React from 'react'
import Footer from '../utils/Footer'
import Header from '../utils/Header'

export default function About(props) {

    const {theme, setTheme} = props;


    return (
        <>
        <Header theme={theme} setTheme={setTheme}/>

        <div className="container height-100">
            <div className="height-100 justify-content-center align-items-center text-center">
                <div className="w-100 dark">
                    <h2>
                    ¿Por qué esta frase?
                    </h2>
                    <p className="text-justify">
                        Siempre he tenido una mentalidad de creer en el trabajo duro para conseguir algo y también soy una persona muy activa en Twitter, por lo tanto en 2016 me dió por 
                        "twittear" la frase <em>Another day, another opportunity...</em> para empezar el día con un poco más de energias, la gracia de esa frase estaba en twittearla cada día,
                        y así hacia, durante los estos años la gente que me seguís habréis visto cada mañana un tweet mio con la frase, algunos/as os parecia ya un poco pesado, pero a otros/as os gustó 
                        y dabais apoyo con vuestro fav, o incluso twitteando también la frase, lo cuál me alegrea si algún día os ha servidor para empezar el día un poco más animados/as y confias más en vosotros/as mismos/as
                    </p>

                    <p>
                        Lamentáblemente todo tiene un fin y después de 4 años he decidido dejar de postear dicho tweet, pero como sé que a mucha gente os gusta es por esto que he decidido hacer esta app.
                        Tenéis la posibilidad de seguir recibiendo vuestro "chute" de motivación diária suscribiéndos en esta web. Así cada mañana recibiréis una notificación de "<em>Another day, another opportunity... 💯🔥</em>" dándole al botón de 
                        suscripción de la página de inicio, y cuando os canséis simplemente id a la sección de desuscripción y le daís al botón y dejaréis de recibir notificaciones.
                    </p>
                </div>
            </div>
        </div>        
        <Footer relative={true}/>
        </>
    )
}
