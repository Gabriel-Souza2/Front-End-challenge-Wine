import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Container, Quantity } from "./styles";

interface Props {
  id: string;
  img: string;
  title: string;
  price: string;
  quantity?: number;
}

export function CartItem({ id, img, title, price, quantity = 1 }: Props) {
  const [quantityItem, setQuantityItem] = useState(quantity);
  const [priceTotal, setPriceTotal] = useState(
    (Number(price) * quantity).toFixed(2)
  );
  const [priceInteger, priceDecimal] = String(priceTotal).split(".");

  const cartContext = useCart();

  function changePriceTotal(quantity: number) {
    setPriceTotal((Number(price) * quantity).toFixed(2));
  }

  function handleSubItems() {
    if (quantityItem <= 1) {
      cartContext.removeFromCart({
        id: id,
        quantity: quantity,
        price: price,
        name: title,
        image: img,
      });

      return;
    }
    setQuantityItem((state) => {
      changePriceTotal(state - 1);

      cartContext.UpdateQuantityProduct(id, state - 1);

      return state - 1;
    });
  }

  function handleAddItems() {
    setQuantityItem((state) => {
      changePriceTotal(state + 1);
      cartContext.UpdateQuantityProduct(id, state + 1);

      return state + 1;
    });
  }

  return (
    <Container>
      <img src={img} alt="" className="img" />
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
