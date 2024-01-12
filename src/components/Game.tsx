import { Outlet } from "react-router-dom";

const Game = () => {
  return (
    <div className="h-[748px] w-[416px] bg-[#192A32] rounded-[43px] justify-center items-center flex flex-col gap-4">
      <Outlet />
    </div>
  );
};

export default Game;
