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
      "https://img.freepik.com/free-photo/young-woman-suffering-breast-cancer-talking-with-her-doctor_23-2148992312.jpg",
  },
  {
    id: 2,
    title: "Cancer Care",
    category: "Oncology",
    tag: "Oncology",
    image:
      "https://img.freepik.com/premium-photo/young-woman-sitting-with-arms-outstretched_1048944-3559489.jpg",
  },
  {
    id: 3,
    title: "Diagnosis Biopsy",
    category: "Blood",
    tag: "Blood",
    image:
      "https://img.freepik.com/free-photo/doctor-working-medical-research_23-2149345453.jpg",
  },
  {
    id: 4,
    title: "Children Treatment",
    category: "Children",
    tag: "Children",
    image:
      "https://img.freepik.com/free-photo/child-suffering-from-cancer_23-2149501393.jpg",
  },
  {
    id: 5,
    title: "Sarcomas Cancers",
    category: "Cancer",
    tag: "Cancer",
    image:
      "https://img.freepik.com/premium-photo/3d-rendered-medically-accurate-illustration-white-blood-cells-attacking-cancer-cell_938508-5763.jpg",
  },
  {
    id: 6,
    title: "Lymphocytic Leukemia",
    category: "Leukemia",
    tag: "Leukemia",
    image:
      "https://img.freepik.com/free-photo/patient-getting-chemotherapy-treatment_23-2149261074.jpg",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <>
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">

          {/* HEADING */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest text-[#9D41E4] bg-[#ede0ed] px-4 py-1 rounded-full mb-4">
              PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Check Recent Success Work
            </h2>
          </div>

          {/* FILTER */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => {
              const isActive = active === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative rounded-full transition-all duration-300 ${
                    isActive ? "shadow-lg scale-105" : "hover:scale-105"
                  }`}
                >
                  <span
                    className={`absolute inset-0 rounded-full p-[1.5px] ${
                      isActive ? "bg-[#9D41E4]" : "bg-gray-200"
                    }`}
                  />
                  <span
                    className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold ${
                      isActive
                        ? "bg-[#9D41E4] text-white"
                        : "bg-white text-[#9D41E4] hover:bg-[#9D41E4] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    )}
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 text-[#9D41E4] text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {item.tag}
                  </span>
                </div>

                <div className="relative p-6">
                  <div className="w-12 h-[3px] bg-[#9D41E4] mb-3 transition-all duration-500 group-hover:w-20" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#9D41E4] transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Advanced medical care with expert doctors and modern treatment facilities.
                  </p>
                </div>

                <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition duration-500">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="bg-indigo-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg hover:bg-indigo-600 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white max-w-4xl w-full rounded-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto">

            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 bg-white rounded-full shadow p-2 hover:bg-gray-100 hover:text-red-700"
            >
              ✕
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-8 space-y-8">
              <h3 className="text-2xl font-bold text-[#9D41E4]">
                {selectedItem.title}
              </h3>

              <section>
                <h4 className="font-semibold text-lg mb-2">Patient Care & Support</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We focus on complete patient care, not just treatment. Our team supports
                  patients from diagnosis to recovery by providing emotional support,
                  regular health monitoring, pain management, and continuous guidance.
                  Patients and families are always informed and involved in every step.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-lg mb-2">Prevention & Early Detection</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Early detection can save lives. We offer regular screenings, blood tests,
                  imaging scans, and awareness programs. Our doctors also guide patients
                  on healthy lifestyle habits, diet changes, and risk reduction methods.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-lg mb-2">Treatment Process</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Treatment plans are customized for each patient. Depending on the condition,
                  this may include chemotherapy, radiation therapy, surgery, targeted medicines,
                  or a combination of treatments. Every treatment is explained clearly so patients
                  feel confident and safe.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-lg mb-2">Common Symptoms We Manage</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our specialists help manage symptoms such as pain, weakness, fatigue,
                  abnormal bleeding, frequent infections, swelling, weight loss,
                  and discomfort caused by ongoing treatments.
                </p>
              </section>

              <section>
                <h4 className="font-semibold text-lg mb-2">Facilities & Medical Experts</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We provide world-class facilities including modern laboratories,
                  advanced diagnostic equipment, comfortable patient rooms, and ICU support.
                  Our experienced doctors, nurses, and healthcare staff are available 24/7
                  to ensure safety, care, and quick response.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
