import Game from "./components/Game";
import { Route, Routes } from "react-router-dom";
import InitialSettings from "./components/InitialSettings";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <div className="h-screen w-screen flex flex-row justify-center items-center">
      <Routes>
        <Route path="/" element={<Game />}>
          <Route path="" element={<InitialSettings />}></Route>
          <Route path="game" element={<GameGrid />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
