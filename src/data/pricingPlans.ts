import { PricingPlan } from '../types/pricing';

export const pricingPlans: PricingPlan[] = [
  {
    title: "Free",
    description: "Free plan for people to try out before buying additional survey, quiz creation options.",
    features: [
      { name: "AI Credits", value: "100", available: true },
      { name: "Response Credits", value: "20", available: true },
      { name: "AI-Generated Surveys/Quizzes", value: "5 AI Credits per AI Generation", available: true },
      { name: "AI-Powered Q&A Explanations", value: "2 AI Credits per explanation", available: true },
      { name: "AI-Powered Subjective Text Answer Evaluation", value: "2 AI Credits per evaluation", available: true },
      { name: "AI-Powered text generation in Report Builder", value: "Not Available", available: false },
      { name: "Video Proctoring", value: "Not Available", available: false },
      { name: "Questions Upload", value: "Not Available", available: false },
      { name: "Integration", value: "Google Docs", available: true },
      { name: "Safe Exam Browser", value: "Available", available: true },
    ],
  },
  {
    title: "Pro",
    description: "Pro plan comes with access to all features, suitable for heavy users and small businesses.",
    popular: true,
    currentPlan: true,
    features: [
      { name: "AI Credits", value: "1000", available: true },
      { name: "Response Credits", value: "500", available: true },
      { name: "AI-Generated Surveys/Quizzes", value: "5 AI Credits per AI Generation", available: true },
      { name: "AI-Powered Q&A Explanations", value: "2 AI Credits per explanation", available: true },
      { name: "AI-Powered text & image generation", value: "5 AI Credits per generation", available: true },
      { name: "Video Proctoring & Interview screening", value: "10 AI Credits per session", available: true },
      { name: "Questions Upload", value: "Excel & JSON", available: true },
      { name: "Integration", value: "Google Docs", available: true },
      { name: "Safe Exam Browser", value: "Available", available: true },
      { name: "Unused Credits Carry Over", value: "Yes", available: true },
    ],
  },
  {
    title: "Enterprise",
    description: "Custom enterprise plan with dedicated support and tailored solutions for your organization.",
    features: [
      { name: "AI Credits", value: "Custom", available: true },
      { name: "Response Credits", value: "Custom", available: true },
      { name: "All Pro Features Included", value: "", available: true },
      { name: "Custom Integration Support", value: "", available: true },
      { name: "Dedicated Account Manager", value: "", available: true },
      { name: "Priority Support", value: "", available: true },
      { name: "White Labeling Solution", value: "", available: true },
      { name: "Advanced Analytics", value: "", available: true },
      { name: "SLA Guarantee", value: "", available: true },
      { name: "Custom Contract Terms", value: "", available: true },
    ],
  },
];