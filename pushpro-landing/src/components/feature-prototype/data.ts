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
    media: { kind: "image", src: "/cardimg1.jpg", fit: "cover" },
  },
  {
    id: "pr-tracking",
    icon: Trophy,
    eyebrow: "PR Tracking",
    heading: "Your PRs, always in sight.",
    body: "PushupPro automatically detects and saves every personal record by exercise, rep range, and weight so you always know where you stand.",
    media: { kind: "video", src: "/test.mp4", fit: "cover" },
  },
  {
    id: "progressive-overload",
    icon: TrendingUp,
    eyebrow: "Progressive Overload",
    heading: "Built to keep you climbing.",
    body: "PushupPro watches your progress and tells you exactly when to add weight or reps, so you never stall or guess.",
    media: { kind: "image", src: "/prg-ovld.jpg", fit: "cover" },
  },
  {
    id: "exercise-library",
    icon: Dumbbell,
    eyebrow: "Exercise Library",
    heading: "900+ exercises. Every variations",
    body: "From barbell squats to bodyweight alternatives, PushupPro has every exercise with weighted and equipment-free swaps, so no gym or no gear ever stops your session.",
    media: { kind: "video", src: "/test2.mp4", fit: "cover" },
  },
  {
    id: "social-posters",
    icon: Share2,
    eyebrow: "Social Posters",
    heading: "Turn your workout into a moment.",
    body: "Every completed session can become a clean, branded poster with your exercises, sets, volume, and PRs ready to share.",
    media: { kind: "image", src: "/poster-untitled.png", fit: "contain" },
  },
  {
    id: "body-scan",
    icon: Scan,
    eyebrow: "Body Scan",
    heading: "Know your body before you train it.",
    body: "Upload front and back photos and PushupPro's AI maps your muscle balance, pinpointing which groups are lagging and where to focus next.",
    media: { kind: "image", src: "/gym.jpg", fit: "cover" },
  },
  {
    id: "ai-coach",
    icon: MessageSquare,
    eyebrow: "AI Coach",
    heading: "A helpful hand mid-workout.",
    body: "Ask quick questions about rest times, form, or exercise swaps and get useful guidance without breaking your flow.",
    media: { kind: "image", src: "/progressive-ovld.jpg", fit: "cover" },
  },
  {
    id: "pose-detection",
    icon: ScanFace,
    eyebrow: "Pose Detection & Challenges",
    heading: "Compete. Rep by rep with form feedback.",
    body: "Point your camera and PushupPro counts every rep, scores your form, flags bad reps, and lets you compete in pushup and plank challenges.",
    media: { kind: "image", src: "/posed.jpg", fit: "cover" },
  },
] as const;
