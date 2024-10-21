import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assests/svg/Arrow";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-10 mx-auto">
        {/* Heading Section */}
        <Heading 
          className="md:max-w-md lg:max-w-2xl mx-auto text-center" 
          title="Upcoming Events" 
        />

        {/* Grid Layout with Items */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="relative p-0.5 rounded-xl overflow-hidden md:max-w-[20rem] w-full 
              transition-transform duration-300 transform hover:scale-105 shadow-lg"
            >
              {/* Gradient Background */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#6B1FCC] via-[#5145DD] to-white 
                rounded-xl pointer-events-none z-0 opacity-90 transition-opacity duration-500"
              ></div>

              {/* Inner Content Container */}
              <div className="relative z-10 flex flex-col min-h-[25rem] p-5 bg-[#0D0D0D]/90 
                rounded-xl hover: transition-colors duration-300">
                <h5 className="h5 mb-5 text-white">{item.title}</h5>
                <p className="body-2 mb-6 text-gray-300">{item.text}</p>

                <div className="flex items-center mt-auto">
                  <Arrow />
                </div>
              </div>

              {/* Optional Image on Hover */}
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl z-0 
                  opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
