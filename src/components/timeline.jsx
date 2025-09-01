import React, { useState, useEffect, useRef } from "react";
import TamilChecker from "./TamilChecker";
const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);
  const events = [
    {
      year: {
        en: "2009 – The Beginning",
        tn: "2009 – தொடக்கம்"
      },
      text: {
        en: "Gayathripriya Durai started a small restaurant in Chennai, serving traditional recipes passed down from previous generations to customers with care",
        tn: "காயத்ரிபிரியா துரை சென்னைவில் ஒரு சிறிய உணவகம் தொடங்கி, முன்னோர் தலைமுறையால் பதிந்த பாரம்பரிய உணவுகளை கவனமாக வழங்கினார்"
      },
    },
    {
      year: {
        en: "2013 – A Pause",
        tn: "2013 – ஓய்வு"
      },
      text: {
        en: "She took a short break, but her passion for cooking remained strong and unwavering",
        tn: "அவள் சிறிது ஓய்வு எடுத்தார், ஆனால் சமையலுக்கான ஆர்வம் உறுதியுடன் தொடர்ந்தது"
      },
    },
    {
      year: {
        en: "2021 – A New Beginning",
        tn: "2021 – புதிய தொடக்கம்"
      },
      text: {
        en: "Restarting from home, Yathraa's Cooking Cave began once again, accepting orders through Instagram and private platforms.",
        tn: "வீட்டிலிருந்து மீண்டும் தொடங்கி, யத்ராவின் குக்கிங் கேவ் மீண்டும் ஆரம்பித்து, இன்ஸ்டாகிராம் மற்றும் தனிப்பட்ட தளங்களின் மூலம் ஆர்டர்களை ஏற்றுக்கொண்டது"
      },
    },
    {
      year: {
        en: "2023 – Expanding Our Service",
        tn: "2023 – சேவையை விரிவாக்குதல்"
      },
      text: {
        en: "Started offering food services in the Anna Nagar area, bringing delicious homemade meals to more people",
        tn: "அண்ணா நகர் பகுதியில் உணவு சேவைகளை தொடங்கி, சுவையான வீட்டுப் பழக்கம் உணவுகளை மேலும் பலருக்கு கொண்டு வந்தோம்"
      },
    },
    {
      year: {
        en: "2025 – A Journey of Fulfilling Dreams",
        tn: "2025 – கனவுகளை நிறைவேற்றும் பயணம்"
      },
      text: {
        en: "Introducing Yatra's Cooking Cave | The Home Chef, with the vision of bringing traditional, ancestral recipes into every home through this heartfelt culinary journey",
        tn: "யத்ரா குக்கிங் கேவ் | த ஹோம் ஷெப் என்பதை அறிமுகப்படுத்தி, பாரம்பரிய உணவுப் பழக்கங்களை ஒவ்வொரு வீட்டிற்கும் கொண்டு வருவதை நோக்கமாக கொண்ட இதயபூர்வமான சமையல் பயணத்தை தொடங்குகிறோம்"
      },
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
      // Check visibility of timeline items
      const newVisibleItems = new Set();
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          // Item is visible if it's within 80% of viewport
          if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
            newVisibleItems.add(index);
          }
        }
      });
      setVisibleItems(newVisibleItems);
    };
    // Initial check
    handleScroll();
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const timelineTitle = {
    en: "A Brief History",
    tn: "சுருக்கமான வரலாறு"
  };
  const timelineSubtitle = {
    en: "The inspiring journey of passion, tradition, and culinary excellence",
    tn: "ஆர்வம், பாரம்பரியம் மற்றும் சமையல் சிறப்புமிக்க பிரேரணையான பயணம்"
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20  mt-5 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
          <h2 className="text-3xl   text-red-400">
            {TamilChecker() ? timelineTitle.tn : timelineTitle.en}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-2">
            {TamilChecker() ? timelineSubtitle.tn : timelineSubtitle.en}
          </p>
        </div>
        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical line - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-orange-400 to-red-600 rounded-full shadow-lg overflow-hidden">
            {/* Animated progress line */}
            <div
              className="w-full bg-gradient-to-b from-orange-300 to-yellow-400 transition-all duration-300 ease-out"
              style={{
                height: `${scrollProgress * 100}%`,
                boxShadow: '0 0 10px rgba(251, 191, 36, 0.8)'
              }}
            ></div>
          </div>
          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-6 sm:left-8 top-0 h-full w-0.5  sm:w-1 bg-gradient-to-b from-red-500 via-orange-400 to-red-600 rounded-full overflow-hidden">
            {/* Animated progress line for mobile */}
            <div
              className="w-full bg-gradient-to-b from-orange-300 to-yellow-400 transition-all duration-300 ease-out"
              style={{
                height: `${scrollProgress * 100}%`,
                boxShadow: '0 0 8px rgba(251, 191, 36, 0.8)'
              }}
            ></div>
          </div>
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleItems.has(index);
            const animationDelay = index * 0.2;
            return (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
                className={`relative mb-8 sm:mb-12 lg:mb-16 group transition-all duration-700 ${isLeft ? "md:pr-6 lg:pr-8" : "md:pl-6 lg:pl-8"
                  } ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                  }`}
                style={{
                  transitionDelay: isVisible ? `${animationDelay}s` : '0s'
                }}
              >
                {/* Mobile Layout */}
                <div className="md:hidden pl-12 sm:pl-16 pr-2 sm:pr-4 mb-5">
                  {/* Mobile dot */}
                  <div className={`absolute left-4 sm:left-6 top-3 sm:top-4 w-4 sm:w-6 h-4 sm:z-40 sm:h-6 bg-gradient-to-r   border-2 sm:border-4 border-white rounded-full shadow-lg z-10 transition-all duration-500 ${isVisible
                    ? " "
                    : " "
                    }`}>
                    <div className={`w-full h-full bg-gradient-to-r   rounded-full transition-opacity duration-500 ${isVisible ? "opacity-50 animate-pulse" : "opacity-0"
                      }`}></div>
                  </div>
                  {/* Mobile card */}
                  <div className={`backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/20 transition-all duration-700 hover:shadow-2xl  ${isVisible
                    ? isLeft
                      ? "translate-x-0"
                      : "translate-x-0"
                    : isLeft
                      ? "-translate-x-4 sm:-translate-x-8"
                      : "translate-x-4 sm:translate-x-8"
                    }`}>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 bg-gradient-to-r   bg-clip-text text-transparent leading-tight">
                      {TamilChecker() ? event.year.tn : event.year.en}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {TamilChecker() ? event.text.tn : event.text.en}
                    </p>
                  </div>
                </div>
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center">
                  {/* Content positioning */}
                  <div className={`w-full flex ${isLeft ? "justify-end pr-4 lg:pr-8" : "justify-start pl-4 lg:pl-8"}`}>
                    {/* Card */}
                    <div className={`w-full max-w-sm lg:max-w-lg xl:max-w-xl relative transition-all duration-700 ${isVisible
                      ? "  opacity-100" + (isLeft ? "  " : " ")
                      : "  opacity-0" + (isLeft ? "  " : "  ")
                      }  `}>
                      {/* Connector line to center */}
                      <div className={`absolute top-6 lg:top-8 w-4 lg:w-8 h-0.5 bg-gradient-to-r  duration-700 ${isLeft ? "from-red-500 to-transparent -right-4 lg:-right-8" : "from-transparent to-red-500 -left-4 lg:-left-8"
                        } ${isVisible ? "opacity-100  " : "opacity-0  "}`}></div>
                      {/* Main card */}
                      <div className={`relative z-n1   backdrop-blur-sm    shadow-xl p-6   ${isLeft ? "text-right" : "text-left"
                        }`}>
                        {/* Decorative corner accent */}
                        <div className={`absolute top-0 w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl lg:rounded-2xl ${isLeft ? "right-0 rounded-tr-xl lg:rounded-tr-2xl" : "left-0 rounded-tl-xl lg:rounded-tl-2xl"
                          }`}></div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4 bg-gradient-to-r bg-clip-text text-transparent relative z-10 leading-tight">
                          {TamilChecker() ? event.year.tn : event.year.en}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-base lg:text-lg relative z-10">
                          {TamilChecker() ? event.text.tn : event.text.en}
                        </p>
                        {/* Floating decoration */}
                        <div className={`absolute -top-1 lg:-top-2 w-3 lg:w-4 h-3 lg:h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-60 ${isLeft ? "-right-1 lg:-right-2" : "-left-1 lg:-left-2"
                          }`}></div>
                      </div>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 top-4 lg:top-6 w-6 lg:w-8 h-6 lg:h-8 bg-gradient-to-r from-red-600 to-orange-500 border-2 lg:border-4 border-white rounded-full shadow-lg z-20 transition-all duration-500 ${isVisible
                    ? " "
                    : " "
                    }  `}>
                    <div className={`w-full h-full bg-gradient-to-r from-orange-300 to-red-400 rounded-full transition-opacity duration-500 ${isVisible ? "opacity-50 animate-pulse" : "opacity-0"
                      }`}></div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Timeline end decoration */}
          <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16 ">
            <div className="relative opacity-0 animate-[fadeInUp_1s_ease-out_2s_forwards]">
              <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-full shadow-lg border-2 sm:border-3 lg:border-4 border-white flex items-center justify-center">
                <div className="w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>
        </div>
        {/* Footer message */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 mx-2 sm:mx-4 lg:mx-8 p-6 sm:p-8 lg:p-10 bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/20  animate-[fadeInUp_1s_ease-out_2.5s_forwards]">
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl italic leading-relaxed">
            "Every recipe tells a story, every dish carries tradition."
          </p>
          <p className="text-red-600 font-semibold mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg">- Yatra's Cooking Cave</p>
        </div>
      </div>
      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
export default Timeline;