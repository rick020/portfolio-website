const person = {
  firstName: "Rick",
  lastName: "Bruins",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "MLOps Engineer & Web Developer",
  avatar: "/images/avatar.jpg",
  location: "London, UK",
  languages: ["English", "Dutch"], // optional: Leave the array empty if you don't want to display languages
};


const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rick020",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rick-bruins/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:bruins.data@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Websites that turn visitors into customers</>,
  subline: (
    <>
      I design and build fast, conversion-focused websites for startups, service businesses, and
      independent brands.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    descriptionText:
      "Rick is a London-based web developer focused on building performant websites that help businesses generate more leads and sales.",
    description: (
      <>
        I am a London-based MLOps Engineer & Web Developer focused on building performant websites that help
        businesses generate more leads and sales.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      { company: "Cleo LTD, London", 
        timeframe: "September 2025 - Present", 
        role: "Senior MLOps Engineer", 
        achievements: [
        <>
        Working in the Data & MLOps platform team that enables scalable ML operations.
        </>,
        ],
        images: [], 
      },
      {
        company: "ASOS.com, London",
        timeframe: "August 2022 - August 2025",
        role: "Senior Machine Learning Engineer",
        achievements: [
          <>
            I lead technical delivery in recommendation and personalized search, with a focus on
            architecture, reliability, and measurable business impact.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Xomnia, Amsterdam",
        timeframe: "July 2020 - June 2022",
        role: "Machine Learning Engineer",
        achievements: [
          <>
            Worked directly with client teams to scope, build, and ship production systems across
            multiple industries.
          </>,
        ],
        images: [],
      },
      {
        company: "Data Science Lab, Amsterdam",
        timeframe: "October 2019 - May 2020",
        role: "Data Scientist",
        achievements: [
          <>
            Delivered applied analytics projects from data exploration to production-ready outputs
            for commercial teams.
          </>,
          <>
            Built decision-support dashboards that were adopted by operational stakeholders.
          </>
        ],
        images: [],
      },
      {
        company: "KLM, Amsterdam",
        timeframe: "July 2018 - August 2019",
        role: "Data Scientist",
        achievements: [
          <>
            Built forecasting and anomaly-detection solutions in a finance analytics environment
            with strict quality requirements.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Amsterdam, Netherlands",
        description: <>MSc Data Science</>,
      },
      {
        name: "Chapman University, United States",
        description: <> Exchange program</>,
      },
      {
        name: "University of Amsterdam, Netherlands",
        description: <>BSc Information Sciences</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  contact: {
    display: true,
    title: "Contact",
    description:
      "Planning a new website or redesign? Send me a short brief and I will get back to you within 1 business day.",
    primaryCta: {
      label: "Email me",
      link: "mailto:bruins.data@gmail.com?subject=Website%20Project%20Inquiry",
    },
    secondaryCta: {
      label: "Message on LinkedIn",
      link: "https://www.linkedin.com/in/rick-bruins/",
    },
  },
};

const work = {
  label: "Work",
  title: "Client Website Projects",
  description: `Selected web development work by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, work };
