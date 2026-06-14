type ActivityBadgeProps = {
  label: string;
  compact?: boolean;
};

export function ActivityBadge({
  label,
  compact = false,
}: ActivityBadgeProps) {
  return (
    <div
      className={`inline-flex min-h-[34px] items-center rounded-[8px] text-[11px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] ${
        compact
          ? "gap-[7px] bg-[#1295e7] px-[13px]"
          : "gap-[9px] bg-[#1295e7] px-[16px]"
      }`}
    >
      <span
        className={`rounded-full ${
          compact
            ? "flex h-[12px] w-[12px] items-center justify-center bg-white text-[8px] text-[#0ca3ff]"
            : "h-2 w-2 bg-[#50ff98] shadow-[0_0_12px_rgba(80,255,152,0.75)]"
        }`}
      >
        {compact ? "✓" : null}
      </span>
      <span>{label}</span>
    </div>
  );
}
