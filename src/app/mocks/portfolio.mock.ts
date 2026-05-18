import { Job, Project } from '../models/portfolio.model';

export const MOCK_JOBS: Job[] = [
  {
    _id: '1',
    date: '2023 — Present',
    link: 'https://www.accenture.com/sg-en/about/company/singapore',
    title: 'Front-End Developer · Accenture Pte Ltd',
    description:
      'Build enterprise-level web applications for Singapore government clients (CPF, IRAS) using Angular and React. Implement responsive and accessible interfaces with modern tools and manage state with NgRx and reactive patterns using RxJS. Collaborate in agile teams and maintain clean code through peer reviews and documentation.',
    skills: [
      'TypeScript',
      'JavaScript',
      'Angular',
      'React',
      'RxJS',
      'NgRx',
      'SQL',
      'Jasmine',
      'Tailwind CSS',
      'TanStack',
      'Figma',
      'Azure DevOps',
      'Git',
    ],
  },
  {
    _id: '2',
    date: '2022 — 2023',
    link: 'https://www.nalagenetics.com',
    title: 'Software Engineer (Front-End) · Nalagenetics',
    description:
      "Developed a genetic interpretation platform using Angular, handling complex backend API integrations. Designed and built the company's marketing website with SEO in mind. Collaborated on UI/UX via Figma, led bug fixing and sprint documentation, and managed tasks with Jira.",
    skills: [
      'Angular',
      'Bootstrap',
      'TypeScript',
      'Bitbucket',
      'SourceTree',
      'Figma',
      'Jira',
    ],
  },
  {
    _id: '3',
    date: '2021 — 2022',
    link: 'https://www.nalagenetics.com',
    title: 'IT Support Engineer · Nalagenetics',
    description:
      'Managed AWS EC2 and S3 cloud infrastructure, user accounts, and IT assets. Created a Jira-based IT Helpdesk, implemented onboarding/offboarding via JumpCloud, and ensured ISO 27001 and ISO 13485 compliance.',
    skills: ['AWS', 'EC2', 'S3', 'JumpCloud', 'Jira', 'ISO 27001', 'ISO 13485'],
  },
  {
    _id: '4',
    date: '2020 — 2021',
    link: 'https://geodis.com/sg/en',
    title: 'Regional IT Project Specialist · GEODIS APAC',
    description:
      'Coordinated APAC-wide ITSM improvement initiatives across 14 countries. Supported server migrations, demand management, and coordinated project updates directly with the CIO and regional IT teams.',
    skills: [
      'ITSM',
      'Project Management',
      'Server Migration',
      'Office 365',
      'Documentation',
      'Stakeholder Coordination',
    ],
  },
];

export const MOCK_PROJECTS: Project[] = [
  {
    _id: '1',
    img: './assets/img/joshua-vicente-v1.png',
    imgName: 'joshua-vicente-v1.png',
    link: 'https://ejrvt.vercel.app',
    title: 'ejrvt.vercel.app',
    description:
      'My portfolio site built on Angular and hosted on Vercel. This site is a work in progress and will be updated as I learn new skills and technologies.',
    skills: ['Angular', 'SASS', 'TypeScript', 'Bootstrap', 'Github', 'Vercel'],
  },
];
