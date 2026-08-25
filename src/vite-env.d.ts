/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
  readonly VITE_BASE44_APP_ID?: string;
  readonly VITE_BASE44_APP_BASE_URL?: string;
  readonly VITE_BASE44_FUNCTIONS_VERSION?: string;
  readonly VITE_GOOGLE_ADS_ID?: string;
  readonly VITE_GOOGLE_ADS_CONVERSION_LABEL?: string;
  readonly VITE_GA4_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}
