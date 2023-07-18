import { ProjectsLayout } from "./projects-layout";

export const DolimpanComponent = () => {
  return (
    <ProjectsLayout
      title="돌림판 사이트"
      imgSrc="/projects/dolimpan.png"
      githubUrl="https://github.com/gloxinia106/roulette"
      websiteUrl="https://dolimpan.netlify.app"
      useTech="HTML, JavaScript, CSS, Gulp"
    >
      <p>
        <strong>복볼복 돌림판 웹사이트 입니다. </strong>
        돌린판 크롬 확장 프로그램을 보고 크롬말고 다른 브라우저 또는 다른
        모바일에서 있었으면 좋겠다라고 생각해서 개발하게 되었습니다.
      </p>
      <p>
        바닐라 javascript, css, html만을 사용해서 만들었고 webpack을 대신해서
        gulp을 사용했습니다. 또한 javascript를 배우고 처음으로 만든 사이트라
        저에게 더욱 의미있었습니다.
      </p>
    </ProjectsLayout>
  );
};
