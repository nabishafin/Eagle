"use client";

import { useState } from "react";
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

const appleMark = "\uF8FF";
const starLabel = "\u2605";

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden isolate">
      <div className="pointer-events-none absolute left-[-180px] top-[140px] z-0 h-[280px] w-[280px] rounded-full bg-[#0067DB]/80 blur-[80px] sm:h-[340px] sm:w-[340px] lg:left-[-240px] lg:h-[420px] lg:w-[420px] lg:blur-[100px]" />
      <div className="pointer-events-none absolute right-[-120px] top-[50px] z-0 h-[240px] w-[240px] rounded-full bg-[#38bdf8]/12 blur-[70px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px] lg:blur-[80px]" />

      <Image
        src={images.hero_top_shadow}
        alt=""
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-auto w-[min(100%,980px)] -translate-x-1/2 select-none opacity-80"
        priority
      />
      <Image
        src={images.leftHeroShadow}
        alt=""
        className="pointer-events-none absolute left-0 top-[20px] z-0 h-auto w-[320px] select-none opacity-60 sm:top-[30px] sm:w-[380px] md:top-[40px] md:w-[440px] lg:top-[50px] lg:w-[500px] lg:opacity-75"
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
        className="pointer-events-none absolute left-[12px] top-[104px] z-[1] h-auto w-[24px] select-none opacity-[0.5] sm:left-[16px] sm:w-[28px] md:left-[20px] md:w-[32px] lg:left-[26px] lg:top-[112px] lg:w-[36px] lg:opacity-[0.58]"
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

      <div className="relative z-[10] w-full border-b border-[rgba(68,129,203,0.34)]">
        {/* Header Container */}
        <header className="relative mx-auto flex min-h-[66px] items-center justify-between gap-4 px-4 sm:min-h-[70px] sm:px-6 md:px-10 lg:min-h-[74px] lg:px-8 max-w-[1220px] w-full">
          <Link href="/" aria-label="Eagle Likes home" className="shrink-0 z-[51]">
            <Image src={images.appLogo} alt="Eagle Likes" priority className="h-auto w-[160px] sm:w-[185px] lg:w-[215px]" />
          </Link>

          {/* Desktop Navigation & Mobile Drawer Nav */}
          <nav
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-y-6 bg-[rgba(8,24,43,0.98)] p-6 transition-all duration-300 md:static md:z-auto md:flex-row md:w-auto md:flex-1 md:gap-x-3.5 md:bg-transparent md:p-0 lg:gap-x-4 xl:gap-x-5 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"
              }`}
            aria-label="Primary navigation"
          >
            {primaryNav.map((item) => (
              <Link
                key={item}
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center gap-1.5 text-[16px] font-semibold tracking-[0.02em] text-[#d6e3f7] no-underline transition-colors duration-200 hover:text-white md:text-[12px] lg:text-[13px] xl:text-[14px]"
              >
                <span>{item}</span>
                <span className="text-[10px] leading-none text-[#69adff]">
                  <Image src={images.arrow_down} alt="" />
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 z-[51]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-[10px] border border-[rgba(110,162,224,0.42)] bg-[rgba(8,24,43,0.94)] px-[12px] py-2 text-[12px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] no-underline sm:px-[14px] sm:py-[9px] md:text-[13px]"
            >
              <Image src={images.userIcon} alt="" />
              <span>Login</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-[10px] border border-[rgba(110,162,224,0.3)] bg-[rgba(8,24,43,0.8)] md:hidden"
              aria-label="Toggle menu"
            >
              <span className={`h-[2px] w-5 bg-white transition-transform duration-300 ${isMenuOpen ? "translate-y-[7px] rotate-44" : ""}`} />
              <span className={`h-[2px] w-5 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-5 bg-white transition-transform duration-300 ${isMenuOpen ? "-translate-y-[7px] -rotate-44" : ""}`} />
            </button>
          </div>
        </header>
      </div>

      <div className="relative z-[2] w-full max-w-[1220px] mx-auto px-4 pb-10 sm:px-6 md:px-10 lg:px-8">
        <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-[96px]">
          <div className="w-full text-center flex flex-col justify-center items-center mx-auto max-w-[1191px]">
            <h1 className="m-0 text-[clamp(1.95rem,3.6vw,3.75rem)] leading-[1.06] font-extrabold tracking-[-0.04em] text-white text-balance">
              Buy TikTok and Instagram Followers Views & Likes and{" "}
              <span className="text-[#04a9ff]">other Interactions!</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[880px] text-center text-[17px] leading-[26px] text-[#8ea7c6] font-normal sm:text-[19px] sm:leading-[30px] lg:mt-[18px] lg:text-[22px] lg:leading-[35px]" style={{ letterSpacing: '0px' }}>
              Enhance your brand&apos;s online presence and increase engagement
              with our social media growth solutions.
            </p>
          </div>

          <div className="relative mt-8 w-full overflow-hidden rounded-[24px] bg-transparent shadow-[0_28px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.04)] sm:mt-10 md:mt-12 lg:mt-[92px] lg:rounded-[30px]">
            <div className="grid grid-cols-4 items-end bg-transparent">
              {topServiceTabs.map((service) => (
                <ServiceTabCard key={service.name} service={service} />
              ))}
            </div>

            <div className="grid grid-cols-1 gap-x-5 gap-y-4 px-4 pt-6 sm:px-5 md:grid-cols-2 md:px-8 lg:px-[92px] lg:pt-[42px]">
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

            <div className="mt-6 grid grid-cols-4 rounded-b-[24px] bg-[#0663CD]/10 lg:mt-[42px] lg:h-[100px] lg:rounded-b-[30px] items-center overflow-hidden">
              {bottomServiceTabs.map((service) => (
                <ServiceTabCard key={service.name} service={service} bottom />
              ))}
            </div>
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
    </section>
  );
}