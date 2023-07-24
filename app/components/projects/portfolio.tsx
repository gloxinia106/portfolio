import { ProjectsLayout } from "./projects-layout";

export const PortFolioComponent = () => {
  return (
    <ProjectsLayout
      imgSrc="/projects/portfolio.png"
      websiteUrl="https://portfolio-cjh.vercel.app"
      title="포트폴리오 사이트"
      githubUrl="https://github.com/gloxinia106/portfolio"
      useTech="Nextjs, TypeScript, TailwindCSS, Swiper"
    >
      <p>
        <strong>포트폴리오를 위해 만든 웹사이트입니다. </strong>
        현재 보고 있는 웹사이트입니다.
      </p>
      <p>
        Nextjs 13에서 추가된 App Router를 사용하여 만들었고 앞에서 만든 이벤트
        페이지의 디자인에서 영감을 얻어서 fullpage형식으로 웹을 디자인했습니다.
      </p>
    </ProjectsLayout>
  );
};
