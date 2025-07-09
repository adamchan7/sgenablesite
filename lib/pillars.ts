export interface Pillar {
  id: number;
  title: string;
  summary: string;
  why: string;
  quickLinks: string[];
  route: string;
}

export const pillars: Pillar[] = [
  {
    id: 1,
    title: "Leadership, Culture & Climate",
    summary: "Intro, stereotypes, supervisor role, business case, accommodation myths, assistive tech boost",
    why: "Sets the tone & embeds inclusion.",
    quickLinks: [
      "Leadership commitment framework",
      "Bias awareness training",
      "Supervisor toolkits",
      "Business case templates"
    ],
    route: "/leadership"
  },
  {
    id: 2,
    title: "Recruitment Practices",
    summary: "Fair selection, non-bias interview, pre-hire adjustments, assistive tech match",
    why: "Delivers fair, bias-free hiring.",
    quickLinks: [
      "Fair selection checklist",
      "Non-bias interview guide",
      "Pre-hire adjustment form",
      "Assistive technology matching"
    ],
    route: "/recruitment"
  },
  {
    id: 3,
    title: "Workplace Accessibility & Accommodations",
    summary: "Universal design basics, self-checklist, AT devices, emergency prep",
    why: "End-to-end physical & digital access.",
    quickLinks: [
      "Universal design principles",
      "Accessibility self-assessment",
      "AT device catalog",
      "Emergency preparedness"
    ],
    route: "/workplace"
  },
  {
    id: 4,
    title: "Employment Practices",
    summary: "Training, mentoring, performance, benefits, HR policy link",
    why: "Onboard → grow → retain talent.",
    quickLinks: [
      "Onboarding templates",
      "Mentoring programs",
      "Performance management",
      "Benefits optimization"
    ],
    route: "/employment"
  },
  {
    id: 5,
    title: "Community Engagement & Promotion",
    summary: "Natural supports, comms tips, Tech Able grants, TAFEP & NCSS",
    why: "Build partnerships & tell your story.",
    quickLinks: [
      "Community partnerships",
      "Communications toolkit",
      "Grant applications",
      "Success story templates"
    ],
    route: "/community"
  },
  {
    id: 6,
    title: "Extent of Inclusive Hiring",
    summary: "KPI tracker, measurement tips, progression data, scorecard",
    why: "Baseline & prove hiring impact.",
    quickLinks: [
      "KPI tracking dashboard",
      "Measurement methodologies",
      "Progress reporting",
      "Impact scorecard"
    ],
    route: "/inclusive-hiring"
  }
];