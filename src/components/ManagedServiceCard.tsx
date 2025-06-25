import Link from "next/link";

interface ManagedServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ManagedServiceCard({ title, description, href }: ManagedServiceCardProps) {
  return (
      <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 p-8 border border-gray-100 group-hover:border-cyan-200">
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-[#241940] mb-4 group-hover:text-cyan-700 transition-colors duration-300 leading-tight">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
          {/* <div className="mt-6 flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors duration-300">
            <span className="mr-2">View Service</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div> */}
        </div>
      </div>
  );
} 