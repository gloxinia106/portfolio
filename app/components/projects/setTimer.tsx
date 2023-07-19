import { ProjectsLayout } from "./projects-layout";

export const SetTimerComponents = () => {
  return (
    <ProjectsLayout
      githubUrl="https://github.com/gloxinia106/set-timer-web"
      websiteUrl="https://setimer.netlify.app"
      imgSrc="/projects/setTimer.png"
      title="운동 인터벌 타이머"
      useTech="PWA, Nextjs, TypeScript, tailwindCSS"
    >
      <p>
        <strong>타바타 운동을 위한 인터벌 타이머 웹사이트입니다. </strong>
        운동을 하다 몸 부위별로 인터벌 타이머를 설정하면 좋을 거 같아서
        만들었습니다.
      </p>
      <p>
        기본적으로 웹기반으로 만들었지만 PWA를 적극 사용해서 모바일에서 앱처럼
        보이게 만들면서 PWA에 대해 더 깊이 이해를 할 수 있었습니다.
      </p>
    </ProjectsLayout>
  );
};
