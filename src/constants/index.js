import { client1, client3, css, ecommerce, figma, game, git, gym, hospital, html, invent, javascript, mongodb, nextjs, nodejs, phero, pizza, reactjs, real_estate, redux, tailwind, threejs, typescript, vectorDesign, wordpress } from "../assets";

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
    id: "tech",
    title: "Tech",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Wordpress Developer",
    icon: wordpress,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next JS",
    icon: nextjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Invent",
    icon: invent,
    iconBg: "#383E56",
    date: "January 2023 - PRESENT",
    points: [
      "Build and design React web app from the scratch to give the company an online existence for potential customers to reach.",
      "Implement Firebase authentication system with 10,000 authentication request such as email/password,    Phone authentication, Third-party authentication per day for free and 100,000 per month for free.",
      "Create with a library of JavaScript named React JS because of its potential to reuse components which makes the code and website easy to maintain.",
      "Ensure easy and fast coding with maximum customization options by using Tailwind CSS and raw CSS to develop a responsive website to kept the code clean and easily manageable.",
      "By utilizing React Router, a private routing system was implemented to ensure ease of editing, reliability and maintainability..",
      "Implement Node JS and its framework Express JS for the backend technology, data storage is achieved for using MongoDB."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Vector Design US, Inc.",
    icon: vectorDesign,
    iconBg: "#E6DEDD",
    date: "January 2022 - December 2022",
    points: [
      "Built the website using WordPress and page builder Elementor for more than 20,000 users.",
      "Prepared website update proposals to presents to manager, provide technical support to clients and writing code using HTML and CSS.",
      "Managed a user guide to help and understand site features and management of the websites.",
      "Updated website as instructed by the company and introduce new features and contents.",
      "Managed comments from visitors, including private emails and comments posted on the site.",
      "Introduced new plug-ins and extensions to make the website more usable and interactive in order to have better user experience.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Programming Hero",
    icon: phero,
    iconBg: "#E6DEDD",
    date: "June 2021 - November 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Very approachable and delivers the work reliably within the timelines maintaining good quality.",
    name: "Shameh Rahman",
    designation: "EIT",
    company: "Syska Hennessy Group, USA",
    image: client1,
  },
  { 
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Najrul  does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Extremely informative, attentive, and knowledgeable. Also very fast and thorough with his work!",
    name: "Safwan Rahman",
    designation: "MLS ",
    company: "Mount Sinai Health System, USA",
    image: client3,
  },
  
];

const projects = [
  {
    name: "Fitness World",
    description:
      "Fitness website that has the access over 10,000 workout and youtube videos that can be beneficial for the user. Rapid API is used to derive the data.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: gym,
    source_code_link: "https://github.com/najrul04/gym_fitness",
    website_link: "https://web-fitness.netlify.app/"
  },
  {
    name: "Real Estate",
    description:
      "Real Estate website to find suitable house to buy or rent throughout the world in your wanted pricing and place. Sorting option is implemented as the user needs.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "ChakraUI",
        color: "green-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "pink-text-gradient",
      },
    ],
    image: real_estate,
    source_code_link: "https://github.com/najrul04/real_estate",
    website_link: "https://real-estate-zeta-lemon.vercel.app/"
  },
  {
    name: "Game Info",
    description:
      "Web application that informs about the most successive and famous games around the world where you also can log in and sign up to have more access.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: game,
    source_code_link: "https://github.com/najrul04/react_recap/tree/main/car-services",
    website_link: "https://games-mart.web.app/"
  },
  {
    name: "Pizza Order",
    description:
      "A website that has the functionality of Log In and Sign Up using Firebase. You can also make new order and delete the previous order as it is needed.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "React Router",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://github.com/najrul04/pizza-delivery-server-side",
    website_link: "https://pizza-delivery-ea5ce.web.app/"
  },
  {
    name: "Hospital",
    description:
      "A hospital MERN stack website that has the feature of various section to informs the traffic  such as about, doctors and others using React Router.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: hospital,
    source_code_link: "https://github.com/najrul04/healthcare-website",
    website_link: "https://gen-hospital.netlify.app/"
  },
  {
    name: "Shopping",
    description:
      "Ecommerce website that allows user to click and select particular product on order. It is also deletable and the price with shipping tax cost included to the Grand Total.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "React Router",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/najrul04/firebase_recap/tree/main/ECommerce-with-router",
    website_link: "https://ecommerce-79009.firebaseapp.com/"
  },
];

export { experiences, projects, services, technologies, testimonials };

