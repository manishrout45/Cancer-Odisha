import { useEffect } from "react";

const useScrollFade = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up, .fade-left, .fade-right, .zoom-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.2, // 20% of element visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useScrollFade;
