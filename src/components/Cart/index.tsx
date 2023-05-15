import * as Dialog from "@radix-ui/react-dialog";
import { CartItem } from "../CartItem";

import {
  Overlay,
  Content,
  Header,
  Title,
  Products,
  Footer,
  Close,
} from "./styles";

import ArrowLeft from "../../assets/icon_arrow_left.svg";

export function Cart() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Header>
          <Close asChild>
            <ArrowLeft />
          </Close>
          <Title>WineBox(1)</Title>
        </Header>

        <Products>
          <ul>
            <li>
              <CartItem
                title="
                  Kit 3 - Europeus Meio Secos Elite + Taça Cristal Grátis"
                price={165.53}
              />
            </li>
            <li>
              <CartItem
                title="
                  Kit 3 - Europeus Meio Secos Elite + Taça Cristal Grátis"
                price={165.53}
              />
            </li>
            <li>
              <CartItem
                title="
                  Kit 3 - Europeus Meio Secos Elite + Taça Cristal Grátis"
                price={165.53}
              />
            </li>
            <li>
              <CartItem
                title="
                  Kit 3 - Europeus Meio Secos Elite + Taça Cristal Grátis"
                price={165.53}
              />
            </li>
          </ul>
        </Products>
        <Footer>
          <div className="total">
            <span className="text">Total</span>
            <span className="value">R$ 165,53</span>
          </div>
          <button>Finalizar Pedido</button>
        </Footer>
      </Content>
    </Dialog.Portal>
  );
}
