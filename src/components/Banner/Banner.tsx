import React from 'react';
import styles from './Banner.module.scss';
import Image from 'next/image';

import { dancing } from '@/app/ui/fonts';
import jugador from '@/../public/jugador.svg';

export default function Banner() {
    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
                <Image src={jugador} width={250} height={250} alt='Jugador de soccer' />
                <h2 className={dancing.className} >AcaLeague</h2>
            </div>
        </div>
    )
}
