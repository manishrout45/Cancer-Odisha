import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    tag: "CHILD CARE",
    title: "Pediatric Oncology",
    desc:
      "Pediatric Oncology focuses on diagnosing and treating cancers in children, using child-friendly therapies and emotional support for both patients and families.",
    image:
      "https://img.freepik.com/free-photo/child-suffering-from-cancer_23-2149501440.jpg?w=740&q=80",
  },
  {
    tag: "MEDICATION",
    title: "Medical Oncology",
    desc:
      "Medical Oncology uses cancer-fighting medicines such as chemotherapy, targeted therapy, and immunotherapy to slow or eliminate cancer cells safely.",
    image:
      "https://img.freepik.com/free-photo/middle-aged-woman-with-skin-cancer-talking-with-her-doctor_23-2148988521.jpg?w=740&q=80",
  },
  {
    tag: "BLOOD CARE",
    title: "Hemato Oncology",
    desc:
      "Hemato-Oncology treats blood-related cancers including leukemia, lymphoma, and myeloma using advanced diagnostics and personalized care plans.",
    image:
      "https://img.freepik.com/free-photo/closeup-shot-person-studying-coronavirus-particles-with-microscope_181624-1142.jpg?w=740&q=80",
  },
  {
    tag: "WOMEN’S HEALTH",
    title: "Gynecologic Oncology",
    desc:
      "Gynecologic Oncology specializes in cancers affecting the female reproductive system, offering early detection, treatment, and long-term follow-up care.",
    image:
      "https://img.freepik.com/free-photo/gynecologist-talking-with-young-female-patient-medical-consultation-modern-clinic_657921-141.jpg?w=740&q=80",
  },
  {
    tag: "SURGERY",
    title: "Surgical Oncology",
    desc:
      "Surgical Oncology involves removing cancerous tumors through precise surgical techniques while preserving healthy tissue whenever possible.",
    image:
      "https://img.freepik.com/free-photo/surgeons-passing-scissors-each-other_329181-19635.jpg?w=740&q=80",
  },
  {
    tag: "IMMUNE CARE",
    title: "Immunotherapy",
    desc:
      "Immunotherapy strengthens the body’s immune system to recognize and attack cancer cells, offering targeted treatment with fewer side effects.",
    image:
      "https://img.freepik.com/free-photo/3d-virus-cells-attacking-dna-strand_1048-6816.jpg?w=740&q=80",
  },
  {
    tag: "RADIATION",
    title: "Radiation Oncology",
    desc:
      "Radiation Oncology uses high-energy radiation to destroy cancer cells while protecting surrounding healthy tissue through advanced technology.",
    image:
      "https://img.freepik.com/premium-photo/female-doctor-assisting-patient-mri-machine-critical-diagnostic-procedure_1192423-4613.jpg?w=740&q=80",
  },
  {
    tag: "RESEARCH",
    title: "Clinical Trials",
    desc:
      "Clinical trials provide access to innovative cancer treatments under expert supervision, contributing to future breakthroughs in cancer care.",
    image:
      "https://img.freepik.com/premium-photo/blood-test-laboratory-laboratory-assistant-working-with-dispenser-vacuum-tubes-with-blood_265022-109369.jpg?w=740&q=80",
  },
];

export default function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  const scrollRef = useRef(null);
  const cardRefs = useRef([]);

  /* Detect visible cards */
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 640) setVisibleCards(2);
      else setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = services.length - visibleCards;

  /* Auto scroll */
  useEffect(() => {
    const interval = setInterval(() => {
      const next = activeIndex >= maxIndex ? 0 : activeIndex + 1;
      scrollToCard(next);
    }, 3500);

    return () => clearInterval(interval);
  }, [activeIndex, visibleCards]);

  const scrollToCard = (index) => {
    const card = cardRefs.current[index];
    const container = scrollRef.current;
    if (!card || !container) return;

    const cardCenter =
      card.offsetLeft -
      container.offsetWidth / 2 +
      card.offsetWidth / 2;

    container.scrollTo({
      left: cardCenter,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    const center = container.scrollLeft + container.offsetWidth / 2;

    let closest = 0;
    let min = Infinity;

    cardRefs.current.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < min) {
        min = dist;
        closest = i;
      }
    });

    setActiveIndex(closest);
  };

  return (
    <section className="w-full bg-gradient-to-r from-pink-100 via-white to-pink-50 py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-12">
          <span className="inline-block bg-white px-4 py-1 rounded-full text-xs font-semibold text-gray-700 mb-4">
            OUR ONCOLOGY SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 max-w-3xl">
            Comprehensive Cancer Care Through Education & Expertise
          </h2>
        </div>

        {/* CARDS */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex gap-6 overflow-x-auto scroll-smooth pb-6
            snap-x snap-mandatory
            px-[calc(50vw-9rem)] sm:px-0
            hide-scrollbar
          "
        >
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="
                flex-shrink-0 w-72 sm:w-80 md:w-96
                bg-white rounded-2xl shadow
                snap-center
                hover:shadow-xl transition
              "
            >
              <div className="p-6">
                <span className="text-xs font-semibold text-gray-500">
                  {service.tag}
                </span>

                <h3 className="text-lg font-semibold mt-2 mb-4">
                  {service.title}
                </h3>

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-44 object-cover rounded-xl mb-4"
                />

                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {service.desc}
                </p>

                <a className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                  Learn More <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === i ? "bg-[#9D41E4]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
