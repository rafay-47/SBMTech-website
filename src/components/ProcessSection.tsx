import React from 'react';

interface ProcessStep {
  title: string;
  description: string;
  icon: string;
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
    icon: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V16L7 20V22H17V20L13 16V11C14.1 11 15 10.1 15 9H21Z"
  },
  {
    title: "Assess",
    description: "We assess your current risk position relative to your needs and goals, and develop a roadmap for optimising your cyber-security.",
    icon: "M9 11H7V9H9V11ZM13 11H11V9H13V11ZM17 11H15V9H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"
  },
  {
    title: "Design",
    description: "We design solutions, processes and strategies that allow you to achieve the desired state of security and effectiveness.",
    icon: "M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12"
  },
  {
    title: "Implement",
    description: "We draw on our experience and expertise to implement the agreed technical solutions, governance, compliance frameworks and migration processes.",
    icon: "M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
  },
  {
    title: "Manage",
    description: "We operate as an extension of your own cyber security team, delivering tangible, value-added cyber security on a 24/7 basis.",
    icon: "M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
  },
  {
    title: "Optimise",
    description: "We use our agile yet focused methodology to evolve and optimise your solution over time, to maximise value.",
    icon: "M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
  }
];

export default function ProcessSection({
  title = "Engaging with SBM Tech",
  subtitle = "By taking an adaptive, customer first approach, we provide trusted services that deliver outcome focused results.",
  steps = defaultSteps,
  backgroundColor = "bg-gray-50"
}: ProcessSectionProps) {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#241940] mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-[250px]">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#241940] to-[#2d1b69] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={step.icon}/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#241940] mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {/* Arrows between steps */}
                {index < steps.length - 1 && (
                  <>
                    {/* First row arrows: Understand → Assess → Design */}
                    {(index === 0 || index === 1) && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                    )}
                    
                    {/* Curved arrow from Design to Implement (wraps to next row) */}
                    {index === 2 && (
                      <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                        <svg className="w-8 h-8 text-cyan-500 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                    )}
                    
                    {/* Second row arrows: Implement → Manage → Optimise */}
                    {(index === 3 || index === 4) && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <svg className="w-8 h-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15.41 16.59L10.83 12 15.41 7.41 14 6l-6 6 6 6 1.41-1.41z"/>
                        </svg>
                      </div>
                    )}
                    
                    {/* Vertical arrows for mobile/tablet layouts */}
                    <div className="lg:hidden flex justify-center mt-4 mb-4">
                      <svg className="w-6 h-6 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                      </svg>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 