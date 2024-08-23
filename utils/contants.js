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
  "https://docs.google.com/document/d/175MZNiQp4b8fqC_SitqrL12_FM_MxY33D0qtaXbylRI/edit?usp=sharing";

export const heroText =
  "I am a software engineer specialized in building frontend web applications,often backend if the need arises. i always prioritize satisfying my clients and end users in any project i build";

export const navsections = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export const AboutMeTop = `Salutations! 👋 My name is Olusanya Ayomide ,I am a frontend engineer although I also enjoy working on the server-side, I am constantly intrigued to see how things work under the hood. I have always been fascinated by building things from the ground up. This drive led me to learn block programming back in 2021. I quickly realized that I needed to do something more advanced and programming x  xx-like, so I started learning my first programming language, which was Python, also in 2021.

`;

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
    heading: "Front End Developer At Proprightly",
    text: "PropRightly is a canadian start up company building a Property management system , which is B2B inclined.. I am tasked with collaborating with other developers in the company in bulding , maintaining and implementing user facing features",
  },
  {
    heading: "Full Stack Developer",
    text: "Currentyl hoding a Full stack developer role at utilor, A nigerian fintech company ",
  },
  {
    heading: "Just hired",
    text: "Just hired is a company based in the phillipines with a subset in Nigeria, Worked and implemnted several features and product for the company",
  },
];

export const ProjctList = [
   {
    name: "goConnect",
    description:"A fully packed social media application where all functionalities are in real Time",
    language: ["Nextjs", "nodeJS", "Tailwind css","ShadCn","Typescript","webSockets","Django","Langchain"],
    link: "https://goconnecting.netlify.app/",
    repo: "https://github.com/OlusanyaAyomide/Lag_Hub",
  },
    {
    name: "Waradata",
    description:
      "This is a website for purchasing Vtu Data,Airtime,Bill payments and making other subscriptions",
    language: ["React", "nodeJS", "Tailwind css","ShadCN","Typescript"],
    link: "https://waradata.com",
  },
  {
    name: "JohnWell forms",
    description:
      "This site is a complex multistep forms for collecting variety of CAC jobs from ",
    language: ["React", "Shadcn", "Tailwind css","Nodejs","Typescript"],
    link: "https://johnwell.netlify.app",
  },
  
  
  // {
  //   name: "JohnWell forms Admin",
  //   description:
  //     "The Admin section of Johnwell forms,includes complex admin dashboard and user managemet from super user ",
  //   language: ["React", "Shadcn", "Tailwind css","Nodejs","Typescript"],
  //   link: "https://johnwelladmin.netlify.app",
  // },
  {
    name: "ChatGTP clone",
    description:
      "This is a chatGTP3 clone with additonal features such as Ai Image Generated images,this can be used as an alternative to openAI chatGTP3",
    language: ["React", "Django", "Tailwind css"],
    repo: "https://github.com/OlusanyaAyomide/chat-gtp-frontend/",
    link: "https://astounding-marigold-e4f5ca.netlify.app/",
  },
    {
    name: "Stack Blog",
    description:
      "This is a basic blog application where users can create ,like,comment and  edit blogs",
    language: ["React","Django","Shadcn", "Tailwind css","Typescript"],
    link: "https://stackblog.vercel.app/",
    repo: "https://github.com/OlusanyaAyomide/stackblogfrontEnd",
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
    name: "Scholinka Todo",
    description:
      "A todo application where users can create,schedule,edit and delete tasks",
    language: ["React", "NodeJs", "Tailwind css"],
    link: "https://scholalinka-todo.netlify.app/",
    repo: "https://github.com/OlusanyaAyomide/Scholalinka-todo",
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
    name: "Velex Advisory Clone",
    description:
      "This is an ongoing project for whiteMark company",
    language: ["NextJs", "tailwindcss"],
    repo: null,
    link: "https://velex.vercel.app/",
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
    name: "Sass Website Landing Page",
    description: "A beautiful landing page website with super cool animations",
    language: ["react", "tailwindcss"],
    repo: "https://github.com/OlusanyaAyomide/Saas_landing-page",
    link: "https://sasslandingpage.vercel.app/",
  },
  {
    name: "yalbase website lnding page",
    description: "A basic landing pag website which was built for a client",
    language: ["react", "tailwindcss"],
    repo: "https://github.com/OlusanyaAyomide/Yalbase-website",
    link: "https://curious-gingersnap-05ba29.netlify.app/",
  },
];
