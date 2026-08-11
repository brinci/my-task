import { useEffect, useState } from "react";

const Intro = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  useEffect(() => {
  const enterTimer = setTimeout(() => setPhase("hold"), 150);
  const holdTimer  = setTimeout(() => setPhase("exit"), 1400); 
  const exitTimer  = setTimeout(() => {
    onComplete();
  }, 1900);  

  return () => {
    clearTimeout(enterTimer);
    clearTimeout(holdTimer);
    clearTimeout(exitTimer);
  };
}, [onComplete]);
  return (
   <div
  className={`fixed inset-0 z-[9999] flex items-center justify-center bg-green-500 transition-opacity duration-300 ease-in-out ${
    phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
  }`}
>
  <h1
    className={`text-5xl md:text-7xl font-bold tracking-tight transition-all duration-700 ease-out text-[#e31c13] ${
      phase === "enter"
        ? "opacity-0 scale-95"
        : "opacity-100 scale-100"
    }`}
  >
    BRINCI
    <span>.</span>
  </h1>
</div>
  );
};

export default Intro;