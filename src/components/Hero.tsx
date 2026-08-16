"use client";
import { useRef, useState, useEffect } from "react";
const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Always start muted
    video.muted = true;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
   // Try autoplay (muted)
    video.play().catch(() => {
      setIsPlaying(false);
    });

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlay = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    try {
      // First click → turn sound ON
      if (isMuted) {
        video.muted = false;
        setIsMuted(false);
        if (video.paused) {
          await video.play();
        }
        return;
      }
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error("Video play error:", error);
    }
  };
  const titles = [
    "Full Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
  ];

  function AnimatedTitle() {
    const [text, setText] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
      const currentTitle = titles[titleIndex];
      const typingSpeed = isDeleting ? 40 : 80;
      const pauseTime = 1800;
      const timeout = setTimeout(() => {
        if (!isDeleting && charIndex < currentTitle.length) {
          setText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else if (isDeleting && charIndex > 0) {
          setText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else if (!isDeleting && charIndex === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, titleIndex]);

    return (
      <h2
        className="mb-6 text-2xl font-black leading-none tracking-tight md:text-3xl lg:text-[38px] whitespace-nowrap"
        style={{
          color: "#22c55e",
          WebkitTextStroke: "1.2px #3d2222",
          textShadow: "0 0 12px rgba(34, 197, 94, 0.45)",
        }}
      >
        {text}
        {/* Green blinking cursor */}
        <span className="ml-1 inline-block h-[1.05em] w-[3px] animate-pulse bg-green-500 align-middle" />
      </h2>
    );
  }

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
      // onClick={handleUnmute}
    >
      <video
        ref={videoRef}
        src="/avatar-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        // className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        className="absolute inset-0 h-full w-full object-cover object-[center_25%] scale-125 md:scale-110 lg:scale-105"
        // object-top      → show more of the top
        // object-[center_20%]  → push video slightly down
        // object-[center_30%]
      />
      <div className="absolute inset-0 bg-black/20"></div>
      {/* ========== MAIN CONTENT ========== */}
      <div className="relative mx-auto flex h-full max-w-[1400px] items-center px-6 md:px-10">
        {/* LEFT – Text */}
        <div className="relative z-20 w-full max-w-[520px] pt-16 md:pt-0">
          <h1 className="mb-3 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[52px]">
            Hi, I&apos;m Brinci,
          </h1>

          <AnimatedTitle />
          <p className="mb-8 max-w-[480px] text-base leading-relaxed text-white/90 md:text-lg">
            I build fast, scalable applications using MERN Stack.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="flex gap-2 rounded-full border border-white/70 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#00703D]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Contact Me
            </a>

            <a
              href="/brinci_software_dev.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#00703D]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
        {/* Play / Pause Button */}
        <button
          onClick={togglePlay}
          className="absolute bottom-28 right-10 z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-[#00703D] text-white shadow-xl ring-2 ring-white/20 transition-transform hover:scale-110 active:scale-95 lg:flex"
          aria-label={isMuted || !isPlaying ? "Play" : "Pause"}
        >
          {isMuted || !isPlaying ? (
            // Play icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            // Pause icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          )}
        </button>
        <span className="absolute bottom-16 right-8 z-30 hidden text-xs font-medium uppercase tracking-wider text-white/80 lg:block">
          {isMuted ? "PLAY REEL" : isPlaying ? "PAUSE" : "PLAY REEL"}
        </span>
      </div>
    </section>
  );
};

export default Hero;
