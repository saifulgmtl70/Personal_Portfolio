import React, { useEffect, useState } from 'react';

const ProgressSkills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a delay to trigger the animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Adjust the delay as needed

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  const skillsData = [
    { name: 'HTML5/CSS3', percentage: 90 },
    { name: 'Bootstrap 5', percentage: 80 },
    { name: 'Tailwind CSS', percentage: 85 },
    { name: 'Material Tailwind', percentage: 70 },
    { name: 'JavaScript', percentage: 70 },
    { name: 'React.js', percentage: 90 },
    { name: 'Node.js/Express/MongoDB', percentage: 70 },
    { name: 'Firebase', percentage: 90 },
  ];

  return (
    <div className="w-full mt-10 grid lg:grid-cols-2 gap-3 lg:gap-12">
      {skillsData.map(skill => (
        <div key={skill.name} className=""
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
          <h3 className="text-[15px] leading-[27px] font-bold text-[#eee] mb-2">{skill.name}</h3>
          <div className="relative pt-1">
            <div className={`overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-200 ${isVisible ? 'animate-fill' : ''}`}>
              <div
                style={{ width: `${isVisible ? skill.percentage : 0}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#20c997]"
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressSkills;
