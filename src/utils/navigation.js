import { trackCtaClick } from "./analytics";

export function navigateToLeadForm(placement, ctaType = "quote") {
  trackCtaClick({ ctaType, placement });
  document.getElementById("savings-form")?.scrollIntoView({ behavior: "smooth" });
}
