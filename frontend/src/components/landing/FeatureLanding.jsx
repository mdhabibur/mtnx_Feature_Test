import React from 'react';
import creatorsIcon from '../../assets/images/landing/for_creators_icon.png';
import marketersIcon from '../../assets/images/landing/for_marketers_icon.png';
import influencersIcon from '../../assets/images/landing/for_influencers_icon.png';

function FeatureCard({ icon, title, children }) {
  return (
    <div className="bg-transparent shadow-none p-6 text-center">
      <div className="grid justify-center">
        {/* Icon */}
        {icon}
      </div>

      {/* Title */}
      <h5 className="text-xl font-bold text-gray-900 mb-2 motionx_openSans_font">
        {title}
      </h5>

      {/* Description */}
      <p className="text-base font-normal text-gray-700 px-8 leading-relaxed motionx_openSans_font">{children}</p>
    </div>
  );
}

const features = [
  {
    icon: <img className="w-32 mx-auto mb-4" src={creatorsIcon} alt="For Creators" />,
    title: "For Creators",
    description: "Custom-made journey to unleash your creativity",
  },
  {
    icon: <img className="w-32 mx-auto mb-4" src={marketersIcon} alt="For Marketers" />,
    title: "For Marketers",
    description: "Plan 10 years in advance. Manage your workflow at scale.",
  },
  {
    icon: <img className="w-32 mx-auto mb-4" src={influencersIcon} alt="For Influencers" />,
    title: "For Influencers",
    description: "Create your best portfolio to attract the highest brand deals to your account.",
  }
];

const FeatureLanding = () => {
  return (
    <section className="px-4 mt-12  max-w-7xl mx-auto">
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3 ">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureLanding;
