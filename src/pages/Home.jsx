import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import HeroSection from "../components/HeroSection";
import ScrollPromo from "../components/ScrollPromo";
import useScrollFade from "../hooks/useScrollFade";
import ExpertsSection from "../components/ExpertsSection";
import ServiceSuccess from "../components/ServiceSuccess";
import DiseaseScroll from "../components/DiseaseScroll";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonial";
const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection className="fade-up" />
      <AboutSection className="fade-right" />
      <ServiceSection className="fade-left" />
      <ServiceSuccess className="fade-up" />
      <DiseaseScroll className="fade-right" />
      <WhyChooseUs className="fade-left" />
      <ScrollPromo className="zoom-in" />
      <Testimonial className="fade-left" />


    </>
  );
};

export default Home;
