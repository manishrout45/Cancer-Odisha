import React from "react";
import { ShieldCheck, Stethoscope, TestTube, HeartPulse, Ambulance, ArrowUpRight } from "lucide-react";

const services = [
  { id: "01", title: "Initial Consultation", desc: "An oncologist diagnoses your full medical history, including assessing your pre-existing diseases, current medications, surgery history, and other essential health information.", icon: ShieldCheck },
  { id: "02", title: "Physical Test", desc: "This phase includes a blood test, imaging scans, and a biopsy report to examine the types and stages of cancer, and accordingly decide the treatment types.", icon: Stethoscope },
  { id: "03", title: "Preparation for the Treatment", desc: "An expert oncologist in Odisha helps patients to prepare for the treatment session, result expectations, and side effects details, types of radiation, antibiotics to be used, etc.", icon: TestTube },
  { id: "04", title: "Treatment Solutions", desc: "There are several cancer treatments in Odisha available, including surgical, chemotherapy, immunotherapy, radiation therapy, bone marrow transplant, laser therapy, etc. ", icon: HeartPulse },
  { id: "05", title: "Aftercare", desc: "The aftercare includes post-operative instructions, follow-ups, and other formalities provided in the cancer care hospital in Bhubaneswar.", icon: Ambulance },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#9D41E4] bg-[#ede0ed] px-4 py-1 rounded-full mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 fade-up">
            Procedure of a Cancer Treatment in Odisha-  <br className="hidden sm:block" />
            A Complete Diagnosis Process of Cancer Journey
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Service Cards */}
          {services.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#9D41E4] translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-80 rounded-2xl z-0"></div>

              <div className="relative flex flex-col h-full z-10">
                <div className="flex items-center justify-between mb-6">
                  <item.icon className="w-10 h-10 text-[#9D41E4] group-hover:text-white transition-colors duration-300" />
                  <span className="text-sm font-semibold text-[#9D41E4] bg-indigo-50 px-3 py-1 rounded-lg group-hover:bg-white group-hover:text-[#9D41E4] transition-colors duration-300">
                    {item.id}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-[#9D41E4] rounded-2xl p-8 md:p-10 text-white flex flex-col justify-between shadow-lg">
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug mb-8">
              Everything you need <br />
              to know about <br />
              oncology care
            </h3>

            <button className="btn-slide attention inline-flex items-center gap-2 bg-white text-[#9D41E4] font-semibold px-6 py-3 rounded-lg w-fit hover:bg-gray-100 transition">
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
