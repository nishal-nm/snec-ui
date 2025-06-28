import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

const UpcomingEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const scrollLock = useRef(false);
  const lastDirection = useRef(null);

  const events = [
    {
      id: 1,
      title: 'Annual Islamic Conference 2025',
      description:
        'A grand gathering of scholars, students, and professionals discussing modern challenges in Islamic education and society.',
      date: 'April 15, 2025',
      venue: 'Main Auditorium',
      image: 'images/events/annual.jpg',
    },
    {
      id: 2,
      title: 'Ramadan Spiritual Retreat',
      description:
        'A transformative spiritual journey with Islamic lectures, Q&A sessions, and community Iftar gatherings.',
      date: 'March 20, 2025',
      venue: 'Community Center',
      image: 'images/events/ramadan.jpg',
    },
    {
      id: 3,
      title: 'Sanaa-iyya Convocation Conference',
      description:
        'A landmark convocation celebrating Sanaiya graduates and uniting students from S.E.C. institutions.',
      date: 'December 25, 2025',
      venue: 'Crescent SHE Campus',
      image:
        'https://www.snec.in/uploads/news_and_events/012025/a0a545be2b1622bd5541c9a82293e037.jpeg',
    },
  ];

  // --- Logic Section ---
  const updateIndex = (newIndex) => {
    setCurrentIndex(newIndex);
    resetAutoScroll();
  };

  const goToNext = () => {
    updateIndex((prev) => (prev + 1) % events.length);
  };

  const goToPrevious = () => {
    updateIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const resetAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 5500);
  };

  useEffect(() => {
    resetAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleWheel = useCallback((e) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
    e.preventDefault();

    if (scrollLock.current) return;

    const direction = e.deltaX > 0 ? 'right' : 'left';

    if (direction !== lastDirection.current) {
      lastDirection.current = direction;

      if (direction === 'right') goToNext();
      else goToPrevious();

      scrollLock.current = true;
      setTimeout(() => {
        scrollLock.current = false;
        lastDirection.current = null;
      }, 800);
    }
  }, []);

  const handleDotClick = (index) => {
    updateIndex(index);
  };

  const handleViewMore = () => {
    console.log('View More handling....');
  };

  const EventCard = ({ event }) => (
    <div className="flex-shrink-0 w-full relative border-t-8 sm:border-t-10 md:border-t-12 border-[#266DB5] overflow-hidden shadow-lg hover:shadow-xl hover:scale-102 h-64 sm:h-80 md:h-96 transition-transform duration-300">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
        style={{ backgroundImage: `url(${event.image})` }}
        role="img"
        aria-label={`Background image for ${event.title}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
      <div className="relative z-10 p-3 sm:p-4 md:p-5 lg:p-6 h-full flex flex-col justify-end text-white">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-3 text-xs sm:text-sm">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="font-extralight truncate">{event.venue}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="font-extralight">{event.date}</span>
          </div>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 leading-tight line-clamp-2">
          {event.title}
        </h3>
        <p className="text-gray-200 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
          {event.description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header (original retained) */}
        <div className="relative mb-8 sm:mb-10 md:mb-12 min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.5rem] flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 text-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
            Upcoming <span className="text-[#266DB5] font-bold">Events</span>
          </h2>
          <div className="sm:ml-auto">
            <button
              className="flex h-10 sm:h-11 md:h-12 items-center group"
              aria-label="View more events"
              onClick={handleViewMore}
            >
              <div className="relative flex items-center h-full bg-white hover:bg-[#266DB5] text-[#266DB5] hover:text-white font-medium transition-colors duration-300 ease-out px-3 sm:px-4 md:px-5 overflow-hidden">
                <span className="relative z-10 text-sm sm:text-base">
                  View More
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent w-full h-full transform -translate-x-full group-hover:translate-x-full group-hover:duration-700 transition-transform duration-500 ease-in-out -skew-x-12"></div>
              </div>
              <div className="flex items-center h-full bg-[#266DB5] text-white justify-center px-2 sm:px-3 transition-colors duration-300 ease-out">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </button>
          </div>
        </div>

        {/* Carousel - Mobile */}
        <div
          className="mb-6 sm:mb-8 block lg:hidden overflow-hidden select-none"
          onWheel={handleWheel}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {events.map((event) => (
              <div key={event.id} className="w-full flex-shrink-0 px-2">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel - Desktop */}
        <div
          className="hidden lg:block overflow-hidden select-none"
          onWheel={handleWheel}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {[...events, ...events.slice(0, 2)].map((event, index) => (
              <div
                key={`${event.id}-${index}`}
                className="w-1/2 flex-shrink-0 px-3"
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-5">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-[#266DB5] ring-2 ring-blue-300 scale-110'
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-105'
              }`}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
