import Hero from "@/components/Hero";
import PrimeFactorizer from "@/components/PrimeFactorizer";
import SieveOfEratosthenes from "@/components/SieveOfEratosthenes";
import FunctionMachine from "@/components/FunctionMachine";
import CoordinateOmok from "@/components/CoordinateOmok";

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
          <div id="coordinate-omok">
            <CoordinateOmok />
          </div>

          <div id="sieve">
            <SieveOfEratosthenes />
          </div>
          
          <div id="function-machine">
            <FunctionMachine />
          </div>
          
          <div id="factorizer">
            <PrimeFactorizer />
          </div>
        </div>
      </section>
      
      <section className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* 추가적인 기능 카드들을 여기에 배치할 수 있습니다. */}
      </section>
    </div>
  );
}
