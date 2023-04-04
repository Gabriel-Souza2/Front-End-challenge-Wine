import { Container, AddButton } from "./styles";
import { IProduct } from "@/dao/product";

interface Props {
  data: IProduct;
}

export function Product({ data }: Props) {
  const [priceInteger, priceDecimal] = data.priceMember.split(",");
  return (
    <Container>
      <div className="product-wrapper">
        <img src={data.image} alt="vinho" />
        <p>{data.name}</p>
        <div className="discount">
          <span className="old-price">R$ {data.price}</span>
          <span className="total-discount">{60}% OFF</span>
        </div>
        <div className="price-wrapper">
          <span className="partner">Sócio wine</span>
          <span className="price">
            <span className="symbol">R$</span>
            <span className="integer">{priceInteger}</span>,{priceDecimal}
          </span>
        </div>
        <span className="not-partner">Não sócio R$ {data.priceNonMember}</span>
      </div>
      <AddButton>Adicionar</AddButton>
    </Container>
  );
}
