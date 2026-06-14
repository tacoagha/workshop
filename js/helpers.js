/* ── helpers.js — shared utilities ─────────────────────────── */
(function () {
  "use strict"

  // ── Theme ──────────────────────────────────────────────────
  function applyTheme(t) {
    if (!t) return
    const r = document.documentElement
    for (const [k, v] of Object.entries(t)) r.style.setProperty(`--${k}`, v)
  }

  // ── Icons (loaded from Media/ as PNG) ──────────────────────
  function iconImg(name) {
    const n = name || "github"
    const img = document.createElement("img")
    img.src = "Media/" + n + ".png"
    return img
  }

  // ── DOM helpers ────────────────────────────────────────────
  function el(tag, attrs, children) {
    const node = document.createElement(tag)
    if (attrs) for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v)
    if (children == null) return node
    if (typeof children === "string" || typeof children === "number") {
      node.innerHTML = children
    } else if (Array.isArray(children)) {
      for (const c of children) {
        if (c == null || c === false) continue
        node.appendChild(typeof c === "string" ? document.createTextNode(c) : c)
      }
    }
    return node
  }

  function $(sel, ctx) { return (ctx || document).querySelector(sel) }

  function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)) }

  // ── Nav ─────────────────────────────────────────────────────
  function renderNav(currentPage) {
    const c = CONFIG
    const nav = el("nav", { class: "nav container" }, [
      el("a", { href: "index.html", class: "brand" }, [c.name]),
      el("div", { class: "nav-links", id: "navLinks" },
        c.pages.map((p) =>
          el("a", {
            href: p.file,
            class: "nav-link" + (p.file === currentPage ? " active" : ""),
          }, [p.label])
        )
      ),
      el("button", { class: "hamburger", id: "hamburger", "aria-label": "Menu" }, [
        el("span"), el("span"), el("span"),
      ]),
    ])
    const header = el("header", { class: "header" }, [nav])
    document.body.prepend(header)
  }

  // ── Footer ──────────────────────────────────────────────────
  function renderFooter() {
    const c = CONFIG
    const active = c.social.filter((s) => s.url)
    const links = active.map((s) =>
      el("a", { href: s.url, class: "social-link", target: "_blank", rel: "noopener", "aria-label": s.label }, [
        el("span", { class: "social-icon" }, [iconImg(s.icon)]),
      ])
    )
    const footer = el("footer", { class: "footer" }, [
      el("div", { class: "container footer-content" }, [
        links.length ? el("div", { class: "social-links" }, links) : null,
        el("p", { class: "footer-text" }, [
          `© ${new Date().getFullYear()} ${c.name}. Built with HTML, CSS & JS.`
        ]),
      ]),
    ])
    document.body.appendChild(footer)
  }

  // ── Page title ─────────────────────────────────────────────
  function setPageTitle(title) {
    document.title = title ? `${title} — ${CONFIG.name}` : CONFIG.name
  }

  // ── Hamburger & smooth scroll ──────────────────────────────
  function initMobileNav() {
    const hamburger = document.getElementById("hamburger")
    const navLinks = document.getElementById("navLinks")
    if (!hamburger) return
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open")
      hamburger.classList.toggle("active")
    })
    // close on link click
    $$(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open")
        hamburger.classList.remove("active")
      })
    })
  }

  // ── HTML escape ─────────────────────────────────────────────
  function escapeHtml(str) {
    const d = document.createElement("div")
    d.appendChild(document.createTextNode(str))
    return d.innerHTML
  }

  // ── Init ────────────────────────────────────────────────────
  window.helpers = {
    applyTheme,
    iconImg,
    el,
    $,
    $$,
    renderNav,
    renderFooter,
    setPageTitle,
    initMobileNav,
    escapeHtml,
  }
})()
