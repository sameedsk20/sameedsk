import React from 'react';

const JourneyCheckpoint = (props: any) => {
  const { title, description } = props;

  return (
    <div className="flex items-center pb-12">
      <div className="checkpoint-line flex-1 h-2 bg-gradient-to-r from-blue-500 to-blue-100"></div>
      <div className="checkpoint ms-4 h-8 w-8 bg-blue-500 rounded-full border-4 border-white"></div>
      <div className="checkpoint-content text-center p-4 border border-gray-500 bg-gray-800 text-white rounded-md ml-4">
        <h3 className="text-lg font-bold mb-2 text-[#86c9eb]">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    { name: 'HTML', icon: '💻' },
    { name: 'CSS', icon: '🎨' },
    { name: 'TypeScript', icon: '📄' },
    { name: 'JavaScript', icon: '🚀' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🛠️' },
    { name: 'Next.js', icon: '⚡️'},
    { name: 'SQL', icon: '🔍' }
  ];

  return (
    <section className="bg-gradient-to-r from-gray-700 to-black text-white py-16 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100">
          My Journey
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <JourneyCheckpoint title="Starting Point" description="I began my journey into the world of web development with a strong passion for coding and problem-solving." />
          <JourneyCheckpoint title="Learning Basics" description="Acquired foundational knowledge in HTML, CSS, and JavaScript. Started building simple websites and projects." />
          <JourneyCheckpoint title="Diving into Frameworks" description="Explored and mastered popular frameworks like React and Next.js. Began building more complex and interactive applications." />
        </div>
      </div>
      
      <div className="container mx-auto text-center">
        <h2 className="text-transparent text-5xl mb-12 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100 font-bold tracking-wider">
          Skills Symphony
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              <span className="text-4xl sm:text-5xl md:text-6xl mb-2 animate-circular-float" style={{ animationDelay: `${index * 0.1}s` }}>
                {skill.icon}
              </span>
              <p className="text-base sm:text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
