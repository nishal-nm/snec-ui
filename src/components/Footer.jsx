import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  YoutubeLogo,
} from 'phosphor-react';
import { useMemo } from 'react';

const Footer = () => {
  const usefulLinksData = useMemo(
    () => [
      {
        id: 1,
        links: [
          'Samastha',
          'Online Madrassa Portal',
          'Suprabhaatham Daily',
          'Sathydhara Fortnightly',
          'AlBirr School',
          'Asmi Education',
        ],
      },
      {
        id: 2,
        links: [
          'SNEC',
          'Vision and Mission',
          'Strategic Plan',
          'News and Events',
          'Gallery',
          'Contact Us',
        ],
      },
      {
        id: 3,
        links: ['Downloads', 'Notification', 'Results', 'Affiliated Colleges'],
      },
    ],
    []
  );

  const socialIcons = useMemo(
    () => [
      { Icon: InstagramLogo, href: '#', label: 'Instagram' },
      { Icon: FacebookLogo, href: '#', label: 'Facebook' },
      { Icon: WhatsappLogo, href: '#', label: 'WhatsApp' },
      { Icon: YoutubeLogo, href: '#', label: 'YouTube' },
    ],
    []
  );

  return (
    <footer className="bg-[#0B222E] text-white relative overflow-hidden">
      {/* Background mosque pattern */}
      <div
        className="absolute bottom-15 sm:bottom-20 md:bottom-25 left-0 right-0 h-48 sm:h-64 md:h-72 lg:h-80 xl:h-80 opacity-100 pointer-events-none"
        style={{
          backgroundImage: "url('images/footer_bg.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
        role="img"
        aria-label="Footer background pattern"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
            {/* Left Section - Contact Info */}
            <div className="lg:col-span-5 xl:col-span-4">
              {/* Logo Section */}
              <div className="flex items-center sm:items-start space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                <div className="flex-shrink-0">
                  <img
                    src="images/logo.png"
                    alt="SNEC Logo"
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                  />
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <img
                    src="images/arabic_name.png"
                    alt="Arabic Name"
                    className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Contact Title */}
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold mb-4 sm:mb-6 leading-tight">
                Get in touch with US
              </h3>

              {/* Address */}
              <address className="font-light text-base sm:text-lg lg:text-[1.2rem] leading-relaxed mb-6 sm:mb-8 text-white/95 not-italic">
                <p className="break-words">
                  Samastha National Education Council (SNEC) Central Office,
                  <br className="hidden sm:inline" />
                  <span className="sm:hidden"> </span>Samastha Karyalayam,
                  <br className="hidden sm:inline" />
                  <span className="sm:hidden"> </span>Francis Road, Kozhikode -
                  03
                </p>
              </address>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                {socialIcons.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="group hover:scale-110 transition-all duration-200 ease-in-out"
                    aria-label={`Follow us on ${label}`}
                  >
                    <Icon className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 text-white/90 group-hover:text-white transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section - Useful Links */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 xl:gap-12">
                {usefulLinksData.map((section, index) => (
                  <div key={section.id} className="space-y-6">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white border-b border-white/20 pb-3">
                      Useful Links
                    </h4>
                    <nav>
                      <ul className="space-y-3 sm:space-y-4">
                        {section.links.map((link) => (
                          <li key={link}>
                            <a
                              href="#"
                              className="text-base sm:text-lg font-light text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 ease-in-out block py-1"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-white/20 py-6 sm:py-8">
          <div className="text-center">
            <p className="text-sm sm:text-base font-light text-white/80 leading-relaxed">
              © 2025 Copyright SNEC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
