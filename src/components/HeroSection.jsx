import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Phone,
  CalendarDays,
  Clock,
} from "lucide-react";

/* ================= SLIDES DATA ================= */
const heroSlides = [
  {
    badge: "#Cancer Awareness & Care",
    title: "Understanding Cancer, One Step at a Time",
    desc:
      "Learn about cancer prevention, early detection, treatment options, and how timely medical care can save lives.",
  },
  {
    badge: "#Advanced Oncology Education",
    title: "Empowering Smarter Treatment Decisions",
    desc:
      "We help patients and families understand diagnosis, therapies, and recovery with clarity and compassion.",
  },
  {
    badge: "#Early Detection Matters",
    title: "Early Diagnosis Saves Lives",
    desc:
      "Recognizing symptoms early and choosing the right oncology care can significantly improve treatment outcomes.",
  },
];

/* ================= SINGLE BACKGROUND IMAGE ================= */
const HERO_BG_IMAGE =
  "https://img.freepik.com/premium-photo/doctor-with-orange-ribbon-leukemia-kidney-cancer-day-world-multiple-sclerosis-crps_1332293-355.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80";

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % heroSlides.length);
        setFade(true);
      }, 300);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (i) => {
    setFade(false);
    setTimeout(() => {
      setIndex(i);
      setFade(true);
    }, 300);
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[65vh] md:h-[75vh] overflow-hidden mt-20">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center pt-24 pb-32">
          <div className="max-w-7xl mx-auto px-4 w-full">

            <div
              className={`max-w-2xl space-y-6 transition-all duration-500 ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="inline-block bg-[#9D41E4] text-white text-sm font-medium px-4 py-1.5 rounded-full">
                {heroSlides[index].badge}
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
                {heroSlides[index].title}
              </h1>

              <p className="text-gray-200">
                {heroSlides[index].desc}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#9D41E4] hover:bg-[#8924d6] text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Learn About Cancer <ArrowUpRight size={18} />
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition"
                >
                  Talk to a Specialist <ArrowUpRight size={18} />
                </a>
              </div>

              {/* DOTS */}
              <div className="flex items-center gap-3 pt-6">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-8 bg-[#9D41E4]"
                        : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INFO CARDS ================= */}
      <section className="relative z-20  pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-4  grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="bg-[#9D41E4] text-white rounded-2xl p-8 shadow-2xl -mt-16">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Clock /> Oncology Support Hours
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between border-b border-white/20 pb-2">
                <span>Consultations</span>
                <span>09:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/20 pb-2">
                <span>Treatment Guidance</span>
                <span>09:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between font-semibold">
                <span>Emergency Care</span>
                <span>24/7 Available</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl -mt-16">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Phone className="text-[#9D41E4]" /> Cancer Helpline
            </h3>
            <p className="text-2xl font-bold text-gray-900">
              +91-234-567-8900
            </p>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-8 shadow-2xl -mt-16">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <CalendarDays /> Oncology Appointments
            </h3>
            <a className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-lg font-semibold mt-6">
              Book Consultation <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
