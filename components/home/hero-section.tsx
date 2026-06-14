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
      <div className="pointer-events-none absolute left-[-140px] top-[160px] z-0 h-[360px] w-[360px] rounded-full bg-[rgba(9,131,255,0.42)] blur-[80px]" />
      <div className="pointer-events-none absolute right-[-120px] top-[50px] z-0 h-[320px] w-[320px] rounded-full bg-[rgba(0,106,255,0.2)] blur-[80px]" />

      <Image
        src={images.leftHeroShadow}
        alt=""
        className="pointer-events-none absolute left-0 top-[88px] z-0 h-auto w-[340px] select-none opacity-70"
        priority
      />
      <Image
        src={images.leftHeroShadowUnder}
        alt=""
        className="pointer-events-none absolute bottom-[-8px] left-0 z-0 h-auto w-[138px] select-none opacity-70"
        priority
      />
      <Image
        src={images.leftHeroImg}
        alt=""
        className="pointer-events-none absolute left-[26px] top-[112px] z-[1] h-auto w-[44px] select-none opacity-[0.58]"
        priority
      />
      <Image
        src={images.rightHeroShadow}
        alt=""
        className="pointer-events-none absolute right-0 top-0 z-0 h-auto w-[265px] select-none opacity-[0.74]"
        priority
      />
      <Image
        src={images.rightHeroImg}
        alt=""
        className="pointer-events-none absolute right-[-4px] top-[76px] z-[1] h-auto w-[172px] select-none opacity-60"
        priority
      />
      <Image
        src={images.middleHeroImg}
        alt=""
        className="pointer-events-none absolute left-1/2 top-[68px] z-0 h-auto w-[min(92vw,762px)] -translate-x-1/2 select-none opacity-[0.26]"
        priority
      />

      <div className="relative z-[2] w-full px-[100px] pb-10">
        <header className="flex min-h-[74px] items-center justify-between gap-5 border-b border-[rgba(68,129,203,0.34)] max-[640px]:min-h-[66px]">
          <Link href="/" aria-label="Eagle Likes home" className="shrink-0">
            <Image src={images.appLogo} alt="Eagle Likes" priority />
          </Link>

          <nav
            className="flex flex-1 items-center justify-center gap-[18px]"
            aria-label="Primary navigation"
          >
            {primaryNav.map((item) => (
              <Link
                key={item}
                href="/"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.02em] text-[#d6e3f7] no-underline transition-colors duration-200 hover:text-white"
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
            className="inline-flex items-center gap-2 rounded-[10px] border border-[rgba(110,162,224,0.42)] bg-[rgba(8,24,43,0.94)] px-[14px] py-[9px] text-[12px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] no-underline max-[640px]:px-[11px] max-[640px]:py-2 max-[640px]:text-[11px]"
          >
            <Image src={images.userIcon} alt="" />
            <span>Login</span>
          </Link>
        </header>

        <div className="pt-[183px] max-[900px]:pt-8">
          <div className="w-full text-center">
            <h1 className="m-0 text-[clamp(1.95rem,3.6vw,3.75rem)] leading-[1.06] font-extrabold tracking-[-0.04em] text-white text-balance">
              Buy TikTok and Instagram Followers Views & Likes and{" "}
              <span className="text-[#04a9ff]">other Interactions!</span>
            </h1>
            <p className="mt-[18px] text-[19px] leading-[1.5] text-[#8ea7c6] max-[900px]:text-[16px] max-[640px]:mt-3.5 max-[640px]:text-[15px]">
              Enhance your brand&apos;s online presence and increase engagement
              with our social media growth solutions.
            </p>
          </div>

          <div className="relative mt-[92px] h-[422px] w-full overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,#10243d_0%,#08172a_42%,#06111f_100%)] pb-[26px] shadow-[0_28px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.04)] max-[640px]:mt-7">
            <div className="grid grid-cols-4 items-end bg-[linear-gradient(180deg,#20385a_0%,#1d314f_100%)] max-[900px]:grid-cols-1">
              {topServiceTabs.map((service) => (
                <ServiceTabCard key={service.name} service={service} />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-x-[20px] gap-y-4 px-[92px] pt-[27px] max-[900px]:grid-cols-1 max-[900px]:px-5">
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

            <div className="mt-[30px] grid grid-cols-4 rounded-b-[30px] bg-[linear-gradient(180deg,#273547_0%,#1c2835_100%)] max-[900px]:grid-cols-1">
              {bottomServiceTabs.map((service) => (
                <ServiceTabCard key={service.name} service={service} bottom />
              ))}
            </div>

            <div className="mt-[34px] flex items-center justify-center gap-[9px] max-[900px]:flex-wrap">
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
