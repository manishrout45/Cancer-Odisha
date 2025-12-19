import React, { useEffect, useRef, useState } from "react";

const diseases = [
  "Kidney Cancer",
  "Leukemia",
  "Lung Cancer",
  "Breast Cancer",
  "Skin Cancer",
  "Brain Tumor",
];

export default function DiseaseScroll() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [startScroll, setStartScroll] = useState(false);

  // Start animation only when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStartScroll(true),
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Continuous smooth scroll
  useEffect(() => {
    if (!startScroll) return;

    const container = containerRef.current;
    let animationId;

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += 0.5; // 👈 speed control

      // Reset when reaching end
      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [startScroll]);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden py-2 -mt-2 bg-white"
    >
      <div
        ref={containerRef}
        className="flex items-center gap-12 py-10
                   overflow-x-hidden px-4 md:px-10"
      >
        {diseases.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center gap-4
                       min-w-[260px] md:min-w-[340px] lg:min-w-[420px]
                       justify-center"
          >
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-extrabold ${
                index % 2 === 0
                  ? "text-gray-900"
                  : "text-[#9D41E4]"
              }`}
            >
              {item}
            </h2>

            <span className="text-[#9D41E4] text-2xl">⚕️</span>
          </div>
        ))}
      </div>
    </section>
  );
}
