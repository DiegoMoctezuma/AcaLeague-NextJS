import React from 'react';
import styles from './Aside.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/../public/LogoNara.png';
import { 
    IoHomeOutline, 
    IoCalendarOutline, 
    IoFootballOutline, 
    IoPeopleOutline 
} from "react-icons/io5";

const links = [
    {
        name: 'Home',
        icon: IoHomeOutline,
        href: '/'
    },
    {
        name: 'Jornadas',
        icon: IoCalendarOutline,
        href: '/jornadas'
    },
    {
        name: 'Equipos',
        icon: IoFootballOutline,
        href: '/equipos'
    },
    {
        name: 'Devs',
        icon: IoPeopleOutline,
        href: '/desarrolladores'
    }
];

export default function Aside() {
    return (
        <aside className={styles.container}>
            <Image src={Logo} alt="AcaLeague" width={200} height={200} priority />
            <nav className={styles.navSection}>
                <ul>
                    {
                        links.map(link => (
                            <Link key={link.name} href={link.href}>
                                <li>
                                    <link.icon />
                                    {link.name}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    )
};