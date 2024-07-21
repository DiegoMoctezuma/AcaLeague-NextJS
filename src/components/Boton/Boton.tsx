import Link from 'next/link';
import React from 'react';

import styles from './Boton.module.scss';

interface BotonProps {
    texto: string;
    colorPrimario: string;
    colorSecundario: string;
    href: string;
};

export default function Boton({ texto, colorPrimario, colorSecundario, href }:BotonProps) {
    return (
        <Link href={href} >
            <p 
                className={styles.boton}
                style={{
                    backgroundColor:`${colorPrimario}`,
                    color:`${colorSecundario}`,
                    borderBlockColor:`${colorSecundario}`
                }}
            >
                {texto}
            </p>
        </Link>
    )
}
