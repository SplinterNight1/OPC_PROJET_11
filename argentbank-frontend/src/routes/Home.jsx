import Hero from "../components/sections/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <main>
      <Hero
        title="Promoted Content"
        subtitles={["No fees.", "No minimum deposit.", "High interest rates"]}
        text="Open a savings account with Argent Bank today!"
      />
      <Features />
    </main>
  );
}
