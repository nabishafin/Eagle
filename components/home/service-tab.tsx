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
    ? "relative flex min-h-[74px] items-center gap-3.5 px-[18px] py-[14px] first:rounded-bl-[22px] last:rounded-br-[22px] max-[900px]:rounded-[18px] max-[640px]:min-h-[74px] max-[640px]:p-[14px]"
    : [
      "relative flex min-h-[72px] items-center gap-3.5 border-b border-[rgba(79,110,154,0.22)] bg-[rgba(35,58,91,0.95)] px-[18px] py-[12px]",
      service.highlighted
        ? "z-[2] mt-[-12px] min-h-[84px] rounded-tl-[27px] rounded-tr-[27px] bg-transparent shadow-[0_10px_24px_rgba(0,0,0,0.16)] after:hidden before:hidden max-[900px]:mt-0 max-[900px]:rounded-[18px]"
        : "",
      !service.highlighted
        ? "first:rounded-tl-[22px] last:rounded-tr-[22px] max-[900px]:rounded-[18px]"
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
              backgroundImage: `url(${tiktokServiceBg.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }
          : undefined
      }
    >
      <Image
        src={service.icon}
        alt=""
        className="h-[40px] w-[40px] shrink-0 max-[640px]:h-8 max-[640px]:w-8"
      />
      <div className="min-w-0">
        <h2
          className={`mb-[7px] text-[15px] leading-[1.1] font-semibold ${
            isHighlightedTopCard ? "text-[#131825]" : "text-white"
          } `}
        >
          {service.name}
        </h2>
        <div className="flex flex-wrap items-center gap-1">
          <span className="inline-flex h-[18px] items-center justify-center rounded-full bg-[#eef8ff] px-[7px] text-[10px] font-bold text-[#0a8cff]">
            {starLabel} {service.rating}
          </span>
          <span
            className={`inline-flex h-[18px] items-center justify-center rounded-full px-[7px] text-[10px] font-extrabold ${isHighlightedTopCard
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
