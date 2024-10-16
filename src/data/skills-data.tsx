import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { 
  faFlutter, faReact, faAndroid, faHtml5, faCss3Alt, faJsSquare, faVuejs, faAngular, faNode, 
  faPython, faPhp, faJava, faGit, faDocker, faAws, faSwift, faFigma, faSketch 
} from "@fortawesome/free-brands-svg-icons"; 
import { faDatabase, faPaintBrush, faUserCog } from "@fortawesome/free-solid-svg-icons"; 


type TechStackItem = 
  | { icon: IconDefinition }  
  | { name: string };        

// Define a type for each skill
interface Skill {
  id: number;
  name: string;
  description: string;
  techStack: TechStackItem[]; 
  icon: string;
}

const skillsData: Skill[] = [
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
      { icon: faJsSquare }, 
      { icon: faReact },
      { icon: faVuejs }, 
      { icon: faAngular },
      { icon: faNode },
      { icon: faPython },
      { icon: faPhp },
      { icon: faJava },
      { icon: faDatabase },
    ],
    icon: "/logo-web-development.svg",
  },
  {
    id: 3,
    name: "Quality Assurance (QA)",
    description: "Testing and ensuring software quality",
    techStack: [
      { name: "Selenium" },
      { name: "Cypress" },
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
