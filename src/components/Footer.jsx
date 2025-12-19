import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#020617] to-[#020617] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-10">
          Stay Informed – Cancer Awareness & Education
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl font-extrabold text-white">
                Cancer<span className="text-[#9D41E4]">Odisha</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              CancerOdisha is an educational initiative dedicated to spreading
              awareness about cancer prevention, early detection, treatment
              options, and patient support across Odisha.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#9D41E4]" />
                Odisha, India
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#9D41E4]" />
                info@cancerodisha.org
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#9D41E4]" />
                +91 98765 43210
              </li>
            </ul>

            <div className="flex gap-4 mt-5">
              <a
                className="p-2 rounded-md bg-white/5 hover:bg-[#9D41E4] transition"
                href="#"
              >
                <Facebook size={16} />
              </a>
              <a
                className="p-2 rounded-md bg-white/5 hover:bg-[#9D41E4] transition"
                href="#"
              >
                <Twitter size={16} />
              </a>
              <a
                className="p-2 rounded-md bg-white/5 hover:bg-[#9D41E4] transition"
                href="#"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Awareness Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Awareness Programs
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Early Cancer Detection</li>
              <li>Preventive Screenings</li>
              <li>Patient Education Sessions</li>
              <li>Community Outreach</li>
              <li>Survivor Support Programs</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:text-white transition" href="#">
                  About Cancer
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Symptoms & Diagnosis
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Treatment Options
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Patient Resources
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Contact & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Cancer Types */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Cancer Specialties
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Breast Cancer</li>
              <li>Lung Cancer</li>
              <li>Head & Neck Cancer</li>
              <li>Blood Cancer</li>
              <li>Gastrointestinal Cancer</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CancerOdisha. Educational Purpose Only.
        Designed & Developed by{" "}
        <a
          href="https://marcadspro.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Marcads Pro
        </a>
      </div>
    </footer>
  );
}
