/**
 * Central analytics utility for G8 Solar.
 *
 * Required Google Ads setup (owner / ads admin):
 *   VITE_GOOGLE_ADS_ID=AW-18175802692
 *   VITE_GOOGLE_ADS_CONVERSION_LABEL=<conversion-action-label-from-google-ads>
 *
 * Optional:
 *   VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
 *
 * Phone click events record intent to call — not a completed phone call.
 */

const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID || "AW-18175802692";
const GOOGLE_ADS_CONVERSION_LABEL =
  import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL || "gqsaCI7dr-ccEMT68tpD";
const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID || "";

const LEAD_EVENT_SESSION_KEY = "g8_analytics_lead_fired";
const CALCULATOR_STARTED_KEY = "g8_analytics_calculator_started";

function isMobileContext() {
  if (typeof navigator === "undefined") return "unknown";
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? "mobile" : "desktop";
}

function currentPath() {
  if (typeof window === "undefined") return "";
  return window.location.pathname || "/";
}

function gtagSafe(...args) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag(...args);
      return true;
    }
  } catch (error) {
    console.warn("Analytics call failed:", error);
  }
  return false;
}

/** Fire a custom event — never throws. */
export function trackEvent(eventName, params = {}) {
  return gtagSafe("event", eventName, params);
}

/**
 * Records a phone link click (user intent to call, not a completed call).
 */
export function trackPhoneClick({ placement, phone }) {
  return trackEvent("phone_click", {
    event_category: "engagement",
    placement,
    phone_number: phone,
    page_path: currentPath(),
    device_type: isMobileContext(),
  });
}

/**
 * Primary quote / navigation / calculator-to-form CTA engagement.
 */
export function trackCtaClick({ ctaType, placement }) {
  const eventName =
    ctaType === "nav"
      ? "navigation_cta_click"
      : ctaType === "calculator_to_form"
        ? "calculator_to_form_cta_click"
        : "quote_cta_click";

  return trackEvent(eventName, {
    event_category: "engagement",
    cta_type: ctaType,
    placement,
    page_path: currentPath(),
    device_type: isMobileContext(),
  });
}

/** First calculator interaction in this browser session. */
export function trackCalculatorStarted() {
  if (typeof sessionStorage !== "undefined" && sessionStorage.getItem(CALCULATOR_STARTED_KEY)) {
    return false;
  }
  if (typeof sessionStorage !== "undefined") {
    sessionStorage.setItem(CALCULATOR_STARTED_KEY, "1");
  }
  return trackEvent("calculator_started", {
    event_category: "engagement",
    page_path: currentPath(),
  });
}

export function trackCalculatorCompleted() {
  return trackEvent("calculator_completed", {
    event_category: "engagement",
    page_path: currentPath(),
  });
}

/**
 * Lead conversion — fires once per browser session after confirmed form success.
 * Does not include PII in event parameters.
 */
export function trackLeadConversion({
  formName = "savings_estimate",
  language = "en",
  serviceInterest = "",
  leadSource = "",
  leadId = "",
} = {}) {
  if (typeof sessionStorage !== "undefined" && sessionStorage.getItem(LEAD_EVENT_SESSION_KEY)) {
    return false;
  }

  const params = {
    event_category: "conversion",
    form_name: formName,
    page_path: currentPath(),
    language,
    service_interest: serviceInterest || "general",
    lead_source: leadSource || "direct",
    lead_id: leadId || "not_set",
    value: 1,
  };

  trackEvent("generate_lead", params);

  if (GOOGLE_ADS_ID && GOOGLE_ADS_CONVERSION_LABEL) {
    gtagSafe("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
      value: 1.0,
      currency: "USD",
      transaction_id: leadId,
    });
  }

  if (GA4_MEASUREMENT_ID) {
    gtagSafe("event", "generate_lead", {
      send_to: GA4_MEASUREMENT_ID,
      ...params,
    });
  }

  if (typeof sessionStorage !== "undefined") {
    sessionStorage.setItem(LEAD_EVENT_SESSION_KEY, "1");
  }

  return true;
}

export function getAnalyticsConfigStatus() {
  return {
    googleAdsId: GOOGLE_ADS_ID || "(set VITE_GOOGLE_ADS_ID — default tag in index.html uses AW-18175802692)",
    googleAdsConversionLabel: GOOGLE_ADS_CONVERSION_LABEL || "(set VITE_GOOGLE_ADS_CONVERSION_LABEL)",
    ga4MeasurementId: GA4_MEASUREMENT_ID || "(optional — set VITE_GA4_MEASUREMENT_ID)",
  };
}
