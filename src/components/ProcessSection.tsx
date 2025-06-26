import React from 'react';

interface ProcessStep {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  backgroundColor?: string;
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Understand",
    description: "We listen and learn about your business challenges, goals and ambitions, strategic drivers and culture.",
    icon: "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",
    gradient: "from-[#241940] to-[#2d1b69]"
  },
  {
    title: "Assess",
    description: "We assess your current risk position relative to your needs and goals, and develop a roadmap for optimising your cyber security.",
    icon: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z",
    gradient: "from-[#2d1b69] to-[#1e1537]"
  },
  {
    title: "Design",
    description: "We design solutions, processes and strategies that allow you to achieve the desired state of security and effectiveness.",
    icon: "M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22S11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2S12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z",
    gradient: "from-[#1e1537] to-[#241940]"
  },
  {
    title: "Implement",
    description: "We draw on our experience and expertise to implement the agreed technical solutions, governance, compliance frameworks and migration processes.",
    icon: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z",
    gradient: "from-[#241940] to-[#1e1537]"
  },
  {
    title: "Manage",
    description: "We operate as an extension of your own cyber security team, delivering tangible, value-added cyber security on a 24/7 basis.",
    icon: "M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12",
    gradient: "from-[#2d1b69] to-[#241940]"
  },
  {
    title: "Optimise",
    description: "We use our agile yet focused methodology to evolve and optimise your solution over time, to maximise value.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    gradient: "from-[#1e1537] to-[#2d1b69]"
  }
];

// Custom Arrow Component using the provided SVG
const CustomArrow = ({ direction = 'right', className = '' }) => {
  const getRotation = () => {
    switch (direction) {
      case 'right': return 'rotate(0deg)';
      case 'down': return 'rotate(90deg)';
      case 'left': return 'rotate(180deg)';
      case 'up': return 'rotate(270deg)';
      default: return 'rotate(0deg)';
    }
  };

  return (
    <svg 
      className={`w-10 h-10 text-cyan-500 animate-pulse transition-transform duration-300 ${className}`}
      style={{ transform: getRotation() }}
      viewBox="0 0 292.359 292.359" 
      fill="currentColor"
    >
      <path d="M222.979,133.331L95.073,5.424C91.456,1.807,87.178,0,82.226,0c-4.952,0-9.233,1.807-12.85,5.424
        c-3.617,3.617-5.424,7.898-5.424,12.847v255.813c0,4.948,1.807,9.232,5.424,12.847c3.621,3.617,7.902,5.428,12.85,5.428
        c4.949,0,9.23-1.811,12.847-5.428l127.906-127.907c3.614-3.613,5.428-7.897,5.428-12.847
        C228.407,141.229,226.594,136.948,222.979,133.331z"/>
    </svg>
  );
};



export default function ProcessSection({
  title = "Working with Us",
  subtitle = "All our services are based on our adaptive, customer first philosophy, ensuring we act as an extension of your team. This enables us to provide trusted advice that helps you meet your specific goals and requirements.",
  steps = defaultSteps,
  backgroundColor = "bg-subtle-blue"
}: ProcessSectionProps) {
  return (
    <section className={`py-24 ${backgroundColor} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full text-sm font-semibold text-cyan-700 mb-4">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Our Approach
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-[#241940] leading-tight">
            {title.includes("with") ? (
              <>
                Working <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">with Us</span>
              </>
            ) : (
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{title}</span>
            )}
          </h2>
          <p className="text-xl text-gray-enhanced max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className={`h-full bg-gradient-to-br ${step.gradient} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 text-center text-white hover-lift`}>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={step.icon}/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-200 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Custom Arrow Flow System */}
                {/* First Row: Understand → Assess → Design */}
                {index === 0 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <CustomArrow direction="right" />
                  </div>
                )}
                {index === 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <CustomArrow direction="right" />
                  </div>
                )}
                
                {/* Transition: Design → Implement (down) */}
                {index === 2 && (
                  <div className="hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <CustomArrow direction="down" />
                  </div>
                )}
                
                {/* Second Row: Implement ← Manage ← Optimise */}
                {index === 4 && (
                  <div className="hidden lg:block absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
                    <CustomArrow direction="left" />
                  </div>
                )}
                {index === 5 && (
                  <div className="hidden lg:block absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
                    <CustomArrow direction="left" />
                  </div>
                )}
                
                {/* Mobile vertical arrows */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-6">
                    <CustomArrow direction="down" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 