import kanchanHome from "../assets/projects/kanchan-luxe-home.png";
import freshbiteHome from "../assets/projects/freshbite-home.png";
import weatherHome from "../assets/projects/weather-home.png";
import aiResumeHome from "../assets/projects/ai-resume-home.png";

export const projects = [
  {
    id: 1,
    slug: "kanchan-luxe",
    title: "Kanchan Luxe",
    category: "E-Commerce",
    image: kanchanHome,

    description:
      "A modern luxury jewellery e-commerce website built with React, Vite, and Tailwind CSS, featuring a clean and elegant design, responsive layouts, intuitive navigation, wishlist, shopping cart, and a seamless shopping experience.",

    longDescription:
      "Kanchan Luxe is a responsive jewellery shopping website featuring beautiful UI, wishlist, cart functionality, product details and checkout interface.",

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
      "Product Details Page",
      "Checkout Page",
      "Modern UI",
    ],

    live: "https://kanchan-luxe.vercel.app",
    github: "https://github.com/deepa100-k/kanchan-luxe",
  },

  {
    id: 2,
    slug: "freshbite",
    title: "FreshBite",
    category: "Food Website",
    image: freshbiteHome,

    description:
      "A modern and responsive food delivery landing page with attractive UI, smooth animations, and mobile-friendly design.",

    longDescription:
      "FreshBite is a premium food website developed using React and Tailwind CSS. It features a beautiful hero section, menu, services, testimonials, download app section, and responsive layouts.",

    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
    ],

    features: [
      "Responsive Design",
      "Modern Landing Page",
      "Animated UI",
      "Food Menu",
      "Testimonials",
      "Download App Section",
    ],

    live: "https://YOUR-FRESHBITE-LIVE-LINK.vercel.app",
    github: "https://github.com/deepa100-k/freshbite",
  },

  {
    id: 3,
    slug: "weather-app",
    title: "Weather App",
    category: "Web Application",
    image: weatherHome,

    description:
      "A responsive weather application that provides real-time weather information, hourly forecast, and current location support.",

    longDescription:
      "Built with React, Tailwind CSS, and Weather API. Users can search any city worldwide, view current weather, hourly forecast, and 5-day forecast with a beautiful responsive interface.",

    techStack: [
      "React",
      "Tailwind CSS",
      "Weather API",
      "Vite",
    ],

    features: [
      "City Search",
      "Current Location",
      "Hourly Forecast",
      "5-Day Forecast",
      "Responsive Design",
      "Dynamic Weather Icons",
    ],

    live: "https://YOUR-WEATHER-LIVE-LINK.vercel.app",
    github: "https://github.com/deepa100-k/weather",
  },

  {
    id: 4,
    slug: "ai-powered-resume",
    title: "AI Powered Resume Builder",
    category: "AI Web App",
    image: aiResumeHome,

    description:
      "An AI-powered resume builder that helps users create professional resumes quickly with a modern and intuitive interface.",

    longDescription:
      "This application allows users to generate professional resumes using AI assistance. It includes editable sections, modern templates, responsive design, and an easy-to-use interface.",

    techStack: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "AI",
    ],

    features: [
      "AI Resume Generation",
      "Editable Resume",
      "Professional Templates",
      "Responsive Design",
      "Modern UI",
      "Easy Navigation",
    ],

    live: "https://YOUR-AI-RESUME-LIVE-LINK.vercel.app",
    github: "https://github.com/deepa100-k/AI-powered-resume-",
  },
];
