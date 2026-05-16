"use client";

import { useState } from "react";
import { Settings, Play, CheckCircle2, XCircle, HelpCircle } from "lucide-react";

const FunctionMachine = () => {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<{ in: number; out: number }[]>([]);
  const [guess, setGuess] = useState<string>("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  // Secret rule: f(x) = x * 3 - 2
  const secretRule = (x: number) => x * 3 - 2;
  const secretRuleStr = "x * 3 - 2";

  const handleProcess = () => {
    const num = parseInt(input);
    if (isNaN(num)) return;

    const result = secretRule(num);
    setHistory((prev) => [{ in: num, out: result }, ...prev].slice(0, 5));
    setInput("");
  };

  const handleCheck = () => {
    // Normalize string for simple check
    const normalized = guess.replace(/\s+/g, "").toLowerCase();
    const target = secretRuleStr.replace(/\s+/g, "").toLowerCase();

    if (normalized === target || normalized === "x*3-2" || normalized === "3*x-2" || normalized === "3x-2") {
      setFeedback({ type: "success", msg: "정답입니다! 규칙을 완벽하게 찾아냈어요." });
    } else {
      setFeedback({ type: "error", msg: "틀렸습니다. 다시 한번 추론해보세요!" });
    }
  };

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border bg-white p-6 shadow-xl md:p-8">
      <div className="mb-8 flex items-center space-x-3 text-primary-600">
        <Settings className="h-8 w-8 animate-spin-slow" />
        <h2 className="text-3xl font-extrabold">수학 변환 기계</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-xl bg-gray-50 p-6 border-2 border-dashed border-gray-200">
            <label className="block text-sm font-bold text-gray-600 mb-2">입력값 (Input)</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="숫자 입력"
                className="w-full rounded-lg border-gray-300 px-4 py-2 text-black focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                onClick={handleProcess}
                className="rounded-lg bg-primary-600 p-2 text-white hover:bg-primary-700 transition-colors"
              >
                <Play className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-primary-50 p-6">
            <h3 className="text-lg font-bold text-primary-900 mb-4 flex items-center space-x-2">
              <HelpCircle className="h-5 w-5" />
              <span>규칙 추론하기</span>
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="예: x * 2 + 1"
                className="w-full rounded-lg border-gray-300 px-4 py-2 text-black"
              />
              <button
                onClick={handleCheck}
                className="w-full rounded-lg bg-primary-600 py-3 font-bold text-white hover:bg-primary-700 transition-all"
              >
                확인하기
              </button>
              {feedback && (
                <div className={`flex items-center space-x-2 text-sm font-bold p-3 rounded-lg ${feedback.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {feedback.type === "success" ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                  <span>{feedback.msg}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">변환 기록 (Log)</h3>
          <div className="space-y-2">
            {history.length > 0 ? (
              history.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm border border-gray-100">
                  <div className="text-center w-1/3">
                    <span className="text-xs text-gray-400 block uppercase">In</span>
                    <span className="text-xl font-bold text-gray-700">{item.in}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary-300" />
                  <div className="text-center w-1/3">
                    <span className="text-xs text-gray-400 block uppercase">Out</span>
                    <span className="text-xl font-bold text-primary-600">{item.out}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-gray-400 italic">
                <p>기계를 작동시켜</p>
                <p>기록을 확인하세요</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add CSS for spin-slow
const styles = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
`;

export default FunctionMachine;
