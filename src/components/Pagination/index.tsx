import {
  Container,
  Wrapper,
  PaginationText,
  PaginationNumber,
  ShowMore,
  TotalProductsMobile,
} from "./styles";

export function Pagination() {
  return (
    <Container>
      <Wrapper>
        <PaginationText href="#">{"<<"} anterior</PaginationText>
        <PaginationNumber href="#" active={true}>
          1
        </PaginationNumber>
        <PaginationNumber href="#" next={true}>
          2
        </PaginationNumber>
        <PaginationNumber href="#">3</PaginationNumber>
        <PaginationNumber href="#">4</PaginationNumber>
        <PaginationText href="#">próximo {">>"}</PaginationText>
      </Wrapper>
      <ShowMore>Mostrar Mais</ShowMore>
      <TotalProductsMobile>
        Exibindo <span>8</span> de <span>48</span> produtos no total
      </TotalProductsMobile>
    </Container>
  );
}
