import Image from "next/image";
import Link from "next/link";

import {
  bottomServiceTabs,
  featuredServiceButtons,
  heroActivityBadges,
  images,
  primaryNav,
  reviewStars,
  topServiceTabs,
} from "@/constants";

import { ActivityBadge } from "./activity-badge";
import { ServiceTabCard } from "./service-tab";

const navCaret = "\u2304";
const appleMark = "\uF8FF";
const starLabel = "\u2605";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden isolate">
      <div className="pointer-events-none absolute left-[-140px] top-[160px] z-0 h-[260px] w-[260px] rounded-full bg-[rgba(9,131,255,0.42)] blur-[70px] sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px] lg:blur-[80px]" />
      <div className="pointer-events-none absolute right-[-120px] top-[50px] z-0 h-[240px] w-[240px] rounded-full bg-[rgba(0,106,255,0.2)] blur-[70px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px] lg:blur-[80px]" />

      <Image
        src={images.leftHeroShadow}
        alt=""
        className="pointer-events-none absolute left-0 top-[88px] z-0 h-auto w-[220px] select-none opacity-60 sm:w-[270px] md:w-[300px] lg:w-[340px] lg:opacity-70"
        priority
      />
      <Image
        src={images.leftHeroShadowUnder}
        alt=""
        className="pointer-events-none absolute bottom-[-8px] left-0 z-0 h-auto w-[92px] select-none opacity-60 sm:w-[110px] md:w-[124px] lg:w-[138px] lg:opacity-70"
        priority
      />
      <Image
        src={images.leftHeroImg}
        alt=""
        className="pointer-events-none absolute left-[12px] top-[104px] z-[1] h-auto w-[28px] select-none opacity-[0.5] sm:left-[16px] sm:w-[34px] md:left-[20px] md:w-[38px] lg:left-[26px] lg:top-[112px] lg:w-[44px] lg:opacity-[0.58]"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        className="pointer-events-none absolute right-0 top-0 z-0 h-auto w-[170px] select-none opacity-[0.64] sm:w-[210px] md:w-[235px] lg:w-[265px] lg:opacity-[0.74]"
        priority
      />
      <Image
        src={images.rightHeroImg}
        alt=""
        className="pointer-events-none absolute right-[-6px] top-[66px] z-[1] h-auto w-[112px] select-none opacity-50 sm:w-[136px] md:w-[152px] lg:right-[-4px] lg:top-[76px] lg:w-[172px] lg:opacity-60"
        priority
      />
      <Image
        src={images.middleHeroImg}
        alt=""
        className="pointer-events-none absolute left-1/2 top-[82px] z-0 h-auto w-[min(118vw,520px)] -translate-x-1/2 select-none opacity-[0.18] sm:w-[min(104vw,620px)] md:w-[min(96vw,700px)] lg:top-[68px] lg:w-[min(92vw,762px)] lg:opacity-[0.26]"
        priority
      />

      <div className="relative z-[2] w-full px-4 pb-10 sm:px-6 md:px-10 lg:px-[100px]">
        <header className="flex min-h-[66px] flex-wrap items-center justify-between gap-4 border-b border-[rgba(68,129,203,0.34)] sm:min-h-[70px] lg:min-h-[74px]">
          <Link href="/" aria-label="Eagle Likes home" className="shrink-0">
            <Image src={images.appLogo} alt="Eagle Likes" priority className="h-auto w-[130px] sm:w-[150px] lg:w-auto" />
          </Link>

          <nav
            className="order-3 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 py-3 md:order-2 md:flex-1 md:gap-x-5 lg:order-none lg:w-auto lg:flex-nowrap lg:gap-[18px] lg:py-0"
            aria-label="Primary navigation"
          >
            {primaryNav.map((item) => (
              <Link
                key={item}
                href="/"
                className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.02em] text-[#d6e3f7] no-underline transition-colors duration-200 hover:text-white sm:text-[11px]"
              >
                <span>{item}</span>
                <span className="text-[10px] leading-none text-[#69adff]">
                  {navCaret}
                </span>
              </Link>
            ))}
          </nav>

          <Link
            href="/"
            className="order-2 inline-flex items-center gap-2 rounded-[10px] border border-[rgba(110,162,224,0.42)] bg-[rgba(8,24,43,0.94)] px-[11px] py-2 text-[11px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] no-underline sm:px-[13px] sm:py-[9px] sm:text-[12px] md:order-3"
          >
            <Image src={images.userIcon} alt="" />
            <span>Login</span>
          </Link>
        </header>

        <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-[183px]">
          <div className="w-full text-center">
            <h1 className="m-0 text-[clamp(1.95rem,3.6vw,3.75rem)] leading-[1.06] font-extrabold tracking-[-0.04em] text-white text-balance">
              Buy TikTok and Instagram Followers Views & Likes and{" "}
              <span className="text-[#04a9ff]">other Interactions!</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-[1.55] text-[#8ea7c6] sm:text-[16px] md:mt-5 md:text-[17px] lg:mt-[18px] lg:text-[19px]">
              Enhance your brand&apos;s online presence and increase engagement
              with our social media growth solutions.
            </p>
          </div>

          <div className="relative mt-8 h-auto w-full overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#10243d_0%,#08172a_42%,#06111f_100%)] pb-6 shadow-[0_28px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.04)] sm:mt-10 md:mt-12 lg:mt-[92px] lg:h-[422px] lg:rounded-[30px] lg:pb-[26px]">
            <div className="grid grid-cols-1 items-end bg-[linear-gradient(180deg,#20385a_0%,#1d314f_100%)] md:grid-cols-2 lg:grid-cols-4">
              {topServiceTabs.map((service) => (
                <ServiceTabCard key={service.name} service={service} />
              ))}
            </div>

            <div className="grid grid-cols-1 gap-x-5 gap-y-4 px-4 pt-6 sm:px-5 md:grid-cols-2 md:px-8 lg:px-[92px] lg:pt-[27px]">
              {featuredServiceButtons.map((label) => (
                <Link
                  key={label}
                  href="/"
                  className="inline-flex min-h-[51px] items-center justify-center rounded-[6px] bg-[linear-gradient(90deg,#b44fcb_0%,#df2158_100%)] px-4 text-[11px] font-extrabold tracking-[0.02em] text-white no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_20px_rgba(204,21,92,0.16)]"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 rounded-b-[24px] bg-[linear-gradient(180deg,#273547_0%,#1c2835_100%)] md:grid-cols-2 lg:mt-[30px] lg:grid-cols-4 lg:rounded-b-[30px]">
              {bottomServiceTabs.map((service) => (
                <ServiceTabCard key={service.name} service={service} bottom />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-[9px] px-4 sm:px-5 lg:mt-[34px]">
              <div
                className="flex items-center gap-[5px]"
                aria-label={`${reviewStars} star rating`}
              >
                {Array.from({ length: reviewStars }).map((_, index) => (
                  <span
                    key={index}
                    className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-[#149fff] text-[11px] text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
                  >
                    {starLabel}
                  </span>
                ))}
              </div>

              {heroActivityBadges.map((badge, index) => (
                <ActivityBadge key={badge} label={badge} compact={index === 1} />
              ))}

              <Link
                href="/"
                className="inline-flex min-h-[34px] items-center gap-2 rounded-[8px] bg-white px-[16px] text-[11px] font-semibold text-[#111827] no-underline shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
              >
                <span className="text-[16px] leading-none">{appleMark}</span>
                <span>Play</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
