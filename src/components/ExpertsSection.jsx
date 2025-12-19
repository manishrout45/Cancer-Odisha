import React, { useState } from "react";
import { FaUserMd, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const specialists = [
  {
    name: "Dr. Shivani Mehra",
    title: "BDS",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    description:
      "Fellowship in Restorative and Clinical Dentistry, Laser and Cosmetic Dentist.",
    experience: "7+ Years of Clinical Experience",
    location: "Bhubaneswar",
    details: `
      Dr Shivani is a highly enthusiastic general and cosmetic dentist who has complete has Bachelor in Dental Surgery from XYZ university in 1995.
      Dr Shivani is a highly skilled Dental surgeon who stays on top of latest advancements in the world of dentistry. She specialises in Rotary Endodontics, Asthetic Dentistry, Laser Dentistry paediatric and Preventive Dentistry. 
      EDUCATION-
      • Bachelors in Dental Surgery 
      • Fellowship in Restorative and clinical dentistry from IOM , Hong Kong.
    `,
  },
  {
    name: "Dr. Robert Wilson",
    title: "BDS",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    description:
      "Specialist in Dental Care with advanced cosmetic dentistry expertise.",
    experience: "10+ Years of Practice",
    location: "Bhubaneswar",
    details: `
      Dr. Robert Wilson is an experienced Dental Director with 10+ years.
      • Dental implants
      • Crowns & veneers
      • Root canal treatments
    `,
  },
  {
    name: "Dr. Emily Davis",
    title: "BDS",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    description: "Certified psychologist helping patients with mental wellness.",
    experience: "10+ Years of Counseling Experience",
    location: "Bhubaneswar",
    details: `
      Dr Emily Davis is a certified clinical psychologist.
      • Anxiety & depression therapy
      • Child & adolescent counseling
      • Relationship therapy
    `,
  },
];

const ExpertsSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleMoreDetails = (doctor) => {
    setSelectedDoctor(doctor);
    setOpenModal(true);
  };

  const closeModal = () => setOpenModal(false);

  return (
    <>
      {/* SECTION */}
      <section className="relative w-full py-14 bg-[#007B9C]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Meet Our <span className="text-orange-400">Expert Specialists</span>
        </h2>

        {/* GRID — 1 column mobile, 3 columns tablet & desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-3xl shadow-lg p-7 text-center hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              {/* Image */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-[#73d6f1]">
                <img
                  src={specialist.img}
                  alt={specialist.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {specialist.name}
              </h3>

              <p className="text-sm text-orange-600 font-medium mb-4">
                {specialist.title}
              </p>

              <div className="flex items-start space-x-3 text-left mb-3">
                <FaUserMd className="text-[#007B9C] text-lg mt-1" />
                <p className="text-gray-700 text-sm">{specialist.description}</p>
              </div>

              <div className="flex items-start space-x-3 text-left mb-3">
                <FaClock className="text-[#007B9C] text-lg mt-1" />
                <p className="text-gray-700 text-sm">{specialist.experience}</p>
              </div>

              <div className="flex items-start space-x-3 text-left mb-5">
                <FaMapMarkerAlt className="text-[#007B9C] text-lg mt-1" />
                <p className="text-gray-700 text-sm">{specialist.location}</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => handleMoreDetails(specialist)}
                  className="bg-[#007B9C] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-500 transition-all"
                >
                  More Details
                </button>

                <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#007B9C] transition-all">
                  Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {openModal && selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-3xl max-h-[80vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#007B9C] hover:text-black text-xl"
            >
              ✖
            </button>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#73d6f1]">
                <img
                  src={selectedDoctor.img}
                  alt={selectedDoctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedDoctor.name}
                </h3>

                <p className="text-orange-600 font-medium text-sm mb-4">
                  {selectedDoctor.title}
                </p>

                <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
                  {selectedDoctor.details}
                </p>

                <button className="mt-5 bg-[#007B9C] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-orange-500 transition-all">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpertsSection;
