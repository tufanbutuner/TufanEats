import MealsImage from "../../assets/meals.jpg";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header() {
  return (
    <>
      <header className="header">
        <h1>Tufan Eats</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={MealsImage} alt="meals" />
      </div>
    </>
  );
}
