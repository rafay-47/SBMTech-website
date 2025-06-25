interface PenetrationTestingServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export default function PenetrationTestingServiceCard({ title, description }: PenetrationTestingServiceCardProps) {
  return (
    <div className="group relative h-full">
      <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100 hover:border-cyan-200">
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-[#241940] mb-6 group-hover:text-cyan-700 transition-colors duration-300 leading-tight">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {description}
            </p>
          </div>
          
          {/* Commented out View Service section as per user's modification pattern
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors duration-300 group-hover:gap-3">
              <span>View Service</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
} 