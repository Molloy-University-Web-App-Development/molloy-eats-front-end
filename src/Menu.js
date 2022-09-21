import Menuitem from "./Menuitem";
import "./styles.css";
export default function Menu() {
  return (
    <div className="Menu">
      <h1>Anselma Breakfast! </h1>
      <Menuitem name="bagel" price="2.50" />

      <p>
        {" "}
        <ul>
          {" "}
          <li> Apple Turnover $2.30 </li>
          <li>Bagel - Cinnamon Raisin with Butter $1.40 </li>
          <li> Bagel - Cinnamon Raisin with Cream Cheese $1.80</li>
        </ul>{" "}
      </p>
    </div>
  );
}
