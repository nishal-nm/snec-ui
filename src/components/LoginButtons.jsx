const LoginButtons = () => {
  const loginTypes = [
    'Student Login',
    'Student Union Login',
    'Alumni Login',
    'Institution Login',
  ];

  return (
    <section id="login-buttons" className="bg-gray-50 py-18">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {loginTypes.map((text) => (
            <div key={text} className="relative group w-full min-h-[120px]">
              {/* Shadow div behind */}
              <div className="absolute right-2 top-2 w-full h-full bg-[#266DB5] z-0 transition-opacity duration-300 group-hover:opacity-0"></div>

              {/* Main button */}
              <button className="relative z-10 bg-white border border-[#266DB5] text-[#266DB5] px-6 py-8 w-full h-full font-bold hover:underline transition">
                {text}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoginButtons;
