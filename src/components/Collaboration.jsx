import { advisory, subteam, team } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assests/svg/Arrow";
import { BackgroundCircles, Gradient } from "./design/Hero";

const Benefits = () => {
  return (
    <div>


      <Section id="features">
        <div className="container relative z-10 mx-auto">
          {/* Main Section Heading */}
          <Heading
            className="md:max-w-md lg:max-w-2xl mx-auto text-center mb-8"
            title="Team 2024-25"
          />
          <h2 className="text-4xl text-white text-center mb-6">Advisory</h2>

          {/* Layout for Advisory */}
          <div className="flex justify-center flex-wrap gap-6">
            {advisory.map((item) => (
              <div
                key={item.id}
                className="relative p-1 rounded-lg overflow-hidden flex-1 min-w-[12rem] max-w-[14rem] transition-transform duration-300 transform hover:scale-105"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-white rounded-lg pointer-events-none z-0"></div>

                {/* Inner Content Container */}
                <div className="relative z-10 flex flex-col items-center justify-between min-h-[16rem] p-0 bg-[#0D0D0D] rounded-lg hover:bg-[#111111] transition-colors duration-300">
                  {/* Background Image Filling 65-70% */}
                  <div className="w-full h-[65%] overflow-hidden rounded-t-lg">
                    <img
                      src={item.backgroundUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Centered Title and Text */}
                  <div className="text-center p-4 flex-1">
                    <h5 className="text-lg text-white mb-1">{item.title}</h5>
                    <p className="text-sm text-gray-300">{item.text}</p>
                  </div>

                  {/* Icon and Arrow in the Bottom-Left */}
                  {/* Icon and Arrow in the Bottom-Left */}
                  <div className="absolute bottom-3 left-3 flex items-center">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" >
                        <img
                          src={item.iconUrl}
                          width={28}
                          height={28}
                          alt={`${item.title} LinkedIn`}
                          className="mr-2"
                        />
                      </a>
                    ) : (
                      <img
                        src={item.iconUrl}
                        width={28}
                        height={28}
                        alt={`${item.title} LinkedIn`}
                        className="mr-2"
                      />
                    )}
                    <Arrow />
                  </div>


                </div>

                {/* Optional Image on Hover */}
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg z-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  />
                )}
              </div>
            ))}

            {/* <BackgroundCircles /> */}
          </div>
        </div>
      </Section>





      <Section id="features">
        <div className="container relative z-10 mx-auto">
          {/* Main Section Heading */}
          {/* <Heading
            className="md:max-w-md lg:max-w-2xl mx-auto text-center mb-8"
            title="Team 2024-25"
          /> */}

          {/* Subsection for Coordinators */}
          <h2 className="text-4xl text-white text-center mb-6">Coordinators</h2>

          {/* Layout for Coordinators */}
          <div className="flex justify-center flex-wrap gap-6">
            {team.map((item) => (
              <div
                key={item.id}
                className="relative p-1 rounded-lg overflow-hidden flex-1 min-w-[12rem] max-w-[14rem] transition-transform duration-300 transform hover:scale-105"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-white rounded-lg pointer-events-none z-0"></div>

                {/* Inner Content Container */}
                <div className="relative z-10 flex flex-col items-center justify-between min-h-[16rem] p-0 bg-[#0D0D0D] rounded-lg hover:bg-[#111111] transition-colors duration-300">
                  {/* Background Image Filling 65-70% */}
                  <div className="w-full h-[65%] overflow-hidden rounded-t-lg">
                    <img
                      src={item.backgroundUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Centered Title and Text */}
                  <div className="text-center p-4 flex-1">
                    <h5 className="text-lg text-white mb-1">{item.title}</h5>
                    <p className="text-sm text-gray-300">{item.text}</p>
                  </div>

                  {/* Icon and Arrow in the Bottom-Left */}
                  {/* Icon and Arrow in the Bottom-Left */}
                  <div className="absolute bottom-3 left-3 flex items-center">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" >
                        <img
                          src={item.iconUrl}
                          width={28}
                          height={28}
                          alt={`${item.title} LinkedIn`}
                          className="mr-2"
                        />
                      </a>
                    ) : (
                      <img
                        src={item.iconUrl}
                        width={28}
                        height={28}
                        alt={`${item.title} LinkedIn`}
                        className="mr-2"
                      />
                    )}
                    <Arrow />
                  </div>


                </div>

                {/* Optional Image on Hover */}
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg z-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  />
                )}
              </div>
            ))}

            {/* <BackgroundCircles /> */}
          </div>
        </div>
      </Section>

      <Section id="features">
  <div className="container relative z-10 mx-auto">
    {/* Subsection for Sub-Coordinators */}
    <h2 className="text-4xl text-white text-center mb-6">Sub-Coordinators</h2>

    {/* Layout for Sub-Coordinators */}
    <div className="flex justify-center flex-wrap gap-12">
      {subteam.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-4"
        >
          {/* Circle Container */}
          <div
            className="relative p-1 rounded-full overflow-hidden min-w-[12rem] max-w-[12rem] min-h-[12rem] max-h-[12rem] transition-transform duration-300 transform hover:scale-105"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-white rounded-full pointer-events-none z-0"></div>

            {/* Image inside the Circle */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
              <img
                src={item.backgroundUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Title and Text Below Circle */}
          <div className="text-center">
            <h5 className="text-lg text-white mb-1">{item.title}</h5>
            <p className="text-sm text-gray-300">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</Section>


    </div>
  );
};

export default Benefits;






// <div className="flex justify-center flex-wrap gap-6 mb-12">
// {team.map((item) => (
//   <div
//     key={item.id}
//     className="relative p-1 rounded-full overflow-hidden flex-1 min-w-[10rem] max-w-[10rem] min-h-[10rem] max-h-[10rem] transition-transform duration-300 transform hover:scale-105"
//   >
//     {/* Gradient Border */}
//     <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-white rounded-full pointer-events-none z-0"></div>

//     {/* Inner Content Container */}
//     <div className="relative z-10 flex flex-col items-center justify-between h-full p-4 bg-[#0D0D0D] rounded-full hover:bg-[#111111] transition-colors duration-300">
//       <div className="text-center">
//         <h5 className="text-lg text-white mb-2">{item.title}</h5>
//         <p className="text-sm text-gray-300">{item.text}</p>
//       </div>

//       <div className="flex items-center mt-auto">
//         <img
//           src={item.iconUrl}
//           width={28}
//           height={28}
//           alt={item.title}
//           className="mr-2"
//         />
//         <Arrow />
//       </div>
//     </div>

//     {/* Optional Image on Hover */}
//     {item.imageUrl && (
//       <img
//         src={item.imageUrl}
//         alt={item.title}
//         className="absolute inset-0 w-full h-full object-cover rounded-full z-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
//       />
//     )}
//   </div>
// ))}
// </div>

// <div className="flex justify-center flex-wrap gap-6 mb-12">
// {team.map((item) => (
//   <div
//     key={item.id}
//     className="relative p-1 rounded-full overflow-hidden flex-1 min-w-[10rem] max-w-[10rem] min-h-[10rem] max-h-[10rem] transition-transform duration-300 transform hover:scale-105"
//   >
//     {/* Gradient Border */}
//     <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-white rounded-full pointer-events-none z-0"></div>

//     {/* Inner Content Container */}
//     <div className="relative z-10 flex flex-col items-center justify-between h-full p-4 bg-[#0D0D0D] rounded-full hover:bg-[#111111] transition-colors duration-300">
//       <div className="text-center">
//         <h5 className="text-lg text-white mb-2">{item.title}</h5>
//         <p className="text-sm text-gray-300">{item.text}</p>
//       </div>

//       <div className="flex items-center mt-auto">
//         <img
//           src={item.iconUrl}
//           width={28}
//           height={28}
//           alt={item.title}
//           className="mr-2"
//         />
//         <Arrow />
//       </div>
//     </div>

//     {/* Optional Image on Hover */}
//     {item.imageUrl && (
//       <img
//         src={item.imageUrl}
//         alt={item.title}
//         className="absolute inset-0 w-full h-full object-cover rounded-full z-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
//       />
//     )}
//   </div>
// ))}
// </div>