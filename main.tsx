@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

:root {
  --bg: #0A0A0A;
  --fg: #F5F5F5;
  --accent: #CCFF00;
  --muted: rgba(255, 255, 255, 0.1);
  --border: rgba(255, 255, 255, 0.2);
  --font-display: "Inter", sans-serif;
  --font-timer: "JetBrains Mono", monospace;
  --radius: 1rem;
}

[data-theme="swiss"] {
  --bg: #F5F5F5;
  --fg: #000000;
  --accent: #E31B23;
  --muted: rgba(0, 0, 0, 0.05);
  --border: rgba(0, 0, 0, 0.1);
  --font-display: "Inter", sans-serif;
  --font-timer: "Inter", sans-serif;
  --radius: 0.25rem;
}

[data-theme="retro"] {
  --bg: #FFF9F0;
  --fg: #1A1A1A;
  --accent: #2D5A27;
  --muted: rgba(45, 90, 39, 0.05);
  --border: rgba(45, 90, 39, 0.1);
  --font-display: "Playfair Display", serif;
  --font-timer: "Inter", sans-serif;
  --radius: 2rem;
}

body {
  background-color: var(--bg);
  color: var(--fg);
  font-family: var(--font-display);
  -webkit-font-smoothing: antialiased;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.brutal-border {
  border: 1px solid var(--border);
}

.accent-text {
  color: var(--accent);
}

.accent-bg {
  background-color: var(--accent);
  color: #000;
}
