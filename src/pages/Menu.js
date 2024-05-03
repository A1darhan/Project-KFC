import Sections from "../componets/Sections/Sections";
import FilterList from "../componets/Products/FilterList";
import "../App.css";
import BasketCard from "../componets/Basket/Basket";
import { useEffect, useState } from "react";
import { Empty } from "antd";
import "./Main.css";
// import { Outlet } from "react-router-dom";
import { AuthContext } from "../componets/Authorization/AuthContext";

function Menu() {
  const [, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  const handleAddToCart = (product) => {
    // Проверяем, существует ли уже продукт в корзине
    const existingProduct = cartItems.find((item) => item.id === product.id);
    // Если продукт уже есть в корзине, увеличиваем его количество
    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      // Если продукта еще нет в корзине, добавляем его с начальным количеством 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== itemToRemove.id
    );
    setCartItems(updatedCartItems);
  };

  const [isLoginIn, setIsLoginIn] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const login = (values) => {
    setUser(values);
    setIsLoginIn(true);
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ ...user, isLoginIn }}>
        <div className="main">
          <div className="sections">
            <Sections />
          </div>
          <div className="products">
            <FilterList onCardBuyClick={handleAddToCart} />
          </div>

          <div className="basket">
            {cartItems.length === 0 ? (
              <div className="basketEmpty">
                <Empty description={false} />
                <p>Ваша корзина пуста.</p>
              </div>
            ) : (
              <div className="basketFull">
                <BasketCard
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  onLogClick={login}
                />
              </div>
            )}
            {/* Информация о заказе:*/}
            {/* <Outlet /> */}
          </div>
        </div>
      </AuthContext.Provider>
    </div>
  );
}

export default Menu;
