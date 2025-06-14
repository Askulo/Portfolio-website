import {
  mobile,
  backend,
  creator,
  web,
  // carrent,
  // jobit,
  // tripguide,
} from "../components/images";


import { meta, starbucks, tesla, shopify } from "../components/images";

export const navLinks = [
  {
    id: "about",
    title: "About",
    href: "#about",
  },
  {
    id: "work",
    title: "Work",
    href: "#work",
  },
  {
    id: "contact",
    title: "Contact",
    href: "#contact",
  },
];

export const services = [
  {
    title: "ThreeJS Developer",
    icon: web,
  },
  {
    title: "Nextjs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];


export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Bank Management System",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    github: {
      link: "https://github.com/yourusername/bank-management-system",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", // GitHub icon URL
    },
    points: [
      "Developed and maintained a Bank Management System using React.js and associated technologies.",
      "Collaborated with cross-functional teams to gather requirements and design user-friendly interfaces for banking operations.",
      "Implemented responsive design principles to ensure a seamless user experience across various devices and browsers.",
    ],
  },

  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - March 2024",
    github: {
      link: "https://github.com/yourusername/shopify-custom-themes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    points: [
      "Developed and customized Shopify themes using Liquid, HTML, CSS, and JavaScript.",
      "Optimized website speed and performance for better SEO rankings and user engagement.",
      "Implemented custom Shopify scripts for product filtering, pricing adjustments, and checkout enhancements.",
      "Managed Shopify admin settings, including payment gateways, shipping methods, and product listings.",
    ],
  },
  {
    title: "Mern Stack",
    company_name: "Courses Website",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - Nov 2024",
    github: {
      link: "https://github.com/yourusername/mern-courses-website",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    points: [
      "Developed a Full-Stack Course Website using MongoDB, Express.js, React.js, and Node.js (MERN Stack).",
      "Implemented user authentication with JWT for secure login and role-based access control.",
      "Integrated CRUD functionalities for managing courses, users, and payments.",
    ],
  },

  {
    title: "Next.js Developer",
    company_name: "My Portfolio",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Jan 2025",
    github: {
      link: "https://github.com/yourusername/nextjs-portfolio",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    points: [
      "Developed a personal portfolio using Next.js and Tailwind CSS with optimized performance and SEO.",
      "Implemented dynamic routing, dark mode, and interactive animations for a better user experience.",
      "Deployed the portfolio on Vercel, ensuring fast load times and seamless navigation.",
      "Integrated GitHub, LinkedIn, and contact form for easy communication and project showcasing.",
    ],
  }
];


export const projects = [
  {
    name: "Induction Role",
    description:
      " A scene visually introduces five distinct positions — Graphic Designer, Video Editor, Web Developer, Artist, and Content Writer — represented through stylized 3D avatars placed around a virtual workspace.",
    tags: [
      {
        name: "ThreeJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: {
      src: "/induction.jpg",
      width: 800, // replace with actual width of induction.jpg
      height: 900 // replace with actual height of induction.jpg
    },
    source_code_link: "https://github.com/Askulo/Induction-Program",
  },
  {
    name: "3D Gallery",
    description:
      "A dynamic and immersive 3D cylindrical gallery that showcases digital artworks and illustrations in a spiraling vertical loop. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: {
      src: "/gallery.jpg",
      width: 800, // replace with actual width of gallery.jpg
      height: 900 // replace with actual height of gallery.jpg
    },
    source_code_link: "https://github.com/Askulo/Gallery?tab=readme-ov-file#readme",
  },
  {
    name: "Painting Wing",
    description:
      "This is the official website of the Painting Wing, BIT Sindri — a vibrant student-led community that fosters creativity through curated artistic events and workshops.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "threeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: {
      src: "/Landing-page.jpg",
      width: 800, // replace with actual width of events.jpg
      height: 900 // replace with actual height of events.jpg
    },
    source_code_link: "https://github.com/Askulo/painting-wing",
  },
];

export const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aashish proved me wrong.",
    name: "Deepthi Singh",
    designation: "Student Leader",
    company: "BIT Sindri",
    // company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Aashish does.",
    name: "Nilesh Kumar Mandal",
    designation: " Vice Chairman",
    company: "Painting Wing, BIT Sindri",
    // company: "DEF Corp",
    image: "/nilesh.jpg",
  },
  {
    testimonial:
      "After Aashish optimized our website, our club website got its UI better!",
    name: "Jai Prakash",
    designation: "Secretary",
    company: "Painting Wing, BIT Sindri",
    // company: "456 Enterprises",
    image: "/jai.jpg",
  },
];
