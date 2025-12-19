import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Phone,
  CalendarDays,
  Clock,
} from "lucide-react";

const heroSlides = [
  {
    badge: "#Cancer Awareness & Care",
    title: "Understanding Cancer, One Step at a Time",
    desc:
      "Learn about cancer prevention, early detection, treatment options, and how timely medical care can save lives.",
    image: "/assets/images/Doctor.png",
  },
  {
    badge: "#Advanced Oncology Education",
    title: "Knowledge Empowers Better Treatment Decisions",
    desc:
      "We help patients and families understand diagnosis, therapies, and recovery with clarity and compassion.",
    image: "/assets/images/Doctor.png",
  },
  {
    badge: "#Early Detection Matters",
    title: "Early Diagnosis Saves Lives",
    desc:
      "Recognizing symptoms early and choosing the right oncology care can significantly improve treatment outcomes.",
    image: "/assets/images/Doctor.png",
  },
];

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
      <section className="relative w-full bg-gradient-to-r from-pink-50 via-white to-pink-100 overflow-hidden">
        <div className="min-h-screen flex items-center pt-28 pb-16">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center w-full">

            {/* LEFT CONTENT */}
            <div
              className={`space-y-6 transition-all duration-500 ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="inline-block bg-[#9D41E4] text-white text-sm font-medium px-4 py-1.5 rounded-full">
                {heroSlides[index].badge}
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight max-w-xl">
                {heroSlides[index].title}
              </h1>

              <p className="text-gray-600 max-w-xl">
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
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Talk to a Specialist <ArrowUpRight size={18} />
                </a>
              </div>

              {/* SLIDER DOTS */}
              <div className="flex items-center gap-3 pt-6">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-8 bg-[#9D41E4]"
                        : "w-2.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE – FULL HEIGHT & WIDTH (NO CUT) */}
            <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[650px] flex items-center justify-center">
              {heroSlides.map((item, i) => (
                <img
                  key={i}
                  src={item.image}
                  alt="Oncology Care"
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= INFO CARDS SECTION ================= */}
      <section className="relative z-10 -mt-24 pb-20 bg-gradient-to-r from-pink-50 via-white to-pink-100">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="relative bg-[#9D41E4] text-white rounded-2xl p-8 shadow-lg overflow-hidden">
            <Clock className="absolute bottom-4 right-4 w-24 h-24 opacity-10" />
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

          {/* Card 2 */}
          <div className="relative bg-white rounded-2xl p-8 shadow-lg overflow-hidden">
            <Phone className="absolute bottom-4 right-4 w-24 h-24 text-[#9D41E4] opacity-10" />
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Phone className="text-[#9D41E4]" /> Cancer Helpline
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Immediate support for cancer-related concerns and urgent guidance.
            </p>
            <p className="text-2xl font-bold text-gray-900">
              +91-234-567-8900
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-gray-900 text-white rounded-2xl p-8 shadow-lg overflow-hidden flex flex-col justify-between">
            <CalendarDays className="absolute bottom-4 right-4 w-24 h-24 opacity-10" />
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <CalendarDays /> Oncology Appointments
            </h3>
            <p className="text-gray-300 text-sm">
              Book consultations with certified oncology specialists.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-lg font-semibold mt-8 w-fit hover:bg-gray-100 transition"
            >
              Book Consultation <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
