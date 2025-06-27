import { memo } from 'react';

// VisionCard.jsx - Optimized without changing internal structure
const VisionCard = memo(({ icon, title, description }) => {
  const gradientStyle = {
    background:
      'linear-gradient(142.05deg, #DAEDFF 4.11%, rgba(218, 237, 255, 0.25) 50.55%, #DAEDFF 97%)',
  };

  return (
    <div
      className="rounded-3xl p-4 border border-[#D2E8FF] border-3"
      style={gradientStyle}
    >
      <div
        className="border border-3 border-[#D2E8FF] rounded-3xl p-4 h-full flex flex-col"
        style={gradientStyle}
      >
        <div className="mb-6">
          <div className="w-24 h-24 rounded-full bg-white bg-opacity-50 flex items-center justify-center mb-8">
            <img src={icon} alt={title} loading="lazy" />
          </div>
          <h4 className="text-[#7DA7D3] text-2xl font-medium mb-1 leading-tight">
            {title}
          </h4>
        </div>
        <p className="text-[#7DA7D3] text-sm leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
});

VisionCard.displayName = 'VisionCard';

export default VisionCard;
