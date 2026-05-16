import Hero from "@/components/Hero";
import PrimeFactorizer from "@/components/PrimeFactorizer";
import SieveOfEratosthenes from "@/components/SieveOfEratosthenes";
import FunctionMachine from "@/components/FunctionMachine";
import CoordinateOmok from "@/components/CoordinateOmok";
import AlgebraBalance from "@/components/AlgebraBalance";
import EquationEscape from "@/components/EquationEscape";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      
      <section className="my-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">학습 프로그램</h2>
          <p className="mt-4 text-gray-600">수학의 원리를 직접 체험하며 재미있게 배워보세요.</p>
        </div>
        
        <div className="space-y-32">
          <div id="equation-escape">
            <EquationEscape />
          </div>

          <div id="algebra-balance">
            <AlgebraBalance />
          </div>

          <div id="coordinate-omok">
            <CoordinateOmok />
          </div>

          <div id="function-machine">
            <FunctionMachine />
          </div>
          
          <div id="sieve">
            <SieveOfEratosthenes />
          </div>

          <div id="factorizer">
            <PrimeFactorizer />
          </div>
        </div>
      </section>

      <section className="mt-24 mb-16 rounded-3xl bg-primary-50 p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🛠️ 현재 진호쌤이 열심히 개발 중인 게임들</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {['소인수분해 디펜스', '수직선 탈출', '수학 다이스 배틀', '대수막대 일차식', '일차방정식 릴레이', '회전체 3D 탐구', '그래프 탐구 연구소', '항아리 물채우기', '반려식물 성장일기'].map((name, i) => (
            <div key={i} className="flex h-32 flex-col items-center justify-center rounded-2xl bg-white shadow-sm border border-primary-100 opacity-60 transition-all hover:opacity-100 hover:shadow-md cursor-not-allowed">
              <span className="font-bold text-gray-700">{name}</span>
              <span className="mt-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-bold text-primary-700">Coming Soon</span>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* 추가적인 기능 카드들을 여기에 배치할 수 있습니다. */}
      </section>
    </div>
  );
}
