import React from 'react';
import styles from './Banner.module.scss';
import Image from 'next/image';

import jugador from '@/../public/Juagador-Logo.svg';

export default function Banner() {
    return (
        <section className={styles.container}>
            <div className={styles.name__container} >
                <h1>acaleague</h1>
                <h2>Gestiona tu liga de fútbol </h2>
            </div>
            <Image src={jugador} alt="jugador"/>
        </section>
    )
}
