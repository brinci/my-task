
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import FeaturedProjectCard from "./components/FeaturedProjectCard";
// import Process from "./components/Process";
// import Proffessional from "./components/Proffesional";
// import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
// import SocialSidebar from "./components/SocialSlider";
// import Intro from "./components/Intro";
// import { useState } from "react";

// function App() {
//   const [showIntro, setShowIntro] = useState(true);
//   return (

//     <main className="min-h-screen">
//       {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
//         <div
//         className={`transition-opacity duration-700 ${
//           showIntro ? "opacity-0" : "opacity-100"
//         }`}
//       >
//       <SocialSidebar/>
//       <Navbar/>
//       <Hero />
//       <About/>
//       <Skills/>
//      <Process/>
//       <FeaturedProjectCard/>
//       <Proffessional/>
//       <Contact/>
//       </div>
//     </main>
//   );
// }

// export default App;



import React from "react";
import PyramidInfographic from "./Components/PyramidInfographic";

function App() {
  return (
    <main>
      <PyramidInfographic />
    </main>
  );
}

export default App;

