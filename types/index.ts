import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// Re-export Pricing types
export type {
  PricingFeature,
  PricingTier,
  PricingProps,
} from "../components/Pricing";

// Re-export Form types
export type { FormData, FormTemplateProps } from "../components/FormTemplate";
