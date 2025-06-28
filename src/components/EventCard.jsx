import { Clock, MapPin } from 'lucide-react';

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

export default EventCard;
