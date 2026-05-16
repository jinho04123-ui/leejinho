import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      
      {/* 
        추가 기능 예시:
        <Features />
        <CourseList />
        여기에 새로운 컴포넌트를 추가하여 페이지를 확장하세요.
      */}
      
      <section className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* 서비스의 특징이나 기능을 소개하는 카드를 여기에 추가할 수 있습니다. */}
      </section>
    </div>
  );
}
