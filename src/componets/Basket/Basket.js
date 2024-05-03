import { DeleteOutlined } from "@ant-design/icons";
import { Space } from "antd";
import "./Basket.css";
import { useContext } from "react";
import { AuthContext } from "../Authorization/AuthContext";
import LoginForm from "../Authorization/LoginForm";

function BasketCard({ cartItems, removeFromCart, onLogClick }) {
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const { username, isLoginIn } = useContext(AuthContext);

  return (
    <>
      {isLoginIn ? (
        <div className="basketContainer">
          <h3>Здравствуйте {username}!</h3>
          <h2>КОРЗИНА:</h2>
          <table>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="tdName">{item.name}</td>
                  <td className="tdPrice">- {item.price} ₸</td>
                  <td className="tdQuantity">x {item.quantity} шт</td>
                  <td className="tdDelete">
                    <Space>
                      <DeleteOutlined onClick={() => removeFromCart(item)} />
                    </Space>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            <span className="totalPrice">ИТОГО:</span> {getTotalPrice()} ₸
          </p>
          <p> Приятного аппетита!</p>
        </div>
      ) : (
        <>
          <h2>Для добавления товаров в корзину пожалуйста авторизируйтесь!</h2>
          <LoginForm onLogClick={onLogClick} />
        </>
      )}
    </>
  );
}

export default BasketCard;
