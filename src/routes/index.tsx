import RomanticWebsite from '@/components/New-design'
import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [revealed, setRevealed] = useState(false)
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([])
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    // Generate floating hearts
    const heartArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setHearts(heartArray)
  }, [])

  const handleClick = () => {
    setClickCount(prev => prev + 1)
    if (clickCount >= 2) {
      setRevealed(true)
    }
  }

  return (
    // <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-950 via-purple-950 to-indigo-950">
    //   {/* Animated background gradient overlay */}
    //   <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-transparent animate-pulse" 
    //        style={{ animationDuration: '4s' }} />
      
    //   {/* Floating hearts */}
    //   {hearts.map(heart => (
    //     <div
    //       key={heart.id}
    //       className="absolute text-pink-400/30 animate-float"
    //       style={{
    //         left: `${heart.left}%`,
    //         bottom: '-50px',
    //         animationDelay: `${heart.delay}s`,
    //         fontSize: `${Math.random() * 20 + 10}px`,
    //       }}
    //     >
    //       ♥
    //     </div>
    //   ))}

    //   {/* Stars */}
    //   <div className="absolute inset-0 overflow-hidden">
    //     {Array.from({ length: 50 }).map((_, i) => (
    //       <div
    //         key={i}
    //         className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
    //         style={{
    //           top: `${Math.random() * 100}%`,
    //           left: `${Math.random() * 100}%`,
    //           animationDelay: `${Math.random() * 3}s`,
    //           opacity: Math.random() * 0.7 + 0.3,
    //         }}
    //       />
    //     ))}
    //   </div>

    //   {/* Main content */}
    //   <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
    //     <div className="text-center max-w-3xl">
    //       {!revealed ? (
    //         <div className="animate-fadeIn">
    //           <h1 
    //             className="text-7xl md:text-9xl font-bold mb-8 cursor-pointer select-none transition-all duration-500 hover:scale-110"
    //             onClick={handleClick}
    //             style={{
    //               fontFamily: "'Playfair Display', serif",
    //               background: 'linear-gradient(135deg, #ffdee9 0%, #f093fb 50%, #c084fc 100%)',
    //               WebkitBackgroundClip: 'text',
    //               WebkitTextFillColor: 'transparent',
    //               backgroundClip: 'text',
    //               textShadow: '0 0 80px rgba(244, 114, 182, 0.5)',
    //             }}
    //           >
    //             ♥
    //           </h1>
    //           <p className="text-pink-200 text-xl md:text-2xl tracking-wider animate-pulse"
    //              style={{ fontFamily: "'Cormorant Garamond', serif", animationDuration: '2s' }}>
    //             {clickCount === 0 && "Click the heart..."}
    //             {clickCount === 1 && "One more time..."}
    //             {clickCount === 2 && "Almost there..."}
    //           </p>
    //         </div>
    //       ) : (
    //         <div className="animate-revealText space-y-8">
    //           <div className="relative inline-block">
    //             <h2 
    //               className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
    //               style={{
    //                 fontFamily: "'Playfair Display', serif",
    //                 background: 'linear-gradient(135deg, #fff1f2 0%, #fce7f3 50%, #fbcfe8 100%)',
    //                 WebkitBackgroundClip: 'text',
    //                 WebkitTextFillColor: 'transparent',
    //                 backgroundClip: 'text',
    //                 filter: 'drop-shadow(0 0 30px rgba(244, 114, 182, 0.6))',
    //               }}
    //             >
    //               For You BRINCI
    //             </h2>
    //             <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl -z-10 animate-pulse" />
    //           </div>
              
    //           <div className="space-y-6 text-pink-100">
    //             <p 
    //               className="text-2xl md:text-3xl leading-relaxed"
    //               style={{ 
    //                 fontFamily: "'Cormorant Garamond', serif",
    //                 animation: 'fadeInUp 1s ease-out 0.3s both'
    //               }}
    //             >
    //               In a world of billions,
    //             </p>
    //             <p 
    //               className="text-2xl md:text-3xl leading-relaxed"
    //               style={{ 
    //                 fontFamily: "'Cormorant Garamond', serif",
    //                 animation: 'fadeInUp 1s ease-out 0.6s both'
    //               }}
    //             >
    //               my heart chose you.
    //             </p>
    //             <p 
    //               className="text-2xl md:text-3xl leading-relaxed"
    //               style={{ 
    //                 fontFamily: "'Cormorant Garamond', serif",
    //                 animation: 'fadeInUp 1s ease-out 0.9s both'
    //               }}
    //             >
    //               Every moment with you
    //             </p>
    //             <p 
    //               className="text-2xl md:text-3xl leading-relaxed"
    //               style={{ 
    //                 fontFamily: "'Cormorant Garamond', serif",
    //                 animation: 'fadeInUp 1s ease-out 1.2s both'
    //               }}
    //             >
    //               is a treasure I hold forever.
    //             </p>
    //           </div>

    //           <div 
    //             className="mt-12 inline-block px-8 py-4 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 backdrop-blur-sm border border-pink-300/30"
    //             style={{ animation: 'fadeInUp 1s ease-out 1.5s both' }}
    //           >
    //             <p className="text-xl text-pink-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
    //               You make my world beautiful ✨
    //             </p>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>

    //   <style>{`
    //     @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Cormorant+Garamond:wght@300;400;500&display=swap');
        
    //     @keyframes float {
    //       0% {
    //         transform: translateY(0) rotate(0deg);
    //         opacity: 0;
    //       }
    //       10% {
    //         opacity: 1;
    //       }
    //       90% {
    //         opacity: 1;
    //       }
    //       100% {
    //         transform: translateY(-100vh) rotate(360deg);
    //         opacity: 0;
    //       }
    //     }
        
    //     @keyframes twinkle {
    //       0%, 100% {
    //         opacity: 0.3;
    //         transform: scale(1);
    //       }
    //       50% {
    //         opacity: 1;
    //         transform: scale(1.5);
    //       }
    //     }
        
    //     @keyframes fadeIn {
    //       from {
    //         opacity: 0;
    //         transform: scale(0.8);
    //       }
    //       to {
    //         opacity: 1;
    //         transform: scale(1);
    //       }
    //     }
        
    //     @keyframes revealText {
    //       from {
    //         opacity: 0;
    //         transform: translateY(30px);
    //       }
    //       to {
    //         opacity: 1;
    //         transform: translateY(0);
    //       }
    //     }
        
    //     @keyframes fadeInUp {
    //       from {
    //         opacity: 0;
    //         transform: translateY(20px);
    //       }
    //       to {
    //         opacity: 1;
    //         transform: translateY(0);
    //       }
    //     }
        
    //     .animate-float {
    //       animation: float 15s infinite linear;
    //     }
        
    //     .animate-twinkle {
    //       animation: twinkle 3s infinite ease-in-out;
    //     }
        
    //     .animate-fadeIn {
    //       animation: fadeIn 1s ease-out;
    //     }
        
    //     .animate-revealText {
    //       animation: revealText 0.8s ease-out;
    //     }
    //   `}</style>
    // </div>
    <RomanticWebsite />
  )
}