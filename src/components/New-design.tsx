import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const RomanticWebsite = () => {
  const [showMessage, setShowMessage] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const heartVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const reasons = [
    {
      title: "Your Smile",
      description: "It lights up my entire world and makes everything better",
      icon: "😊",
      color: "from-pink-400 to-rose-500",
    },
    {
      title: "Your Kindness",
      description: "The way you care for others inspires me every single day",
      icon: "💝",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Your Laughter",
      description: "It's my favorite sound and brings joy to my heart",
      icon: "🎵",
      color: "from-rose-400 to-red-500",
    },
    {
      title: "Your Strength",
      description: "You face challenges with grace and courage",
      icon: "💪",
      color: "from-orange-400 to-pink-500",
    },
    {
      title: "Your Dreams",
      description: "Your ambitions and passions make you absolutely amazing",
      icon: "✨",
      color: "from-violet-400 to-purple-500",
    },
    {
      title: "Simply You",
      description: "Every little thing about you makes my life beautiful",
      icon: "💖",
      color: "from-fuchsia-400 to-pink-500",
    },
  ];

  const memories = [
    { text: "Every moment with you", emoji: "🌟" },
    { text: "Every laugh we share", emoji: "😄" },
    { text: "Every adventure together", emoji: "🗺️" },
    { text: "Every sunset we watch", emoji: "🌅" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -100, null],
              x: [null, Math.random() * 50 - 25, null],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {['❤️', '💕', '💖', '💗', '🌸', '🌺', '🦋', '✨'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center z-10">
          <motion.div
            variants={heartVariants}
            animate="pulse"
            className="text-9xl mb-8"
          >
            💝
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent mb-6"
          >
            For My Love
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl md:text-4xl text-gray-700 font-light mb-8"
          >
            You Make Everything Beautiful
          </motion.p>

          {showMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl"
            >
              <p className="text-xl text-gray-600 italic">
                "In a world full of temporary things, you are a perpetual feeling"
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-2xl transition-shadow"
            >
              Discover Why I Love You ↓
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Reasons Section */}
      <section className="py-20 px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          >
            Reasons I Adore You
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${reason.color} p-1 rounded-2xl h-full`}>
                  <div className="bg-white rounded-2xl p-8 h-full backdrop-blur-sm">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="text-6xl mb-4"
                    >
                      {reason.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Memories Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-100 to-purple-100 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-800"
          >
            Treasured Moments
          </motion.h2>

          <div className="space-y-8">
            {memories.map((memory, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 20 }}
                className="flex items-center gap-6 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
              >
                <motion.span
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="text-5xl"
                >
                  {memory.emoji}
                </motion.span>
                <p className="text-2xl text-gray-700 font-medium">{memory.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Interactive Love Counter */}
      <section className="py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
              My Love For You
            </h2>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent"
            >
              ∞
            </motion.div>
            <p className="text-2xl text-gray-600 mt-8">
              Infinite and Growing Every Day
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Our Beautiful Journey
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="aspect-square bg-gradient-to-br from-pink-300 to-purple-300 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden"
              >
                <div className="text-6xl">
                  {['💑', '🌹', '💐', '🎁', '🌟', '💫', '🦋', '🌈'][index]}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final Message */}
      <section className="py-32 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="text-8xl mb-8"
          >
            💕
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent"
          >
            I Love You
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-700 mb-12 font-light"
          >
            Today, Tomorrow, and Always
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl"
          >
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Thank you for being the most amazing person in my life. 
              Your love, your smile, and your presence make every day magical. 
              I'm grateful for every moment we share and excited for all the moments to come.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block text-7xl"
            >
              ❤️
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 bg-gradient-to-r from-pink-100 to-purple-100">
        <p className="text-lg">Made with 💖 for the most special person in the world</p>
      </footer>
    </div>
  );
};

export default RomanticWebsite;