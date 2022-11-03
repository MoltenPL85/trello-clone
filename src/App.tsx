import { Column } from "./Column";
import { AppContainer, ColumnContainer } from "./styles";

export const App = () => {
  return (<AppContainer>
    <ColumnContainer>
      <Column text="Todo:" />
    </ColumnContainer>
  </AppContainer>);
}
