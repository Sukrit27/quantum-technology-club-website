import { computer, curve, heroBackground, robot } from '../assests'
import Button from './Button';
import Section from './Section';
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero';
import { heroIcons } from '../constants';
import { ScrollParallax } from 'react-just-parallax';
import { useRef } from 'react';
import Generating from './Generating';
import CompanyLogo from './CompanyLogo';

const Hero = () => {
    const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          {/* H1 with adjusted styles */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Unlock the Future with Quantum Technology
          </h1>

          {/* Span and image below the heading */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6"><span className="block relative mt-2">
            QTC{" "}
            <img
             src={curve}
             className="block mt-1 mx-auto w-[80px] xl:w-[100px]" // Adjust width
             alt="Curve"
            />
          </span></h1>

          {/* Paragraph with adjusted text size */}
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
           Where Innovation Meets the Unimaginable
          </p>
          {/* <Button href="/pricing" white>
          Get Started
          </Button> */}
        </div>
        <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
            <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
                <div className='relative bg-n-8 rounded-[1rem]'>
                    <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />
                    <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[350/490] lg:aspect-[1024/490] ' >
                        {/* className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]' */}
                        <img
                        src={computer}
                        className='w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-transalte-y-[10%] lg:-translate-y-[23%] '
                        width={1024}
                        height={490}
                        alt='AI'
                         />

                         <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 mdLw-[31rem] md:-translate-x-1/2" />

                         <ScrollParallax isAbsolutelyPositioned>
                            <ul className='hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-940 backdrop-blur border border-n-110 rounded-2xl xl:flex'>
                                {heroIcons.map((icon,index) => (
                                    <li className='p-5' key={index}>
                                        <img src={icon} width={24} height={25} alt={icon} />
                                    </li>
                                ))}
                            </ul>
                         </ScrollParallax>
                    </div>
                </div>

                <Gradient />
            </div>
            <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[28%] md:w-[138%] lg:-top-[104%] -z-10'>
                <img 
                src={heroBackground}
                className='w-full h-auto object-cover'
                width={1440}
                height={1800}
                alt='hero'
                />
            </div>

            <BackgroundCircles />

        </div>

        {/* <CompanyLogo className="hidden relative z-10 mt-20 lg:block"/> */}
      </div>

      {/* <BottomLine /> */}
    </Section>
  );
};

export default Hero;
