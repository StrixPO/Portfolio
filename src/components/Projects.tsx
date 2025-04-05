import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "Laravel Admin Dashboard",
      description:
        "Role-based access system with user authentication and permissions. Gave me hands-on experience with access control and basic security principles in backend design.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      repoLink: "https://github.com/yourgithub/laravel-dashboard",
    },
    {
      title: "Data Science Project: Customer Churn Prediction",
      description:
        "Built predictive model using Python. Learned importance of secure data handling, cleaning, and modeling – foundational in secure systems and cloud-based data pipelines.",
      tech: ["Python", "Pandas", "Scikit-Learn", "Jupyter"],
      repoLink: "https://github.com/yourgithub/churn-model",
      image: "/images/corr_map.png", // ← place image in /public/images/
    },
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projectList.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
