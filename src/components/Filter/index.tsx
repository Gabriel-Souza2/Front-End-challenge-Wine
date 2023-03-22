import { Container, CustomRadio } from "./styles";

export function Filter() {
  return (
    <Container>
      <h4>Refine sua busca</h4>
      <span className="by-price">Por Preço</span>
      <label>
        <input type="radio" id="p_40" name="by_price" value="p_40" />
        <CustomRadio>
          <div className="checked"></div>
        </CustomRadio>
        <span>Até R$40</span>
      </label>
      <label>
        <input type="radio" id="p_40_60" name="by_price" value="p_40_60" />
        <CustomRadio>
          <div className="checked"></div>
        </CustomRadio>
        <span>R$40 A R$60</span>
      </label>
      <label>
        <input type="radio" id="p_100_200" name="by_price" value="p_100_200" />
        <CustomRadio>
          <div className="checked"></div>
        </CustomRadio>
        <span>R$100 A R$200</span>
      </label>
      <label>
        <input type="radio" id="p_200_500" name="by_price" value="p_200_500" />
        <CustomRadio>
          <div className="checked"></div>
        </CustomRadio>
        <span>R$200 A R$500</span>
      </label>
      <label>
        <input type="radio" id="p_500" name="by_price" value="p_500" />
        <CustomRadio>
          <div className="checked"></div>
        </CustomRadio>
        <span>Acima de R$500</span>
      </label>
    </Container>
  );
}
