import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

const YEAR = new Date().getFullYear();

const SOCIAL_MEDIA = [
  {
    icon: faInstagram,
    link: 'https://www.instagram.com/',
  },
  {
    icon: faDiscord,
    link: 'https://discord.com/invite/gxtg2rJa?ref=astrolaunch-ui',
  },
];

const COMPANY = [
  {
    name: 'About Us',
    link: 'https://www.creative-tim.com/presentation?ref=astrolaunch-ui',
  },
];

const HELP = [
  {
    name: 'Knowledge Center',
    link: 'https://www.creative-tim.com/knowledge-center?ref=astrolaunch-ui',
  },
  {
    name: 'Contact Us',
    link: 'https://www.creative-tim.com/contact-us?ref=astrolaunch-ui',
  },
  {
    name: 'Premium Support',
    link: 'https://www.creative-tim.com/support-terms?ref=astrolaunch-ui',
  },
  {
    name: 'Pricing',
    link: '/#pricing',
  },
];

const RESOURCES = [
  {
    name: 'Documentation',
    link: 'https://www.creative-tim.com/learning-lab/astro/overview/astro-launch-ui?ref=astrolaunch-ui',
  },
  {
    name: 'Custom Development',
    link: 'https://www.creative-tim.com/services/updivision?ref=astrolaunch-ui',
  },
  {
    name: 'Discord',
    link: 'https://discord.gg/WCvQWMwT',
  },
  {
    name: 'Tailwind Components',
    link: 'https://tailwindcomponents.com/?ref=astrolaunch-ui',
  },
];

const TECHS = [
  {
    name: 'React',
    link: '#',
  },
  {
    name: 'Astro',
    link: '#',
  },
];

const FooterLanding = () => {
  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <h4 className="mb-2 text-2xl font-bold text-gray-900">Vogg</h4>
            <p className="text-md mt-0 mb-2 font-normal text-gray-600 motionx_openSans_font">
              All your video needs at one place.
            </p>
            <div className="mt-6">
              {SOCIAL_MEDIA.map(({ icon, link }, key) => (
                <a key={key} href={link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-xl mr-4 p-1 rounded-full border-[1px] text-gray-700 border-gray-400 bg-slate-200"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12"></div>
        </div>
        <hr className="my-6 border-blue-gray-50" />
      </div>
    </footer>
  );
};

export default FooterLanding;
