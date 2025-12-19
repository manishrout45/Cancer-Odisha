import { useEffect, useRef } from "react";

const GallerySection = ({ className = "" }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    function scrollAmount() {
      if (window.innerWidth >= 1024) return slider.clientWidth / 4;
      if (window.innerWidth >= 640) return slider.clientWidth / 2;
      return slider.clientWidth;
    }

    const interval = setInterval(() => {
      slider.scrollLeft += scrollAmount();

      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-10 bg-white ">
        <div className={`${className}`}>
      <h2 className="main-heading text-3xl sm:text-4xl font-bold  text-gray-900 text-center mb-10">
        Gallery
      </h2>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth no-scrollbar 
                   space-x-4 px-4 sm:px-6 lg:px-10"
      >
        {/* ITEM TEMPLATE */}
        {[
          { img: "/assets/images/OrgImg/Ridley_Img2.jpeg", title: "STRONG ALCOHOL" },
          { img: "/assets/images/nightlife-people-having-fun-bars-clubs.jpg", title: "CONCERT LIVE" },
          { img: "/assets/images/OrgImg/Ridley_Img3.jpeg", title: "GREAT ATMOSPHERE" },
          { img: "/assets/images/shish-kebab-with-colorful-bell-peppers-served-with-ketchup-fresh-vegetables.jpg", title: "DELICIOUS FOOD" },
          { img: "/assets/images/nightlife-people-having-fun-bars-clubs.jpg", title: "FRIENDS & FUN" },
          { img: "https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208316.jpg?semt=ais_hybrid&w=740&q=80", title: "MASTER CHEF" },
          { img: "/assets/images/OrgImg/Ridley_Img1.jpeg", title: "NIGHT PARTY" },
          { img: "/assets/images/OrgImg/Ridley_Img4.jpeg", title: "SIGNATURE COCKTAILS" },
        ].map((item, index) => (
          <div
            key={index}
            className="group relative min-w-[90%] sm:min-w-[45%] lg:min-w-[23%]
                       h-[220px] sm:h-[260px] lg:h-[300px]
                       rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={item.img}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt=""
            />

            <div
              className="diagonal-overlay absolute inset-0 bg-gradient-to-t 
                         from-green-600/70 to-green-400/40
                         opacity-0 group-hover:opacity-100
                         transition-opacity duration-500"
            ></div>

            <p className="absolute bottom-4 left-4 text-white text-lg font-semibold tracking-wide">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default GallerySection;
