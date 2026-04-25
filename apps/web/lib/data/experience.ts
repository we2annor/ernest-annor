import { Experience } from "@ernest-annor/shared";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Sky",
    role: "Software Engineer (Senior Level)",
    startDate: "2022-05",
    current: true,
    description: [
      "Lead frontend engineer on NowTV and Peacock streaming platforms used by millions of users",
      "Implemented Quick Subscribe Amazon IAP integration increasing subscription rates by 40%",
      "Contributing to platform modernisation — migrating from React to Lightning framework",
      "Driving frontend architecture decisions, performance improvements and accessibility",
    ],
    techStack: [
      "React",
      "TypeScript",
      "GraphQL",
      "Lightning",
      "Jenkins",
      "Kubernetes",
      "Docker",
    ],
    location: "London, UK",
  },
  {
    id: "2",
    company: "AND Digital",
    role: "Software Engineer",
    startDate: "2021-03",
    endDate: "2022-05",
    current: false,
    description: [
      "Key contributor to the launch of Sky Glass — Sky's flagship pay-TV product",
      "Built internal customer agent applications supporting sales, purchases, and refunds",
      "Led performance optimisation for Sports Direct, Flannels, and House of Fraser e-commerce",
      "Designed and built internal dashboards for project tracking and resource planning",
    ],
    techStack: ["React", "Next.js", "GraphQL", "Node.js", "Apollo", "MongoDB"],
    location: "London, UK",
  },
  {
    id: "3",
    company: "OLM Systems",
    role: "Software Developer",
    startDate: "2019-01",
    endDate: "2020-11",
    current: false,
    description: [
      "Migrated large legacy YUI codebase to React for next-generation SaaS platform",
      "Contributed to backend development in Java improving data integrity and performance",
      "Worked in Care, Health, and Education sector with strict data requirements",
    ],
    techStack: ["React", "Java", "Jest", "Jenkins"],
    location: "London, UK",
  },
];

export const currentExperience = experiences.find((e) => e.current);
