import Link from "next/link";
import { GraduationCap } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold tracking-tight text-primary-600">
          <GraduationCap className="h-8 w-8" />
          <span>EduApp</span>
        </Link>
        
        <nav className="hidden space-x-6 md:flex">
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
            강의 목록
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
            내 학습
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
            커뮤니티
          </Link>
          {/* 여기에 새로운 네비게이션 링크를 추가하세요 */}
        </nav>

        <div className="flex items-center space-x-4">
          <button className="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition-all shadow-md hover:shadow-lg">
            로그인
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
