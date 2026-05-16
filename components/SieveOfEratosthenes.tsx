"use client";

import { useState, useEffect } from "react";
import { Grid3X3, RotateCcw, Info } from "lucide-react";

const SieveOfEratosthenes = () => {
  const [numbers, setNumbers] = useState<{ value: number; status: "idle" | "prime" | "composite" }[]>([]);
  const [primes, setPrimes] = useState<number[]>([]);
  const maxNumber = 100;

  useEffect(() => {
    reset();
  }, []);

  const reset = () => {
    const initial = Array.from({ length: maxNumber - 1 }, (_, i) => ({
      value: i + 2,
      status: "idle" as const,
    }));
    setNumbers(initial);
    setPrimes([]);
  };

  const handleNumberClick = (clickedValue: number) => {
    const numberObj = numbers.find((n) => n.value === clickedValue);
    if (!numberObj || numberObj.status !== "idle") return;

    // Mark as prime
    const newNumbers = [...numbers];
    const index = newNumbers.findIndex((n) => n.value === clickedValue);
    newNumbers[index].status = "prime";
    
    // Mark multiples as composite
    for (let i = index + clickedValue; i < newNumbers.length; i += clickedValue) {
      if (newNumbers[i].status === "idle") {
        newNumbers[i].status = "composite";
      }
    }

    setNumbers(newNumbers);
    setPrimes((prev) => [...prev, clickedValue].sort((a, b) => a - b));
  };

  return (
    <div className="mx-auto max-w-4xl rounded-2xl border bg-white p-6 shadow-xl md:p-8">
      <div className="mb-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="flex items-center space-x-3 text-primary-600">
          <Grid3X3 className="h-8 w-8" />
          <h2 className="text-3xl font-extrabold">에라토스테네스의 체</h2>
        </div>
        <button
          onClick={reset}
          className="flex items-center space-x-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-bold text-gray-600 hover:bg-gray-200 transition-all"
        >
          <RotateCcw className="h-4 w-4" />
          <span>초기화</span>
        </button>
      </div>

      <div className="mb-6 rounded-xl bg-blue-50 p-4 flex items-start space-x-3">
        <Info className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
        <p className="text-sm text-blue-700">
          <strong>방법:</strong> 가장 작은 수부터 클릭해보세요. 그 수의 배수들이 자동으로 걸러집니다. 
          모든 배수를 거르고 남는 수들이 바로 소수입니다!
        </p>
      </div>

      <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
        {numbers.map((n) => (
          <button
            key={n.value}
            onClick={() => handleNumberClick(n.value)}
            disabled={n.status !== "idle"}
            className={`
              flex h-12 items-center justify-center rounded-lg text-lg font-bold transition-all
              ${n.status === "idle" ? "bg-gray-50 text-gray-700 hover:bg-primary-100 hover:text-primary-700" : ""}
              ${n.status === "prime" ? "bg-primary-600 text-white scale-110 shadow-lg ring-2 ring-primary-300 z-10" : ""}
              ${n.status === "composite" ? "bg-gray-200 text-gray-400 opacity-50" : ""}
            `}
          >
            {n.value}
          </button>
        ))}
      </div>

      <div className="mt-12 border-t pt-8">
        <h3 className="mb-4 text-xl font-bold text-gray-800">발견한 소수 목록</h3>
        <div className="flex flex-wrap gap-2">
          {primes.length > 0 ? (
            primes.map((p) => (
              <span key={p} className="rounded-full bg-primary-100 px-4 py-1 text-sm font-bold text-primary-700 border border-primary-200 animate-fade-in">
                {p}
              </span>
            ))
          ) : (
            <p className="text-gray-400 italic text-sm">숫자를 클릭하여 소수를 찾아보세요.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SieveOfEratosthenes;
