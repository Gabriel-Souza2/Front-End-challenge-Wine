import { useState } from "react";
import { Container, Quantity } from "./styles";

interface Props {
  title: string;
  price: number;
  quantity?: number;
}

export function CartItem({ title, price, quantity = 1 }: Props) {
  const [quantityItem, setQuantityItem] = useState(quantity);
  const [priceInteger, priceDecimal] = String(price).split(".");

  function handleSubItems() {
    if (quantityItem === 1) return;
    setQuantityItem((state) => {
      return state - 1;
    });
  }

  function handleAddItems() {
    setQuantityItem((state) => {
      return state + 1;
    });
  }

  return (
    <Container>
      <img
        src="https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=110/assets-images/produtos/RGQ315-01.png"
        alt=""
      />
      <div className="info">
        <h3 className="name">{title}</h3>
        <div className="footer">
          <Quantity>
            <button onClick={handleSubItems}> - </button>
            <span>{quantityItem}</span>
            <button onClick={handleAddItems}> + </button>
          </Quantity>
          <div className="price">
            <span className="price-currency">R$ </span>
            <span className="price-integer">{priceInteger}</span>
            <span className="price-decimal">,{priceDecimal}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
