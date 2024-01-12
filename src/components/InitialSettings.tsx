import { useContext } from "react";
import cross from "../assets/cross.svg";
import zero from "../assets/zero.svg";
import GameContext from "../context/GameContext";
import { useNavigate } from "react-router-dom";

const InitialSettings = () => {
  const { userChoice, handleUserChoice } = useContext(GameContext);
  const navigate = useNavigate();

  return (
    <div className="h-full w-full  justify-center items-center flex flex-col gap-4">
      <div className="flex font-['Dangrek'] gap-1">
        <img className="h-4 w-4" src={cross} />
        <img className="h-4 w-4" src={zero} />
      </div>
      <div className="bg-[#1F3540] h-[154px] w-[307px] rounded-lg flex flex-col items-center justify-center shadow-lg gap-8">
        <h3 className="text-white">PICK PLAYER</h3>
        <div className="bg-[#192A32] h-[45px] w-[276px] shadow-lg flex justify-center items-center text-[#D9D9D9]">
          <p
            className={`cursor-pointer rounded-md h-[30px] w-[127px] flex justify-center items-center ${
              userChoice === "X" ? "bg-[#D9D9D9] text-[#192A32]" : ""
            }`}
            onClick={() => handleUserChoice("X")}
          >
            X
          </p>
          <p
            className={`cursor-pointer rounded-md h-[30px] w-[127px] flex justify-center items-center ${
              userChoice === "O" ? "bg-[#D9D9D9] text-[#192A32]" : ""
            }`}
            onClick={() => handleUserChoice("O")}
          >
            O
          </p>
        </div>
      </div>
      <button
        className="bg-[#F2B237] w-[307px] rounded h-9 mt-2"
        onClick={() => navigate("/game")}
      >
        NEW GAME (VS CPU)
      </button>
      <button className="bg-[#32C4C3] w-[307px] rounded h-9">
        NEW GAME (VS HUMAN) Coming Soon
      </button>
      <button className="bg-[#F2B237] w-[225px] rounded h-[33px] mt-10">
        Invite your friend
      </button>
    </div>
  );
};

export default InitialSettings;
