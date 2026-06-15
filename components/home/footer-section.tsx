import Image from "next/image";

import { footerLinkGroups, images, paymentLogos } from "@/constants";

export function FooterSection() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-[rgba(255,255,255,0.06)] px-6 pb-6 pt-10 md:px-10 lg:px-[28px] lg:pb-8 lg:pt-12">
      <div className="pointer-events-none absolute left-[-78px] top-[38px] z-[1] h-[188px] w-[188px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:12px_12px] opacity-40" />

      <div className="relative z-[2] mx-auto max-w-[1260px]">
        <div className="grid gap-8 border-b border-[rgba(255,255,255,0.06)] pb-8 md:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-[1fr_1fr_1fr_1.8fr_1.2fr_0.8fr] lg:gap-10">
          {footerLinkGroups.map((group, index) => (
            <div key={`${group.title}-${index}`} className="min-w-0 text-center md:text-left">
              <h3 className="text-[17px] font-semibold text-white">
                {group.title === " " ? "\u00A0" : group.title}
              </h3>
              <div className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <p
                    key={link}
                    className="text-[13px] leading-[1.5] text-[#a1a7b1]"
                  >
                    {link}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col items-center gap-5 md:flex-row md:justify-between text-center md:text-left">
          <div className="flex items-center justify-center gap-2 text-[13px] text-[#a7adb6]">
            <Image
              src={images.globe}
              alt=""
              aria-hidden="true"
              className="h-[14px] w-[14px] opacity-80"
            />
            <span>EN</span>
            <span className="text-[11px] text-[#8c93a0]">⌄</span>
          </div>

          <p className="text-[13px] text-[#8f959f]">
            Copyright © 2025 Eagle Likes, All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {paymentLogos.map((logo, index) => (
              <div
                key={`${logo.src || index}`}
                className="flex h-[26px] w-[42px] items-center justify-center rounded-[4px] bg-white p-1"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={logo}
                    alt="Payment method"
                    fill
                    sizes="42px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
