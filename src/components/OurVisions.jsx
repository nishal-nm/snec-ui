import VisionCard from './VisionCard';

const OurVisions = () => {
  const visions = [
    {
      icon: 'images/vision-icons/reading.png',
      title: 'Smart Learning, Better Outcomes',
      description:
        'Our Blended Learning System combines classroom teaching with digital tools to create a more flexible and effective learning experience',
    },
    {
      icon: 'images/vision-icons/atom.png',
      title: 'Science & Sustainability in Action',
      description:
        'We focus on advancing science, promoting health, fostering environmental awareness, driving innovation, and championing sustainability for a better future.',
    },
    {
      icon: 'images/vision-icons/magnifier.png',
      title: 'Exchange. Internship. Research.',
      description:
        'Our Faculty Exchange, Internship Program, and Research Collaboration offer global learning and innovative research opportunities.',
    },
    {
      icon: 'images/vision-icons/school.png',
      title: 'Educity: The University Within SNEC',
      description:
        "Educity seamlessly integrates SNEC's diverse educational offerings, creating a comprehensive and dynamic university-level learning environment that fosters academic excellence and personal growth.",
    },
    {
      icon: 'images/vision-icons/steps.png',
      title: 'Learn with Mentors, Grow Through Experience',
      description:
        'Our Mentor-Mentee System pairs students with experienced faculty for personalized guidance, while our field trips provide real-world learning experiences, bridging theory with practical application.',
    },
    {
      icon: 'images/vision-icons/people.png',
      title: 'Leadership Through Life Skills',
      description:
        'Our life skills project fosters leadership, enhances personality, and nurtures creativity, empowering students to thrive in both personal and professional life.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-18 lg:py-20 mt-4 sm:mt-6 md:mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 mb-2">
            Our <span className="text-[#266DB5] font-bold">Visions</span>
          </h2>
        </header>

        {/* Vision Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {visions.map((vision, index) => (
            <VisionCard
              key={`vision-${index}`}
              icon={vision.icon}
              title={vision.title}
              description={vision.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVisions;
