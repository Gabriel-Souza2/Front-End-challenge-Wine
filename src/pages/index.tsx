import { Content } from "@/components/Content";
import { Filter } from "@/components/Filter";
import { Products } from "@/components/Products";

function HomePage() {
  return (
    <Content>
      <Filter></Filter>
      <Products></Products>
    </Content>
  );
}

export default HomePage;
