import { useRef } from 'react';
import ProgramCard from './ProgramCard';

const Programs = () => {
  const programs = [
    {
      title: 'SHAREEA (For Boys) –',
      subtitle: 'SANAAE',
      description:
        'The program is intended to create a community that is enriched with Islamic scholars who are well versed in the different principles and',
      imagePath: 'images/programs/shareea.jpg',
    },
    {
      title: 'SHE (For Girls) –',
      subtitle: "SANAA'IYYA",
      description:
        'The program focuses on developing women Islamic scholars with tharbiya and thazkiya system of education along with secular education.',
      imagePath: 'images/programs/she.jpg',
    },
    {
      title: 'SHAREEA Plus',
      subtitle: '(For Boys)',
      description:
        'The ten-year religious study program is structured as a three-year secondary, two-year preliminary, three-year degree, and two-year postgraduate (PG)',
      imagePath: 'images/programs/shareea-plus.jpg',
    },
    {
      title: 'SHE Plus',
      subtitle: '(For Girls)',
      description:
        'The eight-year religious study program for girls is structured as a three-year secondary, two-year preliminary, and three-year degree course, offering',
      imagePath: 'images/programs/she-plus.jpg',
    },
    {
      title: 'LIFE',
      subtitle: '(For Boys)',
      description:
        'The goal of this stream is to produce highly skilled professionals with strong religious awareness. The program duration is seven',
      imagePath: 'images/programs/life-boys.jpg',
    },
    {
      title: 'LIFE',
      subtitle: '(For Girls)',
      description:
        'The goal of this stream is to produce highly skilled professionals with strong religious awareness. The program duration is seven',
      imagePath: 'images/programs/life-girls.jpg',
    },
    {
      title: 'LIFE Plus',
      subtitle: '(For Boys)',
      description:
        'The goal of this stream is to produce highly skilled professionals with strong religious awareness. The program spans a total of ten',
      imagePath: 'images/programs/life-plus-boys.jpg',
    },
    {
      title: 'LIFE Plus',
      subtitle: '(For Girls)',
      description:
        'The goal of this stream is to produce highly skilled professionals with strong religious awareness. The program spans a total of ten',
      imagePath: 'images/programs/life-plus-girls.jpg',
    },
  ];

  const scrollContainer = useRef(null);

  return (
    <section
      className="my-6 sm:my-8 md:my-10 py-8 sm:py-10 md:py-12 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('images/program-bg.jpg')" }}
    >
      <div className="py-1">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Find the Right{' '}
            <span className="text-[#266DB5] font-bold">Program for You</span>
          </h2>
          <p className="text-base sm:text-lg text-[#7DA7D3] font-light">
            Blending Knowledge with Faith for a Brighter Future!
          </p>
        </div>

        {/* Scrollable Cards Container */}
        <div className="relative">
          {/* Scrollable Container */}
          <div
            ref={scrollContainer}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 px-2 sm:px-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {programs.map((program, index) => (
              <ProgramCard
                key={`program-${index}`}
                title={program.title}
                subtitle={program.subtitle}
                description={program.description}
                imagePath={program.imagePath}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Hide scrollbar for all browsers */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }

        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Programs;
