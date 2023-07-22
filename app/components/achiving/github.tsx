export const GithubComponent = () => {
  return (
    <div className="bg-white rounded-2xl shadow px-7 py-5 space-y-5 h-full">
      <div className="flex items-center">
        <img src="/archiving/github.svg" className="w-12 h-12" />
        <img src="/archiving/github-text.png" className="h-12" />
      </div>
      <a
        href="https://github.com/gloxinia106"
        className="block hover:underline text-blue-500"
      >
        github.com/gloxinia106
      </a>
      <div className="font-medium">소스 코드 보관소입니다.</div>
      <ul className="space-y-1 ">
        <li>사이드 프로젝트들의 소스 코드</li>
        <li>알고리즘을 공부하기 위해 작성한 소스 코드</li>
        <li>대학교 프로젝트의 소스 코드</li>
      </ul>
    </div>
  );
};
