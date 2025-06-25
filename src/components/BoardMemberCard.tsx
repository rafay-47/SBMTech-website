import Image from "next/image";

interface BoardMemberCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  isFullWidth?: boolean;
}

export default function BoardMemberCard({ name, title, image, bio, isFullWidth = false }: BoardMemberCardProps) {
  return (
    <div className={`group relative h-full ${isFullWidth ? 'col-span-full max-w-2xl mx-auto' : ''}`}>
      <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100 hover:border-cyan-200">
        <div className="flex flex-col h-full text-center">
          {/* Profile Image */}
          <div className="relative w-32 h-32 mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-full shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Name and Title */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-[#241940] mb-2 group-hover:text-cyan-700 transition-colors duration-300">
              {name}
            </h3>
            <p className="text-lg font-semibold text-cyan-600 mb-4">
              {title}
            </p>
          </div>
          
          {/* Bio */}
          <div className="flex-grow">
            <p className="text-gray-600 leading-relaxed text-left">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 