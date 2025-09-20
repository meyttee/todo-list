import "./App.css";
import { Board, Header, NewColumnModal } from "./components";
import { StateProvider } from "./providers";

function App() {
  return (
    <StateProvider>
      <Header />
      <Board />
      <NewColumnModal />
    </StateProvider>
  );
}

export default App;
