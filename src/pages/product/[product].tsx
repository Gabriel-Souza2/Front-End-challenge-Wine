import { IProduct } from "@/dao/product";
import axios from "axios";
import { GetStaticProps } from "next";

import { ContentProduct } from "@/components/ContentProduct";

interface ProductProps {
  data: IProduct;
}

export function Product({ data }: ProductProps) {
  return <ContentProduct data={data}></ContentProduct>;
}

export const getStaticPaths = async () => {
  return {
    paths: Array.from({ length: 5 }).map((_, i) => `/product/${i + 2}`),
    fallback: "blocking",
  };
};

export async function getStaticProps(context: GetStaticProps) {
  const { product } = context.params;
  const res = await axios.get(`https://apiwine.onrender.com/product`, {
    params: {
      id: product,
    },
  });
  const data = res.data[0];

  return {
    props: {
      data,
    },
  };
}

export default Product;