"use client";

import { useState } from "react";
import { Crosshair, RotateCcw } from "lucide-react";

type Player = "B" | "W" | null;
type Coordinate = { x: number; y: number };

const BOARD_SIZE = 11;
const HALF_SIZE = Math.floor(BOARD_SIZE / 2);

const CoordinateOmok = () => {
  // Initialize board as a 1D array of size BOARD_SIZE * BOARD_SIZE for simplicity
  const [board, setBoard] = useState<Player[]>(Array(BOARD_SIZE * BOARD_SIZE).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"B" | "W">("B");
  const [inputX, setInputX] = useState<string>("");
  const [inputY, setInputY] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleMove = () => {
    setErrorMsg(null);
    const x = parseInt(inputX);
    const y = parseInt(inputY);

    if (isNaN(x) || isNaN(y)) {
      setErrorMsg("정확한 숫자를 입력하세요.");
      return;
    }

    if (x < -HALF_SIZE || x > HALF_SIZE || y < -HALF_SIZE || y > HALF_SIZE) {
      setErrorMsg(`X, Y 좌표는 -${HALF_SIZE}부터 ${HALF_SIZE} 사이여야 합니다.`);
      return;
    }

    // Convert coordinate (-5 to 5) to array index (0 to 10)
    // For X: left to right (-5 -> 0, 5 -> 10)
    // For Y: bottom to top (-5 -> 10, 5 -> 0) -> Wait, Y usually goes bottom to top in math.
    // So if y is 5, it's row 0. If y is -5, it's row 10.
    const col = x + HALF_SIZE;
    const row = HALF_SIZE - y;
    const index = row * BOARD_SIZE + col;

    if (board[index] !== null) {
      setErrorMsg("이미 돌이 놓여진 자리입니다.");
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "B" ? "W" : "B");
    setInputX("");
    setInputY("");
  };

  const resetGame = () => {
    setBoard(Array(BOARD_SIZE * BOARD_SIZE).fill(null));
    setCurrentPlayer("B");
    setInputX("");
    setInputY("");
    setErrorMsg(null);
  };

  return (
    <div className="mx-auto max-w-4xl rounded-2xl border bg-white p-6 shadow-xl md:p-8">
      <div className="mb-8 flex items-center space-x-3 text-primary-600">
        <Crosshair className="h-8 w-8" />
        <h2 className="text-3xl font-extrabold">좌표평면 오목두기</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-xl bg-gray-50 p-6 border-2 border-dashed border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">현재 턴: {currentPlayer === "B" ? "⚫ 흑돌" : "⚪ 백돌"}</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">X 좌표 (-5 ~ 5)</label>
                <input
                  type="number"
                  value={inputX}
                  onChange={(e) => setInputX(e.target.value)}
                  className="w-full rounded-lg border-gray-300 px-4 py-2 text-black focus:ring-primary-500"
                  placeholder="X 입력"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">Y 좌표 (-5 ~ 5)</label>
                <input
                  type="number"
                  value={inputY}
                  onChange={(e) => setInputY(e.target.value)}
                  className="w-full rounded-lg border-gray-300 px-4 py-2 text-black focus:ring-primary-500"
                  placeholder="Y 입력"
                />
              </div>
              
              <button
                onClick={handleMove}
                className={`w-full rounded-lg py-3 font-bold text-white transition-all shadow-md ${currentPlayer === "B" ? "bg-gray-800 hover:bg-gray-900" : "bg-gray-400 hover:bg-gray-500"}`}
              >
                착수하기
              </button>
              
              {errorMsg && <p className="text-sm font-bold text-red-500 text-center">{errorMsg}</p>}
            </div>
          </div>

          <button
            onClick={resetGame}
            className="w-full flex items-center justify-center space-x-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-bold text-red-600 hover:bg-red-100 transition-all"
          >
            <RotateCcw className="h-4 w-4" />
            <span>게임 초기화</span>
          </button>
        </div>

        <div className="lg:col-span-2 flex justify-center">
          <div className="relative border-2 border-orange-200 bg-orange-50 p-4 rounded-xl shadow-inner">
            <div 
              className="grid gap-0 border-2 border-orange-900 bg-[#e6c280]"
              style={{ 
                gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
                width: 'min(100%, 400px)',
                aspectRatio: '1 / 1'
              }}
            >
              {board.map((cell, idx) => {
                const col = idx % BOARD_SIZE;
                const row = Math.floor(idx / BOARD_SIZE);
                const isCenter = col === HALF_SIZE && row === HALF_SIZE;
                const isAxis = col === HALF_SIZE || row === HALF_SIZE;
                
                return (
                  <div 
                    key={idx} 
                    className={`relative flex items-center justify-center border-t border-l border-orange-800/30
                      ${col === 0 ? 'border-l-0' : ''} 
                      ${row === 0 ? 'border-t-0' : ''}
                      ${isAxis ? 'bg-orange-900/10' : ''}
                    `}
                  >
                    {isCenter && <div className="absolute w-2 h-2 bg-orange-900 rounded-full z-0" />}
                    
                    {cell && (
                      <div className={`relative z-10 w-[80%] h-[80%] rounded-full shadow-lg ${cell === "B" ? "bg-gray-900" : "bg-white border border-gray-200"}`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoordinateOmok;
