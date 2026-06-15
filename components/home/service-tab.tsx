import Image from "next/image";
import tiktokServiceBg from "@/public/tiktok_service.png";

import type { ServiceTab } from "@/constants";

type ServiceTabCardProps = {
  service: ServiceTab;
  bottom?: boolean;
};

const starLabel = "\u2605";

export function ServiceTabCard({
  service,
  bottom = false,
}: ServiceTabCardProps) {
  const isHighlightedTopCard = service.highlighted && !bottom;
  const baseClassName = bottom
    ? "relative flex min-h-[56px] sm:min-h-[74px] lg:h-full items-center justify-center sm:justify-start gap-3.5 px-[14px] py-[10px] sm:px-[18px] sm:py-[14px] first:rounded-bl-[22px] last:rounded-br-[22px]"
    : [
      "relative flex min-h-[56px] sm:min-h-[72px] items-center justify-center sm:justify-start gap-3.5 bg-[rgba(35,58,91,0.65)] px-[14px] py-[10px] sm:px-[18px] sm:py-[12px]",
      service.highlighted
        ? "z-[2] mt-[-8px] sm:mt-[-12px] min-h-[64px] sm:min-h-[84px] rounded-tl-[20px] sm:rounded-tl-[27px] rounded-tr-[20px] sm:rounded-tr-[27px] bg-transparent shadow-[0_10px_24px_rgba(0,0,0,0.16)] after:hidden before:hidden"
        : "border-b border-[rgba(79,110,154,0.22)]",
      !service.highlighted
        ? "first:rounded-tl-[22px] last:rounded-tr-[22px]"
        : "",
    ].join(" ")
    ;

  return (
    <article
      key={service.name}
      className={baseClassName}
      style={
        isHighlightedTopCard
          ? {
              backgroundColor: "#ffffff",
              backgroundImage: `url(${tiktokServiceBg.src})`,
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 100%",
            }
          : undefined
      }
    >
      <Image
        src={service.icon}
        alt=""
        className="h-[32px] w-[32px] shrink-0 max-[640px]:h-6 max-[640px]:w-6"
      />
      <div className="min-w-0 hidden sm:block">
        <h2
          className={`mb-[7px] text-[15px] leading-[1.1] font-semibold ${
            isHighlightedTopCard ? "text-[#131825]" : "text-white"
          } `}
        >
          {service.name}
        </h2>
        <div className="inline-flex items-center overflow-hidden rounded-full h-[22px] border border-[rgba(255,255,255,0.06)] shadow-sm">
          <span className="inline-flex h-full items-center gap-1 bg-white pl-2 pr-2.5 text-[11px] font-bold text-[#1e293b]">
            <span className="text-[#0a8cff] text-[11px] leading-none">{starLabel}</span>
            <span>{service.rating}</span>
          </span>
          <span
            className={`inline-flex h-full items-center px-2.5 text-[11px] font-extrabold ${
              isHighlightedTopCard
                ? "bg-[#edf1f7] text-[#8f9cb0]"
                : "bg-[rgba(255,255,255,0.14)] text-[#bfc7d2]"
            }`}
          >
            {service.count}
          </span>
        </div>
      </div>
    </article>
  );
}
