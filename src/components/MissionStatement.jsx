const MissionStatement = () => {
  return (
    <section
      className="relative h-[400px] lg:h-[550px] flex items-center text-white"
      style={{
        backgroundImage: "url('images/kids_image.jpg')",
        backgroundSize: 'cover',
        backgroundPositionY: '44%',
      }}
    >
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/0"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-xl">
          {' '}
          {/* made wider */}
          <div className="w-12 h-12 rounded-full mb-6">
            <img src="images/Vector.png" alt="Vector" />
          </div>
          <h3 className="text-3xl lg:text-5xl font-semibold leading-snug">
            We are shaping <br />
            professionals <br />
            With{' '}
            <span className="bg-[#266DB5]/75 text-white px-2 rounded">
              ethical values.
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
