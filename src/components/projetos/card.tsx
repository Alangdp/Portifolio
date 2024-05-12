interface CardProps {
  name: string;
  index: number;
  link: string;
}

export default function Card({ index, link,name}: CardProps) {
  return (
    <div className="w-full h-fit group">
      <div className="name flex items-center justify-between">
        <p>
          <span className="text-lg font-medium text-yellow-400">Projetos[</span>
          <span className="text-white font-medium text-lg">{index}</span>
          <span className="text-lg font-medium text-yellow-400">]</span>
        </p>
        <p className="pr-2 text-lg font-medium text-[#607b96]">// {name}</p>
      </div>
      <a href={link}>
        <img
          src="/images/image1.jpg"
          loading="lazy"
          className="w-full h-[255px] group-hover:brightness-50 duration-300 rounded mt-2 cursor-pointer"
          decoding="async"
          alt="Project Image"
        />
      </a>
    </div>
  );
}
