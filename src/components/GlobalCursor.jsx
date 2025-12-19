import { useEffect } from "react";
import "../index.css";

export default function GlobalCursor() {
  useEffect(() => {
    const dot = document.createElement("div");
    const ring = document.createElement("div");

    dot.className = "cursor-dot";
    ring.className = "cursor-ring";

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };

    const clickEffect = () => {
      ring.classList.add("cursor-click");
      setTimeout(() => ring.classList.remove("cursor-click"), 300);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", clickEffect);

    animate();

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", clickEffect);
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
