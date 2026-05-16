"use client";

import { useState } from "react";
import { Lock, Unlock, Key, DoorOpen } from "lucide-react";

const EquationEscape = () => {
  const [level, setLevel] = useState(1);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("방정식을 풀고 비밀번호를 입력해 방을 탈출하세요!");
  const [isEscaped, setIsEscaped] = useState(false);

  const levels = [
    { id: 1, eq: "2x + 5 = 11", ans: "3" },
    { id: 2, eq: "3x - 4 = x + 6", ans: "5" },
    { id: 3, eq: "2(x + 3) = 4x - 2", ans: "4" }
  ];

  const currentLevel = levels.find(l => l.id === level);

  const handleCheck = () => {
    if (!currentLevel) return;

    if (answer.trim() === currentLevel.ans) {
      if (level < levels.length) {
        setMessage(`정답입니다! 다음 방(Level ${level + 1}) 문이 열렸습니다.`);
        setLevel(level + 1);
        setAnswer("");
      } else {
        setIsEscaped(true);
        setMessage("축하합니다! 모든 방을 탈출했습니다! 🎉");
      }
    } else {
      setMessage("틀렸습니다. 다시 계산해보세요!");
    }
  };

  if (isEscaped) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border bg-green-50 p-12 text-center shadow-xl">
        <DoorOpen className="mx-auto mb-6 h-24 w-24 text-green-600 animate-bounce" />
        <h2 className="mb-4 text-4xl font-extrabold text-green-800">탈출 성공!</h2>
        <p className="text-lg text-green-700 font-bold mb-8">당신의 수학 실력이 증명되었습니다.</p>
        <button 
          onClick={() => { setLevel(1); setIsEscaped(false); setAnswer(""); setMessage("방정식을 풀고 비밀번호를 입력해 방을 탈출하세요!"); }}
          className="rounded-full bg-green-600 px-8 py-3 font-bold text-white shadow-lg hover:bg-green-700"
        >
          다시 도전하기
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border bg-gray-900 p-6 shadow-2xl md:p-8 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <Lock className="h-64 w-64" />
      </div>

      <div className="relative z-10">
        <div className="mb-8 flex items-center space-x-3 text-red-400">
          <Key className="h-8 w-8" />
          <h2 className="text-3xl font-extrabold">일차방정식 방탈출</h2>
        </div>

        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-bold text-gray-400">현재 위치</span>
            <span className="font-bold text-red-400">Level {level} / {levels.length}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-800">
            <div 
              className="h-2 rounded-full bg-red-500 transition-all duration-500" 
              style={{ width: `${(level / levels.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="rounded-xl border border-gray-700 bg-gray-800 p-8 text-center shadow-inner mb-8">
          <p className="mb-2 text-sm font-bold text-gray-400 uppercase tracking-widest">문제가 적힌 벽보</p>
          <p className="text-4xl font-extrabold tracking-wider text-white my-6 font-mono">
            {currentLevel?.eq}
          </p>
        </div>

        <div className="mb-6 rounded-lg bg-gray-800/50 p-4 text-center text-sm font-bold text-gray-300">
          {message}
        </div>

        <div className="flex space-x-4">
          <div className="relative flex-grow">
            <span className="absolute left-4 top-3 font-bold text-gray-500">x =</span>
            <input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
              className="w-full rounded-lg border-2 border-gray-700 bg-gray-800 px-12 py-3 text-xl font-bold text-white focus:border-red-500 focus:outline-none"
              placeholder="?"
            />
          </div>
          <button
            onClick={handleCheck}
            className="flex items-center space-x-2 rounded-lg bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700 transition-colors"
          >
            <Unlock className="h-5 w-5" />
            <span>열기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquationEscape;
