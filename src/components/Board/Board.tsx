import { Column } from "../Column";
import { Container } from "../Container";
import { useAppState } from "../../hooks";

const Board = () => {
  const { state } = useAppState();

  return (
    <Container>
      {Array.from(state.data.keys()).map((key) => (
        <Column key={key} columnId={key} />
      ))}
    </Container>
  );
};

export default Board;
