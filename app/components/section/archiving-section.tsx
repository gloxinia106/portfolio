import { GithubComponent } from "../achiving/github";
import { TistoryComponent } from "../achiving/tistory";
import { SectionLayout } from "../section-layout";

export const ArchivingSection = () => {
  return (
    <SectionLayout title="ARCHIVING">
      <div className="grid grid-cols-2 px-16 gap-20">
        <GithubComponent />
        <TistoryComponent />
      </div>
    </SectionLayout>
  );
};
