const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-primary-600">EduApp</p>
            <p className="mt-2 text-sm text-gray-500">배움을 더 즐겁게, 기술을 더 가깝게.</p>
          </div>
          
          <div className="flex space-x-8 text-sm text-gray-600">
            <a href="#" className="hover:text-primary-600 transition-colors">이용약관</a>
            <a href="#" className="hover:text-primary-600 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-primary-600 transition-colors">고객지원</a>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} EduApp Boilerplate. All rights reserved.</p>
          {/* 여기에 추가적인 저작권 정보나 링크를 추가하세요 */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
