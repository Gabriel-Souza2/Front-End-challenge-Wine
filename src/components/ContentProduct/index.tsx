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

import { IProduct } from "@/dao/product";

import Left from "../../assets/left.svg";
import Right from "../../assets/right.svg";

interface Props {
  data: IProduct;
}

export function ContentProduct({ data }: Props) {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Left />
          <span>Voltar</span>
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
                <ActionsQtd active={false} disabled={false}>
                  {" "}
                  -{" "}
                </ActionsQtd>
                <span className="Qtd">1</span>
                <ActionsQtd active={true}>+</ActionsQtd>
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
