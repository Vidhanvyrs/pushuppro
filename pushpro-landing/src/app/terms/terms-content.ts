export type TermsSection = {
  id: string;
  title: string;
  notice?: string;
  intro?: readonly string[];
  bullets?: readonly string[];
  outro?: readonly string[];
  privacyLink?: boolean;
  contactActions?: boolean;
};

export const termsSections: readonly TermsSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    intro: [
      'Welcome to PushUp Pro, operated by Neymo AI ("we", "us", "our"). By accessing or using PushUp Pro at https://pushup.neymo.ai (the "Service"), including our website, mobile applications, and any related services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not access or use the Service.',
      "Your continued use of the Service following the posting of any changes to these Terms constitutes acceptance of those changes.",
    ],
  },
  {
    id: "description",
    title: "Description of Service",
    intro: ["PushUp Pro is an AI-powered fitness platform that provides:"],
    bullets: [
      "Real-time camera-based exercise rep counting and form detection",
      "Fitness challenges (pushups, squats, planks, and more)",
      "A curated exercise library with detailed form guides",
      "AI-powered workout coaching and personalized recommendations",
      "Workout tracking and progress analytics",
      "MoveMatch — a feature to mimic and compare dance or exercise movements from reference videos",
    ],
    outro: [
      "The Service is currently free to use. We reserve the right to introduce paid tiers, subscriptions, or premium features in the future with reasonable advance notice.",
    ],
  },
  {
    id: "accounts",
    title: "Account Registration and Responsibilities",
    intro: [
      "To use certain features of the Service, you must create an account. When registering, you agree to:",
    ],
    bullets: [
      "Provide accurate, current, and complete information",
      "Maintain and promptly update your account information",
      "Keep your login credentials confidential and secure",
      "Accept responsibility for all activity that occurs under your account",
      "Notify us immediately of any unauthorized use of your account",
    ],
    outro: [
      "You must be at least 13 years old to create an account. If you are under 18, you must have the consent of a parent or legal guardian.",
      "We reserve the right to suspend or terminate accounts that violate these Terms or that have been inactive for an extended period.",
    ],
  },
  {
    id: "health-disclaimer",
    title: "Health and Fitness Disclaimer",
    notice:
      "Important: PushUp Pro is not a medical device and does not provide medical advice.",
    intro: ["By using the Service, you acknowledge and agree that:"],
    bullets: [
      "You should consult a qualified physician or healthcare provider before beginning any exercise program, particularly if you have pre-existing health conditions, injuries, or are pregnant.",
      "You participate in all exercises and physical activities entirely at your own risk.",
      "AI-generated coaching suggestions, rep counts, and form feedback are provided for informational purposes only and may not be perfectly accurate.",
      "We are not responsible for any injuries, health complications, or adverse effects that may result from following exercises, workouts, or AI coaching suggestions provided through the Service.",
      "You are solely responsible for determining whether any exercise is appropriate for your fitness level and physical condition.",
    ],
  },
  {
    id: "camera",
    title: "Camera Usage and Consent",
    intro: [
      "Certain features of PushUp Pro require access to your device's camera to provide real-time pose detection, rep counting, and movement analysis. By enabling camera access, you acknowledge and consent to the following:",
    ],
    bullets: [
      "Camera data is processed locally on your device using MediaPipe pose detection technology wherever possible.",
      "Video frames may be transmitted to our servers during live challenge sessions and MoveMatch comparisons for processing purposes.",
      "You are responsible for ensuring that no unintended individuals appear in the camera's field of view, or that you have their consent for any recording.",
      "You may revoke camera access at any time through your device or browser settings, though this will limit the functionality of certain features.",
    ],
    outro: [
      "For more details on how we handle your data, please refer to our Privacy Policy.",
    ],
    privacyLink: true,
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    intro: [
      "All content, features, and functionality of the Service — including but not limited to text, graphics, logos, icons, images, audio clips, video content, software, exercise descriptions, AI models, and the underlying code — are the exclusive property of Neymo AI or its licensors and are protected by Indian and international copyright, trademark, patent, and other intellectual property laws.",
      "You may not copy, reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit any part of the Service without our prior written consent, except as expressly permitted by these Terms.",
      "The PushUp Pro name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Neymo AI. You may not use such marks without our prior written permission.",
    ],
  },
  {
    id: "user-content",
    title: "User-Generated Content",
    intro: [
      'The Service may allow you to create, upload, or share content such as custom workouts, exercise videos, profile information, and MoveMatch recordings ("User Content"). By submitting User Content, you:',
    ],
    bullets: [
      "Retain ownership of your User Content.",
      "Grant us a non-exclusive, worldwide, royalty-free, sublicensable license to use, reproduce, modify, adapt, publish, and display your User Content solely for the purpose of operating, improving, and promoting the Service.",
      "Represent and warrant that you own or have the necessary rights to your User Content and that it does not infringe on any third party's rights.",
      "Agree not to submit content that is unlawful, harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable.",
    ],
    outro: [
      "We reserve the right to remove any User Content that violates these Terms or that we find objectionable, at our sole discretion and without prior notice.",
    ],
  },
  {
    id: "prohibited-uses",
    title: "Prohibited Uses",
    intro: ["You agree not to use the Service to:"],
    bullets: [
      "Violate any applicable law or regulation",
      "Impersonate any person or entity",
      "Interfere with or disrupt the Service or its servers and networks",
      "Attempt to gain unauthorized access to any part of the Service",
      "Use automated means (bots, scrapers, etc.) to access the Service without our written permission",
      "Reverse-engineer, decompile, or disassemble any part of the Service",
      "Use the Service for any commercial purpose without our consent",
      "Upload viruses, malware, or other harmful code",
    ],
  },
  {
    id: "warranties",
    title: "Disclaimer of Warranties",
    notice:
      'THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, NEYMO AI DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.',
    intro: ["We do not warrant that:"],
    bullets: [
      "The Service will be uninterrupted, timely, secure, or error-free",
      "AI-generated rep counts, form assessments, or coaching advice will be accurate or complete",
      "Pose detection or camera-based features will function correctly under all conditions",
      "Any defects in the Service will be corrected",
      "The Service will meet your specific requirements or expectations",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    notice:
      "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL NEYMO AI, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:",
    bullets: [
      "Your access to, use of, or inability to use the Service",
      "Any conduct or content of any third party on the Service",
      "Any injuries or health issues arising from exercises performed using the Service",
      "Unauthorized access, use, or alteration of your transmissions or content",
      "Inaccuracies in AI-generated coaching, rep counting, or pose detection",
    ],
    outro: [
      "In no event shall our total aggregate liability exceed the amount you have paid us, if any, in the twelve (12) months preceding the claim, or one thousand Indian Rupees (INR 1,000), whichever is greater.",
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    intro: [
      "You agree to defend, indemnify, and hold harmless Neymo AI and its officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys’ fees) arising out of or " +
        "relat" +
        "ing to:",
    ],
    bullets: [
      "Your violation of these Terms",
      "Your use of the Service",
      "Your User Content",
      "Any injury or harm resulting from exercises you perform while using the Service",
      "Your violation of any rights of a third party",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    intro: [
      "We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including but not limited to a breach of these Terms.",
      "Upon termination, your right to use the Service will immediately cease. You may request deletion of your account and associated data by contacting us at support@neymo.ai.",
      "All provisions of these Terms which by their nature should survive termination shall survive, including but not limited to ownership provisions, warranty disclaimers, indemnity, and limitations of liability.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law and Dispute Resolution",
    intro: [
      "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
      "Any disputes arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.",
      "Before filing any formal legal action, you agree to first attempt to resolve the dispute informally by contacting us at support@neymo.ai. We will attempt to resolve the dispute within thirty (30) days of receiving your notice.",
    ],
  },
  {
    id: "changes",
    title: "Changes to Terms",
    intro: [
      "We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least thirty (30) days’ notice before the new terms take effect, by posting a notice on the Service or sending an email to the address associated with your account.",
      "What constitutes a material change will be determined at our sole discretion. Your continued use of the Service after such changes become effective constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    id: "severability",
    title: "Severability",
    intro: [
      "If any provision of these Terms is held to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.",
    ],
  },
  {
    id: "entire-agreement",
    title: "Entire Agreement",
    intro: [
      "These Terms, together with our Privacy Policy and any other legal notices or agreements published by us on the Service, constitute the entire agreement between you and Neymo AI regarding your use of the Service and supersede all prior agreements and understandings.",
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    intro: [
      "If you have any questions about these Terms of Service, please contact us at:",
    ],
    contactActions: true,
  },
];
