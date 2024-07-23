import React from 'react';
import styles from './Info.module.scss';

export default function Info() {
    return (
        <section id='aplicacion' className={styles.container}>
            <h2>Mantén un seguimiento detallado  de la liga, los equipos y los jugadores.</h2>
            <div>
                <p>Obtén los resultados de cada partido, acumulando los puntos obtenidos durante las 11 jornadas de competición.</p>
                <p>Presenta un podio virtual que exhiba los puntajes acumulados de los equipos líderes, celebrando su éxito y esfuerzo.</p>
                <p>Mantén la emoción y la competitividad identificando a los 8 equipos de mejor rendimiento</p>
                <p>Destaca al máximo goleador de la liga, resaltando su contribución al juego. </p>
            </div>
        </section>    
    )
}
