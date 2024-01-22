import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export const navLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Contacto",
    url: "/contact",
  },
];
export const skills = [
  {
    id: 1,
    name: "Front-end Development",
    description:
      "Competencia en codificar los aspectos visuales de sitios web utilizando HTML, CSS y JavaScript para garantizar una interfaz de usuario atractiva y fluida.",
    icon: "/icons/service-1.svg",
  },
  {
    id: 2,
    name: "Back-end Development",
    description:
      " Habilidad para comprender y trabajar con bases de datos y tecnologías de almacenamiento de datos como SQL, NoSQL, etc. Interés en el desarrollo de lógica de negocio y la implementación de funcionalidades en el lado del servidor. ",
    icon: "/icons/service-2.svg",
  },
  {
    id: 3,
    name: "Experiencia de usuario - Desarrollo UX",
    description:
      "Comprensión de los principios de experiencia y comportamiento del usuario aplicados a través de la codificación para crear interacciones de usuario fluidas y satisfactorias.",
    icon: "/icons/service-3.svg",
  },
  {
    id: 4,
    name: "Desarrollo web responsivo",
    description:
      "Capacidad para desarrollar sitios web que se adapten y funcionen perfectamente en varios dispositivos y tamaños de pantalla utilizando técnicas de codificación.",
    icon: "/icons/service-4.svg",
  },
  {
    id: 5,
    name: "Creación de prototipos y pruebas de desarrollo",
    description:
      "Capacidad para codificar prototipos y realizar pruebas exhaustivas para visualizar y perfeccionar las funcionalidades del sitio web.",
    icon: "/icons/service-5.svg",
  },
  {
    id: 6,
    name: "Codificación adaptada a dispositivos móviles",
    description:
      "Competencia en prácticas de codificación que garantizan que los sitios web funcionen sin problemas en dispositivos móviles.",
    icon: "/icons/service-6.svg",
  },
];
export const benefits = [
  {
    id: 1,
    name: "Customized Development Aligned with Your Brand",
    description:
      "I recognize the importance of translating your brand identity into a unique website. By closely collaborating with you, I ensure that your website embodies your brand's personality, values, and objectives. The result is a custom-developed platform that distinguishes you from competitors and resonates with your target audience.",
  },
  {
    id: 2,
    name: "Creative Coding for Visitor Engagement",
    description:
      "With a strong sense of aesthetics and a creative drive, I specialize in coding visually stunning and engaging websites. By integrating elegant code structures, interactive elements, and strategic design principles, I craft an immersive and impactful user experience. Your website will captivate visitors, enhancing your brand's credibility and professionalism.",
  },
  {
    id: 3,
    name: "User-Centric Development for Enhanced Experience",
    description:
      "I prioritize user experience (UX) development, focusing on your visitors throughout the coding process. Through extensive research and user testing methodologies, I ensure that your website is intuitive, easy to navigate, and guides users effectively. The outcome is a gratifying user journey that boosts engagement and conversions.",
  },
  {
    id: 4,
    name: "Mobile-Optimized Coding for Widespread Accessibility",
    description:
      "In today's mobile-driven landscape, a responsive website is essential. I specialize in coding mobile-friendly designs that seamlessly adapt to various devices and screen sizes. Your website will maintain its appearance and functionality across desktops, smartphones, and tablets, allowing you to reach and engage your audience effectively.",
  },
  {
    id: 5,
    name: "Proficiency in Advanced Coding Technologies",
    description:
      "With expertise in HTML, CSS, JavaScript, and cutting-edge front-end technologies, I possess the technical prowess to execute your design concepts. From seamless animations to interactive features, I leverage the latest coding technologies to elevate user engagement and deliver a dynamic user experience.",
  },
];
export const portfolios = [
  {
    id: 1,
    title: "Blog",
    link: "https://blogg-7px2.onrender.com",
    images: [
      "/images/portfolio-7.png",
      "/images/portfolio-8.png",
      "/images/portfolio-9.png",
    ],
    useF:[
      "ReactJS",
      "ViteJS",
      "Tailwind",
      "MongoBD"
    ],
    text:"Un Blog hecho en React con ViteJS, implementado un dashboar conectado a una base de datos MongoDB "
  },
  {
    id: 2,
    title: "Resumir Articulos web",
    link: "https://luxury-squirrel-4201c3.netlify.app",
    images: [
      "/images/portfolio-4.png",
      "/images/portfolio-5.png",
      "/images/portfolio-6.png",
    ],
    useF:[
      "ReactJS",
      "Tailwindcss",
      "ViteJS",
    ],
    text:"Una aplicación web React que resume aritculos proporcionados mediante una URl. La interfaz de usuario se diseñó utilizando TailwindCSS "
  },
  {
    id: 3,
    title: "Rutinas de ejercicio",
    link: "https://earnest-custard-10f00e.netlify.app",
    images: [
      "/images/portfolio-1.png",
      "/images/portfolio-2.png",
      "/images/portfolio-3.png",
    ],
    useF:[
      "ReactJS",
      "JavaScript",
      "MuiMaterials"
    ],
    text:"Una aplicación web React que recopila datos de una api de Ejercicios para mostrarlas en una interfas. La interfaz de usuario se diseñó utilizando IconMaterial. "
  },

];


export const socialLinks = [
  {
    id: 1,
    label: "Facebook",
    icon: Github,
    url: "https://github.com/Jean7516",
  },
  {
    id: 2,
    label: "Linkedin",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/yann-v-9840112aa/",
  },
  {
    id: 3,
    label: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/yann559219",
  },
];
export const contactDetails = [
  {
    id: 1,
    icon: Phone,
    text: " 934749186",
  },
  {
    id: 2,
    icon: Mail,
    text: "yann.vl45@gmail.com",
  },
  {
    id: 3,
    icon: MapPin,
    text: "Lima, Peru",
  },
];
export const timeline = [
  {
    id: 1,
    title: "Senior Web Developer",
    duration: "2018 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },

  {
    id: 2,
    title: "Degree in Computer Science",
    duration: "2010 - 2013",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  
];