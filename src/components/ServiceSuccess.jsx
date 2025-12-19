import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    percent: 66,
    title: "Medical Centers",
    desc: "We collaborate with state-of-the-art medical centers to ensure patients receive world-class care.",
  },
  {
    percent: 93,
    title: "Successful Treatments",
    desc: "Our specialized oncology team has helped a significant number of patients overcome critical health challenges.",
  },
  {
    percent: 82,
    title: "Patient Satisfaction",
    desc: "Patient-centered care is our priority; most patients report high satisfaction and improved quality of life.",
  },
];

const RADIUS = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ServiceSuccess() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(
    stats.map(() => 0)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimation = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.percent;
      const duration = 1200;
      const stepTime = 16;
      const increment = end / (duration / stepTime);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }

        setAnimatedValues((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(start);
          return updated;
        });
      }, stepTime);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/modern-private-hospital-building_935410-536.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-10">
          {stats.map((item, i) => {
            const progress =
              CIRCUMFERENCE -
              (animatedValues[i] / 100) * CIRCUMFERENCE;

            return (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                {/* CIRCULAR STAT */}
                <div className="relative w-[88px] h-[88px] flex-shrink-0">
                  <svg
                    width="88"
                    height="88"
                    viewBox="0 0 80 80"
                    className="-rotate-90"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r={RADIUS}
                      stroke="#E5E7EB"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r={RADIUS}
                      stroke="#9D41E4"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={CIRCUMFERENCE}
                      strokeDashoffset={progress}
                      strokeLinecap="round"
                      className="transition-all duration-300"
                    />
                  </svg>

                  {/* NUMBER */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">
                      {animatedValues[i]}%
                    </span>
                  </div>
                </div>

                {/* TEXT */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 max-w-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="relative grid grid-cols-2 gap-4">
          <img
            src="https://img.freepik.com/free-photo/middle-aged-woman-with-skin-cancer-talking-with-her-doctor_23-2148988517.jpg"
            className="rounded-2xl object-cover w-full h-56 md:h-64"
            alt="Patient consultation"
          />
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
            className="rounded-2xl object-cover w-full h-56 md:h-64"
            alt="Oncology treatment"
          />
          <img
            src="https://img.freepik.com/free-photo/chemist-nurse-holding-test-tubes-bringing-doctor-conducting-dna-experiment-discussing-about-medical-treatment-working-overtime_482257-522.jpg"
            className="col-span-2 rounded-2xl object-cover w-full h-64 md:h-80"
            alt="Medical research"
          />

          {/* CENTER BADGE */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center border rounded-full mb-2 text-purple-600 text-xl">
              🏥
            </div>
            <p className="text-xs tracking-widest font-semibold text-gray-700">
              ONCOLOGY
            </p>
            <p className="text-xs tracking-widest text-gray-500 text-center">
              Focused on cancer treatment and patient education
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
