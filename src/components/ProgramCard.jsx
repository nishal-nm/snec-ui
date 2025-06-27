import { ChevronRight } from 'lucide-react';
import { memo } from 'react';

const ProgramCard = memo(({ title, subtitle, description, imagePath }) => {
  return (
    <div className="relative mx-3 flex-shrink-0 max-w-[300px]">
      {/* Shadow div behind */}
      <div className="absolute right-2 top-2 w-full h-full bg-[#004B97] z-0 rounded-tl-3xl rounded-br-3xl"></div>

      {/* Main card */}
      <div className="relative z-10 border-2 border-[#004B97] bg-white shadow-lg flex flex-col w-full h-full rounded-tl-3xl rounded-br-3xl overflow-hidden">
        {/* Image section */}
        <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden">
          <img
            src={imagePath}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Content section with background logo */}
        <div
          className="p-3 flex flex-col flex-grow relative"
          style={{
            backgroundImage: "url('images/watermark.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
            backgroundSize: '3.5rem',
            opacity: 1,
          }}
        >
          <h4 className="text-lg font-medium text-gray-900 mb-1">{title}</h4>
          <h4 className="text-lg font-medium text-gray-900 mb-1">{subtitle}</h4>
          <p className="text-gray-500 text-xs text-justify font-medium leading-relaxed line-clamp-4">
            {description}
          </p>

          {/* Button aligned to bottom */}
          <div className="mt-auto pt-4">
            <button className="inline-flex items-center text-blue-600 font-medium text-lg hover:text-blue-700 transition-colors group">
              Know More
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

ProgramCard.displayName = 'ProgramCard';

export default ProgramCard;
