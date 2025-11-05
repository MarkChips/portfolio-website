import { WorkExperience } from "@/components/work-experience";
import type { ExperienceItemType } from "@/components/work-experience";

export default function Page() {
  const workExperience: ExperienceItemType[] = [
    {
      id: "1",
      companyName: "",
      companyLogo: "",
      isCurrentEmployer: true,
      positions: [
        {
          id: "1-1",
          title: "",
          employmentPeriod: "",
          employmentType: "",
          description: "",
          icon: "code",
          skills: [],
          isExpanded: true,
        },
      ],
    }
  ];

  return (
    <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-around py-32 px-16 bg-white dark:bg-black sm:items-start">
      <WorkExperience experiences={workExperience} />
    </main>
  );
}