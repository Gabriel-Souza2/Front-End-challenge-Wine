import Link from "next/link";

import { Container, Content, Nav, Actions, ActionButton } from "./styles";

import Busca from "../../assets/Busca.svg";
import Conta from "../../assets/conta.svg";
import Group from "../../assets/group.svg";

interface MenuLink {
  link: string;
  name: string;
}

export function Menu() {
  const menuItens: MenuLink[] = [
    {
      link: "/clube",
      name: "Clube",
    },
    {
      link: "/",
      name: "Loja",
    },
    {
      link: "/produtores",
      name: "Produtores",
    },
    {
      link: "/ofertas",
      name: "OFertas",
    },
    {
      link: "/eventos",
      name: "Eventos",
    },
  ];
  return (
    <Container>
      <Content>
        <img src="/black.svg" />
      </Content>
      <Nav>
        <ul>
          {menuItens.map((item) => {
            return (
              <Link href={item.link} key={item.name}>
                item.name
              </Link>
            );
          })}
        </ul>
      </Nav>
      <Actions>
        <ActionButton>
          <Busca />
        </ActionButton>
        <ActionButton>
          <Conta />
        </ActionButton>
        <ActionButton>
          <Group />
        </ActionButton>
      </Actions>
    </Container>
  );
}
