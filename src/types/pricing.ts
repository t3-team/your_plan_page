export interface PricingFeature {
  name: string;
  value: string;
  available: boolean;
}

export interface PricingPlan {
  title: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  currentPlan?: boolean;
  buttonText?: string;
}