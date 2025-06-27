import { useCallback } from 'react';

const ConnectSection = () => {
  const handleConnect = useCallback(() => {
    // Add your connection logic here
    console.log('Connecting with SNEC...');
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        <div
          className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden relative"
          style={{
            backgroundColor: '#3298FF38',
            backgroundImage: "url('images/connect_bg.png')",
            backgroundSize: 'contain',
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8 lg:gap-12 my-4 sm:my-6 md:my-8">
              {/* Content Section */}
              <div className="w-full lg:w-2/3 space-y-3 sm:space-y-4 md:space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#266DB5] leading-tight">
                  Let's stay in touch!
                </h3>
                <div className="text-[#266DB5A1] text-lg sm:text-xl md:text-2xl lg:text-2xl leading-relaxed">
                  <p className="break-words">
                    Stay informed about the latest
                    <br className="hidden sm:block" /> programs, events, and
                    initiatives at SNEC
                  </p>
                </div>
              </div>

              {/* Button Section */}
              <div className="w-full lg:w-1/3 flex justify-start lg:justify-end">
                <button
                  onClick={handleConnect}
                  className="w-full sm:w-auto bg-[#266DB5] text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl lg:text-2xl rounded-xl sm:rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                  aria-label="Connect with SNEC organization"
                >
                  <span>Connect With SNEC</span>
                </button>
              </div>
            </div>
          </div>

          {/* Decorative overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
