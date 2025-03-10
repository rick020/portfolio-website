const person = {
  firstName: "Rick",
  lastName: "Bruins",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Europe/London", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
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
  headline: <>Web developer</>,
  subline: (
    <>
      I'm Rick, a software engineer specialised in machine learning and web development.
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
    description: (
      <>
        Rick is a London based software engineer with a passion for machine learning and web development. 
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ASOS.com, London",
        timeframe: "August 2022 - Present",
        role: "Senior Machine Learning Engineer",
        achievements: [
          <>
            I'm currently working in the Recommendation and Personalized Search team. My role involves contributing to the end-to-end development of the recommender system and supporting MLops pipelines.
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
            Developed machine learning models for multiple projects serving clients in the sports retail and financial sectors.
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
            Managed dynamic pricing processes and performed market basket and traffic analysis for a retail client
          </>,
          <>
            Developed an asphalt maintenance prediction dashboard for a government client, which has been adopted across multiple departments
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
            Worked on cost financial time series forecasting and fraud detection within the Financial Data Analytics team.
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
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, work };
