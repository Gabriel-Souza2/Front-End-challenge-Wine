import { IProduct } from "@/dao/product";
import axios from "axios";

import { ContentProduct } from "@/components/ContentProduct";
import { useTheme } from "styled-components";

interface ProductProps {
  data: IProduct;
}

export function Product({ data }: ProductProps) {
  const theme = useTheme();

  return <ContentProduct data={data}></ContentProduct>;
}

export const getStaticPaths = async () => {
  const { data } = await axios.get(
    "https://apiwine.onrender.com/products/total"
  );
  return {
    paths: Array.from({ length: data.total }).map(
      (_, i) => `/product/${i + 1}`
    ),
    fallback: false,
  };
};

export async function getStaticProps({
  params,
}: {
  params: { product: string };
}) {
  const product = params.product;
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
