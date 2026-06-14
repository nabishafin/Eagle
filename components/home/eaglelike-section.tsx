import Image from "next/image";

import { images } from "@/constants";

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
    description:
      "Track your growth with real-time analytics and actionable metrics",
    accentClassName: "bg-[#a33dff]",
  },
  {
    title: "Audience Engagement",
    description:
      "Build meaningful connections with your growing community",
    accentClassName: "bg-[#29c9ff]",
  },
  {
    title: "Performance Tracking",
    description:
      "Monitor your success with comprehensive performance metrics",
    accentClassName: "bg-[#20d66e]",
  },
];

function PortraitFrame({
  src,
  alt,
  widthClassName,
}: {
  src: Parameters<typeof Image>[0]["src"];
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
  maxWidthClassName = "max-w-[290px] md:max-w-[248px] lg:max-w-[360px]",
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
        className={`text-[2.15rem] font-bold leading-[0.94] tracking-[-0.05em] sm:text-[2.4rem] md:text-[2.1rem] lg:text-[3.12rem] ${
          gradient
            ? "bg-[linear-gradient(180deg,#f168ff_0%,#9e53ff_100%)] bg-clip-text text-transparent"
            : "text-white"
        }`}
      >
        {title}
      </h2>
      <p className="mt-4 text-[13px] leading-[1.56] text-[#8d95a3] md:text-[11px] lg:mt-5 lg:text-[15px]">
        {description}
      </p>

      {bullets ? (
        <div className="mt-6 space-y-4 lg:mt-7">
          {featureBullets.map((bullet) => (
            <div key={bullet.title} className="flex items-start gap-3">
              <span
                className={`mt-[3px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] ${bullet.accentClassName}`}
              >
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
      ) : null}
    </div>
  );
}

export function EagleLikeSection() {
  const marqueeLogos = [...pressLogos, ...pressLogos];

  return (
    <section className="relative isolate overflow-hidden border-b border-[rgba(22,63,110,0.4)] bg-[#050505] px-6 py-10 sm:py-12 md:px-12 md:py-14 lg:px-[92px] lg:py-[54px]">
      <Image
        src={images.leftHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[96px] z-0 h-auto w-[180px] opacity-60 sm:w-[220px] md:w-[250px] lg:w-[336px]"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[144px] z-0 h-auto w-[132px] opacity-58 sm:w-[164px] md:w-[188px] lg:top-[96px] lg:w-[262px]"
        priority
      />
      <Image
        src={images.leftHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[132px] left-0 z-0 h-auto w-[172px] opacity-55 sm:w-[208px] md:w-[236px] lg:bottom-[160px] lg:w-[336px]"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[44px] right-0 z-0 h-auto w-[126px] opacity-55 sm:w-[150px] md:w-[172px] lg:bottom-[80px] lg:w-[248px]"
        priority
      />

      <div className="relative z-[1] mx-auto w-full">
        <div className="w-full text-center">
          <p className="text-[18px] uppercase tracking-[0.18em] text-[#97a0ad] ">
            Eagle Likes is seen on...
          </p>
          <div className="mt-5 w-full overflow-hidden md:mt-6">
            <div className="marquee-track flex w-max items-center gap-x-8 sm:gap-x-10 md:gap-x-12 lg:gap-x-14">
              {marqueeLogos.map((logo, index) => (
                <Image
                  key={`${logo.src}-${index}`}
                  src={logo}
                  alt="Press logo"
                  className="h-[58px] w-auto shrink-0 object-contain opacity-95"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-14 sm:mt-12 sm:space-y-16 md:mt-14 md:space-y-20 lg:mt-[56px] lg:space-y-[78px]  max-w-[1260px] mx-auto">
          <div className="flex flex-col items-center gap-7 md:grid md:grid-cols-[248px_320px] md:items-center md:justify-between md:gap-x-[78px] lg:grid-cols-[minmax(0,360px)_380px] lg:gap-x-[176px]">
            <div className="order-2 md:order-1">
              <FeatureCopy
                title="Social Media Exposure"
                description="As Social Media continues to dominate the digital world, creators struggle to get the attention their content deserves. The moment People post posts with high engagement followers, likes, and comments they've drawn to find out what's behind the excitement."
              />
            </div>

            <div className="order-1 md:order-2 flex w-full justify-center md:justify-start lg:justify-end">
              <PortraitFrame
                src={images.social1}
                alt="Woman holding a phone with social icons around her"
                widthClassName="w-[250px] sm:w-[278px] md:w-[320px] lg:w-[380px]"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-7 md:grid md:grid-cols-[320px_248px] md:items-center md:justify-between md:gap-x-[78px] lg:grid-cols-[380px_minmax(0,360px)] lg:gap-x-[176px]">
            <div className="flex w-full justify-center md:justify-end lg:justify-start">
              <PortraitFrame
                src={images.social2}
                alt="Man reacting excitedly to social engagement"
                widthClassName="w-[250px] sm:w-[278px] md:w-[320px] lg:w-[380px]"
              />
            </div>

            <div>
              <FeatureCopy
                title="Instant Growth Boost"
                description="It brings continuous engagement to your Instagram and TikTok, boosting your fame and authority on both platforms. It's all possible with our instant Instagram and TikTok engagement - safe, reliable, and built for real, organic results."
              />
            </div>
          </div>

          <div className="border-t border-[rgba(255,255,255,0.05)] pt-14 md:pt-16 lg:pt-[56px]">
            <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-[320px_280px] md:items-center md:justify-between md:gap-x-[56px] lg:grid-cols-[500px_minmax(0,360px)] lg:gap-x-[142px]">
              <div className="flex w-full justify-center md:justify-end lg:justify-start">
                <div className="relative w-[270px] sm:w-[320px] md:w-[320px] lg:w-[500px]">
                  <div className="absolute inset-x-[16%] bottom-[8%] top-[20%] rounded-[2.5rem] bg-[rgba(0,124,255,0.2)] blur-[28px] lg:blur-[40px]" />
                  <Image
                    src={images.social3}
                    alt="Social media analytics dashboard"
                    className="relative z-[1] h-auto w-full object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="md:-translate-y-2 lg:translate-y-0">
                <FeatureCopy
                  title="Social Media Growth"
                  description="Transform your social presence with data-driven strategies and watch your engagement soar."
                  gradient
                  bullets
                  maxWidthClassName="max-w-[300px] md:max-w-[280px] lg:max-w-[360px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
