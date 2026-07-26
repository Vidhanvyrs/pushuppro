import {
  Dumbbell,
  MessageSquare,
  Scan,
  ScanFace,
  Share2,
  Target,
  TrendingUp,
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
    id: "personalized-plans",
    icon: Target,
    eyebrow: "Personalized Plans",
    heading: "A weekly plan built around you.",
    body: "Tell PushupPro your goals, fitness level, and available equipment. It builds a plan tailored to you and keeps it updated as you progress.",
    media: {
      kind: "image",
      src: "/output/imagegen/pushuppro-feature-cards/01-personalized-plans.png",
      fit: "contain",
    },
  },
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
    id: "progressive-overload",
    icon: TrendingUp,
    eyebrow: "Progressive Overload",
    heading: "Built to keep you climbing.",
    body: "PushupPro watches your progress and tells you exactly when to add weight or reps, so you never stall or guess.",
    media: {
      kind: "image",
      src: "/output/imagegen/pushuppro-feature-cards/03-progressive-overload.png",
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
  {
    id: "ai-coach",
    icon: MessageSquare,
    eyebrow: "AI Coach",
    heading: "A helpful hand mid-workout.",
    body: "Ask quick questions about rest times, form, or exercise swaps and get useful guidance without breaking your flow.",
    media: {
      kind: "image",
      src: "/output/imagegen/pushuppro-feature-cards/07-ai-coach.png",
      fit: "contain",
    },
  },
  {
    id: "pose-detection",
    icon: ScanFace,
    eyebrow: "Pose Detection & Challenges",
    heading: "Compete. Rep by rep with form feedback.",
    body: "Point your camera and PushupPro counts every rep, scores your form, flags bad reps, and lets you compete in pushup and plank challenges.",
    media: {
      kind: "image",
      src: "/output/imagegen/pushuppro-feature-cards/08-pose-detection-challenges.png",
      fit: "contain",
    },
  },
] as const;
