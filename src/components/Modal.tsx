import React, { useContext } from "react";
import ReactDom from "react-dom";
import GameContext from "../context/GameContext";
import cross from "../assets/cross.svg";
import zero from "../assets/zero.svg";

const MODAL_STYLES: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  background: "#192A32",
  padding: "50px",
  zIndex: 1000,
  width: "416px",
  height: "222px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
};

const OVERLAY_STYLES: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 1000,
};

type propsType = {
  winner: string;
};

const Modal = ({ winner }: propsType) => {
  const { userChoice } = useContext(GameContext);

  const imgName = winner === "X" ? cross : zero;
  return ReactDom.createPortal(
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <h2 className="text-[#ACC2CD] text-[15px]">
          {winner === userChoice ? "YOU" : "PC"} WON!
        </h2>
        <div className="flex items-center gap-2">
          <img src={imgName} className="w-8 h-8" />
          <p
            className={`text-[28px] font-bold ${
              winner === "X" ? "text-[#31C4BE]" : "text-[#F2B237]"
            }`}
          >
            {" "}
            TAKES THE ROUND
          </p>
        </div>
        <div className="flex gap-[55px]">
          <button className="w-[113px] h-[33px] rounded-[10px] bg-[#F2B237] text-[15px] font-semibold">
            QUIT
          </button>
          <button className="w-[113px] h-[33px] rounded-[10px] bg-[#31C4BE] text-[15px] font-semibold">
            NEXT ROUND
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default Modal;
