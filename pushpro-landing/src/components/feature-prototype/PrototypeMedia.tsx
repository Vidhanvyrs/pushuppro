"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import type { FeatureItem } from "./data";

type FeatureMediaProps = {
  feature: FeatureItem;
  active?: boolean;
  onEnded?: () => void;
  className?: string;
  priority?: boolean;
};

export function FeatureMedia({
  feature,
  active = true,
  onEnded,
  className,
  priority = false,
}: FeatureMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [active]);

  const mediaClass = cn(
    "absolute inset-0 h-full w-full",
    feature.media.fit === "cover" ? "object-cover" : "object-contain p-6",
    className,
  );

  if (feature.media.kind === "video") {
    return (
      <video
        ref={videoRef}
        key={feature.media.src}
        src={feature.media.src}
        aria-label={`${feature.eyebrow} feature preview`}
        autoPlay={active}
        muted
        playsInline
        preload={active ? "auto" : "metadata"}
        onEnded={onEnded}
        className={mediaClass}
      />
    );
  }

  return (
    <Image
      src={feature.media.src}
      alt={`${feature.eyebrow} in PushupPro`}
      fill
      priority={priority}
      sizes="(max-width: 768px) 90vw, 60vw"
      className={mediaClass}
    />
  );
}
