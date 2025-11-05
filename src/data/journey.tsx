export type JourneyEntry = {
  id: string;
  title: string;
  year?: string;
  category: "Project" | "Hackathon" | "Event" | "Organizing" | string;
  description?: string;
  link?: string;
};

export const journeyEntries: JourneyEntry[] = [
  {
    id: "proj-smartessay",
    title: "SmartEssay — Essay practice app",
    year: "2024",
    category: "Project",
    description:
      "Built a lightweight essay practice app with real-time feedback and progress tracking. Focused on accessibility and simple UX for placement prep.",
    link: "https://smartessay.mdfarid.dev/",
  },
  {
    id: "hack-hacktoberfest",
    title: "Hacktoberfest Participant",
    year: "2023",
    category: "Hackathon",
    description: "Contributed to open-source projects and shipped small fixes and docs improvements.",
  },
  {
    id: "event-devmeet-2022",
    title: "DevMeet 2022 — Speaker",
    year: "2022",
    category: "Event",
    description: "Gave a short talk about building with Next.js and improving developer experience.",
  },
  {
    id: "org-campus-hack",
    title: "Campus Hackathon — Organizer",
    year: "2021",
    category: "Organizing",
    description: "Helped organize a 48-hour hackathon for students, coordinated mentors and judging.",
  },
];

export default journeyEntries;
