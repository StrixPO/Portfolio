import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "Thyroid Meal Planner",
      description:
        "🥗 Thyroid Glow: AI-assisted Flutter app for hypothyroid meal planning using 70K+ recipes, personalized via Flask ML API and Firebase UI.",
      tech: ["Flutter", "Firebase", "Flask", "XGBoost"],
      repoLink: "https://github.com/StrixPO/ThyroidGlow",
      image: "/images/thyglow.png",
    },
    {
      title: "Financial Distress Indicator",
      description:
        "📉 Financial Distress Estimator: Streamlit app predicting company financial risk with XGBoost (85% accuracy), SMOTE-balanced, fully Dockerized for deployment.",
      tech: [
        "Python",
        "Pandas",
        "Scikit-Learn",
        "Jupyter",
        "Xg-Boost",
        "Streamlit",
        "Docker",
      ],
      repoLink: "https://github.com/StrixPO/FinancialDIstress-XGBClassifier-",
      image: "/images/f_distress.png", // ← place image in /public/images/
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
