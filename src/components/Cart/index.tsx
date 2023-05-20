import * as Dialog from "@radix-ui/react-dialog";
import { CartItem } from "../CartItem";
import { useCart } from "@/context/CartContext";

import {
  Overlay,
  Content,
  Header,
  Title,
  Message,
  Products,
  Footer,
  Close,
} from "./styles";

import ArrowLeft from "../../assets/icon_arrow_left.svg";

export function Cart() {
  const cartContext = useCart();

  const totalPrice = cartContext.totalPriceUpdate();

  const productsQtd = cartContext.cartQuantity;

  const items = cartContext.cartItems;

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Header>
          <Close asChild>
            <ArrowLeft />
          </Close>
          <Title>WineBox({productsQtd})</Title>
        </Header>

        {productsQtd === 0 && (
          <Message>
            <p> =( </p>
            <p>Você ainda não escolheu seus produtos</p>
          </Message>
        )}

        {productsQtd >= 1 && (
          <Products>
            <ul>
              {items.map((product) => {
                return (
                  <li key={product.id}>
                    <CartItem
                      id={product.id}
                      img={product.image}
                      title={product.name}
                      price={product.price}
                      quantity={product.quantity}
                    />
                  </li>
                );
              })}
            </ul>
          </Products>
        )}

        {productsQtd >= 1 && (
          <Footer>
            <div className="total">
              <span className="text">Total</span>
              <span className="value">
                R$ {totalPrice.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <button>Finalizar Pedido</button>
          </Footer>
        )}
      </Content>
    </Dialog.Portal>
  );
}
