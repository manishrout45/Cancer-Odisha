import React, { useState } from "react";

const categories = [
  "All",
  "Blood",
  "Cancer",
  "Children",
  "Leukemia",
  "Oncology",
  "Treatment",
];

const portfolioItems = [
  {
    id: 1,
    title: "Cancer Treatment",
    category: "Treatment",
    tag: "Treatment",
    image:
      "https://img.freepik.com/free-photo/young-woman-suffering-breast-cancer-talking-with-her-doctor_23-2148992312.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    title: "Cancer Care",
    category: "Oncology",
    tag: "Oncology",
    image:
      "https://img.freepik.com/premium-photo/young-woman-sitting-with-arms-outstretched_1048944-3559489.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 3,
    title: "Diagnosis Biopsy",
    category: "Blood",
    tag: "Blood",
    image:
      "https://img.freepik.com/free-photo/doctor-working-medical-research_23-2149345453.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 4,
    title: "Children Treatment",
    category: "Children",
    tag: "Children",
    image:
      "https://img.freepik.com/free-photo/child-suffering-from-cancer_23-2149501393.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 5,
    title: "Sarcomas Cancers",
    category: "Cancer",
    tag: "Cancer",
    image:
      "https://img.freepik.com/premium-photo/3d-rendered-medically-accurate-illustration-white-blood-cells-attacking-cancer-cell_938508-5763.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 6,
    title: "Lymphocytic Leukemia",
    category: "Leukemia",
    tag: "Leukemia",
    image:
      "https://img.freepik.com/free-photo/patient-getting-chemotherapy-treatment_23-2149261074.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filteredItems =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#9D41E4] bg-[#ede0ed] px-4 py-1 rounded-full mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Check Recent Success Work
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition \
                ${
                  active === cat
                    ? "bg-[#9D41E4] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute bottom-4 left-4 bg-[#9D41E4] text-white text-xs font-semibold px-3 py-1 rounded-lg">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
