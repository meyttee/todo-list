import "./App.css";

import { StateProvider } from "./providers";
import { Board, Header, NewColumnModal } from "./components";

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
