import {
  EagleLikeSection,
  EagleServiceSection,
  FooterSection,
  HeroSection,
  HowItWorksSection,
  WhyEagleLikesSection,
} from "@/components/home";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#050505] ">
      <HeroSection />
      <EagleLikeSection />
      <EagleServiceSection />
      <HowItWorksSection />
      <WhyEagleLikesSection />
      <FooterSection />
    </main>
  );
};

export default HomePage;
