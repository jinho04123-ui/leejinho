"use client";

import { useState } from "react";
import { Calculator, RefreshCw } from "lucide-react";

interface FactorMap {
  [key: number]: number;
}

const PrimeFactorizer = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<FactorMap | null>(null);
  const [error, setError] = useState<string | null>(null);

  const factorize = (n: number): FactorMap => {
    const factors: FactorMap = {};
    let d = 2;
    let temp = n;

    while (temp % d === 0) {
      factors[d] = (factors[d] || 0) + 1;
      temp /= d;
    }
    
    d = 3;
    while (d * d <= temp) {
      while (temp % d === 0) {
        factors[d] = (factors[d] || 0) + 1;
        temp /= d;
      }
      d += 2;
    }

    if (temp > 1) {
      factors[temp] = (factors[temp] || 0) + 1;
    }

    return factors;
  };

  const handleCalculate = () => {
    setError(null);
    const num = parseInt(input);

    if (isNaN(num)) {
      setError("올바른 숫자를 입력해주세요.");
      setResult(null);
      return;
    }

    if (num < 2) {
      setError("2 이상의 숫자를 입력해주세요.");
      setResult(null);
      return;
    }

    if (num > 1000000000) {
      setError("너무 큰 숫자입니다. (10억 이하 권장)");
      setResult(null);
      return;
    }

    setResult(factorize(num));
  };

  const handleReset = () => {
    setInput("");
    setResult(null);
    setError(null);
  };

  return (
    <div className="mx-auto max-w-xl rounded-2xl border bg-white p-6 shadow-xl md:p-8">
      <div className="mb-6 flex items-center space-x-3 text-primary-600">
        <Calculator className="h-6 w-6" />
        <h2 className="text-2xl font-bold">소인수분해 계산기</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="number-input" className="block text-sm font-medium text-gray-700">
            분해할 숫자 입력
          </label>
          <div className="mt-1 flex space-x-2">
            <input
              id="number-input"
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="예: 120"
              className="block w-full rounded-lg border-gray-300 px-4 py-3 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm text-black"
            />
            <button
              onClick={handleCalculate}
              className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all"
            >
              계산
            </button>
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>

        {result && (
          <div className="mt-8 rounded-xl bg-primary-50 p-6 text-center animate-fade-in">
            <p className="text-sm font-medium text-primary-600">계산 결과</p>
            <div className="mt-2 flex flex-wrap justify-center items-baseline space-x-2">
              <span className="text-3xl font-bold text-gray-900">{input} = </span>
              <div className="flex items-center space-x-1">
                {Object.entries(result).map(([factor, exponent], index, array) => (
                  <span key={factor} className="flex items-baseline">
                    <span className="text-3xl font-extrabold text-primary-700">{factor}</span>
                    {exponent > 1 && (
                      <sup className="text-xl font-bold text-primary-500 ml-0.5">{exponent}</sup>
                    )}
                    {index < array.length - 1 && (
                      <span className="mx-2 text-2xl text-gray-400">×</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 inline-flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              <span>다시 하기</span>
            </button>
          </div>
        )}
      </div>
      
      {/* 여기에 추가적인 수학 도구를 배치하거나 컴포넌트를 확장하세요 */}
    </div>
  );
};

export default PrimeFactorizer;
