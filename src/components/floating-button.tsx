"use client"
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export const FloatingButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white shadow-lg ${
        visible ? "block" : "hidden"
      }`}
    >
      <FaArrowUp />
    </button>
  );
};
