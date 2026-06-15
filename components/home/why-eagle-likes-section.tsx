import Image from "next/image";

import { images, whyEagleLikesFeatures } from "@/constants";

const bulletIconClasses = {
  pink: "bg-[rgba(196,83,255,0.16)] text-[#d468ff]",
  green: "bg-[rgba(33,194,126,0.16)] text-[#35dc8a]",
  purple: "bg-[rgba(117,86,255,0.16)] text-[#9c79ff]",
} as const;

function FeatureImage({
  src,
  alt,
  widthClassName,
  glowClassName,
}: {
  src: Parameters<typeof Image>[0]["src"];
  alt: string;
  widthClassName: string;
  glowClassName?: string;
}) {
  return (
    <div className={`relative ${widthClassName}`}>
      {glowClassName && <div className={glowClassName} />}
      <div className="absolute inset-0 rounded-[2.5rem] shadow-[0_24px_48px_rgba(0,0,0,0.32)]" />
      <Image
        src={src}
        alt={alt}
        className="relative z-[1] h-auto w-full object-contain"
      />
    </div>
  );
}

export function WhyEagleLikesSection() {
  const [firstFeature, secondFeature, thirdFeature] = whyEagleLikesFeatures;

  return (
    <section className="relative isolate overflow-hidden px-6 py-16 md:px-12 md:py-20 lg:px-[92px] lg:py-24">
      <Image
        src={images.leftHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-[1] h-auto w-[210px] select-none opacity-60 sm:w-[250px] md:w-[290px] lg:w-[340px] lg:opacity-70"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-[1] h-auto w-[170px] select-none opacity-[0.62] sm:w-[210px] md:w-[235px] lg:w-[265px] lg:opacity-[0.74]"
        priority
      />

      <div className="relative z-[2] mx-auto max-w-[1020px]">
        <div className="mx-auto max-w-[520px] text-center">
          <h2 className="text-[clamp(2rem,3vw,3.3rem)] font-bold tracking-[-0.04em] text-white">
            Why <span className="text-[#09a7ff]">Eagle Likes?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[420px] text-[13px] leading-[1.55] text-[#8b98a8] sm:text-[14px]">
            Many providers offer social engagement, but none deliver our level
            of quality or safety. Experience why we&apos;re the go-to choice for
            Social Media growth
          </p>
        </div>

        <div className="mt-14 space-y-16 md:space-y-20 lg:space-y-24">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_320px] md:gap-x-10 lg:grid-cols-[minmax(0,400px)_minmax(320px,390px)] lg:justify-between lg:gap-x-[170px]">
            <div className="max-w-[410px]">
              <h3 className="text-[clamp(2rem,2.8vw,3rem)] font-bold leading-[1] tracking-[-0.04em] text-white">
                Growth Focused
                <br />
                Services
              </h3>
              <div className="mt-6 space-y-5 text-[13px] leading-[1.55] text-[#7f8b9a]">
                {firstFeature.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <FeatureImage
                src={firstFeature.image}
                alt={firstFeature.imageAlt}
                widthClassName="w-[260px] sm:w-[300px] md:w-[340px]"
              />
            </div>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-[320px_minmax(0,1fr)] md:gap-x-10 lg:grid-cols-[minmax(320px,390px)_minmax(0,430px)] lg:justify-between lg:gap-x-[170px]">
            <div className="flex justify-center lg:justify-start">
              <FeatureImage
                src={secondFeature.image}
                alt={secondFeature.imageAlt}
                widthClassName="w-[250px] sm:w-[290px] md:w-[330px]"
              />
            </div>

            <div className="max-w-[430px]">
              <h3 className="text-[clamp(2rem,2.8vw,3rem)] font-bold leading-[1] tracking-[-0.04em] text-white">
                Leading Growth
                <br />
                Specialists
              </h3>
              <div className="mt-6 space-y-5 text-[13px] leading-[1.55] text-[#7f8b9a]">
                {secondFeature.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_360px] md:gap-x-10 lg:grid-cols-[minmax(0,430px)_minmax(420px,520px)] lg:justify-between lg:gap-x-[120px]">
            <div className="max-w-[420px]">
              {thirdFeature.badge ? (
                <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(142,70,211,0.16)] px-[10px] py-[4px] text-[10px] font-medium text-[#d98bff]">
                  <span className="inline-flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[rgba(196,83,255,0.22)] text-[9px]">
                    ↗
                  </span>
                  <span>{thirdFeature.badge}</span>
                </div>
              ) : null}

              <h3 className="mt-4 text-[clamp(2rem,2.9vw,3.1rem)] font-bold leading-[1] tracking-[-0.04em] text-white">
                Scale Your Social
                <br />
                Media to New Heights
              </h3>
              <p className="mt-6 max-w-[360px] text-[13px] leading-[1.6] text-[#7f8b9a]">
                {thirdFeature.description}
              </p>

              {thirdFeature.bullets ? (
                <div className="mt-8 space-y-5">
                  {thirdFeature.bullets.map((bullet) => (
                    <div key={bullet.title} className="flex items-start gap-3">
                      <span
                        className={`mt-[2px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] ${bulletIconClasses[bullet.color]}`}
                      >
                        <span className="text-[10px]">↗</span>
                      </span>
                      <div>
                        <h4 className="text-[13px] font-semibold text-white">
                          {bullet.title}
                        </h4>
                        <p className="mt-1 text-[12px] leading-[1.5] text-[#7f8b9a]">
                          {bullet.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="flex justify-center lg:justify-end">
              <FeatureImage
                src={thirdFeature.image}
                alt={thirdFeature.imageAlt}
                widthClassName="w-[290px] sm:w-[360px] md:w-[430px] lg:w-[500px]"
                glowClassName="absolute inset-[25%] rounded-full bg-[#f121d5] blur-[50px] opacity-[0.65] lg:blur-[70px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
