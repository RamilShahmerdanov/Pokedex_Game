import styles from "../header/header.module.css";
function Header(props) {
  return (
    <>
      <div className={styles.header}>
        <h1>Pokedex</h1>
        <button className={styles.btn} onClick={props.onClick}>
          Start Game
        </button>
      </div>
    </>
  );
}

export default Header;
