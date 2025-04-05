interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  repoLink?: string;
  liveLink?: string;
  image?: string;
}

export default function ProjectCard({
  title,
  image,
  description,
  tech,
  repoLink,
  liveLink,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {image && (
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-48 object-cover rounded mb-4 border border-gray-800"
        />
      )}
      <p className="text-gray-300 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 text-sm mb-4">
        {tech.map((t, i) => (
          <span key={i} className="bg-gray-800 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            className="text-blue-400 underline"
          >
            Code
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            className="text-green-400 underline"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}
