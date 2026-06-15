import Image from "next/image";
import { images } from "@/constants";

// --- Constants ---
const pressLogos = [
  images.yahoo,
  images.fox,
  images.marketWatch,
  images.tripa,
  images.digitalJurnal,
  images.nbc,
  images.usaToday,
];

const featureBullets = [
  {
    title: "Data-Driven Insights",
    description: "Track your growth with real-time analytics and actionable metrics",
    accentClassName: "bg-[#a33dff]",
  },
  {
    title: "Audience Engagement",
    description: "Build meaningful connections with your growing community",
    accentClassName: "bg-[#29c9ff]",
  },
  {
    title: "Performance Tracking",
    description: "Monitor your success with comprehensive performance metrics",
    accentClassName: "bg-[#20d66e]",
  },
];

// --- Sub-Components ---
function PortraitFrame({
  src,
  alt,
  widthClassName,
}: {
  src: any;
  alt: string;
  widthClassName: string;
}) {
  return (
    <div className={`relative ${widthClassName}`}>
      <div className="absolute inset-[8%] rounded-[2.5rem] bg-[rgba(0,124,255,0.26)] blur-[26px] lg:blur-[34px]" />
      <Image
        src={src}
        alt={alt}
        className="relative z-[1] h-auto w-full rounded-[2.5rem] object-cover"
        priority
      />
    </div>
  );
}

function FeatureCopy({
  title,
  description,
  gradient = false,
  bullets = false,
  maxWidthClassName = "max-w-[360px] md:max-w-[320px] lg:max-w-[440px]",
}: {
  title: string;
  description: string;
  gradient?: boolean;
  bullets?: boolean;
  maxWidthClassName?: string;
}) {
  return (
    <div className={`w-full ${maxWidthClassName}`}>
      <h2
        className={`text-[2.15rem] font-bold leading-[0.94] tracking-[-0.05em] sm:text-[2.4rem] md:text-[2.1rem] lg:text-[3.12rem] ${gradient
          ? "bg-[linear-gradient(180deg,#f168ff_0%,#9e53ff_100%)] bg-clip-text text-transparent"
          : "text-white"
          }`}
      >
        {title}
      </h2>
      <p className="mt-8 text-[13px] leading-[1.56] text-[#8d95a3] md:text-[11px] lg:mt-10 lg:text-[15px]">
        {description}
      </p>

      {bullets && (
        <div className="mt-6 space-y-4 lg:mt-7">
          {featureBullets.map((bullet) => (
            <div key={bullet.title} className="flex items-start gap-3">
              <span className={`mt-[3px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] ${bullet.accentClassName}`}>
                <span className="h-[5px] w-[5px] rounded-full bg-white" />
              </span>
              <div>
                <h3 className="text-[12px] font-semibold leading-[1.2] text-white md:text-[10px] lg:text-[14px]">
                  {bullet.title}
                </h3>
                <p className="mt-1 text-[11px] leading-[1.45] text-[#6f7885] md:text-[8.5px] lg:text-[12px]">
                  {bullet.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Main Section Component ---
export function EagleLikeSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[rgba(22,63,110,0.4)] bg-[#050505] px-6 py-10 sm:py-12 md:px-12 md:py-14 lg:px-[92px] lg:py-[54px]">
      {/* Background Decorators */}
      <Image src={images.leftHeroShadow} alt="" className="pointer-events-none absolute left-0 top-[96px] z-0 h-auto w-[180px] opacity-60 lg:w-[336px]" priority />
      <Image src={images.rightHeroShadow} alt="" className="pointer-events-none absolute right-0 top-[144px] z-0 h-auto w-[132px] opacity-58 lg:top-[96px] lg:w-[262px]" priority />

      <div className="relative z-[1] mx-auto w-full max-w-[1020px]">
        <div className="w-full text-center">
          <p className="text-[18px] uppercase tracking-[0.18em] text-[#97a0ad]">Eagle Likes is seen on...</p>
          <div className="mt-5 flex w-full items-center justify-between gap-x-4 py-6 md:gap-x-8">
            {pressLogos.map((logo, index) => (
              <Image key={index} src={logo} alt="Press logo" className="h-[36px] w-auto shrink-0 object-contain opacity-95" />
            ))}
          </div>
        </div>

        <div className=" space-y-14 lg:mt-[56px] lg:space-y-[78px]">
          {/* Row 1 */}
          <div className="flex flex-col items-center gap-7 md:grid md:grid-cols-[248px_320px] md:justify-between lg:grid-cols-[360px_380px]">
            <div className="order-2 md:order-1">
              <FeatureCopy title="Social Media Exposure" description="As Social Media continues to dominate the digital world, creators struggle to get the attention their content deserves. The moment people post with high engagement—followers, likes, and comments—they've drawn others to find out what's behind the excitement." />
            </div>
            <div className="order-1 md:order-2 flex justify-center lg:justify-end">
              <PortraitFrame src={images.social1} alt="Woman with phone" widthClassName="w-[250px] lg:w-[380px]" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col items-center gap-7 md:grid md:grid-cols-[320px_248px] md:justify-between lg:grid-cols-[380px_360px]">
            <div className="flex justify-center md:justify-start">
              <PortraitFrame src={images.social2} alt="Man reacting" widthClassName="w-[250px] lg:w-[380px]" />
            </div>
            <div>
              <FeatureCopy title="Instant Growth Boost" description="It brings continuous engagement to your Instagram and TikTok, boosting your fame and authority. It's all possible with our instant engagement—safe, reliable, and built for real results." />
            </div>
          </div>

          {/* Row 3 (Analytics) */}
          <div className="relative pt-14 lg:pt-[56px]">
            <div className="absolute left-[50%] top-0 w-[100vw] -translate-x-1/2 border-t border-[rgba(255,255,255,0.05)]" />
            <div className="flex flex-col items-center gap-7 md:grid md:grid-cols-[320px_248px] md:items-center md:justify-between lg:grid-cols-[380px_360px]">
              <div className="flex justify-center md:justify-start">
                <div className="relative w-[300px] sm:w-[400px] md:w-[460px] lg:w-[560px] md:-ml-[140px] lg:-ml-[180px]">
                  <Image src={images.social3} alt="Analytics dashboard" className="relative z-[1] h-auto w-full object-contain" priority />
                </div>
              </div>
              <div className="md:-mt-12 lg:-mt-20">
                <FeatureCopy title="Social Media Growth" description="Transform your social presence with data-driven strategies and watch your engagement soar." gradient bullets maxWidthClassName="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}