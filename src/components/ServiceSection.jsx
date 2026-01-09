import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    tag: "MOST COMMON",
    title: "Carcinoma",
    desc:
      "Carcinoma is the most common type of cancer and usually develops in the skin or tissues of internal organs. It refers to abnormal cell growth forming tumors. Common examples include Breast Cancer, Lung Cancer, Prostate Cancer, Pancreatic Cancer, Colorectal Cancer, Liver Cancer, and Stomach Cancer.",
    image:
      "https://img.freepik.com/free-photo/high-angle-hands-wearing-protective-gloves_23-2149359548.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    tag: "BLOOD CANCER",
    title: "Leukemia",
    desc:
      "Leukemia is a type of blood cancer that originates in the bone marrow. It occurs when mutations in bone marrow cells produce abnormal blood cells, affecting the body’s ability to fight infections and carry oxygen efficiently.",
    image:
      "https://img.freepik.com/premium-photo/aids-awareness-icon-design-poster-banner-tshirt-illustration-isolated-white-background-stop-aids-december-aids-awareness-health-care_43780-8014.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    tag: "BONE & TISSUE",
    title: "Sarcoma",
    desc:
      "Sarcoma is a cancer of the bone and soft tissues, with over 80 subtypes. It can affect people of any age and commonly occurs in the arms and legs. It develops in bones, muscles, blood vessels, nerves, or connective tissues and may be linked to genetics, radiation exposure, or chemicals.",
    image:
      "https://img.freepik.com/free-photo/front-view-doctor-explaining-anatomy_23-2149870307.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    tag: "NEURO CARE",
    title: "Central Nervous System Cancer",
    desc:
      "Central Nervous System cancer affects the brain and spinal cord. Brain tumors impact various brain cells such as glial cells and meninges, affecting cognitive and motor functions. Spinal cord cancer, though rare, can cause severe mobility loss and has a high mortality risk.",
    image:
      "https://img.freepik.com/free-vector/illustration-brain-cancer-cell-human-brain_1308-181756.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    tag: "IMMUNE SYSTEM",
    title: "Immune System Cancer",
    desc:
      "Immune system cancers include Lymphoma and Myeloma. Lymphoma affects lymphocytes, while Myeloma targets plasma cells. These cancers weaken immunity and may cause complications such as bone damage and kidney disorders.",
    image:
      "https://img.freepik.com/free-photo/little-kid-protect-coronavirus-covid-19-virus-coronavirus-outbreak_493343-30170.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
   {
    tag: "MOST COMMON",
    title: "Carcinoma",
    desc:
      "Carcinoma is the most common type of cancer and usually develops in the skin or tissues of internal organs. It refers to abnormal cell growth forming tumors. Common examples include Breast Cancer, Lung Cancer, Prostate Cancer, Pancreatic Cancer, Colorectal Cancer, Liver Cancer, and Stomach Cancer.",
    image:
      "https://img.freepik.com/free-photo/high-angle-hands-wearing-protective-gloves_23-2149359548.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    tag: "BLOOD CANCER",
    title: "Leukemia",
    desc:
      "Leukemia is a type of blood cancer that originates in the bone marrow. It occurs when mutations in bone marrow cells produce abnormal blood cells, affecting the body’s ability to fight infections and carry oxygen efficiently.",
    image:
      "https://img.freepik.com/premium-photo/aids-awareness-icon-design-poster-banner-tshirt-illustration-isolated-white-background-stop-aids-december-aids-awareness-health-care_43780-8014.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    tag: "BONE & TISSUE",
    title: "Sarcoma",
    desc:
      "Sarcoma is a cancer of the bone and soft tissues, with over 80 subtypes. It can affect people of any age and commonly occurs in the arms and legs. It develops in bones, muscles, blood vessels, nerves, or connective tissues and may be linked to genetics, radiation exposure, or chemicals.",
    image:
      "https://img.freepik.com/free-photo/front-view-doctor-explaining-anatomy_23-2149870307.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    tag: "NEURO CARE",
    title: "Central Nervous System Cancer",
    desc:
      "Central Nervous System cancer affects the brain and spinal cord. Brain tumors impact various brain cells such as glial cells and meninges, affecting cognitive and motor functions. Spinal cord cancer, though rare, can cause severe mobility loss and has a high mortality risk.",
    image:
      "https://img.freepik.com/free-vector/illustration-brain-cancer-cell-human-brain_1308-181756.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    tag: "IMMUNE SYSTEM",
    title: "Immune System Cancer",
    desc:
      "Immune system cancers include Lymphoma and Myeloma. Lymphoma affects lymphocytes, while Myeloma targets plasma cells. These cancers weaken immunity and may cause complications such as bone damage and kidney disorders.",
    image:
      "https://img.freepik.com/free-photo/little-kid-protect-coronavirus-covid-19-virus-coronavirus-outbreak_493343-30170.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
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
<div className="mb-12 max-w-4xl">
  <span className="inline-block bg-white px-4 py-1 rounded-full text-xs font-semibold text-gray-700 mb-4">
    OUR ONCOLOGY SERVICES
  </span>

  <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 max-w-3xl">
    A Guide to Different Cancer Types
  </h2>

  <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl">
    In a world of diversity, 200 types of cancer diseases are found in kids, young generations,
and older people. However, scientists have categorized the cancer diseases into 5 major
types, such as:
  </p>
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
