import kanchanHome from "../assets/projects/kanchan-luxe-home.png";
import freshbiteHome from "../assets/projects/freshbite-home.png";
import weatherHome from "../assets/projects/weather-home.png";
import aiResumeHome from "../assets/projects/ai-resume-home.png";
import mernNotesHome from "../assets/projects/mern-notes-home.png";

export const projects = [
  {
  id: 1,
  slug: "mern-notes-app",
  title: "MERN Notes App",
  category: "Full Stack Application",
  image: mernNotesHome,

  description:
    "A full-stack MERN Notes App with CRUD operations, search functionality, loading states, toast notifications and responsive UI.",

  longDescription:
    "MERN Notes App is a complete full-stack application built using MongoDB, Express.js, React and Node.js. Users can create, edit, search and delete notes with a modern responsive interface. The project includes REST APIs, MongoDB Atlas integration, loading indicators, delete confirmation modal and toast notifications.",

  techStack: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Axios",
    "Tailwind CSS",
  ],

  features: [
    "Create Notes",
    "Edit Notes",
    "Delete Notes",
    "Search Notes",
    "REST API",
    "MongoDB Database",
    "Responsive Design",
    "Toast Notifications",
    "Loading Spinner",
    "Delete Confirmation Modal",
  ],

  live: "https://mern-notes-app-ruby-eight.vercel.app",
  github: "https://github.com/deepa100-k/mern-notes-app",
},
  {
    id: 2,
    slug: "kanchan-luxe",
    title: "Kanchan Luxe",
    category: "E-Commerce",
    image: kanchanHome,

    description:
      "A modern luxury jewellery e-commerce website built with React, Vite and Tailwind CSS featuring a premium shopping experience.",

    longDescription:
      "Kanchan Luxe is a fully responsive jewellery e-commerce website with wishlist, shopping cart, product details, category filtering and a beautiful modern UI.",

    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
    ],

    features: [
      "Responsive Design",
      "Wishlist",
      "Shopping Cart",
      "Product Details",
      "Checkout Page",
      "Modern UI",
    ],

    live: "https://kanchan-luxe.vercel.app",
    github: "https://github.com/deepa100-k/kanchan-luxe",
  },

  {
    id: 3,
    slug: "freshbite",
    title: "FreshBite",
    category: "Food Website",
    image: freshbiteHome,

    description:
      "A modern responsive food delivery website with attractive animations and premium user interface.",

    longDescription:
      "FreshBite is a responsive food website developed using React, Vite and Tailwind CSS. It includes Hero, Menu, Why Choose Us, Testimonials, Download App and Footer sections with smooth animations.",

    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
    ],

    features: [
      "Responsive Design",
      "Food Menu",
      "Modern Landing Page",
      "Smooth Animations",
      "Testimonials",
      "Download App",
    ],

    live: "https://freshbite-nu.vercel.app",
    github: "https://github.com/deepa100-k/freshbite",
  },

  {
    id: 4,
    slug: "weather-app",
    title: "Weather App",
    category: "Weather Application",
    image: weatherHome,

    description:
      "A responsive weather application with current weather, hourly forecast and location search.",

    longDescription:
      "Weather App is built using React, Tailwind CSS and Weather API. Users can search any city worldwide, check current weather, hourly forecast and future forecast with a clean UI.",

    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Weather API",
      "Vite",
    ],

    features: [
      "City Search",
      "Current Location",
      "Hourly Forecast",
      "5-Day Forecast",
      "Responsive UI",
      "Weather API Integration",
    ],

    live: "https://weather-wheat-mu-93.vercel.app",
    github: "https://github.com/deepa100-k/weather",
  },

  {
    id: 5,
    slug: "ai-powered-resume",
    title: "AI Powered Resume Builder",
    category: "AI Application",
    image: aiResumeHome,

    description:
      "An AI-powered resume builder that helps users create professional resumes with a modern interface.",

    longDescription:
      "AI Powered Resume Builder enables users to generate, edit and preview professional resumes using AI assistance with a responsive and user-friendly design.",

    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "AI",
      "Vite",
    ],

    features: [
      "AI Resume Generation",
      "Resume Preview",
      "Editable Sections",
      "Professional Templates",
      "Responsive Design",
      "Modern UI",
    ],

    live: "https://ai-powered-resume-mu.vercel.app",
    github: "https://github.com/deepa100-k/AI-powered-resume-",
  },
  
];
