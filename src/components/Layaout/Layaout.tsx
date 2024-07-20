import React, { ReactNode } from 'react';
import Header from './Aside/Aside';
import styles from './Layaout.module.scss';

interface LayaoutProps {
    children: ReactNode
}

export default function Layaout({ children }: LayaoutProps) {
    return (
        <main className={styles.container}>
            <Header />
            {children}
        </main>
    )
}
