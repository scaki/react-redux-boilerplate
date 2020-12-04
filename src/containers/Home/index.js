import logo from "./logo.svg";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.homeHeader}>
        <img src={logo} className={styles.homeLogo} alt="logo" />
        <p>
          Edit <code>src/contaiers/Home/index.js</code> and save to reload.
        </p>
        <a
          className={styles.homeLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
