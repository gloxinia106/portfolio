import { ProjectsLayout } from "./projects-layout";

export const QquizzesComponent = () => {
  return (
    <ProjectsLayout
      githubUrl="https://github.com/gloxinia106/Qquiz"
      title="퀴즈 사이트"
      imgSrc="/projects/qquizzes.png"
      websiteUrl="https://qquizzes.com"
      useTech="Nextjs, Firebase, cloudflare R2, Recoil, TypeScript, TailwindCSS"
    >
      <p>
        <strong>다양한 퀴즈를 올리고 풀 수 있는 사이트입니다. </strong>
        예능 게임 퀴즈 사이트를 보고 사람들이 퀴즈를 직접 올릴 수 있는 사이트를
        만들면 재밌을 것 같아서 만들었습니다.
      </p>
      <p>
        nextjs와 firebase를 사용해서 풀스택을 구현했습니다. 그리고 cloudflare를
        통해서 배포하였습니다. 또한 이미지를 저장하기 위해 cloudflare R2를
        사용했습니다.
      </p>
    </ProjectsLayout>
  );
};
