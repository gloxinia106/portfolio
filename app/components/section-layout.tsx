import { ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
  title: string;
  titleColor?: "black" | "white";
}

export const SectionLayout = ({
  children,
  title,
  titleColor = "black",
}: SectionLayoutProps) => {
  return (
    <div className="mt-16 px-10 py-8 md:py-16 max-w-6xl mx-auto">
      <h1
        className={`${
          titleColor === "black" ? "text-black" : "text-white"
        } text-4xl md:text-5xl text-center font-black tracking-tighter`}
      >
        {title}
      </h1>
      <div className="mt-12 relative">{children}</div>
    </div>
  );
};
