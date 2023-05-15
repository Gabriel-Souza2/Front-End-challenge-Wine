import {
  Container,
  Wrapper,
  Header,
  Content,
  BreadCrumb,
  Title,
  Tags,
  Price,
  Comment,
  Buy,
  ActionsQtd,
} from "./styles";

import { useRouter } from "next/router";

import { IProduct } from "@/dao/product";

import Left from "../../assets/left.svg";
import Right from "../../assets/right.svg";
import { useState } from "react";

interface Props {
  data: IProduct;
}

export function ContentProduct({ data }: Props) {
  const [amountItems, setAmountItens] = useState(1);
  const router = useRouter();

  function handleAddMoreItems() {
    setAmountItens((state) => {
      return state + 1;
    });
  }

  function handleSubMoreItems() {
    setAmountItens((state) => {
      return state - 1;
    });
  }

  function handlePreviusPage() {
    router.back();
  }

  const activeButtonSubItems = amountItems > 1;
  return (
    <Container>
      <Wrapper>
        <Header>
          <button onClick={handlePreviusPage}>
            <Left />
            <span>Voltar</span>
          </button>
        </Header>
        <Content>
          <div className="img">
            <img src={data.image} />
          </div>
          <div className="info">
            <BreadCrumb>
              <a href="#">{data.classification}</a>
              <Right />
              <a href="#">{data.country}</a>
              <Right />
              <span>Western Cape</span>
            </BreadCrumb>
            <Title>{data.name}</Title>
            <Tags>
              <img src={data.flag} />
              <span>{data.country}</span>
              <span>{data.type}</span>
              <span>{data.volume}</span>
            </Tags>
            <Price>
              <div className="patner">R$ {data.price}</div>
              <div className="no-patner">
                Não Sócio R$ {data.priceNonMember}/un
              </div>
            </Price>

            <Comment>
              <h3 className="sommelier">Comentário do Sommelier</h3>
              <p>{data.sommelierComment}</p>
            </Comment>

            <Buy>
              <div>
                <ActionsQtd
                  active={activeButtonSubItems}
                  disabled={!activeButtonSubItems}
                  onClick={handleSubMoreItems}
                >
                  -
                </ActionsQtd>
                <span className="Qtd">{amountItems}</span>
                <ActionsQtd active={true} onClick={handleAddMoreItems}>
                  +
                </ActionsQtd>
              </div>
              <span className="diviser"></span>
              <button className="addCart">Adicionar</button>
            </Buy>
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
}
