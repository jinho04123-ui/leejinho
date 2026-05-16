import Hero from "@/components/Hero";
import PrimeFactorizer from "@/components/PrimeFactorizer";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      
      <section className="my-16">
        <PrimeFactorizer />
        <div className="mt-8 text-center text-gray-500 italic">
          // 여기에 새로운 수학 교육용 도구를 추가해 보세요!
        </div>
      </section>
      
      <section className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* 추가적인 기능 카드들을 여기에 배치할 수 있습니다. */}
      </section>
    </div>
  );
}
