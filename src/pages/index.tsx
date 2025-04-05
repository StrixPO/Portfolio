import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rusar R P | Cloud Security Portfolio</title>
        <meta
          name="description"
          content="Portfolio of a software engineer transitioning into cloud security. Currently pursuing AWS SAA certification."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="min-h-screen bg-gray-950 text-white">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        {/* More sections will come here */}
      </main>
    </>
  );
}
