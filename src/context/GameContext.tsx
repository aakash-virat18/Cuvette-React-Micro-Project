import { produce } from "immer";
import { createContext, useState } from "react";

type contextType = {
  userChoice: string;
  handleUserChoice: (input: string) => void;
  handleUserChance: () => void;
  game: string[][];
  handleGame: (value: string, x: number, y: number) => void;
  userChance: boolean;
  handleComputerChance: () => void;
  checkWin: (value: string) => boolean;
  gameOver: boolean;
  winner: string;
  setWinner: (value: string) => void;
  setGameOver: (value: boolean) => void;
  userScore: number;
  handleUserScore: () => void;
  pcScore: number;
  handlePcScore: () => void;
  ties: number;
  handleTies: () => void;
};

const GameContext = createContext<contextType>({} as contextType);

function Provider({ children }: { children: React.ReactNode }) {
  const [userChoice, setUserChoice] = useState<string>("O");
  const [userChance, setUserChance] = useState<boolean>(true);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");
  const [userScore, setUserScore] = useState<number>(0);
  const [pcScore, setPcScore] = useState<number>(0);
  const [ties, setTies] = useState<number>(0);

  const handleUserScore = () => {
    setUserScore((prev) => prev + 1);
  };
  const handlePcScore = () => {
    setPcScore((prev) => prev + 1);
  };
  const handleTies = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (game[i][j] === "") {
          return false;
        }
      }
    }
    setTies((prev) => prev + 1);
    setGameOver(true);
  };

  const [game, setGame] = useState<string[][]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const handleGame = (value: string, x: number, y: number) => {
    const newGame = produce(game, (draft) => {
      draft[x][y] = value;
    });
    setGame(newGame);
  };

  const handleUserChance = () => {
    setUserChance(!userChance);
  };

  const checkWin = (choice: string): boolean => {
    if (
      (game[0][0] === choice &&
        game[0][1] === choice &&
        game[0][2] === choice) ||
      (game[1][0] === choice &&
        game[1][1] === choice &&
        game[1][2] === choice) ||
      (game[2][0] === choice &&
        game[2][1] === choice &&
        game[2][2] === choice) ||
      (game[0][0] === choice &&
        game[1][0] === choice &&
        game[2][0] === choice) ||
      (game[0][1] === choice &&
        game[1][1] === choice &&
        game[2][1] === choice) ||
      (game[0][2] === choice &&
        game[1][2] === choice &&
        game[2][2] === choice) ||
      (game[0][0] === choice &&
        game[1][1] === choice &&
        game[2][2] === choice) ||
      (game[2][0] === choice && game[1][1] === choice && game[0][2] === choice)
    ) {
      return true;
    }
    return false;
  };

  const handleComputerChance = () => {
    let computerChoice = userChoice === "X" ? "O" : "X";
    if (!userChance) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (game[i][j] === "") {
            handleGame(computerChoice, i, j);
            handleUserChance();
            return;
          }
        }
      }
    }
  };

  const handleUserChoice = (input: string) => {
    setUserChoice(input);
  };

  return (
    <GameContext.Provider
      value={{
        userChoice,
        handleUserChoice,
        handleUserChance,
        handleGame,
        game,
        userChance,
        handleComputerChance,
        checkWin,
        gameOver,
        winner,
        setGameOver,
        setWinner,
        userScore,
        handleUserScore,
        pcScore,
        handlePcScore,
        ties,
        handleTies,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export { Provider };

export default GameContext;
