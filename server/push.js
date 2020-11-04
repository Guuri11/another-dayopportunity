
const fs = require('fs');

let suscripciones = require('./subs-db.json');
const vapid = require('./vapid.json');


const webpush = require('web-push');

webpush.setVapidDetails(
    'mailto:sergio.gurillo11@gmail.com',
    vapid.publicKey,
    vapid.privateKey
  );


module.exports.addSubscription = ( suscripcion ) => {

    suscripciones.push( suscripcion );

    fs.writeFileSync(`${ __dirname }/subs-db.json`, JSON.stringify(suscripciones) );

    const pushProm = webpush.sendNotification( suscripcion, JSON.stringify({title: 'Another day, another opportunity... 💯🔥', body: '¡Bienvenido!'}) )
        .then( console.log( 'Notificacion enviada ') )
        .catch( err => {

            console.log(err);
            console.log('Notificación falló');

        });
};

module.exports.sendPush = () => {

    console.log('Mandando PUSHES');

    const notificacionesEnviadas = [];


    suscripciones.forEach( (suscripcion, i) => {


        const pushProm = webpush.sendNotification( suscripcion, JSON.stringify({title: 'Another day, another opportunity... 💯🔥', body: '!Buenos días!'}) )
            .then( console.log( 'Notificacion enviada ') )
            .catch( err => {

                console.log(err);
                console.log('Notificación falló');

                if ( err.statusCode === 410 ) { // GONE, ya no existe
                    suscripciones[i].borrar = true;
                }

            });

        notificacionesEnviadas.push( pushProm );

    });

    Promise.all( notificacionesEnviadas ).then( () => {

        suscripciones = suscripciones.filter( subs => !subs.borrar );

        fs.writeFileSync(`${ __dirname }/subs-db.json`, JSON.stringify(suscripciones) );

    });

}
