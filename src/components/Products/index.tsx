import { IProduct } from "@/dao/product";
import { Pagination } from "../Pagination";
import { Product } from "../Product";
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
              <Product data={product} />
            </li>
          );
        })}
      </ProductsList>
      <Pagination />
    </Container>
  );
}
