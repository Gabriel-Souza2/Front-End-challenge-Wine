import { IProduct } from "@/dao/product";
import { ProductContainer } from "../ProductContainer";
import { Container, ProductsList } from "./styles";

interface Props {
  data: IProduct[];
}

export function Products({ data }: Props) {
  return (
    <Container>
      <p className="total-products">
        <span>49</span> produtos encontrados
      </p>

      <ProductsList>
        {data.map((product) => {
          return (
            <li key={product.id}>
              <ProductContainer data={product} />
            </li>
          );
        })}
      </ProductsList>
    </Container>
  );
}
