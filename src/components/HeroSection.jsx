import Header from './Header';

const HeroSection = () => {
  return (
    <section
      className="relative text-white min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      {/* Blackish tint overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Top gradient overlay */}
      <div
        className="absolute top-0 left-0 w-full h-[25%] sm:h-[30%] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(38, 109, 181, 0.9) 0%, rgba(38, 109, 181, 0.783173) 43.75%, rgba(38, 109, 181, 0) 100%)',
        }}
      ></div>

      {/* Header positioned absolutely at top */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {/* Main content - responsive positioning while maintaining visual center */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-20 sm:mt-16 md:mt-12 lg:mt-0">
        {/* Logo - responsive sizing while maintaining proportions */}
        <div className="mb-8 sm:mb-9 md:mb-10">
          <img
            src="/images/logo.png"
            alt="SNEC Logo"
            className="mx-auto w-10 sm:w-11 md:w-13 lg:w-16 object-contain"
          />
        </div>

        {/* Main heading - responsive text with proper mobile handling */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-9 md:mb-10 font-medium max-w-3xl mx-auto leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
          style={{ fontFamily: `'Playfair Display', serif` }}
        >
          Welcome to
          <br />
          <span className="font-semibold" style={{ color: '#3E89D5' }}>
            SNEC National Education
            <span className="sm:inline block">Council</span>
          </span>
        </h2>

        {/* Description - responsive text sizing */}
        <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed sm:leading-snug px-2 sm:px-0">
          where knowledge meets faith. We are committed to academic excellence,
          character building, and Islamic values to shape future leaders.
        </p>
      </div>

      {/* Bottom spacing to prevent content from touching bottom on mobile */}
      <div className="absolute bottom-0 left-0 w-full h-8 sm:h-12 md:h-16 lg:h-20 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
