export const TistoryComponent = () => {
  return (
    <div className="bg-white rounded-2xl shadow px-8 py-6 space-y-5">
      <div className="flex items-center">
        <img src="/archiving/tistory.svg" className="h-12" />
      </div>
      <a
        href="https://meina.tistory.com"
        className="block hover:underline text-blue-500"
      >
        meina.tistory.com
      </a>
      <div className="font-medium">공부한 내용 저장용 블로그</div>
      <ul className="space-y-1 ">
        <li>사이드 프로젝트 하면서 알아낸 정보 기록</li>
        <li>대학교 전공 관련 공부한 내용 기록</li>
        <li>웹 관련 지식에 대한 정리</li>
        <li>내가 배우고 알아낸 지식들의 대한 공유</li>
      </ul>
    </div>
  );
};
