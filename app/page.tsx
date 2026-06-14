import {
  EagleLikeSection,
  EagleServiceSection,
  HeroSection,
} from "@/components/home";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#050505] ">
      <HeroSection />
      <EagleLikeSection />
      <EagleServiceSection />
    </main>
  );
};

export default HomePage;
