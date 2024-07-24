import React from 'react';
import styles from './CardMuestra.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import { IoMdOpen } from "react-icons/io";
import logoLiga from '@/../public/LogoNara.png';

export default function CardMuestra() {
    return (
        <div id='muestra' className={styles.container}>
            <Image src={logoLiga} alt='Logo liga de muestra' />
            <Link href={"/LigaMuestra"} className={styles.button}>
                Ver liga muestra
                <IoMdOpen size={30}/>
            </Link>
        </div>
    )
}
