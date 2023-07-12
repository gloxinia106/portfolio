import { ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
  title: string;
}

export const SectionLayout = ({ children, title }: SectionLayoutProps) => {
  return (
    <div className="mt-16 px-10 py-16 max-w-6xl mx-auto">
      <h1 className="text-5xl text-center font-black tracking-tighter">
        {title}
      </h1>
      <div className="mt-12">{children}</div>
    </div>
  );
};
