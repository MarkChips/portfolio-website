import { WorkExperience } from "@/components/work-experience";
import type { ExperienceItemType } from "@/components/work-experience";

export default function Page() {
  const workExperience: ExperienceItemType[] = [
    {
      id: "1",
      companyName: "Self-Employed",
      companyLogo: "",
      isCurrentEmployer: true,
      positions: [
        {
          id: "1-1",
          title: "Web Developer",
          employmentPeriod: "March 2025 -- Present",
          employmentType: "Freelance",
          description: `- Rebuilding and modernising a church website in Blocs for easy client maintenance. 
- Audited and mapped the existing site; planned and implemented new structure and content.
- Collaborated with the client on requirements, UX, and accessibility improvements.
- Created documentation for non-technical users; ongoing iterative updates.`,
          icon: "code",
          skills: ["Blocs", "Web Development", "User Experience (UX)"],
          isExpanded: true,
        },
      ],
    },
    {
      id: "2",
      companyName: "DataAnnotation.Tech",
      companyLogo: "",
      isCurrentEmployer: true,
      positions: [
        {
          id: "2-1",
          title: "Prompt Engineer",
          employmentPeriod: "November 2024 -- Present",
          employmentType: "Contractor",
          description: `- Utilizing Reinforcement Learning from Human Feedback (RLHF) techniques.
- Ensuring model adherence to legal and ethical standards.
- Quality assurance for AI-generated content.
- Contributing to the development of advanced generative AI models.`,
          icon: "code",
          skills: ["Data Annotation", "AI", "JSON", "Application Programming Interfaces (API)", "Prompt Engineering", "Large Language Models"],
          isExpanded: true,
        },
      ],
    },
    {
      id: "3",
      companyName: "Boat Building Academy",
      companyLogo: "",
      isCurrentEmployer: false,
      positions: [
        {
          id: "3-1",
          title: "Boat Builder",
          employmentPeriod: "August 2022 -- December 2023",
          employmentType: "Volunteer, Student",
          description: `- Contributed as part of a team. I was flexible in my approach, helping out wherever I was needed.
- Dedicated, I pulled many late hours. I even came in on some weekends.
- Adhered towards a strict deadline, with the huge pressure of needing the boat to float in front of a public audience.
- Actively engaged with the team. Were it not for my contributions, the boat would not have been ready. Our hard work paid off, the boat launch was a success.`,
          icon: "education",
          skills: ["Teamwork", "Woodwork"],
          isExpanded: false,
        },
      ],
    },
    {
      id: "4",
      companyName: "CeX Webuy.com",
      companyLogo: "",
      isCurrentEmployer: false,
      positions: [
        {
          id: "4-1",
          title: "Customer Service Assistant/Ecommerce Admin",
          employmentPeriod: "June 2017 -- June 2021",
          employmentType: "Full-time",
          description: `- Created my own macro shortcut responses; which meant I was able to type an email 10 times faster!
- Maintained the database and added updates to ensure the database was more readable.
- Politely answering many customers queries each day, exercising good communication.
- Helped customers by resolving their order complications, writing in concise detail so that it would be easy for customers to understand.
- Advocated on customer's behalf and liaised with other departments to ensure higher levels of service were received.
- Ensured the orders were kept in organized storage and easily findable via a database.`,
          icon: "business",
          skills: ["Office Administration", "B2C ecommerce"],
          isExpanded: false,
        },
        {
          id: "4-2",
          title: "Post Worker",
          employmentPeriod: "February 2016 -- May 2017",
          employmentType: "Full-time",
          description: `- Took the responsibility of signing for packages and making sure that they went to the right person.
- Organised stock: labelled up all stock and updated order statuses, ensuring everything was organised and ready to be passed onto the tester.- Manifested dispatches: made certain that all dispatches were present, well packaged, and ready for the postman to deliver onto the customers.
- Logged the details of 100s of packages and orders daily.`,
          icon: "business",
          skills: ["Data Entry"],
          isExpanded: false,
        },
        {
          id: "4-3",
          title: "Hardware Tester",
          employmentPeriod: "January 2015 -- February 2016",
          employmentType: "Full-time",
          description: `- Hands on experience of a wide variety of gadgets and technology. Increasing my interest in tech and my understanding of UX.
- From computers and consoles, to cameras and smartphones, I checked through all device functions, and restored items to factory conditions; thus saving future owners from purchasing faulty goods.
- Ensured that all items being returned were wrapped neatly and securely, therefore preventing anymore damage to goods.`,
          icon: "business",
          skills: ["Computer Hardware", "Testing"],
          isExpanded: false,
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