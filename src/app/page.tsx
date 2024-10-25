import styles from "./page.module.sass";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Finance App</h1>
      </main>
      <footer className={styles.footer}>
        <a href="https://github.com/felipesdevsk" target="_blank">@felipesdevsk</a>
      </footer>
    </div>
  );
}
