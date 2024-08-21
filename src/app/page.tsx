import styles from "./page.module.scss";

import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import Info from "@/components/Info/Info";
import CardMuestra from "@/components/CardMuestra/CardMuestra";
import CardCodigo from "@/components/CardCodigo/CardCodigo";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header/>
      <Banner/>
      <Info/>
      <CardMuestra/>
      <section className={styles.cards__container}>
        <CardCodigo texto="Código del programa" href="/codigo/programa"/>
        <CardCodigo texto="Código de graficación" href="/codigo/graficacion"/>
      </section>
    </main>
  );
}
