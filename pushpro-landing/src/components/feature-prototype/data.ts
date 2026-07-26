import {
  Dumbbell,
  Scan,
  Share2,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export type FeatureItem = {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  heading: string;
  body: string;
  media: {
    kind: "image" | "video";
    src: string;
    fit: "cover" | "contain";
  };
};

export const FEATURES: readonly FeatureItem[] = [
  {
    id: "pr-tracking",
    icon: Trophy,
    eyebrow: "PR Tracking",
    heading: "Your PRs, always in sight.",
    body: "PushupPro automatically detects and saves every personal record by exercise, rep range, and weight so you always know where you stand.",
    media: {
      kind: "image",
      src: "/output/imagegen/pushuppro-feature-cards/02-pr-tracking.png",
      fit: "contain",
    },
  },
  {
    id: "exercise-library",
    icon: Dumbbell,
    eyebrow: "Exercise Library",
    heading: "900+ exercises. Every variations",
    body: "From barbell squats to bodyweight alternatives, PushupPro has every exercise with weighted and equipment-free swaps, so no gym or no gear ever stops your session.",
    media: {
      kind: "image",
      src: "/output/imagegen/pushuppro-feature-cards/04-exercise-library.png",
      fit: "contain",
    },
  },
  {
    id: "social-posters",
    icon: Share2,
    eyebrow: "Social Posters",
    heading: "Turn your workout into a moment.",
    body: "Every completed session can become a clean, branded poster with your exercises, sets, volume, and PRs ready to share.",
    media: {
      kind: "image",
      src: "/output/imagegen/pushuppro-feature-cards/05-social-posters.png",
      fit: "contain",
    },
  },
  {
    id: "body-scan",
    icon: Scan,
    eyebrow: "Body Scan",
    heading: "Know your body before you train it.",
    body: "Upload front and back photos and PushupPro's AI maps your muscle balance, pinpointing which groups are lagging and where to focus next.",
    media: {
      kind: "image",
      src: "/output/imagegen/pushuppro-feature-cards/06-body-scan.png",
      fit: "contain",
    },
  },
] as const;
