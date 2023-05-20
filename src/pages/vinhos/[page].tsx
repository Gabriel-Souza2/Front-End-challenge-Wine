import { IProduct } from "@/dao/product";
import axios from "axios";
import { GetStaticProps } from "next";

import { Content } from "@/components/Content";

interface ProductsProps {
  products: IProduct[];
  total: number;
}

export function Page({ products, total }: ProductsProps) {
  return <Content products={products} productsTotal={total}></Content>;
}

export const getStaticPaths = async () => {
  return {
    paths: Array.from({ length: 5 }).map((_, i) => `/vinhos/${i + 2}`),
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }: { params: { page: string } }) {
  const page = params.page;
  const res = await axios.get(`https://apiwine.onrender.com/products`, {
    params: {
      page: page,
      limit: 12,
    },
  });
  const products = res.data;

  const { data } = await axios.get(
    `https://apiwine.onrender.com/products/total`
  );

  return {
    props: {
      products,
      total: data.total,
    },
  };
}

export default Page;
