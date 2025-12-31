import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import GitHubRepos from "@/components/GitHubRepos";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProjectGrid />
      <GitHubRepos />
      <Contact />
    </main>
  );
}

