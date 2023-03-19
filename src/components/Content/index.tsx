import React, { ReactNode } from "react";

import { Container, Wrapper } from "./styles";

export function Content({ children }: any) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
