import { useEffect, useRef, useState } from "react";
import "../styles/globals.css";

import imgProfile from "../imports/Homepage/bfb6f2a25f3acd87095005fe5f7726320aae6786.png";
import imgImage707 from "../imports/Homepage/b8c546037727e8b477417514212ed336934b490f.png";
import imgSubtract from "../imports/Homepage/ac0d43ec9a9286b864c20a7aa44098593cf94aa4.png";
import imgImage711 from "../imports/Homepage/07b433322fdc8393302044bb81d7b7607d17f0f6.png";
import imgImage710 from "../imports/Homepage/7df6ac73c1d78aca427cb088bc6c49553525a1da.png";
import imgCacnyMinimalistHdNoBg1 from "../imports/Homepage/77759f506a66976631e53144f4c3b28b1dc5690f.png";
import imgCacnyMinimalistHdNoBg2 from "../imports/Homepage/906802e3dd87ad145fbc25fc06b8b621c13df96c.png";
import imgImage712 from "../imports/Homepage/edfeeaa52be5113a11c54c4db6d0dbbb4b9cb2b9.png";
import imgImage713 from "../imports/Homepage/0dadcba52fdbf1af3006cde73fa57bc1730edb15.png";
import imgImage709 from "../imports/Homepage/616c462c9a8ec1c0d4f2125f7a7f37a8fef1ae7e.png";
import imgCrm1 from "../imports/Homepage/f5f5d6b6558af65b64c63509c384650c9e2cfcae.png";
import imgHennessyMembership1 from "../imports/Homepage/7d71e5bbd5ec5552244fd2a54ff105c5522ff366.png";
import img2025Amazon1 from "../imports/Homepage/b70da865a42f2073a04a93c3aa3f8bfcb3450519.png";
import imgPawtner1 from "../imports/Homepage/4010de59587c2da8ff8e6c13c555f7224eb0ee03.png";

const PATH_ELLIPSE =
  "M1110 410.209C1110 1198.1 861.515 1198.1 554.998 1198.1C248.481 1198.1 0 1198.1 0 410.209C0 183.657 248.481 0 554.998 0C861.515 0 1110 183.657 1110 410.209Z";

const PATH_LINKEDIN =
  "M4.5 0.200195H22.5C23.6404 0.200195 24.7346 0.652578 25.541 1.45898C26.3474 2.26539 26.7998 3.35957 26.7998 4.5V22.5C26.7998 23.6404 26.3474 24.7346 25.541 25.541C24.7346 26.3474 23.6404 26.7998 22.5 26.7998H4.5C3.35957 26.7998 2.26539 26.3474 1.45898 25.541C0.652578 24.7346 0.200195 23.6404 0.200195 22.5V4.5C0.200195 3.35957 0.652578 2.26539 1.45898 1.45898C2.26539 0.652578 3.35957 0.200195 4.5 0.200195ZM4.5 2.7998C4.04913 2.7998 3.61666 2.97904 3.29785 3.29785C2.97904 3.61666 2.7998 4.04913 2.7998 4.5V22.5C2.7998 22.9509 2.97904 23.3833 3.29785 23.7021C3.61666 24.021 4.04913 24.2002 4.5 24.2002H22.5C22.9509 24.2002 23.3833 24.021 23.7021 23.7021C24.021 23.3833 24.2002 22.9509 24.2002 22.5V4.5C24.2002 4.04913 24.021 3.61666 23.7021 3.29785C23.3833 2.97904 22.9509 2.7998 22.5 2.7998H4.5ZM7.5 10.7002C7.81826 10.7002 8.12539 10.8169 8.36328 11.0283C8.57145 11.2134 8.71416 11.46 8.77148 11.7305L8.79102 11.8477L8.7998 12V19.5L8.79395 19.623C8.76636 19.9094 8.64436 20.1798 8.44531 20.3906C8.21785 20.6316 7.90695 20.7765 7.57617 20.7959C7.24547 20.8153 6.92008 20.7077 6.66602 20.4951C6.44358 20.3089 6.29038 20.0547 6.22949 19.7734L6.20898 19.6523L6.2002 19.5V12C6.2002 11.6552 6.33726 11.3249 6.58105 11.0811C6.79429 10.8678 7.07364 10.7357 7.37109 10.7061L7.5 10.7002ZM12 9.2002C12.3045 9.20015 12.5992 9.30691 12.833 9.50195C13.0668 9.697 13.2248 9.96806 13.2793 10.2676L13.3301 10.5469L13.5762 10.4043C13.8712 10.234 14.1756 10.0803 14.4883 9.94531L14.4893 9.94629C15.3961 9.55881 16.726 9.33621 17.958 9.64551L18.2021 9.71387C18.7956 9.90208 19.3856 10.2312 19.8574 10.7627L20.0518 11.0029C20.4418 11.5291 20.6778 12.1589 20.7637 12.8701L20.791 13.1807L20.7998 13.5059V19.5L20.7939 19.623C20.7664 19.9094 20.6444 20.1798 20.4453 20.3906C20.2179 20.6316 19.9069 20.7765 19.5762 20.7959C19.2455 20.8153 18.9201 20.7077 18.666 20.4951C18.4436 20.3089 18.2904 20.0547 18.2295 19.7734L18.209 19.6523L18.2002 19.5V13.5C18.2002 12.9701 18.0701 12.6962 17.9629 12.5498L17.9639 12.5488L17.958 12.542L17.8438 12.4219C17.7236 12.3142 17.5792 12.236 17.4219 12.1943H17.4229C17.4193 12.1932 17.4157 12.1925 17.4121 12.1914H17.4111C16.8344 12.0137 16.0398 12.1113 15.5107 12.3369C14.7347 12.6691 14.0266 13.1879 13.543 13.6699L13.5381 13.6758L13.3535 13.874L13.2998 13.9316V19.5L13.2939 19.623C13.2664 19.9094 13.1444 20.1798 12.9453 20.3906C12.7179 20.6316 12.4069 20.7765 12.0762 20.7959C11.7455 20.8153 11.4201 20.7077 11.166 20.4951C10.9436 20.3089 10.7904 20.0547 10.7295 19.7734L10.709 19.6523L10.7002 19.5V10.5C10.7002 10.1552 10.8373 9.82485 11.0811 9.58105C11.3249 9.33726 11.6552 9.2002 12 9.2002ZM7.5 6.2002C7.84478 6.2002 8.17515 6.33726 8.41895 6.58105C8.66274 6.82485 8.7998 7.15522 8.7998 7.5C8.7998 7.84478 8.66274 8.17515 8.41895 8.41895C8.17515 8.66274 7.84478 8.7998 7.5 8.7998C7.15522 8.7998 6.82485 8.66274 6.58105 8.41895C6.33726 8.17515 6.2002 7.84478 6.2002 7.5C6.2002 7.15522 6.33726 6.82485 6.58105 6.58105C6.79429 6.36782 7.07364 6.23568 7.37109 6.20605L7.5 6.2002Z";

const PATH_EMAIL =
  "M30.4 3.4C30.4 1.75 29.05 0.4 27.4 0.4H3.4C1.75 0.4 0.4 1.75 0.4 3.4V21.4C0.4 23.05 1.75 24.4 3.4 24.4H27.4C29.05 24.4 30.4 23.05 30.4 21.4V3.4ZM27.0513 3.4C27.1518 3.4 27.1895 3.53155 27.1043 3.5848L15.453 10.8669C15.4206 10.8871 15.3794 10.8871 15.347 10.8669L3.69568 3.5848C3.61048 3.53155 3.64821 3.4 3.74868 3.4H27.0513ZM27.4 21.3C27.4 21.3552 27.3552 21.4 27.3 21.4H3.5C3.44477 21.4 3.4 21.3552 3.4 21.3V6.58043C3.4 6.50188 3.4864 6.454 3.553 6.49562L15.347 13.8669C15.3794 13.8871 15.4206 13.8871 15.453 13.8669L27.247 6.49562C27.3136 6.454 27.4 6.50188 27.4 6.58042V21.3Z";

const PATH_LOC_OUTER =
  "M3.95272 3.87902C5.9142 1.95677 8.55503 0.886262 11.3013 0.900133C14.0477 0.914004 16.6776 2.01113 18.6195 3.95309C20.5615 5.89506 21.6586 8.52494 21.6725 11.2713C21.6863 14.0176 20.6158 16.6584 18.6936 18.6199L13.1842 24.1293C12.6906 24.6228 12.0211 24.9 11.3232 24.9C10.6252 24.9 9.95575 24.6228 9.46212 24.1293L3.95272 18.6199C1.99808 16.6651 0.9 14.0139 0.9 11.2495C0.9 8.48505 1.99808 5.83385 3.95272 3.87902Z";

const PATH_LOC_INNER =
  "M11.3231 15.1982C13.5038 15.1982 15.2716 13.4304 15.2716 11.2497C15.2716 9.06908 13.5038 7.3013 11.3231 7.3013C9.14244 7.3013 7.37466 9.06908 7.37466 11.2497C7.37466 13.4304 9.14244 15.1982 11.3231 15.1982Z";

function CardGradient({ id, stops }: { id: string; stops: { offset: string; color: string }[] }) {
  return (
    <div className="hp-card-grad-wrap">
      <div className="hp-card-grad-inner">
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          fill="none"
          viewBox="0 0 1110 1198.1"
          preserveAspectRatio="none"
        >
          <path d={PATH_ELLIPSE} fill={`url(#${id})`} opacity="0.4" />
          <defs>
            <radialGradient
              id={id}
              cx="0"
              cy="0"
              gradientTransform="translate(554.998 298.84) rotate(90) scale(380.667 1131.01)"
              gradientUnits="userSpaceOnUse"
              r="1"
            >
              {stops.map((s) => (
                <stop key={s.offset} offset={s.offset} stopColor={s.color} />
              ))}
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function App() {
  const ctaRef = useRef<HTMLParagraphElement>(null);
  const ctaGradientRef = useRef<SVGLinearGradientElement>(null);
  const [hasPlayedCtaAnimation, setHasPlayedCtaAnimation] = useState(false);

  useEffect(() => {
    const cta = ctaRef.current;
    if (!cta || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasPlayedCtaAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(cta);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const gradient = ctaGradientRef.current;
    if (!hasPlayedCtaAnimation || !gradient) return;

    const duration = 2000;
    const startTime = performance.now();
    let frameId = 0;

    const animateGradient = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const position = -920 + 1840 * easedProgress;
      gradient.setAttribute("gradientTransform", `translate(${position} 0)`);

      if (progress < 1) frameId = requestAnimationFrame(animateGradient);
    };

    frameId = requestAnimationFrame(animateGradient);
    return () => cancelAnimationFrame(frameId);
  }, [hasPlayedCtaAnimation]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lastX = -Infinity;
    let lastY = -Infinity;

    const createTrail = (event: PointerEvent) => {
      const distance = Math.hypot(event.clientX - lastX, event.clientY - lastY);
      if (distance < 18) return;

      lastX = event.clientX;
      lastY = event.clientY;

      const trail = document.createElement("span");
      trail.className = "hp-cursor-trail";
      trail.style.left = `${event.clientX}px`;
      trail.style.top = `${event.clientY}px`;
      document.body.appendChild(trail);
      trail.addEventListener("animationend", () => trail.remove(), { once: true });
    };

    window.addEventListener("pointermove", createTrail, { passive: true });
    return () => window.removeEventListener("pointermove", createTrail);
  }, []);

  return (
    <div className="hp">

      {/* ── NAV ── */}
      <header className="hp-nav">
        <nav className="hp-nav-frame">
          <p style={{ color: "#000000" }}>Featured Work</p>
          <p style={{ color: "#8c8c8c" }}>Playground</p>
          <p style={{ color: "#8c8c8c" }}>About Me</p>
          <p style={{ color: "#8c8c8c" }}>Resume</p>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="hp-hero">
        <div className="hp-hero-inner">
          <div className="hp-hero-top">

            {/* Title: "hey, it's youyan" */}
            <div className="hp-title-row">
              <div className="hp-hey">hey, it&apos;s</div>
              <div className="hp-name-icon">
                <div className="hp-profile">
                  <img alt="" src={imgProfile} />
                </div>
                <div className="hp-name-y">y</div>
                <div className="hp-name-ouyu">{"ouyu   n "}</div>
                <div className="hp-name-a">a</div>
              </div>
            </div>

            {/* Description */}
            <p className="hp-desc">
              {"product designer with 3 years of experience for AI, SaaS, growth and loyalty programs, using systemic thinking to design intuitive, scalable solutions."}
            </p>
          </div>

          {/* Company logos */}
          <div className="hp-logos">

            {/* Hennessy */}
            <div className="hp-logo-hennessy">
              <div className="hp-logo-hennessy-icon">
                <img alt="" src={imgImage707} />
              </div>
              <div className="hp-logo-subtract">
                <img alt="" src={imgSubtract} />
              </div>
            </div>

            {/* image 711 */}
            <div className="hp-logo-711">
              <img alt="" src={imgImage711} />
            </div>

            {/* image 710 */}
            <div className="hp-logo-710">
              <img alt="" src={imgImage710} />
            </div>

            {/* CACNY */}
            <div className="hp-logo-cacny">
              <div className="hp-logo-cacny-top">
                <img alt="" src={imgCacnyMinimalistHdNoBg1} />
              </div>
              <div className="hp-logo-cacny-btm">
                <img alt="" src={imgCacnyMinimalistHdNoBg2} />
              </div>
            </div>

            {/* Superveggie */}
            <div className="hp-logo-superveggie">
              <div className="hp-logo-712">
                <img alt="" src={imgImage712} />
              </div>
              <div className="hp-logo-713">
                <img alt="" src={imgImage713} />
              </div>
            </div>

            {/* image 709 */}
            <div className="hp-logo-709">
              <img alt="" src={imgImage709} />
            </div>

          </div>
        </div>
      </section>

      {/* ── WORKS ── */}
      <section className="hp-works">
        <div className="hp-works-inner">

          {/* CRM */}
          <article className="hp-project">
            <div className="hp-project-card">
              <div className="hp-card-overflow">
                <CardGradient
                  id="grad-crm"
                  stops={[
                    { offset: "0.0356452", color: "#2B8E96" },
                    { offset: "0.205088", color: "#38C5C7" },
                    { offset: "0.976235", color: "white" },
                  ]}
                />
                <div className="hp-card-img-wrap">
                  <img alt="" src={imgCrm1} />
                </div>
              </div>
              <div className="hp-card-border" />
            </div>
            <div className="hp-project-info">
              <div className="hp-tags">
                <span className="hp-tag">2024 · Shipped</span>
                <span className="hp-tag">CRM</span>
                <span className="hp-tag">AI SUMMARY</span>
              </div>
              <p className="hp-project-title hp-project-title--extrabold">
                Optimizing sales follow-ups for timely, context-aware CRM actions
              </p>
              <p className="hp-project-desc">
                Designing a scalable, action-oriented sales follow-up experience that saved 250+ hours daily and boosted follow-up efficiency, conversion, and WeChat add success.
              </p>
            </div>
          </article>

          {/* Hennessy Membership */}
          <article className="hp-project">
            <div className="hp-project-card">
              <div className="hp-card-overflow">
                <CardGradient
                  id="grad-hennessy"
                  stops={[
                    { offset: "0.0356452", color: "#A8071A" },
                    { offset: "0.205088", color: "#C13D23" },
                    { offset: "0.976235", color: "white" },
                  ]}
                />
                <div className="hp-card-img-wrap">
                  <img alt="" src={imgHennessyMembership1} />
                </div>
              </div>
              <div className="hp-card-border" />
            </div>
            <div className="hp-project-info">
              <div className="hp-tags">
                <span className="hp-tag">2023 · Shipped</span>
                <span className="hp-tag">Loyalty</span>
                <span className="hp-tag">Online2Offline</span>
              </div>
              <p className="hp-project-title hp-project-title--extrabold" style={{ textTransform: "capitalize" }}>
                Redesigning Loyalty Beyond Transactional Rewards
              </p>
              <p className="hp-project-desc">
                Redesigning a travel-centered membership system around value and emotion, driving +15.2% engagement and higher benefit redemption.
              </p>
            </div>
          </article>

          {/* Amazon Music */}
          <article className="hp-project">
            <div className="hp-project-card">
              <div className="hp-card-overflow">
                <CardGradient
                  id="grad-amazon"
                  stops={[
                    { offset: "0.0356452", color: "#2F1348" },
                    { offset: "0.205088", color: "#9A38EC" },
                    { offset: "0.976235", color: "white" },
                  ]}
                />
                <div className="hp-card-img-wrap">
                  <img alt="" src={img2025Amazon1} />
                </div>
              </div>
              <div className="hp-card-border" />
            </div>
            <div className="hp-project-info">
              <div className="hp-tags">
                <span className="hp-tag" style={{ fontFamily: "'Poppins', sans-serif" }}>2025 · Design Hackathon</span>
                <span className="hp-tag" style={{ fontFamily: "'Poppins', sans-serif" }}>Amazon Music</span>
              </div>
              <p className="hp-project-title hp-project-title--extrabold">
                Turning taste discovery into loyalty for Amazon Music
              </p>
              <p className="hp-project-desc hp-project-desc--poppins">
                Fostering music community through commitment-driven rewards, enhancing engagement and retention
              </p>
            </div>
          </article>

          {/* Pawtner */}
          <article className="hp-project">
            <div className="hp-project-card">
              <div className="hp-card-overflow">
                <CardGradient
                  id="grad-pawtner"
                  stops={[
                    { offset: "0.0356452", color: "#0C8CE9" },
                    { offset: "0.587423", color: "#BFF0FF" },
                    { offset: "0.976235", color: "white" },
                  ]}
                />
                <div className="hp-card-img-wrap">
                  <img alt="" src={imgPawtner1} />
                </div>
              </div>
              <div className="hp-card-border" />
            </div>
            <div className="hp-project-info">
              <div className="hp-tags">
                <span className="hp-tag" style={{ fontFamily: "'Poppins', sans-serif" }}>2025 · Passion Project</span>
              </div>
              <p className="hp-project-title hp-project-title--extrabold" style={{ textTransform: "capitalize" }}>
                A cozy way to prepare for pet care
              </p>
              <p className="hp-project-desc hp-project-desc--poppins">
                Preparing potential first-Time adopters through guided pet care learning
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* ── FOOTER / CTA ── */}
      <footer className="hp-footer">
        <div className="hp-footer-inner">
          <p
            ref={ctaRef}
            className="hp-cta-text"
          >
            <svg className="hp-cta-title-svg" viewBox="0 0 920 250" role="img" aria-label="let's build together!">
              <defs>
                <linearGradient ref={ctaGradientRef} id="cta-color-sweep" x1="0" y1="0" x2="920" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(-920 0)">
                  <stop offset="0%" stopColor="#8f4d92" stopOpacity="0" />
                  <stop offset="39%" stopColor="#8f4d92" stopOpacity="0" />
                  <stop offset="43%" stopColor="#8f4d92" />
                  <stop offset="48%" stopColor="#ec6f34" />
                  <stop offset="52%" stopColor="#f2c743" />
                  <stop offset="57%" stopColor="#81b5e8" />
                  <stop offset="61%" stopColor="#527cc4" />
                  <stop offset="65%" stopColor="#527cc4" stopOpacity="0" />
                  <stop offset="100%" stopColor="#527cc4" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g fontFamily="Plus Jakarta Sans, sans-serif" fontSize="112" fontWeight="700" strokeWidth="2" strokeLinejoin="round">
                <text x="0" y="100" fill="#000000" stroke="#000000">let&apos;s build</text>
                <text x="0" y="220" fill="#000000" stroke="#000000">together!</text>
                {hasPlayedCtaAnimation && (
                  <g className="hp-cta-sweep" fill="url(#cta-color-sweep)" stroke="url(#cta-color-sweep)">
                    <text x="0" y="100">let&apos;s build</text>
                    <text x="0" y="220">together!</text>
                  </g>
                )}
              </g>
            </svg>
          </p>
          <div className="hp-contact-wrap">
            <div className="hp-contact-row">

              {/* LinkedIn */}
              <div className="hp-icon">
                <div className="hp-linkedin-wrap">
                  <svg
                    style={{ display: "block", width: "100%", height: "100%" }}
                    fill="none"
                    viewBox="0 0 27 31.221"
                    preserveAspectRatio="none"
                  >
                    <path d={PATH_LINKEDIN} fill="black" stroke="white" strokeWidth="0.4" />
                  </svg>
                </div>
              </div>

              {/* Email */}
              <div className="hp-icon">
                <div className="hp-email-outer">
                  <div className="hp-email-inner">
                    <svg
                      style={{ display: "block", width: "100%", height: "100%" }}
                      fill="none"
                      viewBox="0 0 30.8 24.8"
                      preserveAspectRatio="none"
                    >
                      <path d={PATH_EMAIL} fill="black" stroke="white" strokeWidth="0.8" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="hp-location">
                <div className="hp-loc-icon">
                  <div className="hp-loc-icon-inner">
                    <div className="hp-loc-icon-svg-wrap">
                      <svg
                        style={{ display: "block", width: "100%", height: "100%" }}
                        fill="none"
                        viewBox="0 0 22.5726 25.8"
                        preserveAspectRatio="none"
                      >
                        <path d={PATH_LOC_OUTER} stroke="black" strokeLinejoin="round" strokeWidth="1.8" />
                        <path d={PATH_LOC_INNER} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                      </svg>
                    </div>
                  </div>
                </div>
                <span className="hp-loc-text">New York City</span>
              </div>

            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
