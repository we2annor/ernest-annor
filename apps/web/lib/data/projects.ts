import { Project } from "@ernest-annor/shared";

export const projects: Project[] = [
  {
    id: "1",
    title: "NowTV & Peacock Streaming Platform",
    description:
      "Lead frontend engineer on large-scale consumer streaming applications used by millions of users across web and TV devices. Implemented the Quick Subscribe Amazon IAP integration that increased subscription rates by 40%.",
    techStack: [
      "React",
      "TypeScript",
      "GraphQL",
      "Lightning",
      "Jenkins",
      "Kubernetes",
      "Docker",
    ],
    featured: true,
    liveUrl: "https://nowtv.com",
    createdAt: "2022-05-01",
  },
  {
    id: "2",
    title: "Sky Glass Launch",
    description:
      "Key contributor to the launch of Sky Glass — Sky's flagship product delivering pay-TV directly to screens without a set-top box. Built internal customer agent applications supporting sales, purchases, and refunds.",
    techStack: [
      "React",
      "GraphQL",
      "Styled Components",
      "Storybook",
      "Playwright",
      "Jenkins",
    ],
    featured: true,
    liveUrl: "https://sky.com/shop/tv/sky-glass",
    createdAt: "2021-03-01",
  },
  {
    id: "3",
    title: "Sports Direct E-commerce Performance",
    description:
      "Led performance optimisation initiatives for high-traffic e-commerce platforms across Sports Direct, Flannels, and House of Fraser. Significantly improved page load times, core web vitals, and user experience.",
    techStack: ["Next.js", "React", "Node.js", "GraphQL", "Apollo", "MongoDB"],
    featured: true,
    createdAt: "2021-03-01",
  },
  {
    id: "4",
    title: "OLM ECLIPSE SaaS Platform",
    description:
      "Migrated a large legacy YUI codebase to React as part of a next-generation SaaS platform serving the Care, Health, and Education sector. Contributed to backend development in Java improving data integrity and system performance.",
    techStack: ["React", "YUI", "Java", "Jest", "Jenkins", "Bitbucket"],
    featured: false,
    createdAt: "2019-01-01",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
