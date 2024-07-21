import Boton from "@/components/Boton/Boton";
import styles from "./page.module.scss";

import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <section className={styles.container}>
      <Banner />
      <div className={styles.info}>
        <h3>Objetivo: liga de fútbol rápido</h3>
        <p>Esta liga se conforma por 12 equipos y se desarrolla a lo largo de 11 jornadas.</p>
        <p>Para gestionar eficientemente esta liga, se desarrolló un programa informático. Este programa hará uso de archivos para almacenar datos, estructuras para organizar la información y apuntadores para optimizar el acceso a los datos.</p>
        <p>De esta manera, mantenemos un seguimiento detallado del progreso de la liga, los equipos y los jugadores.</p>
      </div>
      <div className={styles.btns}>
        <Boton 
          href="/codigos/programa" 
          texto="Código del programa" 
          colorPrimario="var(--Naranja)" 
          colorSecundario="var(--White)"
        />
        <Boton 
          href="/codigos/graficacion" 
          texto="Código de la graficación" 
          colorPrimario="var(--Naranja)" 
          colorSecundario="var(--White)"
        />
      </div>
    </section>
  );
}
