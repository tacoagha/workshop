const CONFIG = {
  // ─── BRANDING ──────────────────────────────────────────── opencode -s ses_13929a181ffebakJg5LSITufGZ
  name: "Taco Agha",
  tagline: "Developer & Pro linux User (Ubuntu btw)",
  bio: "Me like Being an idiot and doing things i shouldent in linux",

  // ─── PAGES (shown in nav; order matters) ─────────────────
  pages: [
    { label: "Home", file: "index.html" },
    { label: "About", file: "about.html" },
    { label: "Projects", file: "projects.html" },
    { label: "Downloads", file: "downloads.html" },
    { label: "Notes", file: "notes.html" },
    { label: "Blog", file: "blog.html" },
    { label: "Music", file: "music.html" },
  ],

  // ─── SOCIAL (empty url = skipped) ────────────────────────
  social: [
    { label: "GitHub",     url: "https://github.com/tacoagha",   icon: "github" },
    { label: "GitLab",     url: "",   icon: "gitlab" },
    { label: "Google Drive", url: "https://drive.google.com/drive/folders/1p4oLpDARcWm73_k4l7CbewuYQKqockYd?usp=drive_link",     icon: "drive" },
    { label: "Twitter",    url: "",        icon: "twitter" },
    { label: "LinkedIn",   url: "",                               icon: "linkedin" },
    { label: "YouTube",    url: "",  icon: "youtube" },
  ],

  // ─── HOME PAGE ───────────────────────────────────────────
  home: {
    subtitle: "Welcome to my little corner of the internet.",
    cta: { label: "See What i have done", href: "projects.html" },
  },

  // ─── ABOUT ───────────────────────────────────────────────
  about: {
    title: "About Me",
    paragraphs: [
      "i have been a hobby dev for about 3 years if you see me inactive expect me to be doing experimints"
    ],
  },

  // ─── PROJECTS ────────────────────────────────────────────
  projects: {
    title: "Projects",
    list: [
      {
        title: "Openbw",
        desc: "A browser built with raylib in pure c",
        tags: ["c", "linux", "raylib"],
        url: "https://github.com/tacoagha/openbw",
      }
    ],
  },


  // ─── DOWNLOADS ───────────────────────────────────────────
  downloads: {
    title: "Downloads",
    list: [
      {
        name: "Openbw - Linux x86_64",
        desc: "Openbw Binary for linux",
        file: "raybin",
        size: "7.7 MB",
      }
    ],
  },

  // ─── NOTES ───────────────────────────────────────────────
  notes: {
    title: "Notes",
    list: [
      {
        title: "How to make a small linux distro from scratch!",
        date: "Soon...",
        desc: "A Guide to make a small linux distro. Download and repo link soon",
      }
    ],
  },

  // ─── MUSIC ────────────────────────────────────────────────
  music: {
    title: "Music I Love",
    list: [
      {
        title: "Not Like Us",
        artist: "Kendrick Lamar",
        url: "https://www.youtube.com/watch?v=H58vbez_m4E",
        album: "",
      },
    ],
  },

  // ─── CONTACT ─────────────────────────────────────────────
  contact: {
    email: "hello@yourname.com",
    note: "Got a question or just want to say hi? Drop me an email.",
  },

  // ─── THEME (comment out to use CSS defaults) ─────────────
  theme: {
    primary: "#3b82f6",
    "primary-dark": "#1d4ed8",
    bg: "#0f172a",
    "bg-alt": "#1e293b",
    text: "#f8fafc",
    "text-muted": "#94a3b8",
  },
}
