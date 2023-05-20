import { useCart } from "@/context/CartContext";
import { IProduct } from "@/dao/product";
import { useState } from "react";
import { Spinner } from "../Spinner";
import {
  Button,
  AlertRoot,
  AlertTrigger,
  AlertPortal,
  AlertContent,
  AlertDescription,
} from "./styles";

interface Props {
  data: IProduct;
  quantity: number;
}

export function AddButton({ data, quantity }: Props) {
  const [addedToCart, setAddedToCart] = useState(false);

  const cartContext = useCart();

  function handleAddToCart() {
    if (cartContext.checkIfAlreadyExists(data.id)) {
      const item = cartContext.getCartById(data.id);
      cartContext.UpdateQuantityProduct(data.id, item.quantity + quantity);
    } else {
      cartContext.addToCart({
        id: data.id,
        image: data.image,
        name: data.name,
        quantity: quantity,
        price: data.price,
      });
    }

    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  }

  return (
    <AlertRoot open={addedToCart} onOpenChange={setAddedToCart}>
      <AlertTrigger asChild>
        <Button onClick={handleAddToCart}>
          {addedToCart ? <Spinner /> : "Adicionar"}
        </Button>
      </AlertTrigger>
      <AlertPortal>
        <AlertContent>
          <AlertDescription>
            <div className="product-add">Produto Adicionado</div>
            <div className="product">{data.name}</div>
          </AlertDescription>
        </AlertContent>
      </AlertPortal>
    </AlertRoot>
  );
}
