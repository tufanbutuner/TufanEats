import MealsImage from "../../assets/meals.jpeg";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header({ onShowCart }) {
  return (
    <>
      <header className="header">
        <h1>Tufan Eats</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className="main-image">
        <img src={MealsImage} alt="meals" />
      </div>
    </>
  );
}
