import { Container, AddButton } from "./styles";

interface Props {
  data: IProduct;
}

interface IProduct {
  title: string;
  price: string;
  oldPrice: string;
  notPartnerPrice: string;
  discount: string;
}

export function Product({ data }: Props) {
  const [priceInteger, priceDecimal] = data.price.split(",");
  return (
    <Container>
      <div className="product-wrapper">
        <img src="/wine.png" alt="vinho" />
        <p>{data.title}</p>
        <div className="discount">
          <span className="old-price">R$ {data.oldPrice}</span>
          <span className="total-discount">{data.discount}% OFF</span>
        </div>
        <div className="price-wrapper">
          <span className="partner">Sócio wine</span>
          <span className="price">
            <span className="symbol">R$</span>
            <span className="integer">{priceInteger}</span>,{priceDecimal}
          </span>
        </div>
        <span className="not-partner">Não sócio R$ {data.notPartnerPrice}</span>
      </div>
      <AddButton>Adicionar</AddButton>
    </Container>
  );
}
