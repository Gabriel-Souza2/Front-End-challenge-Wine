import { Container, ProductsList } from "./styles";

export function Products() {
  return (
    <Container>
      <p className="total-products">
        <span>49</span> produtos encontrados
      </p>

      <ProductsList></ProductsList>
    </Container>
  );
}
