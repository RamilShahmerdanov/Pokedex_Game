import styles from "../carts/cart.module.css";
import PropTypes from "prop-types";

function Cart(props) {
  console.log("propsid", props.id);

  let fixId = props.id.toString().padStart(3, "0");
  return (
    <div>
      <div className={styles.team1carts}>
        <h4>{props.name}</h4>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fixId}.png`}
          alt=""
        />
        <p>Type:{props.type}</p>
        <p>EXP:{props.exp}</p>
      </div>
    </div>
  );
}

Cart.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  exp: PropTypes.number.isRequired,
};

export default Cart;
