import styles from "./page.module.scss";

import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import Info from "@/components/Info/Info";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <Banner />
      <Info />
    </main>
  );
}
