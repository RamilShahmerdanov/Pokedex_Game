import Cart from "../carts/Cart";
import styles from "../team1/team1.module.css";
function Team1({ team, score, title }) {
  console.log("team", team);
  console.log("title", title);
  

  return (
    <>
      <div className={styles.team1area}>
        <div className={styles.team1head}>
          <h2 style={{ color: title === "Winner" ? "green" : "red" }}>{title}</h2>
          <p>{score}</p>
        </div>
        <div className={styles.carts}>
          {team.map((item) => {
            return (
              <Cart
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                type={item.type}
                exp={item.base_experience}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Team1;
