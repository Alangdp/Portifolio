interface CardProps {
  name: string;
  description: string;
  icon?: string; // Changed to string to accept SVG path
}

export default function Card({ name, description, icon }: CardProps) {
  return (
    <div className="bg-[#011221] border border-[#1e2d3d] rounded-lg p-6 hover:shadow-2xl hover:scale-105 hover:border-cyan-400 transition-all duration-300 flex flex-col cursor-pointer">
      <div className="flex items-center mb-2 gap-2">
        {icon && (
            <div className="mr-3 flex-shrink-0 h-16 w-16 flex items-center justify-center">
            <img src={icon} alt={`${name} icon`} className="h-14 w-14 object-contain rounded-lg" />
            </div>
        )}
        <h3 className="text-xl font-medium text-white">{name}</h3>
      </div>
      <p className="text-[#607b96] text-sm">{description}</p>
    </div>
  );
}