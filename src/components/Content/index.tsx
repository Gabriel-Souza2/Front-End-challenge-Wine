import React from "react";
import { IProduct } from "@/dao/product";
import { Filter } from "../Filter";
import { Products } from "../Products";

import { Container, Wrapper } from "./styles";
import { Pagination } from "../Pagination";

interface Props {
  products: IProduct[];
  productsTotal: number;
}

export function Content({ products, productsTotal }: Props) {
  return (
    <Container>
      <Wrapper>
        <Filter></Filter>
        <div>
          <Products data={products}></Products>
          <Pagination productsTotal={productsTotal} />
        </div>
      </Wrapper>
    </Container>
  );
}
