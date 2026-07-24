import { useEffect, useState } from "react";

/** Year, Team, Player, Share — Correct is md+ only. */
export const STANDINGS_COLS_MOBILE = 4;
export const STANDINGS_COLS_DESKTOP = 5;

/** Matches Tailwind `md` (768px). */
const MD_UP = "(min-width: 768px)";

export function useStandingsColSpan() {
  const [colSpan, setColSpan] = useState(STANDINGS_COLS_MOBILE);

  useEffect(() => {
    const mq = window.matchMedia(MD_UP);
    const sync = () =>
      setColSpan(mq.matches ? STANDINGS_COLS_DESKTOP : STANDINGS_COLS_MOBILE);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return colSpan;
}
