import { IProduct } from "@/dao/product";
import axios from "axios";
import { GetStaticProps } from "next";

interface ProductsProps {
  products: IProduct[];
}

export function Page({ products }: ProductsProps) {
  return (
    <div>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps(context: GetStaticProps) {
  const { page } = context.params;
  const res = await axios.get(`https://apiwine.onrender.com/products`, {
    params: {
      page: page,
    },
  });
  const products = res.data;

  return {
    props: {
      products,
    },
  };
}

export default Page;
