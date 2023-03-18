import Link from "next/link";
import { useRouter } from "next/router";

import {
  Container,
  Content,
  Nav,
  Actions,
  ActionButton,
  MenuItem,
} from "./styles";

import Busca from "../../assets/Busca.svg";
import Conta from "../../assets/conta.svg";
import Group from "../../assets/group.svg";

interface MenuLink {
  link: string;
  name: string;
}

export function Menu() {
  const router = useRouter();
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
      name: "Ofertas",
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
        <Nav>
          <ul>
            {menuItens.map((item) => {
              return (
                <MenuItem key={item.name} active={item.link === router.route}>
                  <Link href={item.link}>{item.name}</Link>
                </MenuItem>
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
      </Content>
    </Container>
  );
}
