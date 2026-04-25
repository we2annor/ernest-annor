import { Project } from "@ernest-annor/shared";

export const projects: Project[] = [
  {
    id: "1",
    title: "NOWTV & Peacock",
    description:
      "Large-scale consumer streaming platform used by millions of users across web and Tv devices. Led frontend development including Quick Subscribe feature - an Amazon IAP integration that increased subscription rates by 40%.",
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
    liveUrl: "htts://nowtv.com",
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
      "Playwright",
      "Jenkins",
    ],
    featured: true,
    liveUrl: "https://sky.com/shop/tv/sky-glass",
    createdAt: "2021-03-01",
  },
  {
    id: "3",
    title: "Sports Direct E-commerce Platform",
    description:
      "Led performance optimisation initiatives for high-traffic e-commerce platforms across Sports Direct, Flannels, and House of Fraser. Significantly improved page load times and core web vitals.",
    techStack: ["Next.js", "React", "Node.js", "GraphQL", "Apollo", "MongoDB"],
    featured: true,
    createdAt: "2021-03-01",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
