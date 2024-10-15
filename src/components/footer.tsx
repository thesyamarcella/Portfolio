// src/components/Footer.tsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-6 text-center">
      <p className="mb-2">Bugs are challenges, solutions are adventures</p>
      <p>&copy; 2024 Thesya Marcella</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://github.com/thesyamarcella" target="_blank" rel="noreferrer">
          <FaGithub className="h-4 w-4" />
        </a>
        <a href="https://linkedin.com/in/thesyamarcella" target="_blank" rel="noreferrer">
          <FaLinkedin className="h-4 w-4" />
        </a>
        <a href="https://instagram.com/thesyamarcella" target="_blank" rel="noreferrer">
          <FaInstagram className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
};
