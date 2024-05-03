import { Outlet } from "react-router-dom";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="App">
      <div className="navigationStyle">
        <div className="navigationContainer">
          <Link to={"/"}>
            <img
              className="imgKfc"
              src="https://rozetked.me/images/uploads/SgmehaVOcUuD.png"
              alt="Logo"
            />
          </Link>
          <div className="naviMenu">
            <Link className="Careers" to={"/careers"}>
              КАРЬЕРА В КФС
            </Link>
            <Link to={"/"}>МЕНЮ</Link>
            {/* <button className="buttonBuy">ЗАКАЗАТЬ СЕЙЧАС</button> */}
            <a className="ahref" href="https://www.kfc.kz/stores">
              <img
                className="icon1"
                src="https://cdn-icons-png.flaticon.com/512/79/79854.png"
                width="25"
                alt="магаз"
              />
              <img
                className="icon1"
                src="https://cdn-icons-png.flaticon.com/512/134/134744.png"
                width="25"
                alt="телефон"
              />
              <img
                className="icon1"
                src="https://cdn-icons-png.flaticon.com/512/4519/4519678.png"
                width="25"
                alt="иконка чела"
              />
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
