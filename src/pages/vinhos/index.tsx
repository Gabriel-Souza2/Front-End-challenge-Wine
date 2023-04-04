import { Content } from "@/components/Content";
import { Filter } from "@/components/Filter";
import { Products } from "@/components/Products";

import { IProduct } from "@/dao/product";
import axios from "axios";
import { GetStaticProps } from "next";

interface ProductsProps {
  products: IProduct[];
}

function Vinhos({ products }: ProductsProps) {
  return (
    <Content>
      <Filter></Filter>
      <Products data={products}></Products>
    </Content>
  );
}

export async function getStaticProps(context: GetStaticProps) {
  const res = await axios.get(`https://apiwine.onrender.com/products`, {
    params: {
      page: 1,
    },
  });
  const products = res.data;

  return {
    props: {
      products,
    },
  };
}

export default Vinhos;
