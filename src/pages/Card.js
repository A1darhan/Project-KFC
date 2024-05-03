import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailCard() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mocki.io/v1/16efb71a-3149-492b-ba82-5f513458e24b");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  if (!data[id]) {
    return <p>Загрузка...</p>;
  }

  const product = data[id];

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} width="300" alt="product"/>
      <p>Состав: {product.description}</p>
      <p>Цена: {product.price}</p>
    </div>
  );
}