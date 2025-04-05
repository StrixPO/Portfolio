import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto mt-24 text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Contact</h2>
      <p className="text-gray-300 mb-4">
        I'm open to opportunities in cloud security, backend, or DevSecOps
        roles. Reach out if you're hiring or want to collaborate.
      </p>

      <div className="flex justify-center gap-6 mt-6 text-gray-300 text-lg">
        <a
          href="mailto:your.email@example.com"
          className="flex items-center gap-2 hover:text-white"
        >
          <Mail size={20} /> your.email@example.com
        </a>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          className="hover:text-white"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="hover:text-white"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </section>
  );
}
