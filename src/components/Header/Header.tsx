import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/../public/Logo-Balon-Blanco.png';

export default function Header() {
    return (
        <header className={styles.container}>
            <Image src={logo} alt="logo" width={115} height={115} />
            <ul className={styles.nav__container}>
                <li><Link href="#aplicacion">Aplicación</Link></li>
                <li><Link href="#muestra">Muestra</Link></li>
            </ul>
        </header>
    )
}
