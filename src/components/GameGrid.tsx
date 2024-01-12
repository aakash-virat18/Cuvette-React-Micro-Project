import { useContext, useEffect } from "react";
import GameContext from "../context/GameContext";
import cross from "../assets/cross.svg";
import zero from "../assets/zero.svg";
import reload from "../assets/reload.svg";
import Modal from "./Modal";

const GameGrid = () => {
  const {
    game,
    handleGame,
    userChance,
    userChoice,
    handleUserChance,
    handleComputerChance,
    checkWin,
    setWinner,
    setGameOver,
    gameOver,
    winner,
    userScore,
    handlePcScore,
    pcScore,
    handleTies,
    ties,
    handleUserScore,
  } = useContext(GameContext);

  const computerChoice = userChoice === "X" ? "O" : "X";

  useEffect(() => {
    handleTies();
    if (checkWin(userChoice)) {
      setGameOver(true);
      handleUserScore();
      setWinner(userChoice);
    }
    handleComputerChance();
    if (checkWin(computerChoice)) {
      setGameOver(true);
      setWinner(computerChoice);
      handlePcScore();
    }
  }, [userChance]);

  return (
    <div>
      {gameOver ? <Modal winner={winner} /> : ""}
      <div className="flex items-center mb-4">
        <img src={cross} className="w-[22px] h-[22px]" />
        <img src={zero} className="w-[22px] h-[22px] ml-2" />
        <div className="text-[#ACC2CD] bg-[#1F3540] w-[86px] h-[39px] ml-[65px] rounded-[10px] flex justify-center items-center">
          {userChance ? userChoice : computerChoice} TURN
        </div>
        <div className="bg-[#ACC2CD] h-8 w-8 flex justify-center items-center rounded-[5px] ml-[80px] cursor-pointer">
          <img src={reload} />
        </div>
      </div>
      <div className="w-80 h-80 grid grid-cols-3 grid-rows-3 gap-8">
        <div
          className="bg-[#1F3540] cursor-pointer rounded-lg shadow-2xl flex items-center justify-center"
          onClick={() => {
            if (game[0][0] === "" && userChance) {
              handleUserChance();
              return handleGame(userChoice, 0, 0);
            }
          }}
        >
          {game[0][0] === "X" ? (
            <img src={cross} />
          ) : game[0][0] === "O" ? (
            <img src={zero} />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-[#1F3540] cursor-pointer rounded-lg shadow-2xl flex justify-center items-center"
          onClick={() => {
            if (game[0][1] === "" && userChance) {
              handleUserChance();
              return handleGame(userChoice, 0, 1);
            }
          }}
        >
          {game[0][1] === "X" ? (
            <img src={cross} />
          ) : game[0][1] === "O" ? (
            <img src={zero} />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-[#1F3540] cursor-pointer rounded-lg shadow-2xl flex items-center justify-center"
          onClick={() => {
            if (game[0][2] === "" && userChance) {
              handleUserChance();
              return handleGame(userChoice, 0, 2);
            }
          }}
        >
          {game[0][2] === "X" ? (
            <img src={cross} />
          ) : game[0][2] === "O" ? (
            <img src={zero} />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-[#1F3540] cursor-pointer rounded-lg shadow-2xl flex justify-center items-center"
          onClick={() => {
            if (game[1][0] === "" && userChance) {
              handleUserChance();
              return handleGame(userChoice, 1, 0);
            }
          }}
        >
          {game[1][0] === "X" ? (
            <img src={cross} />
          ) : game[1][0] === "O" ? (
            <img src={zero} />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-[#1F3540] cursor-pointer rounded-lg shadow-2xl flex justify-center items-center"
          onClick={() => {
            if (game[1][1] === "" && userChance) {
              handleUserChance();
              return handleGame(userChoice, 1, 1);
            }
          }}
        >
          {game[1][1] === "X" ? (
            <img src={cross} />
          ) : game[1][1] === "O" ? (
            <img src={zero} />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-[#1F3540] cursor-pointer rounded-lg shadow-2xl flex justify-center items-center"
          onClick={() => {
            if (game[1][2] === "" && userChance) {
              handleUserChance();
              return handleGame(userChoice, 1, 2);
            }
          }}
        >
          {game[1][2] === "X" ? (
            <img src={cross} />
          ) : game[1][2] === "O" ? (
            <img src={zero} />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-[#1F3540] cursor-pointer rounded-lg shadow-2xl flex items-center justify-center"
          onClick={() => {
            if (game[2][0] === "" && userChance) {
              handleUserChance();
              return handleGame(userChoice, 2, 0);
            }
          }}
        >
          {game[2][0] === "X" ? (
            <img src={cross} />
          ) : game[2][0] === "O" ? (
            <img src={zero} />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-[#1F3540] cursor-pointer rounded-lg shadow-2xl flex items-center justify-center"
          onClick={() => {
            if (game[2][1] === "" && userChance) {
              handleUserChance();
              return handleGame(userChoice, 2, 1);
            }
          }}
        >
          {game[2][1] === "X" ? (
            <img src={cross} />
          ) : game[2][1] === "O" ? (
            <img src={zero} />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-[#1F3540] cursor-pointer rounded-lg shadow-2xl flex items-center justify-center"
          onClick={() => {
            if (game[2][2] === "" && userChance) {
              handleUserChance();
              return handleGame(userChoice, 2, 2);
            }
          }}
        >
          {game[2][2] === "X" ? (
            <img src={cross} />
          ) : game[2][2] === "O" ? (
            <img src={zero} />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="w-80 h-[49px] grid grid-cols-3 grid-rows-1 gap-8 mt-6 text-[10px] text-black">
        <div className="bg-[#31C4BE] rounded-[10px] flex flex-col items-center justify-center font-semibold">
          <p>{userChoice} (YOU)</p>
          <p className="text-[14px]">{userScore}</p>
        </div>
        <div className="bg-[#A8BEC9] rounded-[10px] flex flex-col items-center justify-center">
          <p>TIES</p>
          <p className="text-[14px]">{ties}</p>
        </div>
        <div className="bg-[#F2B237] rounded-[10px] flex flex-col items-center justify-center">
          <p>{computerChoice} (CPU)</p>
          <p className="text-[14px]">{pcScore}</p>
        </div>
      </div>
    </div>
  );
};

export default GameGrid;
