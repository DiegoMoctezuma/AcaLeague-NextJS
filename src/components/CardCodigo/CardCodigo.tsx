import React from 'react';
import Image from 'next/image';

import styles from './CardCodigo.module.scss';
import codeImg from '@/../../public/Code.png';
import codeDots from '@/../../public/codedots.svg';
import Link from 'next/link';

interface CardCodigoProps{
    texto:string;
    href:string;
}

export default function CardCodigo({texto,href}:CardCodigoProps) {
    return (
        <Link href={href} className={styles.container}>
            <Image src={codeImg} alt='imagen de código'/>
            <div className={styles.info__container}>
                <p>{texto}</p>
                <Image src={codeDots} alt='simbolo de código'/>
            </div>
        </Link>
    )
}
