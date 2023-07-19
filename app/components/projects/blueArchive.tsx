import { ProjectsLayout } from "./projects-layout";

export const BlueArchiveComponent = () => {
  return (
    <ProjectsLayout
      githubUrl="https://github.com/gloxinia106/bluearchive-eventpage-clone"
      websiteUrl="https://earnest-beignet-b6f65b.netlify.app"
      imgSrc="/projects/blueArchive.png"
      title="블루아카 이벤트 페이지"
      useTech="Swiper, Nextjs, tailwindCSS"
    >
      <p>
        <strong>
          블루아카이브 이벤트 페이지를 클론코딩한 웹사이트입니다.{" "}
        </strong>
        게임을 위해 이벤트 페이지에 접속하다 fullpage 형식의 웹사이트가 예뻐서
        만들었습니다.
      </p>
      <p>
        fullpagejs라는 라이브러리를 사용하려다 라이센스 문제로 Swiper를 사용해서
        웹을 디자인했고 만드는 과정에서 react portal로 modal을 만드는 방법을
        배웠습니다.
      </p>
    </ProjectsLayout>
  );
};
