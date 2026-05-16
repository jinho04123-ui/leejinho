"use client";

import { useState } from "react";
import { Scale, RotateCcw } from "lucide-react";

const AlgebraBalance = () => {
  const [leftX, setLeftX] = useState(2);
  const [leftConst, setLeftConst] = useState(4);
  const [rightX, setRightX] = useState(1);
  const [rightConst, setRightConst] = useState(8);
  const [message, setMessage] = useState("양변에서 같은 값을 빼서 x의 값을 구해보세요!");

  const isBalanced = () => {
    // For educational purposes, assume x = 4 is the solution to 2x + 4 = x + 8
    // If leftX * 4 + leftConst == rightX * 4 + rightConst
    return (leftX * 4 + leftConst) === (rightX * 4 + rightConst);
  };

  const handleAction = (type: "x" | "const", side: "both", amount: number) => {
    if (type === "x") {
      if (leftX + amount < 0 || rightX + amount < 0) {
        setMessage("x의 개수는 0보다 작아질 수 없습니다!");
        return;
      }
      setLeftX(prev => prev + amount);
      setRightX(prev => prev + amount);
    } else {
      if (leftConst + amount < 0 || rightConst + amount < 0) {
        setMessage("상수항은 0보다 작아질 수 없습니다!");
        return;
      }
      setLeftConst(prev => prev + amount);
      setRightConst(prev => prev + amount);
    }
    
    checkWinCondition(leftX + (type === 'x' ? amount : 0), rightX + (type === 'x' ? amount : 0), leftConst + (type === 'const' ? amount : 0), rightConst + (type === 'const' ? amount : 0));
  };

  const checkWinCondition = (lX: number, rX: number, lC: number, rC: number) => {
    if (lX === 1 && rX === 0 && lC === 0) {
      setMessage(`정답입니다! x = ${rC} 입니다.`);
    } else if (rX === 1 && lX === 0 && rC === 0) {
      setMessage(`정답입니다! x = ${lC} 입니다.`);
    } else {
      setMessage("양변에서 같은 값을 빼서 한쪽에 x만 남겨보세요.");
    }
  };

  const reset = () => {
    setLeftX(2);
    setLeftConst(4);
    setRightX(1);
    setRightConst(8);
    setMessage("양변에서 같은 값을 빼서 x의 값을 구해보세요!");
  };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-6 shadow-xl md:p-8">
      <div className="mb-8 flex items-center justify-between text-primary-600">
        <div className="flex items-center space-x-3">
          <Scale className="h-8 w-8" />
          <h2 className="text-3xl font-extrabold">진호쌤의 대수저울</h2>
        </div>
        <button onClick={reset} className="rounded-lg bg-gray-100 p-2 text-gray-600 hover:bg-gray-200">
          <RotateCcw className="h-5 w-5" />
        </button>
      </div>

      <div className="mb-6 rounded-xl bg-blue-50 p-4 text-center font-bold text-blue-800">
        {message}
      </div>

      <div className="relative mb-12 flex h-64 items-end justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 p-4">
        {/* Scale Base */}
        <div className="absolute bottom-0 h-4 w-32 bg-gray-800 rounded-t-lg"></div>
        <div className="absolute bottom-4 h-32 w-4 bg-gray-800"></div>
        
        {/* Scale Beam */}
        <div className={`absolute bottom-36 h-2 w-3/4 bg-gray-800 transition-transform duration-500 origin-center ${!isBalanced() ? 'rotate-6' : 'rotate-0'}`}>
          {/* Left Pan */}
          <div className="absolute -left-10 top-2 flex w-24 flex-wrap justify-center gap-1">
            {Array.from({ length: leftX }).map((_, i) => (
              <div key={`lx-${i}`} className="flex h-8 w-8 items-center justify-center rounded bg-blue-500 font-bold text-white shadow">x</div>
            ))}
            {Array.from({ length: leftConst }).map((_, i) => (
              <div key={`lc-${i}`} className="flex h-8 w-8 items-center justify-center rounded bg-orange-400 font-bold text-white shadow">1</div>
            ))}
            <div className="mt-2 w-full border-t-4 border-gray-600"></div>
          </div>
          
          {/* Right Pan */}
          <div className="absolute -right-10 top-2 flex w-24 flex-wrap justify-center gap-1">
            {Array.from({ length: rightX }).map((_, i) => (
              <div key={`rx-${i}`} className="flex h-8 w-8 items-center justify-center rounded bg-blue-500 font-bold text-white shadow">x</div>
            ))}
            {Array.from({ length: rightConst }).map((_, i) => (
              <div key={`rc-${i}`} className="flex h-8 w-8 items-center justify-center rounded bg-orange-400 font-bold text-white shadow">1</div>
            ))}
            <div className="mt-2 w-full border-t-4 border-gray-600"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="rounded-xl border bg-gray-50 p-4">
          <h3 className="mb-4 font-bold text-gray-700">양변에서 x 빼기</h3>
          <button 
            onClick={() => handleAction("x", "both", -1)}
            className="w-full rounded-lg bg-blue-100 py-2 font-bold text-blue-700 hover:bg-blue-200"
          >
            - x
          </button>
        </div>
        <div className="rounded-xl border bg-gray-50 p-4">
          <h3 className="mb-4 font-bold text-gray-700">양변에서 상수 빼기</h3>
          <div className="flex space-x-2">
            <button 
              onClick={() => handleAction("const", "both", -1)}
              className="w-full rounded-lg bg-orange-100 py-2 font-bold text-orange-700 hover:bg-orange-200"
            >
              - 1
            </button>
            <button 
              onClick={() => handleAction("const", "both", -4)}
              className="w-full rounded-lg bg-orange-100 py-2 font-bold text-orange-700 hover:bg-orange-200"
            >
              - 4
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgebraBalance;
