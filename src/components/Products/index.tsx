import { Product } from "../Product";
import { Container, ProductsList } from "./styles";

export function Products() {
  const data = {
    title: "Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014",
    price: "30,00",
    oldPrice: "37,40",
    notPartnerPrice: "37,40",
    discount: "60",
  };
  return (
    <Container>
      <p className="total-products">
        <span>49</span> produtos encontrados
      </p>

      <ProductsList>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => {
          return (
            <li key={number}>
              <Product data={data} />
            </li>
          );
        })}
      </ProductsList>
    </Container>
  );
}
