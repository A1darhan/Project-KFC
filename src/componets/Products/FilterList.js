import ProductList from "./ProductList";
import "./Products.css";
import { useEffect, useState } from "react";

function FilterList({ onCardBuyClick }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://mocki.io/v1/16efb71a-3149-492b-ba82-5f513458e24b"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const Baskets = data.filter((product) => product.section === "Баскеты");
  const Chicken = data.filter(
    (product) => product.section === "Сочная курочка"
  );
  const Bokses = data.filter((product) => product.section === "Боксы");
  const KomboBurgers = data.filter(
    (product) => product.section === "Комбо Бургеры"
  );
  const KomboBasket = data.filter(
    (product) => product.section === "Комбо Баскеты"
  );
  const Burgers = data.filter((product) => product.section === "Бургеры");
  const Twisters = data.filter((product) => product.section === "Твистеры");
  const Sneks = data.filter((product) => product.section === "Снэки");
  const Saus = data.filter((product) => product.section === "Соусы и допы");
  const Drink = data.filter((product) => product.section === "Напитки");
  const isRecomendation = data.filter(
    (product) => product.isRecomendation === true
  );
  return (
    <div>
      <div id="Recomendation">
        <p className="nameSect">РЕКОМЕНДУЕМ</p>
        <ProductList list={isRecomendation} onCardBuyClick={onCardBuyClick} />
      </div>
      <div id="Baskets">
        <p className="nameSect">Баскеты</p>
        <ProductList list={Baskets} onCardBuyClick={onCardBuyClick} />
      </div>
      <div id="Chicken">
        <p className="nameSect">Сочная курочка</p>
        <ProductList list={Chicken} onCardBuyClick={onCardBuyClick} />
      </div>
      <div id="Boxs">
        <p className="nameSect">Боксы</p>
        <ProductList list={Bokses} onCardBuyClick={onCardBuyClick} />
      </div>
      <div id="KomboBurgers">
        <p className="nameSect">Комбо Бургеры</p>
        <ProductList list={KomboBurgers} onCardBuyClick={onCardBuyClick} />
      </div>
      <div id="KomboBaskets">
        <p className="nameSect">Комбо Баскеты</p>
        <ProductList list={KomboBasket} onCardBuyClick={onCardBuyClick} />
      </div>
      <div id="Burgers">
        <p className="nameSect">Бургеры</p>
        <ProductList list={Burgers} onCardBuyClick={onCardBuyClick} />
      </div>
      <div id="Twisters">
        <p className="nameSect">Твистеры</p>
        <ProductList list={Twisters} onCardBuyClick={onCardBuyClick} />
      </div>
      <div id="Sneks">
        <p className="nameSect">Снэки</p>
        <ProductList list={Sneks} onCardBuyClick={onCardBuyClick} />
      </div>
      <div id="Sauses">
        <p className="nameSect">Соусы и допы</p>
        <ProductList list={Saus} onCardBuyClick={onCardBuyClick} />
      </div>
      <div id="Drink">
        <p className="nameSect">Напитки</p>
        <ProductList list={Drink} onCardBuyClick={onCardBuyClick} />
      </div>
    </div>
  );
}

export default FilterList;
