import React from "react";
import { FaHeartbeat, FaClipboardCheck } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ================= LEFT IMAGE AREA ================= */}
        <div className="relative flex justify-center lg:justify-start">

          {/* Main Image */}
          <div className="w-full max-w-[560px] h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/female-doctor-with-wheelchair-patient-window-recovering-from-illness_1375095-1983.jpg"
              alt="Oncologist consulting patient"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Image */}
          <div className="
            hidden sm:block absolute
            right-4
            sm:right-6
            md:right-0
            lg:-right-12
            xl:-right-14
            bottom-2
            sm:bottom-8
            w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]
            h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px]
            rounded-2xl overflow-hidden border-8 border-white
          ">
            <img
              src="https://img.freepik.com/free-photo/world-cancer-day-awareness-with-patient_23-2151249690.jpg"
              alt="Cancer patient care"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="space-y-6 sm:space-y-7 text-center lg:text-left">

          {/* Tag */}
          <span className="inline-block bg-[#ede0ed] text-[#9D41E4] px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
            WELCOME TO ONCOLOGY CENTER
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            Expert Cancer Care in Odisha Focused on Healing and Hope | 
            A Cancer Odisha Awareness Program
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 text-left">
            Welcome to Cancer Odisha, an initiative to raise awareness of cancer and encourage
            cancer patients throughout their journey. The page is an educational program that provides
            basic knowledge of cancer, a type of disease that comes under Medical Oncology. From
            types of cancer to preparation and treatment types, a glimpse of cancer helps you be aware
            of this disease.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">

            {/* Feature 1 */}
            <div className="flex gap-4 text-left">
              <FaHeartbeat className="text-[#9D41E4] text-2xl mt-1 shrink-0" />
              <h4 className="font-semibold text-gray-900">
                100% True Information
              </h4>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 text-left">
              <FaClipboardCheck className="text-[#9D41E4] text-2xl mt-1 shrink-0" />
              <h4 className="font-semibold text-gray-900">
                Sourced From Authentic Resources
              </h4>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 flex justify-center lg:justify-start">
            <button className="btn-slide attention inline-flex items-center gap-2 bg-[#9D41E4] text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-[#8924d6]">
              Learn About Our Care <FiArrowUpRight />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
