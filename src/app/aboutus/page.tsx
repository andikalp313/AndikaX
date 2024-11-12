import AboutSection from "@/components/aboutsection/page";
import FooterSection from "@/components/footer/footer";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="flex items-center justify-center mx-auto">
        <AboutSection />
      </div>

      <div>
        <FooterSection />
      </div>
    </div>
  );
};

export default AboutUs;
