// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Menu from "./Menu";
// import Loader from "./Loader"; // Assuming you have a Loader component

// const Home = () => {
//   const [isLoading, setIsLoading] = useState(true); // State to control loader visibility
//   const [showLoader, setShowLoader] = useState(true); // State to completely remove loader from DOM

//   useEffect(() => {
//     // Set a timeout to hide the loader after 3 seconds (adjust the time as needed)
//     const timeout = setTimeout(() => {
//       setIsLoading(false); // Start fade-out animation
//       setTimeout(() => setShowLoader(false), 1000); // Remove loader after fade-out completes (1s duration)
//     }, 1000); // 5 seconds total loading time

//     return () => clearTimeout(timeout); // Cleanup timeout on unmount
//   }, []);

//   return (
//     <>
//       {/* Conditionally render loader */}
//       {showLoader && (
//         <div
//           className={`absolute w-full h-screen flex justify-center items-center bg-black z-[999] transition-opacity duration-1000 ${
//             isLoading ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <Loader />
//         </div>
//       )}

//       <Menu />

//       {/* Main content with fade-in effect */}
//       <div
//         className={`w-full flex h-screen justify-center font-parkin transition-opacity duration-1000 ${
//           !isLoading ? "opacity-100" : "opacity-0"
//         }`}
//       >
//           <div>

//           </div>
//       </div>

//     </>
//   );
// };

// export default Home;



import { useState, useEffect } from "react";
import Menu from "./Menu";
import Loader from "./Loader";
import './animation.css';
import Footer from "./Footer";
import EventHome from "./EventHome";
import {photos} from './Photos';
import GalleryHome from "./GalleryHome";
import ServiceHome from "./ServiceHome";
import HomeSlider from "./HomeSlider";
import AchivHome from "./AchivHome";
import TeamHome from "./TeamHome";
import ClientHome from "./ClientHome";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowLoader(false), 1000);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const [headingInView, setHeadingInView] = useState(false);
  const [descriptionInView, setDescriptionInView] = useState(false);
  const [servicesInView, setServicesInView] = useState(false); // For "Our Services" section
  const [achivInView, setAchivInView] = useState(false); // For "Our Services" section
  const [teamInView, setTeamInView] = useState(false); 
  const [eventInView, setEventInView] = useState(false); 
  const [clientInView, setClientInView] = useState(false); 
  const [galleryInView, setGalleryInView] = useState(false); 

  // Intersection Observer to trigger the animations when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'about-heading') {
              setHeadingInView(true);
            } else if (entry.target.id === 'about-description') {
              setDescriptionInView(true);
            } else if (entry.target.id === 'services-heading') {
              setServicesInView(true); // Trigger animation for Our Services
            } else if (entry.target.id === 'achiv-heading') {
              setAchivInView(true); // Trigger animation for Our Services
            } else if (entry.target.id === 'team-heading') {
              setTeamInView(true);
              
            } else if (entry.target.id === 'event-heading') {
              setEventInView(true);
              
            } else if (entry.target.id === 'client-heading') {
              setClientInView(true);
              
            } else if (entry.target.id === 'gallery-heading') {
              setGalleryInView(true);
              
            }
 
          }
        });
      },
      { threshold: 0.5 }
    );

    const headingElement = document.querySelector('#about-heading');
    const descriptionElement = document.querySelector('#about-description');
    const servicesHeadingElement = document.querySelector('#services-heading'); // Our Services heading
    const achivHeadingElement = document.querySelector('#achiv-heading'); // Our Services heading
    const teamHeadingElement = document.querySelector('#team-heading'); // Our Team heading
    const eventHeadingElement = document.querySelector('#event-heading'); // Our Team heading
    const clientHeadingElement = document.querySelector('#client-heading'); // Our Team heading
    const galleryHeadingElement = document.querySelector('#gallery-heading'); // Our Team heading

    if (headingElement) observer.observe(headingElement);
    if (descriptionElement) observer.observe(descriptionElement);
    if (servicesHeadingElement) observer.observe(servicesHeadingElement);
    if (achivHeadingElement) observer.observe(achivHeadingElement);
    if (teamHeadingElement) observer.observe(teamHeadingElement);
    if (eventHeadingElement) observer.observe(eventHeadingElement);
    if (clientHeadingElement) observer.observe(clientHeadingElement);
    if (galleryHeadingElement) observer.observe(galleryHeadingElement);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {showLoader && (
        <div
          className={`fixed w-full h-screen flex justify-center items-center bg-black z-[999] transition-opacity duration-1000 ${
            isLoading ? "opacity-100" : "opacity-0"
          }`}
        >
          <Loader />
        </div>
      )}
      <Menu />


      <div
  className={`w-full flex justify-center items-center flex-col font-parkin transition-opacity duration-1000 ${
    !isLoading ? "opacity-100" : "opacity-0"
  }`}
  style={{
    backgroundImage: `
      radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.2), transparent 60%),
      radial-gradient(circle at 70% 80%, rgba(70, 130, 180, 0.3), transparent 70%)
    `,
    backgroundSize: "cover", // Adjust to fill the section smoothly
    backgroundAttachment: "scroll", // Ensures it moves with the section
    backgroundBlendMode: "overlay", // Ensures smooth blending with content
  }}
>

        {/* <div className="h-screen"></div> */}
<HomeSlider />
        {/* ABOUT US SECTION */}
        <div className="w-full md:h-screen h-auto flex items-center justify-center py-16">
          <div className="text-center w-full max-w-3xl">
            {/* ABOUT US Heading */}
            <div
              id="about-heading"
              className={`text-4xl md:text-6xl font-bold text-gray-800 transform transition-all duration-1000 ${
                headingInView ? 'animate-slideInFromLeft' : 'opacity-0'
              }`}
            >
              ABOUT US
            </div>

            {/* Horizontal line animation */}
            <div
              className={`mt-4 w-10 md:w-20 mx-auto h-1 bg-gray-500 transform transition-all duration-1000 ${
                headingInView ? 'animate-widthExpand' : 'opacity-0'
              }`}
            ></div>

            {/* Description Section */}
            <div
              id="about-description"
              className={`mt-8 w-[80%] md:w-auto text-lg text-gray-700 mx-auto leading-relaxed opacity-0 transform transition-all duration-1000 ${
                descriptionInView ? 'animate-fadeInUp' : ''
              }`}
            >
              Moox Events Pvt. Ltd. is a Rajkot, Gujarat-based event management & wedding planning company dedicated to providing customers with a wide assortment of event management services for all sorts of corporate and personal events. Be it live shows, celebrity events, entertainment events, star nights, product launches, theme parties, wedding events, birthdays, anniversaries, Baby showers, corporate events, meet-ups, and many more…
              <br /><br />
              Our trained and skilled event planners have the right expertise to make your event more spectacular with full-time experience in the event management & Wedding Planning industry. We are serving our customers with the best possible services delivered at the best possible rates. We provide out-of-the-box and innovative ideas for 100% client satisfaction.
            </div>
          </div>
        </div>

        {/* OUR SERVICES SECTION */}
        <div className="w-full py-16">
          <div className="text-center w-full max-w-3xl mx-auto">
            {/* Our Services Heading */}
            <div
              id="services-heading"
              className={`text-4xl md:text-6xl font-bold text-gray-800 transform transition-all duration-1000 ${
                servicesInView ? 'animate-slideInFromLeft' : 'opacity-0'
              }`}
            >
              OUR SERVICES
            </div>
            

            {/* Horizontal line animation */}
            <div
              className={`mt-4 w-10 md:w-20 mx-auto h-1 bg-gray-500 transform transition-all duration-1000 ${
                servicesInView ? 'animate-widthExpand' : 'opacity-0'
              }`}
            ></div>
             <p className="text-lg text-gray-600 my-3 md:w-full w-[90%] text-center mx-auto">
        Our trained and skilled event planners have the right expertise to make your event more spectacular. With full-time experience in the event management & Wedding Planning industry, we are serving our customers with the best possible services delivered at the best possible rates.
    </p>
          </div>
          <ServiceHome />
        </div>

        {/* GALLERY */}
        <div className="w-full py-16">
          <div className="text-center w-full max-w-3xl mx-auto">
            <div
              id="gallery-heading"
              className={`text-4xl md:text-6xl font-bold text-gray-800 transform transition-all duration-1000 ${
                galleryInView ? 'animate-slideInFromLeft' : 'opacity-0'
              }`}
            >
              MOMENTS
            </div>
            
            <div
              className={`mt-4 w-10 md:w-20 mx-auto h-1 bg-gray-500 transform transition-all duration-1000 ${
                galleryInView ? 'animate-widthExpand' : 'opacity-0'
              }`}
            ></div>
          </div>
          <GalleryHome />
        </div>

        {/* EVENT HOME SECTION  */}
        <div className="w-full py-16">
          <div className="text-center w-full max-w-3xl mx-auto">

            <div
              id="event-heading"
              className={`text-4xl md:text-6xl font-bold text-gray-800 transform transition-all duration-1000 ${
                eventInView ? 'animate-slideInFromLeft' : 'opacity-0'
              }`}
            >
MEMORABLE STORIES
            </div>
            <div
              className={`mt-4 w-10 md:w-20 mx-auto h-1 bg-gray-500 transform transition-all duration-1000 ${
                eventInView ? 'animate-widthExpand' : 'opacity-0'
              }`}
            ></div>
          </div>
          <EventHome />
        </div>

                {/* OUR ACHIVMENTS SECTION */}
        <div className="w-full py-16">
          <div className="text-center w-full max-w-3xl mx-auto">
            {/* Our Services Heading */}
            <div
              id="achiv-heading"
              className={`text-4xl md:text-6xl font-bold text-gray-800 transform transition-all duration-1000 ${
                achivInView ? 'animate-slideInFromLeft' : 'opacity-0'
              }`}
            >
  ACHIEVEMENTS
            </div>

            {/* Horizontal line animation */}
            <div
              className={`mt-4 w-10 md:w-20 mx-auto h-1 bg-gray-500 transform transition-all duration-1000 ${
                achivInView ? 'animate-widthExpand' : 'opacity-0'
              }`}
            ></div>
          </div>
          <AchivHome />
        </div>

          {/* OUR CLIENTS  */}
          <div className="w-full py-16">
          <div className="text-center w-full max-w-3xl mx-auto">
            {/* Our Services Heading */}
            <div
              id="client-heading"
              className={`text-4xl md:text-6xl font-bold text-gray-800 transform transition-all duration-1000 ${
                clientInView ? 'animate-slideInFromLeft' : 'opacity-0'
              }`}
            >
OUR VALUED CLIENTS
            </div>

            {/* Horizontal line animation */}
            <div
              className={`mt-4 w-10 md:w-20 mx-auto h-1 bg-gray-500 transform transition-all duration-1000 ${
                clientInView ? 'animate-widthExpand' : 'opacity-0'
              }`}
            ></div>
          </div>
          <ClientHome />
        </div>


        {/* OUT TEAM  */}
        <div className="w-full py-16">
          <div className="text-center w-full max-w-3xl mx-auto">
            {/* Our Services Heading */}
            <div
              id="team-heading"
              className={`text-4xl md:text-6xl font-bold text-gray-800 transform transition-all duration-1000 ${
                teamInView ? 'animate-slideInFromLeft' : 'opacity-0'
              }`}
            >
  MEET THE TEAM
            </div>

            {/* Horizontal line animation */}
            <div
              className={`mt-4 w-10 md:w-20 mx-auto h-1 bg-gray-500 transform transition-all duration-1000 ${
                teamInView ? 'animate-widthExpand' : 'opacity-0'
              }`}
            ></div>
          </div>
          <TeamHome />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
