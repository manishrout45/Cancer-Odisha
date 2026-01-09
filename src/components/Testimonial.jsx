import React, { useEffect, useState } from "react";
import { Star, Calendar, Clock, ChevronDown } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "ONCOLOGY PATIENT",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.",
  },
  {
    name: "Emily Johnson",
    role: "CANCER SURVIVOR",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The doctors and staff were extremely supportive throughout my treatment. I felt safe, cared for, and confident every step of the way.",
  },
  {
    name: "Michael Brown",
    role: "HEALTH CHECK PATIENT",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Professional service, quick diagnosis, and excellent facilities. Highly recommend this hospital for quality healthcare services.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="w-full bg-gradient-to-r from-pink-50 via-white to-pink-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT : FORM */}
            <div className="p-8 md:p-12 lg:p-14 fade-right">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
                Get a quote for start new journey
              </h2>

              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="input" />
                <input type="email" placeholder="Email Address" className="input" />

                <div className="relative">
                  <select className="select">
                    <option>Select Department</option>
                    <option>Oncology</option>
                    <option>Radiology</option>
                  </select>
                  <ChevronDown className="select-icon" />
                </div>

                <div className="relative">
                  <select className="select">
                    <option>Select Doctor</option>
                    <option>Dr. John Smith</option>
                  </select>
                  <ChevronDown className="select-icon" />
                </div>

                <input type="tel" placeholder="Phone" className="input" />

                <div className="relative">
                  <input type="date" className="input" />
                  <Calendar className="select-icon" />
                </div>

                <div className="relative">
                  <select className="select">
                    <option>09:00AM</option>
                    <option>10:00AM</option>
                  </select>
                  <Clock className="select-icon" />
                </div>

                <textarea rows="4" placeholder="Type Your Message" className="sm:col-span-2 input" />

                <div className="sm:col-span-2 mt-4">
                  <button className="btn-slide attention bg-[#9D41E4] hover:bg-[#8924d6] transition text-white text-sm font-semibold px-8 py-3 rounded-lg">
                    BOOK AN APPOINTMENT
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT : TESTIMONIAL */}
            <div className="p-8 md:p-12 lg:p-14 border-t lg:border-t-0 lg:border-l border-gray-100 flex flex-col">

              <span className="inline-block text-xs font-semibold tracking-widest text-[#9D41E4] bg-indigo-50 px-4 py-1 rounded-full mb-6 w-fit">
                TESTIMONIAL
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight fade-right">
                Feedback From our <br /> happy patients
              </h2>

              {/* Stars */}
              <div className="flex items-center gap-1 text-yellow-400 mb-6 fade-right">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* FIXED HEIGHT TEXT AREA */}
              <div className="min-h-[120px] md:min-h-[140px] transition-all duration-500 fade-up">
                <p className="text-gray-600 leading-relaxed">
                  {current.text}
                </p>
              </div>

              {/* FIXED PROFILE AREA */}
              <div className="mt-auto">
                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {current.name}
                    </h4>
                    <span className="text-sm text-[#9D41E4]">
                      {current.role}
                    </span>
                  </div>
                </div>

                {/* Dots */}
                <div className="flex gap-2 mt-6">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition ${
                        i === index ? "bg-[#9D41E4]" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Utility classes */}
      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.5rem;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
        }
        .select {
          width: 100%;
          appearance: none;
          border-radius: 0.5rem;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
        }
        .select-icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1rem;
          height: 1rem;
          color: #9ca3af;
        }
      `}</style>
    </section>
  );
}
