import { Menu, X } from 'lucide-react';
import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  Phone,
  WhatsappLogo,
  YoutubeLogo,
} from 'phosphor-react';
import { useRef, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const hideTimeout = useRef(null);

  // Home button
  const HOME_ITEM = { name: 'Home', href: process.env.PUBLIC_URL || './' };

  // about section items
  const ABOUT_ITEMS = [
    { name: 'Governing Body', href: 'https://www.snec.in/governing_body' },
    { name: 'Academic Council', href: 'https://www.snec.in/academic_council' },
    { name: 'Board of Studies', href: 'https://www.snec.in/boards_of_studies' },
    { name: 'Vision & Mission', href: '#our-vision' },
    { name: "Chairperson's Message", href: '#chairman-message' },
    { name: 'Strategic Plan', href: 'https://www.snec.in/syllabus' },
    {
      name: 'Organogram',
      href: 'https://www.snec.in/assets/front/ORGANOGRAM.pdf',
    },
    { name: 'SNEC Logo', href: 'https://www.snec.in/snec_logo' },
  ];

  // navbar items
  const NAV_ITEMS = [
    { name: 'Academics', href: './' },
    { name: 'Colleges', href: './' },
    { name: 'Forms', href: 'https://www.snec.in/forms' },
    { name: 'Downloads', href: 'https://www.snec.in/downloads' },
    { name: 'FAQs', href: 'https://www.snec.in/faq' },
    { name: 'Gallery', href: 'https://www.snec.in/gallery' },
    { name: 'Contact Us', href: 'https://www.snec.in/contact_us' },
    { name: 'Examination', href: './' },
    { name: 'Admission', href: 'https://www.snec.in/admission' },
    { name: 'Login', href: '#login-buttons' },
  ];

  // Handlers
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleAboutEnter = () => {
    clearTimeout(hideTimeout.current);
    setIsAboutDropdownOpen(true);
  };

  const handleAboutLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 300);
  };

  const toggleMobileAbout = () => {
    setIsAboutDropdownOpen((prev) => !prev);
  };

  // style for responsiveness
  const navItemStyle =
    'text-white transition-colors px-2 py-1 hover:bg-[#043773B2] hover:shadow-[0_4px_0_0_rgba(38,109,181,1)] whitespace-nowrap';
  const mobileNavItemStyle =
    'text-white transition-colors py-3 px-4 hover:bg-[#043773B2] rounded-lg font-medium';
  const dropdownStyle =
    'absolute left-1/2 transform -translate-x-1/2 mt-2 z-50';
  const dropdownContentStyle =
    'bg-[#266DB5E5] rounded-2xl shadow-xl p-4 w-[22rem]';

  return (
    <header className="bg-transparent relative z-30">
      <div className="container mx-auto px-4 xl:px-6 pt-4 xl:pt-6">
        {/* Top Section */}
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-4 xl:gap-0">
          {/* Logo Section */}
          <div className="flex items-center justify-center xl:justify-start gap-2 xl:gap-4">
            <img
              src="images/logo.png"
              className="h-10 sm:h-12 xl:h-13 object-contain"
              alt="Logo"
            />
            <img
              src="images/arabic_name.png"
              className="h-10 sm:h-12 xl:h-13 object-contain"
              alt="Arabic Name"
            />
          </div>

          {/* Navigation Section */}
          <div className="w-full xl:w-auto">
            {/* Contact Bar */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center py-2 text-xs sm:text-sm text-white border-b border-white/20 gap-2 sm:gap-0">
              <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
                <span className="flex items-center">
                  <EnvelopeSimple className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                  mail@snec.in
                </span>
                <span className="flex items-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                  +91 8590555455
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <a href="https://www.instagram.com/snec_updates/">
                  <InstagramLogo className="w-4 h-4 sm:w-5 sm:h-5 text-white hover:text-pink-200 cursor-pointer transition-colors" />
                </a>
                <a href="https://www.facebook.com/snecsamastha/">
                  <FacebookLogo className="w-4 h-4 sm:w-5 sm:h-5 text-white hover:text-blue-200 cursor-pointer transition-colors" />
                </a>
                <a href="https://whatsapp.com/channel/0029Va56oEi9xVJY82zDX93E">
                  <WhatsappLogo className="w-4 h-4 sm:w-5 sm:h-5 text-white hover:text-green-200 cursor-pointer transition-colors" />
                </a>
                <a href="https://www.youtube.com/@SamasthaNec">
                  <YoutubeLogo className="w-4 h-4 sm:w-5 sm:h-5 text-white hover:text-red-200 cursor-pointer transition-colors" />
                </a>
              </div>
            </div>

            {/* Main Navigation */}
            <nav className="flex justify-between items-center py-2 font-thin text-sm xl:text-[14px]">
              {/* Desktop Navigation */}
              <div className="hidden xl:flex items-center flex-wrap">
                <a href={HOME_ITEM.href} className={navItemStyle}>
                  {HOME_ITEM.name}
                </a>

                <div
                  className="relative"
                  onMouseEnter={handleAboutEnter}
                  onMouseLeave={handleAboutLeave}
                >
                  <button className={navItemStyle}>About</button>

                  {isAboutDropdownOpen && (
                    <div className={dropdownStyle}>
                      <div className="w-3 h-3 rotate-45 mx-auto bg-[#266DB5E5]"></div>
                      <div className={`mt-[-6px] ${dropdownContentStyle}`}>
                        <h3 className="text-lg font-bold text-white">SNEC</h3>
                        <hr className="border-white/70 border-t-2 my-2" />
                        <ul>
                          {ABOUT_ITEMS.map(({ name, href }, index) => (
                            <li key={name}>
                              <a
                                href={href}
                                className="block px-3 py-2 rounded text-white hover:bg-white/10 transition-colors text-sm"
                              >
                                {name}
                              </a>
                              {index !== ABOUT_ITEMS.length - 1 && (
                                <hr className="border-white/5" />
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {NAV_ITEMS.map(({ name, href }) => (
                  <a key={name} href={href} className={navItemStyle}>
                    {name}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="xl:hidden p-2 text-white hover:text-blue-600/80 transition-colors ml-auto"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm">
          <div
            className="absolute top-0 left-0 right-0 backdrop-blur-md shadow-2xl border-b border-white/10"
            style={{
              background:
                'linear-gradient(180deg, rgba(38, 109, 181, 0.9) 0%, rgba(38, 109, 181, 0.783173) 43.75%, rgba(38, 109, 181, 0) 100%)',
            }}
          >
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <img
                  src="images/logo.png"
                  className="h-8 object-contain"
                  alt="Logo"
                />
                <img
                  src="images/arabic_name.png"
                  className="h-8 object-contain"
                  alt="Arabic Name"
                />
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 text-white hover:text-blue-600/80 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="max-h-[calc(100vh-120px)] overflow-y-auto p-4">
              <div className="flex flex-col space-y-1">
                <a
                  href={HOME_ITEM.href}
                  className={mobileNavItemStyle}
                  onClick={toggleMenu}
                >
                  {HOME_ITEM.name}
                </a>

                {/* Mobile About Dropdown */}
                <div className="text-white">
                  <button
                    onClick={toggleMobileAbout}
                    className={`w-full text-left ${mobileNavItemStyle} flex justify-between items-center`}
                  >
                    About
                    <span
                      className={`transition-transform ${
                        isAboutDropdownOpen ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {isAboutDropdownOpen && (
                    <div className="ml-4 mt-1 space-y-1 rounded-lg p-2 bg-[#266DB5E5]">
                      {ABOUT_ITEMS.map(({ name, href }) => (
                        <a
                          key={name}
                          href={href}
                          className="block text-white/90 py-2 px-3 hover:bg-blue-600/40 hover:text-white transition-colors rounded text-sm"
                          onClick={toggleMenu}
                        >
                          {name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {NAV_ITEMS.map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    className={mobileNavItemStyle}
                    onClick={toggleMenu}
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
