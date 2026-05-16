import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center md:py-32">
      <div className="animate-fade-in-up">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center space-x-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-600">
            <Sparkles className="h-4 w-4" />
            <span>교육의 새로운 시작</span>
          </div>
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
          <span className="text-primary-600">진호쌤</span>의 수학 실험교실
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 md:text-xl">
          가장 단순하고 깔끔한 시작. 이제 당신의 아이디어를 교육 서비스로 구현해보세요. 
          Vercel을 통해 클릭 한 번으로 배포할 수 있습니다.
        </p>
        
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <button className="rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition-all">
            더 알아보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
