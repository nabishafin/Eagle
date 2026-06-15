import { howItWorksSteps } from "@/constants";

function StepIcon({ icon }: { icon: "cart" | "user" | "lock" }) {
  if (icon === "cart") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="19" r="1.4" />
        <circle cx="18" cy="19" r="1.4" />
        <path d="M3 4h2.5l2.1 9.1a1 1 0 0 0 1 .78h8.9a1 1 0 0 0 .98-.8L20 8H7" />
      </svg>
    );
  }

  if (icon === "user") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 18.5c1.8-3 4.2-4.5 7-4.5s5.2 1.5 7 4.5" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="10" width="14" height="10" rx="2.5" />
      <path d="M8 10V7.8A4 4 0 0 1 12 4a4 4 0 0 1 4 3.8V10" />
    </svg>
  );
}

export function HowItWorksSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[rgba(31,86,150,0.28)] px-6 py-14 md:px-10 md:py-16 lg:px-[92px] lg:py-20">
      <div className="pointer-events-none absolute left-[-140px] top-[92px] h-[260px] w-[260px] rounded-full bg-[rgba(8,94,204,0.2)] blur-[90px] sm:h-[320px] sm:w-[320px]" />
      <div className="pointer-events-none absolute right-[-140px] top-0 h-[360px] w-[360px] rounded-full bg-[rgba(8,94,204,0.18)] blur-[110px]" />

      <div className="relative z-[1] mx-auto max-w-[1020px]">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-bold tracking-[-0.04em] text-white">
            How it works
          </h2>
          <p className="mx-auto mt-5 max-w-[430px] text-[14px] leading-[1.55] text-[#8b98a8] sm:text-[15px]">
            Ordering services is simple — pick your package, pay quickly, and
            watch your growth begin instantly
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {howItWorksSteps.map((step, index) => (
            <article
              key={step.number}
              className={`relative overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(20,21,28,0.95)_0%,rgba(12,13,17,0.95)_100%)] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-6 sm:py-6 ${index === 2 ? "md:col-span-2 md:max-w-[420px] md:justify-self-center lg:col-span-1 lg:max-w-none" : ""}`}
            >
              <div
                className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-[9px]"
                style={{
                  backgroundColor: step.iconBackground,
                  color: step.iconColor,
                }}
              >
                <StepIcon icon={step.icon} />
              </div>

              <div className="pointer-events-none absolute right-4 top-2 text-[66px] font-semibold leading-none tracking-[-0.08em] text-white/[0.07] sm:text-[74px]">
                {step.number}
              </div>

              <h3 className="mt-10 text-[15px] font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-4 max-w-[240px] text-[13px] leading-[1.55] text-[#919cab]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
