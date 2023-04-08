import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  PaginationText,
  PaginationNumber,
  ShowMore,
  TotalProductsMobile,
} from "./styles";

interface Props {
  productsTotal: number;
}
export function Pagination({ productsTotal }: Props) {
  const router = useRouter();

  const { page } = router.query;

  const [actualPage, setActualPage] = useState(1);

  const endPage = Math.round(productsTotal / 12);

  const previusPage = actualPage - 1 === 0 ? 1 : actualPage - 1;
  const nextPage = actualPage + 1 >= endPage ? endPage : actualPage + 1;

  let initalPage = 0;

  if (actualPage === endPage) {
    initalPage = actualPage - 4; // Redenrizar 4 paginas, sendo a atual a ultima caso atinja a ultima pagina
  } else if (actualPage >= 4) {
    initalPage = actualPage - 3; // Redenrizar 3 pages, sendo a atual no meio
  }

  useEffect(() => {
    if (!page) {
      setActualPage(1);
    } else {
      setActualPage(Number(page));
    }
  }, [page]);

  return (
    <Container>
      <Wrapper>
        <PaginationText href={`/vinhos/${previusPage}`}>
          {"<<"} anterior
        </PaginationText>
        {Array.from({ length: 4 }).map((_, i) => {
          initalPage += 1;

          return (
            <PaginationNumber
              key={i}
              href={`/vinhos/${initalPage}`}
              active={initalPage === actualPage}
              next={initalPage === actualPage + 1}
            >
              {initalPage}
            </PaginationNumber>
          );
        })}

        <PaginationText href={`/vinhos/${nextPage}`}>
          próximo {">>"}
        </PaginationText>
      </Wrapper>
      <ShowMore>Mostrar Mais</ShowMore>
      <TotalProductsMobile>
        Exibindo <span>8</span> de <span>{productsTotal}</span> produtos no
        total
      </TotalProductsMobile>
    </Container>
  );
}
