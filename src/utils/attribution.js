const STORAGE_KEY = "g8_lead_attribution";

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
];

function readStorage() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeStorage(data) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage unavailable — attribution is best-effort.
  }
}

/**
 * Capture marketing attribution on first visit and preserve URL params across the session.
 * Call once at app startup.
 */
export function initAttribution() {
  if (typeof window === "undefined") return;

  const existing = readStorage();
  const urlParams = new URLSearchParams(window.location.search);
  const paramUpdates = {};

  for (const param of TRACKED_PARAMS) {
    const value = urlParams.get(param);
    if (value) paramUpdates[param] = value;
  }

  const data = {
    ...(existing || {}),
    ...paramUpdates,
    landing_page_url: existing?.landing_page_url || window.location.href,
    referrer_url: existing?.referrer_url || document.referrer || "",
    captured_at: existing?.captured_at || new Date().toISOString(),
  };

  writeStorage(data);
}

/** Returns stored attribution for lead payloads (empty strings when absent). */
export function getAttributionFields() {
  const data = readStorage() || {};
  return {
    utm_source: data.utm_source || "",
    utm_medium: data.utm_medium || "",
    utm_campaign: data.utm_campaign || "",
    utm_term: data.utm_term || "",
    utm_content: data.utm_content || "",
    gclid: data.gclid || "",
    gbraid: data.gbraid || "",
    wbraid: data.wbraid || "",
    landing_page_url: data.landing_page_url || "",
    referrer_url: data.referrer_url || "",
  };
}

/** Compact lead-source label for analytics (no PII). */
export function getLeadSourceLabel() {
  const { utm_source, utm_medium, utm_campaign, gclid } = getAttributionFields();
  if (gclid) return "google_ads";
  if (utm_source) return `${utm_source}${utm_medium ? `/${utm_medium}` : ""}`;
  return "direct";
}
