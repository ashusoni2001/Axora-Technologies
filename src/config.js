/**
 * Build-time feature flags (developer-controlled).
 *
 * THEME_PALETTE_ENABLED — exposes the floating theme-palette picker (the live
 * base/accent switcher) to visitors. OFF by default: the site ships locked on
 * the brand default (Frost · Aurora).
 *
 * Toggle by setting `VITE_THEME_PALETTE` in `.env` (local) or the Vercel
 * project env vars, then redeploy. `on` / `true` / `1` enable it; any other
 * value — or unset — keeps it off. (Vite only exposes `VITE_`-prefixed vars,
 * and inlines them at build time.)
 */
const raw = (import.meta.env.VITE_THEME_PALETTE ?? "").toString().trim().toLowerCase();

export const THEME_PALETTE_ENABLED =
  raw === "on" || raw === "true" || raw === "1";
