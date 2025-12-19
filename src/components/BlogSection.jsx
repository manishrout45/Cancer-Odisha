import React from "react";
import { User, Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    category: "Diagnosis",
    title: "Navigating Mental Health Challenges",
    excerpt:
      "Symptoms of Oncology cancer can include bleeding from the rectum, a change in bowel...",
    image:
      "https://img.freepik.com/premium-photo/flat-abstract-neon-art-featuring-diabetes-awareness-ribbon-healthcare-professional-concept_980716-702084.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    date: "November 23, 2024",
  },
  {
    id: 2,
    category: "Cancer",
    title: "Cancer Care Disparities Oncology Community",
    excerpt:
      "Symptoms of Oncology cancer can include bleeding from the rectum, a change in bowel...",
    image:
      "https://img.freepik.com/premium-photo/multiethnic-people-holding-hands-breast-cancer-foundation_1033124-6.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    date: "November 23, 2024",
  },
  {
    id: 3,
    category: "Oncology",
    title: "How Care For Oncology And Cancer Treatment?",
    excerpt:
      "Symptoms of Oncology cancer can include bleeding from the rectum, a change in bowel...",
    image:
      "https://img.freepik.com/premium-photo/cancer-nurse-help-with-old-woman-hospital-food-medical-support-healthcare-medicine-rehabilitation-with-senior-patient-caregiver-clinic-nursing-empathy-oncology_590464-218686.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    date: "November 23, 2024",
  },
];

export default function BlogSection() {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-psd/interior-modern-emergency-room-with-empty-nurses-station-generative-ai_587448-2137.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#9D41E4] bg-[#ede0ed] px-4 py-1 rounded-full mb-4">
            UPDATES NEWS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Every Single Update And Recent <br className="hidden sm:block" />
            Story From Our Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute bottom-4 right-4 bg-[#9D41E4] text-white text-xs font-semibold px-3 py-1 rounded-lg">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <User size={14} /> Admin
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {blog.date}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-indigo-600 transition"
                >
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <span className="w-2 h-2 rounded-full bg-gray-300" />
          <span className="w-2 h-2 rounded-full bg-[#9D41E4]" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
