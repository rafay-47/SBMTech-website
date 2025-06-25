interface DataPrivacyServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export default function DataPrivacyServiceCard({ title, description, href }: DataPrivacyServiceCardProps) {
  return (
    <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 p-8 border border-gray-100 hover:border-cyan-200">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-[#241940] mb-4 hover:text-cyan-700 transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
} 