import React from "react";
import { FaHeartbeat, FaClipboardCheck } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT IMAGE AREA */}
        <div className="relative flex justify-start">

          {/* Main Image */}
          <div className="w-full max-w-[520px] h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden ">
            <img
              src="https://img.freepik.com/premium-photo/female-doctor-with-wheelchair-patient-window-recovering-from-illness_1375095-1983.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
              alt="Oncologist consulting patient"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Image */}
          <div className="hidden sm:block absolute right-[0px] sm:right-[-40px] md:right-[20px] bottom-8 sm:bottom-10 w-[180px] sm:w-[200px] md:w-[220px] h-[180px] sm:h-[200px] md:h-[220px] rounded-2xl overflow-hidden  border-8 border-white">
            <img
              src="https://img.freepik.com/free-photo/world-cancer-day-awareness-with-patient_23-2151249690.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
              alt="Cancer patient care"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6 sm:space-y-7 text-center lg:text-left">

          {/* Tag */}
          <span className="inline-block bg-[#ede0ed] text-[#9D41E4] px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
            WELCOME TO OUR ONCOLOGY CENTER
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            Expert Oncology Care <br className="hidden sm:block" />
            Focused on Healing & Hope.
          </h2>

          {/* Educational Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 flex gap-3 text-left">
            <span className="flex items-center justify-center min-w-[32px] h-8 bg-black text-white rounded-md font-semibold">
              O
            </span>
            ncology is a specialized branch of medicine dedicated to the
            prevention, diagnosis, and treatment of cancer. Our experienced
            oncologists provide personalized treatment plans while supporting
            patients physically, emotionally, and educationally throughout
            their care journey.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">

            {/* Feature 1 */}
            <div className="flex gap-4 text-left">
              <FaHeartbeat className="text-[#9D41E4] text-2xl mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  Advanced Cancer Treatment
                </h4>
                <p className="text-sm text-gray-600">
                  We provide evidence-based treatments including chemotherapy,
                  immunotherapy, radiation therapy, and targeted care tailored
                  to each patient’s condition.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 text-left">
              <FaClipboardCheck className="text-[#9D41E4] text-2xl mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  Simple Appointment Booking
                </h4>
                <p className="text-sm text-gray-600">
                  Easily schedule consultations with our specialists and receive
                  guidance from diagnosis through treatment and follow-up care.
                </p>
              </div>
            </div>
          </div>

          {/* CTA + STATS */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-5 pt-4">

            <button className="inline-flex items-center gap-2 bg-[#9D41E4] text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-[#8924d6]">
              Learn About Our Care <FiArrowUpRight />
            </button>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900 text-lg">4.9</span>
              <span className="text-yellow-400 text-lg">★★★★★</span>
            </div>

            {/* Medical Staff */}
            <div className="bg-white shadow-md rounded-xl px-7 py-5 text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                25+
              </h3>
              <p className="text-gray-600 font-medium mt-1">
                Qualified Specialists
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
