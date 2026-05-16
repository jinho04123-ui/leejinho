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
          나만의 <span className="text-primary-600">교육용 웹앱</span> 만들기
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 md:text-xl">
          가장 단순하고 깔끔한 시작. 이제 당신의 아이디어를 교육 서비스로 구현해보세요. 
          Vercel을 통해 클릭 한 번으로 배포할 수 있습니다.
        </p>
        
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <button className="flex items-center justify-center space-x-2 rounded-lg bg-primary-600 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-primary-700 hover:scale-105 transition-all">
            <span>시작하기</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <button className="rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition-all">
            더 알아보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
