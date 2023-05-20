import { Container, AddButton } from "./styles";
import { IProduct } from "@/dao/product";
import { useCart } from "@/context/CartContext";

interface Props {
  data: IProduct;
}

export function ProductContainer({ data }: Props) {
  const [priceInteger, priceDecimal] = data.priceMember.split(",");
  const cartContext = useCart();

  function handleAddToCart() {
    if (cartContext.checkIfAlreadyExists(data.id)) {
      const item = cartContext.getCartById(data.id);
      cartContext.UpdateQuantityProduct(data.id, item.quantity + 1);
    } else {
      cartContext.addToCart({
        id: data.id,
        image: data.image,
        name: data.name,
        quantity: 1,
        price: data.price,
      });
    }
  }

  return (
    <Container>
      <a href={`/product/${data.id}`} className="product-wrapper">
        <img src={data.image} alt="vinho" />
        <div className="title">
          <p>{data.name}</p>
        </div>
        <div className="discount">
          <span className="old-price">R$ {data.price}</span>
          <span className="total-discount">{60}% OFF</span>
        </div>
        <div className="price-wrapper">
          <span className="partner">Sócio wine</span>
          <span className="price">
            <span className="symbol">R$</span>
            <span className="integer">{priceInteger}</span>
            {priceDecimal}
          </span>
        </div>
        <span className="not-partner">Não sócio R$ {data.priceNonMember}</span>
      </a>
      <AddButton onClick={handleAddToCart}>Adicionar</AddButton>
    </Container>
  );
}
