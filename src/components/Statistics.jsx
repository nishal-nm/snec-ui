import { useEffect, useRef } from 'react';

const Statistics = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateBackgroundAttachment = () => {
      if (window.innerWidth >= 1024) {
        section.style.backgroundAttachment = 'fixed';
      } else {
        section.style.backgroundAttachment = 'scroll';
      }
    };

    updateBackgroundAttachment();
    window.addEventListener('resize', updateBackgroundAttachment);

    return () =>
      window.removeEventListener('resize', updateBackgroundAttachment);
  }, []);

  const stats = [
    { number: '1000+', label: 'Students' },
    { number: '10+', label: 'Affiliated Colleges' },
    { number: '15+', label: 'Programs Offered' },
    { number: '95%', label: 'Success Rate' },
  ];

  return (
    <section
      ref={sectionRef}
      className="flex items-center my-12 sm:my-16 md:my-20 lg:my-24 min-h-56 sm:min-h-64 md:min-h-56 py-8 sm:py-12 lg:py-0"
      style={{
        backgroundImage: `linear-gradient(rgba(38, 109, 181, 0.8), rgba(38, 109, 181, 0.8)), url('images/crowd_bg.jpg')`,
        backgroundSize: '150%',
        backgroundPosition: '30%',
        backgroundPositionY: '50%',
      }}
      data-bg-fixed="true"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 bg-[url('images/patterns.png')] bg-repeat bg-center"
                aria-hidden="true"
              />

              {/* Content */}
              <h4 className="relative text-2xl sm:text-2xl md:text-3xl font-bold text-[#266DB5] z-10">
                {stat.number}
              </h4>
              <p className="relative text-gray-400 text-sm sm:text-base z-10">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
