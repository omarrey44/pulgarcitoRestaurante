// Organic single-period wave divider between sections.
// fill = color of the NEXT section (below wave). flip = true inverts vertically.
export default function WaveDivider({
  fill = "#FBF4E9",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  // One smooth wave: rises on left-center, dips on right-center — matches reference
  const path =
    "M0,60 C360,10 720,10 900,65 C1060,110 1260,105 1440,60 L1440,120 L0,120 Z";

  return (
    <div
      className={`pointer-events-none overflow-hidden leading-[0] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`block h-14 w-full md:h-20 lg:h-28 ${flip ? "scale-y-[-1]" : ""}`}
      >
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
}
