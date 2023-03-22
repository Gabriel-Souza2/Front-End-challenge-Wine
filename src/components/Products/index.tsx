import { Container, ProductsList, Product, AddButton } from "./styles";

export function Products() {
  return (
    <Container>
      <p className="total-products">
        <span>49</span> produtos encontrados
      </p>

      <ProductsList>
        <Product>
          <div className="product-wrapper">
            <img src="/wine.png" alt="vinho" />
            <p>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</p>
            <div className="discount">
              <span className="old-price">R$ 37,40</span>
              <span className="total-discount">60% OFF</span>
            </div>
            <div className="price-wrapper">
              <span className="partner">Sócio wine</span>
              <span className="price">
                <span className="symbol">R$</span>
                <span className="integer">30</span>,00
              </span>
            </div>
            <span className="not-partner">Não sócio R$ 37,40</span>
          </div>
          <AddButton>Adicionar</AddButton>
        </Product>
      </ProductsList>
    </Container>
  );
}
