import { ReactNode } from "react";

interface ProjecsLayoutProps {
  title: string;
  children: ReactNode;
  imgSrc: string;
  githubUrl: string;
  websiteUrl: string;
  useTech: string;
}

export const ProjectsLayout = ({
  title,
  children,
  imgSrc,
  githubUrl,
  websiteUrl,
  useTech,
}: ProjecsLayoutProps) => {
  return (
    <div className="bg-white py-7 px-7 rounded-xl h-[55vh]">
      <div className="flex flex-col md:flex-row h-full gap-7 ">
        <div className="hidden md:block flex-1">
          <img className="max-h-full object-cover" src={imgSrc} />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl w-full text-center font-bold">
            {title}
          </h1>
          <div className="mt-5 text-sm sm:text-base space-y-2">{children}</div>
          <div
            className={
              "block md:grid grid-cols-[1fr_4fr] mt-7 gap-y-2 text-sm md:text-base"
            }
          >
            <div className="font-semibold">URL</div>
            <a
              className="text-blue-500 hover:underline cursor-pointer"
              href={websiteUrl}
            >
              {websiteUrl}
            </a>
            <div className="mt-1 md:mt-0 font-semibold">Github</div>
            <a
              className="text-blue-500 hover:underline cursor-pointer"
              href={githubUrl}
            >
              {githubUrl}
            </a>
            <div className="mt-1 md:mt-0 font-semibold">사용 기술</div>
            <div>{useTech}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
