
// import React, { useState } from "react";
// import { Squash as HamburgerSquash } from "hamburger-react";
// import { useSpring, animated, useTrail } from "@react-spring/web";
// import { Link } from "react-router-dom";

// const Menu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Animation for fullscreen menu
//   const menuAnimation = useSpring({
//     transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
//     opacity: isOpen ? 1 : 0,
//     config: { tension: 130, friction: 30 },
//   });

//   // Trail animation for menu items
//   const items = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about" },
//     { name: "Services", link: "/services" },
//     { name: "Events", link: "/events" },
//     { name: "Gallery", link: "/gallery" },
//     { name: "Career", link: "/career" },
//     { name: "Contact", link: "/contact" },
//   ];

//   const trail = useTrail(items.length, {
//     opacity: isOpen ? 1 : 0,
//     from: { opacity: 0 },
//     config: { tension: 220, friction: 20 },
//     reset: true,
//   });

//   return (
//     <>
//       {/* Hamburger Menu Button (Always on top) */}
//       <div className="fixed z-50 rounded px-5 py-1 md:px-10 md:py-1 flex justify-between items-center w-full backdrop-blur">
//       <div className="w-full flex items-start z-10">
//         {/* Conditionally hide the logo when the menu is open */}
//         <Link to={'/'}>
//           <img
//             src="/logo.png"
//             alt=""
//             className={`w-28 md:w-36 mt-3 transition-opacity duration-300 ${
//               isOpen ? "opacity-0 cursor-default" : "opacity-100"
//             }`}
//             style={{
//               filter: "drop-shadow(0 0px 6px rgba(255, 255, 255, 0.1))",
//             }}
//           />
//         </Link>
//       </div>

//       {/* Hamburger menu */}
//       <HamburgerSquash
//         toggled={isOpen}
//         toggle={setIsOpen}
//         size={25}
//         direction="left"
//         duration={0.3}
//         distance="lg"
//         rounded
//         label="Show menu"
//         color="#DBAF76"
//         easing="ease-in"
//       />
//     </div>
//       {/* Fullscreen Menu */}
//       <animated.div
//         style={menuAnimation}
//         className="fixed top-0 left-0 w-full h-screen z-50 bg-gray-900  backdrop-blur-md ease-out" 
//       >
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-end h-full py-28 px-6 sm:py-20 sm:px-10 lg:px-28">
//           {/* Main Menu Items */}
//           <div className="flex flex-col gap-6 sm:gap-10 w-full text-center md:text-left">
//   {trail.map((style, index) => (
//     <animated.a
//       key={items[index].name}
//       href={items[index].link}
//       style={style}
//       className="font-parkin font-bold text-3xl sm:text-4xl text-[#DBAF76] lg:text-5xl"
//     >
//       {/* Apply hover effects only on the text */}
//       <span
//         className="relative hover:text-white transition duration-300"
//         onMouseEnter={(e) =>
//           (e.target.style.textShadow = "0px 0px 10px rgba(219, 175, 118, 0.4)")
//         }
//         onMouseLeave={(e) => (e.target.style.textShadow = "none")}
//       >
//         {items[index].name}
//       </span>
//     </animated.a>
//   ))}
// </div>


//           {/* Social Links */}
//           <div className="flex flex-col items-center md:flex-row gap-3 md:gap-5 mt-10 md:mt-0">
//             <animated.a
//               href="/instagram"
//               style={trail[items.length - 2]}
//               className="font-parkin font-bold text-lg sm:text-xl text-[#DBAF76] lg:text-2xl hover:text-white transition duration-300"
//               onMouseEnter={(e) =>
//                 (e.target.style.textShadow = "0px 0px 10px #DBAF7666")
//               }
//               onMouseLeave={(e) => (e.target.style.textShadow = "none")}
//             >
//               Instagram
//             </animated.a>
//             <animated.a
//               href="/facebook"
//               style={trail[items.length - 1]}
//               className="font-parkin font-bold text-lg sm:text-xl text-[#DBAF76] lg:text-2xl hover:text-white transition duration-300"
//               onMouseEnter={(e) =>
//                 (e.target.style.textShadow = "0px 0px 10px #DBAF7666")
//               }
//               onMouseLeave={(e) => (e.target.style.textShadow = "none")}
//             >
//               Facebook
//             </animated.a>
//           </div>
//         </div>
//       </animated.div>
//     </>
//   );
// };

// export default Menu;




// import React, { useState } from "react";
// import { Squash as HamburgerSquash } from "hamburger-react";
// import { useSpring, animated, useTrail } from "@react-spring/web";
// import { Link } from "react-router-dom";

// const Menu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Animation for fullscreen menu
//   const menuAnimation = useSpring({
//     transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
//     opacity: isOpen ? 1 : 0,
//     config: { tension: 130, friction: 30 },
//   });

//   // Trail animation for menu items
//   const items = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about" },
//     { name: "Services", link: "/services" },
//     { name: "Events", link: "/events" },
//     { name: "Gallery", link: "/gallery" },
//     { name: "Career", link: "/career" },
//     { name: "Contact", link: "/contact" },
//   ];

//   const trail = useTrail(items.length, {
//     opacity: isOpen ? 1 : 0,
//     from: { opacity: 0 },
//     config: { tension: 220, friction: 20 },
//     reset: true,
//   });

//   return (
//     <>
//       {/* Hamburger Menu Button (Always on top) */}
//       <div
//         className={`fixed z-50 rounded px-5 py-1 md:px-10 md:py-1 flex justify-between items-center w-full ${
//           isOpen ? "" : "backdrop-blur" // Add backdrop-blur effect when menu is closed
//         }`}
//       >
//         <div className="w-full flex items-start z-10">
//           {/* Conditionally hide the logo when the menu is open */}
//           <Link to={'/'}>
//             <img
//               src="/logo.png"
//               alt=""
//               className={`w-28 md:w-36 mt-3 transition-opacity duration-300 ${
//                 isOpen ? "opacity-0 cursor-default" : "opacity-100"
//               }`}
//               style={{
//                 filter: "drop-shadow(0 0px 6px rgba(255, 255, 255, 0.1))",
//               }}
//             />
//           </Link>
//         </div>

//         {/* Hamburger menu */}
//         <HamburgerSquash
//           toggled={isOpen}
//           toggle={setIsOpen}
//           size={25}
//           direction="left"
//           duration={0.3}
//           distance="lg"
//           rounded
//           label="Show menu"
//           color="#DBAF76"
//           easing="ease-in"
//         />
//       </div>

//       {/* Fullscreen Menu */}
//       <animated.div
//         style={menuAnimation}
//         className="fixed top-0 left-0 w-full h-screen z-40 bg-gray-900  backdrop-blur-md ease-out"
//       >
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-end h-full py-28 px-6 sm:py-20 sm:px-10 lg:px-28">
//           {/* Main Menu Items */}
//           <div className="flex flex-col gap-6 sm:gap-10 w-full text-center md:text-left">
//             {trail.map((style, index) => (
//               <animated.a
//                 key={items[index].name}
//                 href={items[index].link}
//                 style={style}
//                 className="font-parkin font-bold text-3xl sm:text-4xl text-[#DBAF76] lg:text-5xl"
//               >
//                 {/* Apply hover effects only on the text */}
//                 <span
//                   className="relative hover:text-white transition duration-300"
//                   onMouseEnter={(e) =>
//                     (e.target.style.textShadow = "0px 0px 10px rgba(219, 175, 118, 0.4)")
//                   }
//                   onMouseLeave={(e) => (e.target.style.textShadow = "none")}
//                 >
//                   {items[index].name}
//                 </span>
//               </animated.a>
//             ))}
//           </div>

//           {/* Social Links */}
//           <div className="flex flex-col items-center md:flex-row gap-3 md:gap-5 mt-10 md:mt-0">
//             <animated.a
//               href="/instagram"
//               style={trail[items.length - 2]}
//               className="font-parkin font-bold text-lg sm:text-xl text-[#DBAF76] lg:text-2xl hover:text-white transition duration-300"
//               onMouseEnter={(e) =>
//                 (e.target.style.textShadow = "0px 0px 10px #DBAF7666")
//               }
//               onMouseLeave={(e) => (e.target.style.textShadow = "none")}
//             >
//               Instagram
//             </animated.a>
//             <animated.a
//               href="/facebook"
//               style={trail[items.length - 1]}
//               className="font-parkin font-bold text-lg sm:text-xl text-[#DBAF76] lg:text-2xl hover:text-white transition duration-300"
//               onMouseEnter={(e) =>
//                 (e.target.style.textShadow = "0px 0px 10px #DBAF7666")
//               }
//               onMouseLeave={(e) => (e.target.style.textShadow = "none")}
//             >
//               Facebook
//             </animated.a>
//           </div>
//         </div>
//       </animated.div>
//     </>
//   );
// };

// export default Menu;






// import React, { useState, useEffect } from "react";
// import { Squash as HamburgerSquash } from "hamburger-react";
// import { useSpring, animated, useTrail } from "@react-spring/web";
// import { Link } from "react-router-dom";

// const Menu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showLogo, setShowLogo] = useState(false); // State to handle logo visibility

//   // Animation for fullscreen menu
//   const menuAnimation = useSpring({
//     transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
//     opacity: isOpen ? 1 : 0,
//     config: { tension: 130, friction: 30 },
//   });

//   // Trail animation for menu items
//   const items = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about" },
//     { name: "Services", link: "/services" },
//     { name: "Events", link: "/events" },
//     { name: "Gallery", link: "/gallery" },
//     { name: "Career", link: "/career" },
//     { name: "Contact", link: "/contact" },
//   ];

//   const trail = useTrail(items.length, {
//     opacity: isOpen ? 1 : 0,
//     from: { opacity: 0 },
//     config: { tension: 220, friction: 20 },
//     reset: true,
//   });

//   // Scroll effect to show/hide logo
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) { // Change the scroll position value as needed
//         setShowLogo(true);
//       } else {
//         setShowLogo(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Hamburger Menu Button (Always on top) */}
//       <div
//         className={`fixed z-50 rounded px-5 py-1 md:px-10 md:py-1 flex justify-between items-center w-full ${
//           isOpen ? "" : "backdrop-blur" // Add backdrop-blur effect when menu is closed
//         }`}
//       >
//         <div className="w-full flex items-start z-10">
//           {/* Conditionally hide the logo when the menu is open */}
//           <Link to={'/'}>
//             <img
//               src="/logo.png"
//               alt=""
//               className={`w-28 md:w-36 mt-3 transition-opacity duration-300 ${
//                 isOpen || !showLogo ? "opacity-0 cursor-default" : "opacity-100"
//               }`}
//               style={{
//                 filter: "drop-shadow(0 0px 6px rgba(255, 255, 255, 0.1))",
//               }}
//             />
//           </Link>
//         </div>

//         {/* Hamburger menu */}
//         <HamburgerSquash
//           toggled={isOpen}
//           toggle={setIsOpen}
//           size={25}
//           direction="left"
//           duration={0.3}
//           distance="lg"
//           rounded
//           label="Show menu"
//           color="#DBAF76"
//           easing="ease-in"
//         />
//       </div>

//       {/* Fullscreen Menu */}
//       <animated.div
//         style={menuAnimation}
//         className="fixed top-0 left-0 w-full h-screen z-40 bg-gray-900  backdrop-blur-md ease-out"
//       >
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-end h-full py-28 px-6 sm:py-20 sm:px-10 lg:px-28">
//           {/* Main Menu Items */}
//           <div className="flex flex-col gap-6 sm:gap-10 w-full text-center md:text-left">
//             {trail.map((style, index) => (
//               <animated.a
//                 key={items[index].name}
//                 href={items[index].link}
//                 style={style}
//                 className="font-parkin font-bold text-3xl sm:text-4xl text-[#DBAF76] lg:text-5xl"
//               >
//                 {/* Apply hover effects only on the text */}
//                 <span
//                   className="relative hover:text-white transition duration-300"
//                   onMouseEnter={(e) =>
//                     (e.target.style.textShadow = "0px 0px 10px rgba(219, 175, 118, 0.4)")
//                   }
//                   onMouseLeave={(e) => (e.target.style.textShadow = "none")}
//                 >
//                   {items[index].name}
//                 </span>
//               </animated.a>
//             ))}
//           </div>

//           {/* Social Links */}
//           <div className="flex flex-col items-center md:flex-row gap-3 md:gap-5 mt-10 md:mt-0">
//             <animated.a
//               href="/instagram"
//               style={trail[items.length - 2]}
//               className="font-parkin font-bold text-lg sm:text-xl text-[#DBAF76] lg:text-2xl hover:text-white transition duration-300"
//               onMouseEnter={(e) =>
//                 (e.target.style.textShadow = "0px 0px 10px #DBAF7666")
//               }
//               onMouseLeave={(e) => (e.target.style.textShadow = "none")}
//             >
//               Instagram
//             </animated.a>
//             <animated.a
//               href="/facebook"
//               style={trail[items.length - 1]}
//               className="font-parkin font-bold text-lg sm:text-xl text-[#DBAF76] lg:text-2xl hover:text-white transition duration-300"
//               onMouseEnter={(e) =>
//                 (e.target.style.textShadow = "0px 0px 10px #DBAF7666")
//               }
//               onMouseLeave={(e) => (e.target.style.textShadow = "none")}
//             >
//               Facebook
//             </animated.a>
//           </div>
//         </div>
//       </animated.div>
//     </>
//   );
// };

// export default Menu;





import React, { useState, useEffect } from "react";
import { Squash as HamburgerSquash } from "hamburger-react";
import { useSpring, animated, useTrail } from "@react-spring/web";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // Menu state
  const [showLogo, setShowLogo] = useState(false); // State to show/hide logo
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  // Animation for fullscreen menu
  const menuAnimation = useSpring({
    transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
    opacity: isOpen ? 1 : 0,
    config: { tension: 130, friction: 30 },
  });

  // Trail animation for menu items
  const items = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
    { name: "Career", link: "/career" },
    { name: "Contact", link: "/contact" },
  ];

  const trail = useTrail(items.length, {
    opacity: isOpen ? 1 : 0,
    from: { opacity: 0 },
    config: { tension: 220, friction: 20 },
    reset: true,
  });

  // Scroll effect to toggle logo and backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Show logo if scrolled more than 50px
      setShowLogo(scrollTop > 50);

      // Add backdrop-blur when user scrolls
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hamburger Menu Button */}
      <div
        className={`fixed z-50 px-5 py-1 md:px-10 md:py-1 flex justify-between items-center w-full transition duration-300 ${
          isScrolled ? "" : "" // Add blur only when scrolled
        }`}
      >
        <div className="w-full flex items-start z-10">
          {/* Conditionally hide the logo when menu is open */}
          <Link to="/">
            <img
              src="/logo.png"
              alt=""
              className={`w-28 md:w-36 mt-3 transition-opacity duration-300 ${
                isOpen || !showLogo ? "opacity-0 cursor-default" : "opacity-100"
              }`}
              style={{
                filter: "drop-shadow(0 0px 6px rgba(255, 255, 255, 0.1))",
              }}
            />
          </Link>
        </div>

        {/* Hamburger menu */}
        <HamburgerSquash
          toggled={isOpen}
          toggle={setIsOpen}
          size={25}
          direction="left"
          duration={0.3}
          distance="lg"
          rounded
          label="Show menu"
          color="#DBAF76"
          easing="ease-in"
        />
      </div>

      {/* Fullscreen Menu */}
      <animated.div
        style={menuAnimation}
        className="fixed top-0 left-0 w-full h-screen z-40 bg-gray-900 backdrop-blur-md ease-out"
      >
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end h-full py-28 px-6 sm:py-20 sm:px-10 lg:px-28">
          {/* Main Menu Items */}
          <div className="flex flex-col gap-6 sm:gap-10 w-full text-center md:text-left">
            {trail.map((style, index) => (
              <animated.a
                key={items[index].name}
                href={items[index].link}
                style={style}
                className="font-parkin font-bold text-3xl sm:text-4xl text-[#DBAF76] lg:text-5xl"
              >
                <span
                  className="relative hover:text-white transition duration-300"
                  onMouseEnter={(e) =>
                    (e.target.style.textShadow = "0px 0px 10px rgba(219, 175, 118, 0.4)")
                  }
                  onMouseLeave={(e) => (e.target.style.textShadow = "none")}
                >
                  {items[index].name}
                </span>
              </animated.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:flex-row gap-3 md:gap-5 mt-10 md:mt-0">
            <animated.a
              href="/instagram"
              style={trail[items.length - 2]}
              className="font-parkin font-bold text-lg sm:text-xl text-[#DBAF76] lg:text-2xl hover:text-white transition duration-300"
              onMouseEnter={(e) =>
                (e.target.style.textShadow = "0px 0px 10px #DBAF7666")
              }
              onMouseLeave={(e) => (e.target.style.textShadow = "none")}
            >
              Instagram
            </animated.a>
            <animated.a
              href="/facebook"
              style={trail[items.length - 1]}
              className="font-parkin font-bold text-lg sm:text-xl text-[#DBAF76] lg:text-2xl hover:text-white transition duration-300"
              onMouseEnter={(e) =>
                (e.target.style.textShadow = "0px 0px 10px #DBAF7666")
              }
              onMouseLeave={(e) => (e.target.style.textShadow = "none")}
            >
              Facebook
            </animated.a>
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default Menu;
