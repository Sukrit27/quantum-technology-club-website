import React from "react";
import Slider from "react-slick"; // Import react-slick carousel
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assests";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Optional: Hide arrows
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Section className="overflow-hidden px-6 md:px-12 lg:px-20" id="roadmap">
      <div className="container md:pb-10">
        <Heading
          tag="Ready to get started"
          title="Resources and what we have done so far..."
        />

        <div className="relative grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-10 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[3.5rem] p-1 border-white border-[2px] rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                } transition-transform duration-300 hover:scale-105`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    {/* Slideshow Carousel */}
                    <div className="mb-10 -my-10 -mx-15">
                      <Slider {...sliderSettings}>
                        {item.images.map((image, index) => (
                          <div key={index}>
                            <img
                              className="w-full rounded-lg"
                              src={image}
                              alt={`Slide ${index + 1}`}
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>

                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>

                    {/* Small Text 'Resources' with Unique Link */}
                    {item.resourceLink && (
                      <div className="absolute bottom-4 right-4">
                        <a
                          href={item.resourceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:underline"
                        >
                          Resources
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
