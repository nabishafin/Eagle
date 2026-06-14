import Image from "next/image";

import { eagleLikeFeatures, images, pressLogos } from "@/constants";

const thirdFeatureImage = eagleLikeFeatures[2]?.image;

const bulletAccents = [
  "bg-[#ff4bd8]",
  "bg-[#28d7ff]",
  "bg-[#5d86ff]",
  "bg-[#41e38b]",
];

const thirdFeatureBulletDescriptions = [
  "Track your growth with real-time analytics and actionable metrics",
  "Build meaningful connections with your growing community",
  "Monitor your success with comprehensive performance metrics",
];

const pressLogoClassNames = [
  "h-[50px]",
  "h-[50px]",
  "h-[50px]",
  "h-[50px]",
  "h-[50px]",
  "h-[50px]",
  "h-[50px]",
];

const desktopFeatureGapClassName = "lg:justify-center lg:gap-x-[300px]";

type FeatureSectionConfig = {
  containerClassName: string;
  contentClassName: string;
  imageWrapperClassName: string;
  imageFrameClassName: string;
  imageClassName?: string;
  imageWidth: number;
  imageHeight: number;
  preload: boolean;
  wrapperClassName?: string;
  gradientTitle?: boolean;
  showBullets?: boolean;
  imageGlowClassName?: string | null;
};

const featureSectionConfigs: FeatureSectionConfig[] = [
  {
    containerClassName:
      `grid items-center gap-10 md:grid-cols-[minmax(0,420px)_minmax(320px,420px)] md:gap-14 ${desktopFeatureGapClassName}`,
    contentClassName: "flex flex-col gap-[35px]",
    imageWrapperClassName: "order-1 flex justify-center md:order-2 md:justify-end",
    imageFrameClassName: "w-[250px] md:w-[320px] lg:w-[380px]",
    imageWidth: 380,
    imageHeight: 540,
    preload: true,
  },
  {
    containerClassName:
      `grid items-center gap-10 md:grid-cols-[minmax(320px,420px)_minmax(0,420px)] md:gap-14 ${desktopFeatureGapClassName}`,
    contentClassName: "flex max-w-[420px] flex-col gap-[35px]",
    imageWrapperClassName: "flex justify-center md:justify-start",
    imageFrameClassName: "w-[250px] md:w-[320px] lg:w-[380px]",
    imageWidth: 380,
    imageHeight: 540,
    preload: false,
  },
  {
    wrapperClassName: "border-t border-white/6 pt-16 md:pt-20",
    containerClassName:
      `grid items-center gap-12 md:grid-cols-[693px_minmax(0,520px)] md:gap-16 ${desktopFeatureGapClassName}`,
    contentClassName: "flex max-w-[520px] flex-col gap-[35px]",
    imageWrapperClassName: "flex justify-center md:justify-start",
    imageFrameClassName: "w-[693px] shrink-0",
    imageWidth: thirdFeatureImage?.width ?? 693,
    imageHeight: thirdFeatureImage?.height ?? 759,
    preload: false,
    gradientTitle: true,
    showBullets: true,
    imageGlowClassName: null,
  },
];

function splitTitle(title = "") {
  const words = title.split(" ");

  if (words.length <= 2) {
    return [title, ""];
  }

  return [words.slice(0, 2).join(" "), words.slice(2).join(" ")];
}

function GlowImage({
  alt,
  preload = false,
  src,
  width,
  height,
  frameClassName,
  imageClassName = "relative z-[1] h-auto w-full rounded-[2.5rem] object-cover",
  glowClassName = "absolute inset-x-[8%] inset-y-[10%] rounded-[2.6rem] bg-[rgba(0,132,255,0.5)] blur-[36px]",
}: {
  alt: string;
  frameClassName: string;
  glowClassName?: string | null;
  height: number;
  imageClassName?: string;
  preload?: boolean;
  src: Parameters<typeof Image>[0]["src"];
  width: number;
}) {
  return (
    <div className={`relative ${frameClassName}`}>
      {glowClassName ? <div className={glowClassName} /> : null}
      <div className="absolute inset-0 rounded-[2.6rem] shadow-[0_24px_50px_rgba(0,0,0,0.35)]" />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        preload={preload}
        className={imageClassName}
      />
    </div>
  );
}

function renderFeatureTitle(title: string, useGradient?: boolean) {
  const [firstLine, secondLine] = splitTitle(title);
  const content = (
    <>
      {firstLine}
      {secondLine ? (
        <>
          <br />
          {secondLine}
        </>
      ) : null}
    </>
  );

  if (!useGradient) {
    return content;
  }

  return (
    <span className="bg-[linear-gradient(90deg,#f067ff_0%,#9d63ff_100%)] bg-clip-text text-transparent">
      {content}
    </span>
  );
}

export function EagleLikeSection() {
  const reversedPressLogos = [...pressLogos].reverse();

  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={images.leftHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[118px] z-[1] h-auto w-[340px] select-none opacity-70"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[92px] z-[1] h-auto w-[265px] select-none opacity-[0.74]"
        priority
      />
      <Image
        src={images.leftHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[210px] left-0 z-[1] h-auto w-[340px] select-none opacity-70"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[160px] right-0 z-[1] h-auto w-[265px] select-none opacity-[0.74]"
        priority
      />

      <div className="relative z-[2] mx-auto w-full ">
        <div className="pb-8">
          <p className="mb-4 text-center text-[9px] tracking-[0.18em] text-[#99A1AF] uppercase">
            Eagle Likes is seen on...
          </p>
          <div className="overflow-hidden mt-10">
            <div className="flex w-max items-center gap-x-5 marquee-track md:gap-x-7">
              {[...reversedPressLogos, ...reversedPressLogos].map(
                (logo, index) => (
                  <Image
                    key={`${logo.src}-${index}`}
                    src={logo}
                    alt="Press Logo"
                    className={`${pressLogoClassNames[index % reversedPressLogos.length] || "h-[58px]"} w-auto shrink-0 object-contain opacity-90`}
                  />
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28 px-[181px]">
          {eagleLikeFeatures.map((feature, index) => {
            const config = featureSectionConfigs[index];

            if (!config) {
              return null;
            }

            const featureContent = (
              <div
                className={`${config.contentClassName} ${
                  index === 2 ? "relative -top-[90px]" : ""
                }`}
              >
                <h2 className="text-[clamp(2rem,3vw,3rem)] leading-[0.96] font-bold tracking-[-0.04em] text-white">
                  {renderFeatureTitle(feature.title, config.gradientTitle)}
                </h2>
                <p className="mt-5 max-w-[420px] text-[18px] leading-[1.55] text-[#8c99ac]">
                  {feature.description}
                </p>

                {config.showBullets && feature.bullets && (
                  <div className="mt-6 space-y-4">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <span
                          className={`mt-1 inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] ${bulletAccents[bulletIndex % bulletAccents.length]} shadow-[0_10px_20px_rgba(0,0,0,0.22)]`}
                        >
                          <span className="h-[7px] w-[7px] rounded-full bg-white" />
                        </span>
                        <div className="space-y-1">
                          <h4 className="text-[13px] font-semibold tracking-[0.01em] text-white md:text-[14px]">
                            {bullet}
                          </h4>
                          <p className="text-[12px] leading-[1.45] text-[#7d8593]">
                            {thirdFeatureBulletDescriptions[bulletIndex]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );

            const featureImage = (
              <div className={config.imageWrapperClassName}>
                <GlowImage
                  src={feature.image}
                  alt={feature.imageAlt || feature.title}
                  width={config.imageWidth}
                  height={config.imageHeight}
                  frameClassName={config.imageFrameClassName}
                  imageClassName={config.imageClassName}
                  preload={config.preload}
                  glowClassName={config.imageGlowClassName}
                />
              </div>
            );

            const sectionContent = (
              <div className={config.containerClassName}>
                {feature.imagePosition === "left" ? (
                  <>
                    {featureImage}
                    {featureContent}
                  </>
                ) : (
                  <>
                    {featureContent}
                    {featureImage}
                  </>
                )}
              </div>
            );

            return config.wrapperClassName ? (
              <div key={feature.title} className={config.wrapperClassName}>
                {sectionContent}
              </div>
            ) : (
              <div key={feature.title}>{sectionContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
