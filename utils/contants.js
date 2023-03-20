import { FiGithub } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp, FaFacebook } from "react-icons/fa";
import django from "../public/django.png";
import djangoRest from "../public/djangoRest.png";
import excel from "../public/excel.png";
import expressjs from "../public/expressjs.png";
import javascript from "../public/javascript.png";
import mongodb from "../public/mongodb.png";
import nextjs from "../public/nextjs.png";
import nodejs from "../public/nodejs.png";
import python from "../public/python.png";
import react from "../public/react.png";
import redux from "../public/redux.png";
import tailwind from "../public/tailwind.png";
import typescript from "../public/Typescript.png";
import websockets from "../public/websockets.png";

export const contacts = [
  {
    icon: <FiGithub />,
    link: "https://www.github.com/OlusanyaAyomide",
  },
  {
    icon: <BsTwitter />,
    link: "https://twitter.com/Ayomideflex72?t=0QTKjowKifAASiF8j3FyHQ&s=09",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.link/1elboy",
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/olusanya.ayomide.77",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/olusanya-ayomide-bb393b25b",
  },
];

export const ResumeLink =
  "https://docs.google.com/document/d/1gpoH6CZCoA-vkq_XfotK4yWRC6LrBpdYFe8My6XYbk0/";

export const heroText =
  "I am a software engineer specialized in building frontend web applications,often backend if the need arises. i always prioritize satisfying my clients and end users in any project i build";

export const navsections = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export const AboutMeTop = `Salute 👋,!My name is Olusanya Ayomide and i am frontend engineer,although i aslo enjoy working on the server side,as i am constantly intrigued to see how things work behind the hood,i have always been fascinated about building stuffs from the ground up,this drive made me learn block progrmming back in 2021,i was quick enough to realize i needed to do something more crude and programming-like,i started learning my first programming language which was python also in 2021.`;

export const AboutMeBelow = `I am passionate about contributing to open source and building softwares that adds value to it's end users,Aside Programming i am enthutiased by science in general,espcially anything regarding space.`;

export const skillSet = [
  javascript,
  react,
  nextjs,
  typescript,
  tailwind,
  websockets,
  redux,
  python,
  django,
  djangoRest,
  nodejs,
  expressjs,
  mongodb,
  excel,
];

export const ExperienceList = [
  {
    heading: "Self Taught",
    text: "I began teaching myself how to code in 2021,devoting almost all my spare time in increasing my skill set,i started with python and basic web automation tasks before focusing fully on web development",
  },
  {
    heading: "Web Automation",
    text: "Took a role that made me put my webAutomation python skills into use, I automated a data entry tasks through connecting an excel file with python webdriver",
  },
  {
    heading: "Front End Developer",
    text: "I am currently leading a frontEnd team in 'jusClickIt' start up",
  },
];

export const ProjctList = [
  {
    name: "ChatGTP clone",
    description:
      "This is a chatGTP3 clone with additonal features such as Ai Image Generated images,this can be used as an alternative to openAI chatGTP3",
    language: ["React", "Django", "Tailwind css"],
    repo: "https://github.com/OlusanyaAyomide/chat-gtp-frontend/",
    link: "https://astounding-marigold-e4f5ca.netlify.app/",
  },
  {
    name: "Maginito Ecommerce Website",
    description:
      "Created an advanced Ecommerce website with full functionalities including authentication,product search,poduct review,payment gateway system,user profile and so much more",
    language: ["React", "Django Rest", "Tailwind css"],
    link: "https://dashing-klepon-02b933.netlify.app/",
    repo: "https://github.com/OlusanyaAyomide/Ecommerce-website",
  },
  {
    name: "YouTube Like clone",
    description:
      "This is a youtub like web application with features such as video searching,video reviews",
    language: ["NextJs", "tailwindcss"],
    repo: "https://github.com/OlusanyaAyomide/youtubeClone",
    link: "https://youtube-clone-ten-brown.vercel.app",
  },
  {
    name: "HooBank Landing Page",
    description:
      "Hookbank landing page with highly advanced animation functionalities",
    language: ["react", "tailwindcss"],
    repo: "https://github.com/OlusanyaAyomide/bloomchatss",
    link: "https://632f27dfc9d6db29e007c403--sprightly-meerkat-c09427.netlify.app/",
  },
  {
    name: "caferio Website landing Page",
    description: "I created a beautiful landing page of a food website",
    language: ["HTML,JS,tailwindcss"],
    repo: "https://github.com/OlusanyaAyomide/Caferio4",
    link: "https://632b84780496493bb4116b82--dapper-zuccutto-e96c46.netlify.app/",
  },
  {
    name: "BloomChats",
    description:
      "A Community web application with features such as ability to join room,follow users,reply messages and much more",
    language: ["Django", "Django Templates"],
    link: null,
    repo: "https://github.com/OlusanyaAyomide/bloomchatss",
  },
  {
    name: "yalbase website lnding page",
    description: "A basic landing pag website which was built for a client",
    language: ["react", "tailwindcss"],
    repo: "https://curious-gingersnap-05ba29.netlify.app/",
    link: "https://github.com/OlusanyaAyomide/Yalbase-website",
  },
];
