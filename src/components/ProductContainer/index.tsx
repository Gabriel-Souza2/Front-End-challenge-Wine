import { Container } from "./styles";
import { IProduct } from "@/dao/product";
import { AddButton } from "../AddButton";

interface Props {
  data: IProduct;
}

export function ProductContainer({ data }: Props) {
  const [priceInteger, priceDecimal] = data.priceMember.split(",");

  return (
    <Container>
      <a href={`/product/${data.id}`} className="product-wrapper">
        <img src={data.image} alt="Imagem do vinho" />
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

      <AddButton data={data} quantity={1} />
    </Container>
  );
}
