import { useEffect, useRef } from "react";

const GLYPHS = "{}[]()<>/=;:+*&|!?01$#_.constletfnasyncawait".split("");

const SNIPPETS = [
  "npm run dev",
  'git commit -m "ship it"',
  "const app = express();",
  "SELECT * FROM projects;",
  "useEffect(() => {}, []);",
  "php artisan serve",
  "git push origin main",
  "res.json({ ok: true });",
  "pm2 restart all",
  "docker compose up -d",
  "export default App;",
  "await fetch('/api')",
];

type Palette = { base: string; accent: string; syntax: string[]; alpha: number };

const DARK: Palette = {
  base: "139,148,158",
  accent: "249,115,22",
  syntax: ["255,123,114", "165,214,255", "210,168,255", "126,231,135", "251,146,60"],
  alpha: 0.22,
};

const LIGHT: Palette = {
  base: "100,116,139",
  accent: "234,88,12",
  syntax: ["207,34,46", "5,80,174", "130,80,223", "17,99,41", "194,65,12"],
  alpha: 0.2,
};

type Column = { x: number; y: number; speed: number; len: number; chars: string[] };
type Snippet = {
  text: string;
  x: number;
  y: number;
  vy: number;
  life: number;
  max: number;
  color: string;
};

const FONT_SIZE = 14;
const LINE = 18;

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

// Falling code rain + drifting terminal snippets, drawn on a canvas behind the page
export default function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDark = () => document.documentElement.classList.contains("dark");
    let palette = isDark() ? DARK : LIGHT;
    let width = 0;
    let height = 0;
    let columns: Column[] = [];
    let snippets: Snippet[] = [];
    let raf = 0;
    let last = 0;

    const pickColor = () =>
      palette.syntax[Math.floor(Math.random() * palette.syntax.length)];

    const newColumn = (x: number, initial: boolean): Column => ({
      x,
      y: initial ? Math.random() * height : -Math.random() * height * 0.5,
      speed: 25 + Math.random() * 55,
      len: 6 + Math.floor(Math.random() * 14),
      chars: Array.from({ length: 20 }, randomGlyph),
    });

    const newSnippet = (initial: boolean): Snippet => {
      const max = 9 + Math.random() * 8;
      return {
        text: SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)],
        x: Math.random() * Math.max(width - 240, 40),
        y: initial ? Math.random() * height : height * (0.5 + Math.random() * 0.5),
        vy: 8 + Math.random() * 10,
        life: initial ? Math.random() * max : 0,
        max,
        color: pickColor(),
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const spacing = width < 640 ? 34 : 26;
      columns = [];
      for (let x = 0; x < width; x += spacing) {
        // Keep the rain sparse so content stays readable
        if (Math.random() < 0.45) columns.push(newColumn(x, true));
      }
      snippets = Array.from({ length: width < 640 ? 4 : 8 }, () => newSnippet(true));
      if (reduced) draw(0);
    };

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = `500 ${FONT_SIZE}px "JetBrains Mono", monospace`;
      ctx.textBaseline = "top";

      for (const col of columns) {
        col.y += col.speed * dt;
        if (Math.random() < 0.04) {
          col.chars[Math.floor(Math.random() * col.chars.length)] = randomGlyph();
        }
        for (let i = 0; i < col.len; i++) {
          const y = col.y - i * LINE;
          if (y < -LINE || y > height) continue;
          ctx.fillStyle =
            i === 0
              ? `rgba(${palette.accent},${Math.min(palette.alpha * 2.4, 0.7)})`
              : `rgba(${palette.base},${palette.alpha * (1 - i / col.len)})`;
          ctx.fillText(col.chars[i % col.chars.length], col.x, y);
        }
        if (col.y - col.len * LINE > height) Object.assign(col, newColumn(col.x, false));
      }

      ctx.font = `500 13px "JetBrains Mono", monospace`;
      snippets.forEach((s, idx) => {
        s.life += dt;
        s.y -= s.vy * dt;
        const t = s.life / s.max;
        // Fade in, hold, fade out
        const a = Math.max(Math.min(t * 4, 1, (1 - t) * 4), 0) * palette.alpha * 1.6;
        ctx.fillStyle = `rgba(${s.color},${a})`;
        ctx.fillText(`> ${s.text}`, s.x, s.y);
        if (s.life >= s.max) snippets[idx] = newSnippet(false);
      });
    };

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      // ~30fps is plenty for a background
      if (dt >= 1 / 30) {
        last = now;
        draw(dt);
      }
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduced) {
        draw(0);
        return;
      }
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else start();
    };

    const themeObserver = new MutationObserver(() => {
      palette = isDark() ? DARK : LIGHT;
      snippets.forEach((s) => (s.color = pickColor()));
      if (reduced) draw(0);
    });

    resize();
    start();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div className="absolute -left-40 -top-40 h-[480px] w-[480px] animate-drift rounded-full bg-glow/15 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] animate-drift rounded-full bg-syn-var/10 blur-[140px] [animation-delay:-9s]" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Soften the centre so text over the rain stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--page)_0%,transparent_75%)] opacity-60" />
    </div>
  );
}
