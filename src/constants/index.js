import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  self,
  cogent,
  arclif,
  ecm,
  bmi,
  coxcart,
  netflix,
  olxclone,
  portfolio,
  reactportfolio,
  steak,
  tripguide,
  threejs,
  nextjspng,
  api,
  bootstrap,
  xd,
  cd,
  al,
  ps,
  cox,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React.js Developer",
    icon: reactjs,
  },
  {
    title: "Next.js Developer",
    icon: nextjs,
  },
  {
    title: "Front-end Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjspng,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Api integration",
    icon: api,
  },
  {
    name: "Bootstrap 5",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Photoshop cs6",
    icon: ps,
  },
  {
    name: "Illustrator cs6",
    icon: al,
  },
  {
    name: "CorelDRAW X5",
    icon: cd,
  },
  {
    name: "Adobe XD",
    icon: xd,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Arclif Inc.",
    icon: arclif,
    iconBg: "#383E56",
    date: "Oct 2022 - Jul 2023",
    points: [
      " Developed and managed the company's admin dashboard efficiently.",
      " Managed and enhanced various digital assets, such as company web applications, social media platforms, and e-commerce systems. Collaborated cross-functionally on design, implementation, and maintenance.",
    ],
  },
  {
    title: "Self Learning",
    company_name: "Self",
    icon: self,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Aug 2022",
    points: [
      " Pursued self-study while working full-time to advance my career.",
      " Gained expertise in web application development and website design.",
      " Contributed to various projects, including:Three professional company projects,Five educational React.js projects.One study-focused MERN stack project,,Two HTML/CSS responsive projects.",
      " Stayed up-to-date with industry trends through research and self-improvement.",
    ],
  },
  {
    title: "BPO",
    company_name: "Cogent E Services",
    icon: cogent,
    iconBg: "#383E56",
    date: "Jun 2019 - Dec 2019",
    points: [
      " Provided exceptional customer support to Videocon D2H clients.",
      " Addressing inquiries,Resolving technical issues,Ensuring overall customer satisfaction",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Arclif eCom",
    description:
      "Collaborated on the development of an eCommerce platform specializing in construction materials.Took a lead role in designing a user-friendly interface and enhancing mobile responsiveness.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "api integration",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: ecm,
    source_code_link: "https://shop.arclif.com",
    // gitLink: "";
  },
  {
    name: "Netflix clone",
    description:
      "Created a Netflix clone using Create React App.Utilized the TMDB database to source movie and TV show data for the application.Designed a responsive user interface.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "api integration",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://muhammedhashir1.github.io/netflix-clone/",
    github: "https://github.com/muhammedhashir1/netflix-clone",
  },
  {
    name: "React-Portfolio",
    description:
      "Developed a modern and responsive personal portfolio using Create React App.Presented personal details, services, and contact information in an organized manner.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      // {
      //   name: "Modern & Responsive Design with CSS3",
      //   color: "pink-text-gradient",
      // },
    ],
    image: reactportfolio,
    source_code_link: "https://muhammedhashir1.github.io/portfolio-react/",
    github: "https://github.com/muhammedhashir1/portfolio-react",
  },
  {
    name: "BMI calculator",
    description:
      "It is used to calculate BMI values and corresponding weight status while considering age as a factor.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      // {
      //   name: "Modern & Responsive Design with CSS3",
      //   color: "pink-text-gradient",
      // },
    ],
    image: bmi,
    source_code_link: "https://muhammedhashir1.github.io/bmi-calculator/",
    github: "https://github.com/muhammedhashir1/bmi-calculator",
  },
  {
    name: "OLX-Clone",
    description: "Bootstrapped with ReactJs.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      // {
      //   name: "Modern & Responsive Design with CSS3",
      //   color: "pink-text-gradient",
      // },
    ],
    image: olxclone,
    source_code_link: "https://muhammedhashir1.github.io/olx/",
    github: "https://github.com/muhammedhashir1/olx",
  },
  {
    name: "COX-Cart",
    description:
      "This is an E-Commerce website.Bootstrapped with ReactJs.This is an E-Commerce website built using Node.js, Express.js, Handlebars, and MongoDB.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },

      // {
      //   name: "Modern & Responsive Design with CSS3",
      //   color: "pink-text-gradient",
      // },
    ],
    image: coxcart,
    source_code_link: "https://muhammedhashir1.github.io/shopping-cart-cox/",
    github: "https://github.com/muhammedhashir1/shopping-cart-cox",
  },
  {
    name: "Cox Gents&boys",
    description: "Responsive static website.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },

      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: cox,
    source_code_link: "https://muhammedhashir1.github.io/cox-static-website/",
    github: "https://github.com/muhammedhashir1/cox-static-website",
  },
  {
    name: "my portfolio",
    description: "Responsive static website.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },

      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://muhammedhashir1.github.io/portfolio/",
    github: "https://github.com/muhammedhashir1/portfolio",
  },
  {
    name: "steak shop",
    description: "Responsive static website.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },

      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: steak,
    source_code_link: "https://muhammedhashir1.github.io/steak-shop/",
    github: "https://github.com/muhammedhashir1/steak-shop",
  },
];

export { services, technologies, experiences, testimonials, projects };
