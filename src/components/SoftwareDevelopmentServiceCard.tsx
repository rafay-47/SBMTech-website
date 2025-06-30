interface SoftwareDevelopmentServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export default function SoftwareDevelopmentServiceCard({ title, description }: SoftwareDevelopmentServiceCardProps) {
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
        </div>
      </div>
    </div>
  );
} 