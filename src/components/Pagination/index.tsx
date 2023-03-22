import { Container, PaginationText, PaginationNumber } from "./styles";

export function Pagination() {
  return (
    <Container>
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
    </Container>
  );
}
