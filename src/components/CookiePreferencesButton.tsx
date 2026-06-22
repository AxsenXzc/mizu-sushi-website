"use client";

export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("mizu-open-cookie-preferences"))}
      className="text-xs text-text-dim hover:text-primary-light transition-colors cursor-pointer"
    >
      Preferenze Cookie
    </button>
  );
}
