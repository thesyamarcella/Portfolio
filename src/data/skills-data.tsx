// src/data/skillsData.ts
import { faFlutter, faReact, faAndroid, faHtml5, faCss3Alt, faJsSquare, faVuejs, faAngular, faNode, faPython, faPhp, faJava, faGit, faDocker, faAws, faSwift, faCss3, faJs, faNodeJs, faFigma, faSquareJs, faSketch } from "@fortawesome/free-brands-svg-icons"; 
import { faDatabase, faPaintBrush, faUserCog } from "@fortawesome/free-solid-svg-icons"; 
import { FaAngular, FaCss3Alt, FaHtml5, FaJava, FaPhp, FaPython, FaVuejs } from "react-icons/fa";

const skillsData = [
  {
    id: 1,
    name: "Mobile Development",
    description: "Creating applications for iOS and Android",
    techStack: [
      { icon: faFlutter }, 
      { icon: faReact },
      { icon: faSwift },
      { icon: faJava }, 
    ],
    icon: "/logo-mobile-development.svg",
  },
  {
    id: 2,
    name: "Web Development",
    description: "Building websites and web applications",
    techStack: [
      { icon: faHtml5 }, 
      { icon: faCss3Alt }, 
      { icon: faSquareJs }, 
      { icon: faReact },
      { icon: faVuejs }, 
      { icon: faAngular },
      { icon: faNode },
      { icon: faPython },
      { icon: faPhp },
      { icon: faJava},
      { icon: faDatabase}
      
    ],
    icon: "/logo-web-development.svg",
  },
  {
    id: 3,
    name: "Quality Assurance (QA)",
    description: "Testing and ensuring software quality",
    techStack: [
      { name: "Selenium" },
      { name: "Cypress"},
    ],
    icon: "/logo-qa.svg",
  },
  {
    id: 4,
    name: "UI UX",
    description: "Designing user interfaces and experiences",
    techStack: [
      { icon: faUserCog },
      { icon: faPaintBrush },
      { icon: faFigma },
      { icon: faSketch },
      
    ],
    icon: "/logo-devops.svg",
  },
];

export default skillsData;
