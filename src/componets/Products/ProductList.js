import ProductCard from "./ProductCard";
import Container from "./Container";

export default function ProductList({ list, onCardBuyClick }) {
  return (
    <div className="basketSection">
      {
        <Container>
          {list.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              cardId={product.id}
              onBuyClick={() => onCardBuyClick(product)}
            />
          ))}
        </Container>
      }
    </div>
  );
}
