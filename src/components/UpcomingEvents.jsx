import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';

const UpcomingEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = useMemo(
    () => [
      {
        id: 1,
        title: 'Annual Islamic Conference 2025',
        description:
          'A grand gathering of scholars, students, and professionals discussing modern challenges in Islamic education and society.',
        date: 'April 15, 2025',
        venue: 'Main Auditorium',
        image: '/images/events/annual.jpg',
      },
      {
        id: 2,
        title: 'Ramadan Spiritual Retreat',
        description:
          'A transformative spiritual journey with Islamic lectures, Q&A sessions, and community Iftar gatherings.',
        date: 'April 15, 2025',
        venue: 'Main Auditorium',
        image: '/images/events/ramadan.jpg',
      },
    ],
    []
  );

  const totalSlides = useMemo(
    () => Math.ceil(events.length / 2),
    [events.length]
  );

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleDotClick = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="relative mb-8 sm:mb-10 md:mb-12 min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.5rem] flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 text-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
            Upcoming <span className="text-[#266DB5] font-bold">Events</span>
          </h2>
          <div className="sm:ml-auto">
            <button
              className="flex h-10 sm:h-11 md:h-12 items-center"
              aria-label="View more events"
            >
              <div className="relative flex items-center h-full bg-white hover:bg-[#266DB5] text-[#266DB5] hover:text-white font-medium transition-colors px-3 sm:px-4 md:px-5 overflow-hidden group">
                <span className="relative z-10 text-sm sm:text-base">
                  View More
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out -skew-x-12"></div>
              </div>
              <div className="flex items-center h-full bg-[#266DB5] text-white justify-center px-2 sm:px-3">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative border-t-8 sm:border-t-10 md:border-t-12 border-[#266DB5] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-64 sm:h-80 md:h-96 lg:h-100"
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
                role="img"
                aria-label={`Background image for ${event.title}`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-3 sm:p-4 md:p-5 lg:p-6 h-full flex flex-col justify-end text-white">
                {/* Location and Date */}
                <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3 mb-2 sm:mb-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="font-extralight truncate">
                      {event.venue}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="font-extralight">{event.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 leading-tight line-clamp-2">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((dot, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === 0 ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
