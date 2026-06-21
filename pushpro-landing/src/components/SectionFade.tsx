export default function SectionFade({
  from = "#EFEFEF",
  to = "#000000",
}: {
  from?: string;
  to?: string;
}) {
  return (
    <div
      className="pointer-events-none relative h-[30vh] w-full md:h-[40vh]"
      style={{ backgroundColor: to }}
    >
      {/* Elliptical radial gradient creates the semi-circle bulge */}
      <div
        className="absolute inset-x-0 top-0 h-full"
        style={{
          background: `radial-gradient(ellipse 120% 100% at 50% 0%, ${from} 0%, ${from} 40%, transparent 100%)`,
        }}
      />
    </div>
  );
}
