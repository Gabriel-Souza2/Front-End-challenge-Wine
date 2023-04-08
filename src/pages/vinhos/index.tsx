import { Content } from "@/components/Content";

import { IProduct } from "@/dao/product";
import axios from "axios";
import { GetStaticProps } from "next";

interface ProductsProps {
  products: IProduct[];
  total: number;
}

function Vinhos({ products, total }: ProductsProps) {
  return <Content products={products} productsTotal={total}></Content>;
}

export async function getStaticProps(context: GetStaticProps) {
  const res = await axios.get(`https://apiwine.onrender.com/products`, {
    params: {
      page: 1,
      limit: 12,
    },
  });

  const { data } = await axios.get(
    `https://apiwine.onrender.com/products/total`
  );

  const products = res.data;

  return {
    props: {
      products,
      total: data.total,
    },
  };
}

export default Vinhos;
