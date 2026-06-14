import Image from "next/image";

import { eagleServiceFeature, images } from "@/constants";

type ServiceCardArtVariant =
  | "blue-eagle"
  | "blue-write"
  | "pink-eagle"
  | "pink-write"
  | "green-eagle"
  | "green-write"
  | "red-eagle"
  | "red-write";

type ServiceSectionVariant = {
  cardKeys: [string, string];
  containerClassName: string;
  gridClassName: string;
  leftCardsClassName: string;
  leftCardClassName: string;
  rightCardClassName: string;
  accentClassName: string;
  bulletIconClassName: string;
  bulletTextClassName: string;
  buttonClassName: string;
  reviewIconClassName?: string;
  titleSuffix?: string;
  compact?: boolean;
};

const serviceSectionVariants: ServiceSectionVariant[] = [
  {
    cardKeys: ["blue", "blue"],
    containerClassName:
      "mt-14 rounded-[34px] bg-gradient-to-b from-[#041a2e] to-[#050505] px-8 py-9 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:px-10 md:py-11 lg:px-8 lg:py-10",
    gridClassName:
      "grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.72fr)_minmax(0,0.72fr)]",
    leftCardsClassName: "",
    leftCardClassName:
      "rounded-[28px] border border-[rgba(88,139,203,0.18)] bg-[rgba(8,22,40,0.56)] px-7 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
    rightCardClassName: "rounded-[28px] px-4 py-4 md:px-6 md:py-6",
    accentClassName: "text-[#267dff]",
    bulletIconClassName:
      "bg-[#f6fbff] text-[10px] font-bold text-[#1787ff]",
    bulletTextClassName: "text-[15px] leading-[1.45] text-[#f0f6ff]",
    buttonClassName:
      "mt-8 inline-flex min-h-[58px] w-full items-center justify-center rounded-[10px] bg-[linear-gradient(180deg,#2f78f5_0%,#235fd8_100%)] px-6 text-[15px] font-semibold text-white shadow-[0_18px_40px_rgba(32,98,225,0.26)] transition-transform duration-200 hover:translate-y-[-1px]",
    reviewIconClassName: "text-[#109cff]",
    titleSuffix: "Follower",
  },
  {
    cardKeys: ["pink", "pink"],
    containerClassName:
      "mt-8 rounded-[34px] bg-gradient-to-b from-[#2c042d] to-[#050505] sm:px-7 md:px-8 md:py-8 lg:px-8 lg:py-8",
    gridClassName:
      "grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch",
    leftCardsClassName: "grid h-full gap-4 sm:grid-cols-2 sm:items-stretch",
    leftCardClassName:
      "flex min-h-full flex-col rounded-[22px] border border-[rgba(161,72,171,0.22)] bg-[rgba(51,11,53,0.62)] px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
    rightCardClassName: "rounded-[28px] px-2 py-2 md:px-4 md:py-4",
    accentClassName: "text-[#FB00FF]",
    bulletIconClassName:
      "bg-[#ffe6f5] text-[10px] font-bold text-[#ff2da5]",
    bulletTextClassName: "text-[14px] leading-[1.45] text-[#f4ebf7]",
    buttonClassName:
      "mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#ff37b2_0%,#d80c8c_100%)] px-6 text-[14px] font-semibold text-white shadow-[#FE06A3] transition-transform duration-200 hover:translate-y-[-1px]",
  },
  {
    cardKeys: ["green", "green"],
    containerClassName:
      "mt-14 rounded-[34px] bg-gradient-to-b from-[#042e09] to-[#050505] px-8 py-9 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:px-10 md:py-11 lg:px-8 lg:py-10",
    gridClassName:
      "grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.72fr)_minmax(0,0.72fr)]",
    leftCardsClassName: "",
    leftCardClassName:
      "rounded-[28px] border border-[rgba(88,139,203,0.18)] bg-[#04F31F1A] px-7 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
    rightCardClassName: "rounded-[28px] px-4 py-4 md:px-6 md:py-6",
    accentClassName: "text-[#1ED760]",
    bulletIconClassName:
      "bg-[#f6fbff] text-[10px] font-bold text-[#1787ff]",
    bulletTextClassName: "text-[15px] leading-[1.45] text-[#f0f6ff]",
    buttonClassName:
      "mt-8 inline-flex min-h-[58px] w-full items-center justify-center rounded-[10px] bg-[#1ED760] px-6 text-[15px] font-semibold text-white shadow-[0_18px_40px_rgba(32,98,225,0.26)] transition-transform duration-200 hover:translate-y-[-1px]",
    reviewIconClassName: "text-[#109cff]",
    titleSuffix: "Views",
  },
  {
    cardKeys: ["red", "red"],
    containerClassName:
      "mt-8 rounded-[34px] bg-gradient-to-b from-[#2f0505] to-[#050505] sm:px-7 md:px-8 md:py-8 lg:px-8 lg:py-8",
    gridClassName:
      "grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch",
    leftCardsClassName: "grid h-full gap-4 sm:grid-cols-2 sm:items-stretch",
    leftCardClassName:
      "flex min-h-full flex-col rounded-[22px] border border-[rgba(161,72,171,0.22)] bg-[#FF00001A] px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
    rightCardClassName: "rounded-[28px] px-2 py-2 md:px-4 md:py-4",
    accentClassName: "text-[#FF0000]",
    bulletIconClassName:
      "bg-[#ffe6f5] text-[10px] font-bold text-[#ff2da5]",
    bulletTextClassName: "text-[14px] leading-[1.45] text-[#f4ebf7]",
    buttonClassName:
      "mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-[8px] bg-[#FF0000] px-6 text-[14px] font-semibold text-white shadow-[#FE06A3] transition-transform duration-200 hover:translate-y-[-1px]",
    titleSuffix: "Comments",
  },
  {
    cardKeys: ["blue", "blue"],
    containerClassName:
      "mt-14 rounded-[34px] bg-gradient-to-b from-[#041a2e] to-[#050505] px-8 py-9 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:px-10 md:py-11 lg:px-8 lg:py-10",
    gridClassName:
      "grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.72fr)_minmax(0,0.72fr)]",
    leftCardsClassName: "",
    leftCardClassName:
      "rounded-[28px] border border-[rgba(88,139,203,0.18)] bg-[rgba(8,22,40,0.56)] px-7 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
    rightCardClassName: "rounded-[28px] px-4 py-4 md:px-6 md:py-6",
    accentClassName: "text-[#267dff]",
    bulletIconClassName:
      "bg-[#f6fbff] text-[10px] font-bold text-[#1787ff]",
    bulletTextClassName: "text-[15px] leading-[1.45] text-[#f0f6ff]",
    buttonClassName:
      "mt-8 inline-flex min-h-[58px] w-full items-center justify-center rounded-[10px] bg-[linear-gradient(180deg,#2f78f5_0%,#235fd8_100%)] px-6 text-[15px] font-semibold text-white shadow-[0_18px_40px_rgba(32,98,225,0.26)] transition-transform duration-200 hover:translate-y-[-1px]",
    reviewIconClassName: "text-[#109cff]",
    titleSuffix: "Followers",
  },
  {
    cardKeys: ["pink", "pink"],
    containerClassName:
      "mt-8 rounded-[34px] bg-gradient-to-b from-[#2c042d] to-[#050505] sm:px-7 md:px-8 md:py-8 lg:px-8 lg:py-8",
    gridClassName:
      "grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch",
    leftCardsClassName: "grid h-full gap-4 sm:grid-cols-2 sm:items-stretch",
    leftCardClassName:
      "flex min-h-full flex-col rounded-[22px] border border-[rgba(161,72,171,0.22)] bg-[rgba(51,11,53,0.62)] px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
    rightCardClassName: "rounded-[28px] px-2 py-2 md:px-4 md:py-4",
    accentClassName: "text-[#FB00FF]",
    bulletIconClassName:
      "bg-[#ffe6f5] text-[10px] font-bold text-[#ff2da5]",
    bulletTextClassName: "text-[14px] leading-[1.45] text-[#f4ebf7]",
    buttonClassName:
      "mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#ff37b2_0%,#d80c8c_100%)] px-6 text-[14px] font-semibold text-white shadow-[#FE06A3] transition-transform duration-200 hover:translate-y-[-1px]",
  },
  {
    cardKeys: ["green", "green"],
    containerClassName:
      "mt-14 rounded-[34px] bg-gradient-to-b from-[#042e09] to-[#050505] px-8 py-9 shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:px-10 md:py-11 lg:px-8 lg:py-10",
    gridClassName:
      "grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.72fr)_minmax(0,0.72fr)]",
    leftCardsClassName: "",
    leftCardClassName:
      "rounded-[28px] border border-[rgba(88,139,203,0.18)] bg-[#04F31F1A] px-7 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
    rightCardClassName: "rounded-[28px] px-4 py-4 md:px-6 md:py-6",
    accentClassName: "text-[#1ED760]",
    bulletIconClassName:
      "bg-[#f6fbff] text-[10px] font-bold text-[#1787ff]",
    bulletTextClassName: "text-[15px] leading-[1.45] text-[#f0f6ff]",
    buttonClassName:
      "mt-8 inline-flex min-h-[58px] w-full items-center justify-center rounded-[10px] bg-[#1ED760] px-6 text-[15px] font-semibold text-white shadow-[0_18px_40px_rgba(32,98,225,0.26)] transition-transform duration-200 hover:translate-y-[-1px]",
    reviewIconClassName: "text-[#109cff]",
    titleSuffix: "Views",
  },
  {
    cardKeys: ["red", "red"],
    containerClassName:
      "mt-8 rounded-[34px] bg-gradient-to-b from-[#2f0505] to-[#050505] sm:px-7 md:px-8 md:py-8 lg:px-8 lg:py-8",
    gridClassName:
      "grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch",
    leftCardsClassName: "grid h-full gap-4 sm:grid-cols-2 sm:items-stretch",
    leftCardClassName:
      "flex min-h-full flex-col rounded-[22px] border border-[rgba(161,72,171,0.22)] bg-[#FF00001A] px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
    rightCardClassName: "rounded-[28px] px-2 py-2 md:px-4 md:py-4",
    accentClassName: "text-[#FF0000]",
    bulletIconClassName:
      "bg-[#ffe6f5] text-[10px] font-bold text-[#ff2da5]",
    bulletTextClassName: "text-[14px] leading-[1.45] text-[#f4ebf7]",
    buttonClassName:
      "mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-[8px] bg-[#FF0000] px-6 text-[14px] font-semibold text-white shadow-[#FE06A3] transition-transform duration-200 hover:translate-y-[-1px]",
    titleSuffix: "Comments",
  },
];

function ServiceCardArt({ variant }: { variant: ServiceCardArtVariant }) {
  if (variant === "blue-eagle") {
    return (
      <div className="relative mx-auto h-[126px] w-[144px]">
        <Image
          src={images.blueEagle}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 h-auto w-[144px]"
        />
      </div>
    );
  }

  if (variant === "pink-eagle") {
    return (
      <div className="relative mx-auto h-[126px] w-[144px]">
        <Image
          src={images.pinkEagle}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 h-auto w-[144px]"
        />
      </div>
    );
  }

  if (variant === "green-eagle") {
    return (
      <div className="relative mx-auto h-[126px] w-[144px]">
        <Image
          src={images.greenEagle}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 h-auto w-[144px]"
        />
      </div>
    );
  }

  if (variant === "red-eagle") {
    return (
      <div className="relative mx-auto h-[126px] w-[144px]">
        <Image
          src={images.redEagle}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 h-auto w-[144px]"
        />
      </div>
    );
  }

  if (variant === "blue-write") {
    return (
      <div className="relative mx-auto h-[126px] w-[144px]">
        <Image
          src={images.blueWrite}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-auto w-[116px] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    );
  }

  if (variant === "pink-write") {
    return (
      <div className="relative mx-auto h-[126px] w-[144px]">
        <Image
          src={images.pinkWrite}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-auto w-[116px] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    );
  }

  if (variant === "green-write") {
    return (
      <div className="relative mx-auto h-[126px] w-[144px]">
        <Image
          src={images.greenWrite}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-auto w-[116px] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    );
  }

  return (
    <div className="relative mx-auto h-[126px] w-[144px]">
      <Image
        src={images.redWrite}
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-auto w-[116px] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

function ServiceSectionBlock({
  variant,
  titlePrefix,
  titleAccent,
  titleSuffix,
  firstCard,
  secondCard,
}: {
  variant: ServiceSectionVariant;
  titlePrefix: string;
  titleAccent: string;
  titleSuffix?: string;
  firstCard: (typeof eagleServiceFeature.cards)[number];
  secondCard: (typeof eagleServiceFeature.cards)[number];
}) {
  const cardVariants: [ServiceCardArtVariant, ServiceCardArtVariant] = [
    `${variant.cardKeys[0]}-eagle` as ServiceCardArtVariant,
    `${variant.cardKeys[1]}-write` as ServiceCardArtVariant,
  ];

  return (
    <div className={variant.containerClassName}>
      <div className={variant.gridClassName}>
        {variant.compact ? (
          <>
            <div className={variant.leftCardsClassName}>
              {[firstCard, secondCard].map((card, index) => (
                <article
                  key={`${variant.cardKeys[0]}-compact-${card.title}`}
                  className={variant.leftCardClassName}
                >
                  <ServiceCardArt variant={cardVariants[index]} />
                  <h4 className="mt-4 text-[16px] font-semibold leading-[1.45] text-white">
                    {card.title}
                  </h4>
                  <p className="mt-4 break-all text-[10px] leading-[1.55] text-[#8f7a92]">
                    {card.url}
                  </p>
                </article>
              ))}
            </div>

            <article className={variant.rightCardClassName}>
              <div className="inline-flex items-center gap-1 rounded-full bg-white px-[9px] py-[4px] text-[11px] font-semibold text-[#506171]">
                <span className={variant.reviewIconClassName || "text-[#109cff]"}>
                  ★
                </span>
                <span>{eagleServiceFeature.rating}</span>
                <span>{eagleServiceFeature.reviews}</span>
              </div>

              <h3 className="mt-5 text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.08] tracking-[-0.04em] text-white">
                {titlePrefix}
                <span className={variant.accentClassName}>{titleAccent}</span>
                {titleSuffix}
              </h3>

              <div className="mt-7 space-y-3.5">
                {eagleServiceFeature.bullets.map((bullet) => (
                  <div key={`${titleAccent}-${bullet}`} className="flex items-start gap-3">
                    <span
                      className={`mt-[2px] inline-flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full ${variant.bulletIconClassName}`}
                    >
                      ✓
                    </span>
                    <p className={variant.bulletTextClassName}>{bullet}</p>
                  </div>
                ))}
              </div>

              <button type="button" className={variant.buttonClassName}>
                {eagleServiceFeature.buttonLabel}
              </button>
            </article>
          </>
        ) : (
          <>
            <article className={variant.rightCardClassName}>
              <div className="inline-flex items-center gap-1 rounded-full bg-white px-[9px] py-[4px] text-[11px] font-semibold text-[#506171]">
                <span className={variant.reviewIconClassName || "text-[#109cff]"}>
                  ★
                </span>
                <span>{eagleServiceFeature.rating}</span>
                <span>{eagleServiceFeature.reviews}</span>
              </div>

              <h3 className="mt-7 text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.08] tracking-[-0.04em] text-white">
                {titlePrefix}
                <span className={variant.accentClassName}>{titleAccent}</span>
                {titleSuffix}
              </h3>

              <div className="mt-8 space-y-4">
                {eagleServiceFeature.bullets.map((bullet) => (
                  <div key={`${titleAccent}-${bullet}`} className="flex items-start gap-3">
                    <span
                      className={`mt-[2px] inline-flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full ${variant.bulletIconClassName}`}
                    >
                      ✓
                    </span>
                    <p className={variant.bulletTextClassName}>{bullet}</p>
                  </div>
                ))}
              </div>

              <button type="button" className={variant.buttonClassName}>
                {eagleServiceFeature.buttonLabel}
              </button>
            </article>

            {[firstCard, secondCard].map((card, index) => (
              <article
                key={`${variant.cardKeys[0]}-wide-${card.title}`}
                className={variant.leftCardClassName}
              >
                <ServiceCardArt variant={cardVariants[index]} />
                <h4 className="mt-5 text-[17px] font-semibold leading-[1.45] text-white">
                  {card.title}
                </h4>
                <p className="mt-4 break-all text-[11px] leading-[1.5] text-[#718195]">
                  {card.url}
                </p>
                <p className="mt-5 text-[13px] leading-[1.6] text-[#8f9dae]">
                  {card.description}
                </p>
              </article>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export function EagleServiceSection() {
  const [titleStart] = eagleServiceFeature.title.split(eagleServiceFeature.accent);
  const [firstCard, secondCard] = eagleServiceFeature.cards;

  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-12 md:px-12 lg:px-[92px] lg:pt-20">
      <Image
        src={images.leftHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[180px] z-[1] h-auto w-[220px] select-none opacity-60 sm:w-[260px] md:w-[300px] lg:w-[340px] lg:opacity-70"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[540px] z-[1] h-auto w-[170px] select-none opacity-[0.6] sm:w-[210px] md:w-[235px] lg:w-[265px] lg:opacity-[0.74]"
        priority
      />
      <Image
        src={images.leftHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[50%] z-[1] h-auto w-[220px] -translate-y-1/2 select-none opacity-60 sm:w-[260px] md:w-[300px] lg:w-[340px] lg:opacity-70"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[calc(50%+270px)] z-[1] h-auto w-[170px] -translate-y-1/2 select-none opacity-[0.6] sm:w-[210px] md:w-[235px] lg:w-[265px] lg:opacity-[0.74]"
        priority
      />
      <Image
        src={images.leftHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[300px] left-0 z-[1] h-auto w-[220px] select-none opacity-60 sm:w-[260px] md:w-[300px] lg:w-[340px] lg:opacity-70"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-40px] right-0 z-[1] h-auto w-[170px] select-none opacity-[0.6] sm:w-[210px] md:w-[235px] lg:w-[265px] lg:opacity-[0.74]"
        priority
      />

      <div className="relative z-[2] mx-auto max-w-[1260px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[clamp(2.1rem,3.4vw,3.6rem)] font-bold tracking-[-0.04em] text-white">
            Eagle Likes <span className="text-[#11a8ff]">Services</span>
          </h2>
          <p className="mt-6 text-[16px] leading-[1.65] text-[#95a2b3]">
            {eagleServiceFeature.description}
          </p>
        </div>

        <ServiceSectionBlock
          variant={serviceSectionVariants[0]}
          titlePrefix={titleStart}
          titleAccent={`${eagleServiceFeature.accent} `}
          titleSuffix={serviceSectionVariants[0].titleSuffix}
          firstCard={firstCard}
          secondCard={secondCard}
        />
        <ServiceSectionBlock
          variant={{ ...serviceSectionVariants[1], compact: true }}
          titlePrefix={titleStart}
          titleAccent={eagleServiceFeature.accent}
          titleSuffix={eagleServiceFeature.title.split(eagleServiceFeature.accent)[1]}
          firstCard={firstCard}
          secondCard={secondCard}
        />
        <ServiceSectionBlock
          variant={serviceSectionVariants[2]}
          titlePrefix={titleStart}
          titleAccent={eagleServiceFeature.accent}
          titleSuffix={serviceSectionVariants[2].titleSuffix}
          firstCard={firstCard}
          secondCard={secondCard}
        />
        <ServiceSectionBlock
          variant={{ ...serviceSectionVariants[3], compact: true }}
          titlePrefix={titleStart}
          titleAccent="Instagram "
          titleSuffix={serviceSectionVariants[3].titleSuffix}
          firstCard={firstCard}
          secondCard={secondCard}
        />
        <ServiceSectionBlock
          variant={serviceSectionVariants[4]}
          titlePrefix={titleStart}
          titleAccent="TikTok "
          titleSuffix={serviceSectionVariants[4].titleSuffix}
          firstCard={firstCard}
          secondCard={secondCard}
        />
        <ServiceSectionBlock
          variant={{ ...serviceSectionVariants[5], compact: true }}
          titlePrefix={titleStart}
          titleAccent="TikTok"
          titleSuffix={eagleServiceFeature.title.split(eagleServiceFeature.accent)[1]}
          firstCard={firstCard}
          secondCard={secondCard}
        />
        <ServiceSectionBlock
          variant={serviceSectionVariants[6]}
          titlePrefix={titleStart}
          titleAccent="TikTok"
          titleSuffix={serviceSectionVariants[6].titleSuffix}
          firstCard={firstCard}
          secondCard={secondCard}
        />
        <ServiceSectionBlock
          variant={{ ...serviceSectionVariants[7], compact: true }}
          titlePrefix={titleStart}
          titleAccent="TikTok "
          titleSuffix={serviceSectionVariants[7].titleSuffix}
          firstCard={firstCard}
          secondCard={secondCard}
        />
      </div>
    </section>
  );
}
