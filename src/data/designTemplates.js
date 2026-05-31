// Design service templates for sandboxed iframe showcases
export const basicTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Basic Landing Page — Poster</title>
<meta name="description" content="Professional landing page design services by PlutoAI. Fast, responsive and modern websites for startups, freelancers and local businesses.">
<link rel="icon" href="favicon.ico">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #ECEAF6;
    font-family: 'Plus Jakarta Sans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 40px 20px;
  }
 
  .poster {
    width: 680px;
    background: #0F0E17;
    position: relative;
    overflow: hidden;
    border-radius: 16px;
  }
 
  /* Purple glow blobs */
  .blob1 {
    position: absolute;
    width: 320px; height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%);
    top: -80px; right: -60px;
    pointer-events: none;
  }
  .blob2 {
    position: absolute;
    width: 200px; height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99,179,237,0.18) 0%, transparent 70%);
    bottom: 80px; left: -40px;
    pointer-events: none;
  }
  .blob3 {
    position: absolute;
    width: 150px; height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%);
    top: 280px; right: 40px;
    pointer-events: none;
  }
 
  .poster-inner { position: relative; z-index: 1; }
 
  /* Top bar */
  .tier-bar {
    padding: 12px 28px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tier-bar-left {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.18em;
    color: rgba(255,255,255,0.3);
    text-transform: uppercase;
  }
  .tier-pill {
    background: linear-gradient(135deg, #7C3AED, #4F46E5);
    color: #fff;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    padding: 4px 12px;
    border-radius: 20px;
    text-transform: uppercase;
  }
 
  /* Hero */
  .hero {
    padding: 44px 32px 36px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .eyebrow {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
  }
  .eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #A78BFA; }
  .eyebrow-text {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    color: #A78BFA;
    text-transform: uppercase;
  }
  .hero-headline {
    font-size: 50px;
    font-weight: 800;
    color: #F8F7FF;
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-bottom: 16px;
  }
  .hero-headline .grad {
    background: linear-gradient(135deg, #A78BFA, #60A5FA, #F472B6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hero-sub {
    font-size: 15px;
    font-weight: 300;
    color: rgba(248,247,255,0.5);
    line-height: 1.7;
    max-width: 420px;
    margin-bottom: 30px;
  }
  .cta-row { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
  .cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #7C3AED, #4F46E5);
    color: #fff;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.02em;
    padding: 13px 26px;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .cta-primary:hover { opacity: 0.88; }
  .cta-primary .arrow { font-size: 16px; }
  .cta-outline {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.6);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 13px 22px;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
  }
  .cta-outline:hover { background: rgba(255,255,255,0.09); color: #fff; }
 
  /* Delivery badge beside hero */
  .hero-meta {
    display: flex;
    gap: 12px;
    margin-top: 24px;
    flex-wrap: wrap;
  }
  .meta-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 6px;
    padding: 6px 12px;
    font-size: 12px;
    color: rgba(255,255,255,0.45);
  }
  .meta-chip .dot { width: 5px; height: 5px; border-radius: 50%; background: #34D399; flex-shrink: 0; }
  .meta-chip .dot.blue { background: #60A5FA; }
  .meta-chip .dot.pink { background: #F472B6; }
 
  /* Wireframe */
  .wireframe-wrap {
    padding: 0 32px;
    margin-top: 4px;
  }
  .wireframe {
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    background: rgba(255,255,255,0.03);
    overflow: hidden;
  }
  .wf-nav {
    height: 34px;
    background: rgba(255,255,255,0.04);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex;
    align-items: center;
    padding: 0 12px;
    gap: 6px;
  }
  .wf-dot { width: 8px; height: 8px; border-radius: 50%; }
  .wf-logo { width: 44px; height: 7px; background: rgba(167,139,250,0.4); border-radius: 3px; margin-left: 8px; }
  .wf-nav-links { display: flex; gap: 8px; margin-left: auto; }
  .wf-nav-links span { width: 24px; height: 5px; background: rgba(255,255,255,0.12); border-radius: 2px; }
  .wf-cta-nav { width: 40px; height: 18px; background: linear-gradient(135deg,rgba(124,58,237,0.7),rgba(79,70,229,0.7)); border-radius: 3px; margin-left: 6px; }
  .wf-hero-row {
    display: flex;
    gap: 14px;
    padding: 16px 12px;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .wf-text-col { flex: 1; }
  .wf-h1 { width: 75%; height: 9px; background: rgba(167,139,250,0.35); border-radius: 3px; margin-bottom: 5px; }
  .wf-h2 { width: 55%; height: 7px; background: rgba(255,255,255,0.1); border-radius: 3px; margin-bottom: 8px; }
  .wf-p { height: 4px; background: rgba(255,255,255,0.07); border-radius: 2px; margin-bottom: 3px; }
  .wf-btn { width: 55px; height: 16px; background: linear-gradient(135deg,rgba(124,58,237,0.6),rgba(79,70,229,0.6)); border-radius: 3px; margin-top: 8px; }
  .wf-img-block { width: 100px; height: 65px; background: rgba(167,139,250,0.1); border-radius: 6px; border: 1px solid rgba(167,139,250,0.15); display: flex; align-items: center; justify-content: center; font-size: 8px; color: rgba(167,139,250,0.4); font-family: 'DM Mono',monospace; letter-spacing: 0.1em; }
  .wf-features {
    display: flex;
    gap: 8px;
    padding: 12px;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .wf-feat-card {
    flex: 1;
    height: 44px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
  .wf-icon { width: 12px; height: 12px; border-radius: 50%; background: rgba(167,139,250,0.3); }
  .wf-feat-line { width: 55%; height: 4px; background: rgba(255,255,255,0.08); border-radius: 2px; }
  .wf-footer-bar { height: 24px; background: rgba(255,255,255,0.03); border-top: 1px solid rgba(255,255,255,0.05); }
 
  /* Sections */
  .sections-block {
    padding: 28px 32px 24px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .block-title {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.22em;
    color: rgba(167,139,250,0.5);
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .sections-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .section-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 11px 13px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 8px;
    transition: border-color 0.2s;
  }
  .section-item:hover { border-color: rgba(167,139,250,0.25); }
  .section-num {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: rgba(167,139,250,0.45);
    min-width: 18px;
    padding-top: 1px;
  }
  .section-name { font-size: 12px; font-weight: 600; color: rgba(248,247,255,0.85); margin-bottom: 2px; }
  .section-desc { font-size: 11px; font-weight: 300; color: rgba(255,255,255,0.3); line-height: 1.4; }
 
  /* Included */
  .included-block {
    padding: 24px 32px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .included-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .inc-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 400;
    color: rgba(255,255,255,0.5);
  }
  .inc-check {
    width: 17px; height: 17px;
    background: rgba(52,211,153,0.1);
    border: 1px solid rgba(52,211,153,0.25);
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    font-size: 9px;
    color: #34D399;
  }
 
  /* Specs */
  .specs-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .spec {
    padding: 16px 14px;
    border-right: 1px solid rgba(255,255,255,0.06);
  }
  .spec:last-child { border-right: none; }
  .spec-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    color: rgba(255,255,255,0.25);
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .spec-val { font-size: 14px; font-weight: 600; color: #F8F7FF; }
 
  /* Stack */
  .stack-row {
    padding: 14px 32px;
    background: rgba(255,255,255,0.02);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .stack-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    color: rgba(255,255,255,0.25);
    text-transform: uppercase;
    margin-right: 4px;
  }
  .stack-tag {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: rgba(167,139,250,0.8);
    background: rgba(124,58,237,0.1);
    border: 1px solid rgba(124,58,237,0.2);
    padding: 3px 10px;
    border-radius: 4px;
    letter-spacing: 0.05em;
  }
 
  /* Footer */
  .poster-footer {
    padding: 18px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .best-for-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.2em;
    color: rgba(255,255,255,0.25);
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .best-for-text { font-size: 13px; font-weight: 400; color: rgba(255,255,255,0.45); }
  .price-block { text-align: right; }
  .price-big {
    font-size: 26px;
    font-weight: 800;
    background: linear-gradient(135deg, #A78BFA, #60A5FA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
  }
  .price-sub {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: rgba(255,255,255,0.2);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-top: 2px;
  }
 
  /* Animated border glow on hover */
  .poster:hover .blob1 { opacity: 1; }
</style>
</head>
<body>
<div class="poster">
  <div class="blob1"></div>
  <div class="blob2"></div>
  <div class="blob3"></div>
  <div class="poster-inner">
 
    <div class="tier-bar">
      <span class="tier-bar-left">PlutoAI — Landing Page Packages</span>
      <span class="tier-pill">Tier 01 · Basic</span>
    </div>
 
    <div class="hero">
      <div class="eyebrow">
        <div class="eyebrow-dot"></div>
        <span class="eyebrow-text">Basic Package</span>
      </div>
      <h1 class="hero-headline">Simple.<br><span class="grad">Fast. Done.</span></h1>
      <p class="hero-sub">Get your business online in 1–3 days. A clean, mobile-ready landing page built on a solid template — perfect for freelancers, MVPs, and local businesses.</p>
      <div class="cta-row">
        <a class="cta-primary" href="https://wa.me/917022951232?text=Hi%2C%20I'm%20interested%20in%20the%20*Basic%20Landing%20Page%20Package*%20%F0%9F%91%8B%0A%0A%F0%9F%93%A6%20*Package%20Details%3A*%0A%E2%80%A2%20Price%3A%20%E2%82%B95%2C000%20%E2%80%93%20%E2%82%B98%2C000%20(one-time)%0A%E2%80%A2%20Sections%3A%204%E2%80%936%20(Nav%2C%20Hero%2C%20Features%2C%20About%2C%20Contact%2C%20Footer)%0A%E2%80%A2%20Tech%3A%20HTML%2C%20CSS%2C%20JavaScript%0A%E2%80%A2%20Mobile%20responsive%3A%20Yes%0A%E2%80%A2%20Animations%3A%20None%0A%E2%80%A2%20Delivery%3A%201%E2%80%933%20days%0A%E2%80%A2%20Revisions%3A%201%20round%0A%0ACan%20you%20please%20share%20more%20details%20and%20help%20me%20get%20started%3F" target="_blank" rel="noopener noreferrer"><span>Get Started on WhatsApp</span> <span class="arrow">→</span></a>
        <a class="cta-outline" href="https://buildwithplutoai.netlify.app/" target="_blank" rel="noopener noreferrer">View Portfolio ↗</a>
      </div>
      <div class="hero-meta">
        <div class="meta-chip"><div class="dot"></div> 1–5 Day Delivery</div>
        <div class="meta-chip"><div class="dot blue"></div> Mobile Responsive</div>
        <div class="meta-chip"><div class="dot pink"></div> 1 Revision Round</div>
      </div>
    </div>
 
    <!-- Wireframe -->
    <div class="wireframe-wrap" style="padding-top:24px;padding-bottom:0;">
      <div class="wireframe">
        <div class="wf-nav">
          <div class="wf-dot" style="background:#FF6B6B"></div>
          <div class="wf-dot" style="background:#FFD93D"></div>
          <div class="wf-dot" style="background:#6BCB77"></div>
          <div class="wf-logo"></div>
          <div class="wf-nav-links"><span></span><span></span><span></span></div>
          <div class="wf-cta-nav"></div>
        </div>
        <div class="wf-hero-row">
          <div class="wf-text-col">
            <div class="wf-h1"></div>
            <div class="wf-h2"></div>
            <div class="wf-p" style="width:92%"></div>
            <div class="wf-p" style="width:76%"></div>
            <div class="wf-p" style="width:60%"></div>
            <div class="wf-btn"></div>
          </div>
          <div class="wf-img-block">IMAGE</div>
        </div>
        <div class="wf-features">
          <div class="wf-feat-card"><div class="wf-icon"></div><div class="wf-feat-line"></div></div>
          <div class="wf-feat-card"><div class="wf-icon"></div><div class="wf-feat-line"></div></div>
          <div class="wf-feat-card"><div class="wf-icon"></div><div class="wf-feat-line"></div></div>
        </div>
        <div class="wf-footer-bar"></div>
      </div>
    </div>
 
    <!-- Sections -->
    <div class="sections-block">
      <p class="block-title">Sections Included</p>
      <div class="sections-grid">
        <div class="section-item">
          <span class="section-num">01</span>
          <div><p class="section-name">Navigation bar</p><p class="section-desc">Logo + 2–3 links + CTA button</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">02</span>
          <div><p class="section-name">Hero section</p><p class="section-desc">Headline, subtext, image, 1 CTA</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">03</span>
          <div><p class="section-name">Features / benefits</p><p class="section-desc">3-column icon + text cards</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">04</span>
          <div><p class="section-name">About / intro</p><p class="section-desc">Short brand/person description</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">05</span>
          <div><p class="section-name">Contact / CTA</p><p class="section-desc">Simple form or WhatsApp link</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">06</span>
          <div><p class="section-name">Footer</p><p class="section-desc">Links, copyright, social icons</p></div>
        </div>
      </div>
    </div>
 
    <!-- Included -->
    <div class="included-block">
      <p class="block-title">What's Included</p>
      <div class="included-grid">
        <div class="inc-item"><div class="inc-check">✓</div>Template-based design</div>
        <div class="inc-item"><div class="inc-check">✓</div>Mobile + tablet responsive</div>
        <div class="inc-item"><div class="inc-check">✓</div>1 CTA button</div>
        <div class="inc-item"><div class="inc-check">✓</div>Contact form or WhatsApp link</div>
        <div class="inc-item"><div class="inc-check">✓</div>Basic meta tags</div>
        <div class="inc-item"><div class="inc-check">✓</div>Source code handover</div>
        <div class="inc-item"><div class="inc-check">✓</div>Deployed & live link</div>
        <div class="inc-item"><div class="inc-check">✓</div>1 round of revisions</div>
      </div>
    </div>
 
    <div class="specs-row">
      <div class="spec">
        <p class="spec-label">Sections</p>
        <p class="spec-val">4–5</p>
      </div>
      <div class="spec">
        <p class="spec-label">Delivery</p>
        <p class="spec-val">1–5 days</p>
      </div>
      <div class="spec">
        <p class="spec-label">Animations</p>
        <p class="spec-val">scroller</p>
      </div>
      <div class="spec">
        <p class="spec-label">Revisions</p>
        <p class="spec-val">1 round</p>
      </div>
    </div>
 
    <div class="stack-row">
      <span class="stack-label">Stack</span>
      <span class="stack-tag">HTML5</span>
      <span class="stack-tag">CSS3</span>
      <span class="stack-tag">JavaScript/react.js</span>
      <span class="stack-tag">Template-based</span>
      <span class="stack-tag">Mobile Ready</span>
    </div>
 
    <div class="poster-footer">
      <div>
        <p class="best-for-label">Best for</p>
        <p class="best-for-text">Freelancers, MVPs, portfolios, local shops</p>
      </div>
      <div class="price-block">
        <p class="price-big">₹5,000 – ₹8,000</p>
        <p class="price-sub">One-time · No recurring fees</p>
      </div>
    </div>
 
  </div>
</div>
</body>
</html>
\`;

export const intermediateTemplate = \`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Intermediate Landing Page — Poster</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0A1628;
    font-family: 'Plus Jakarta Sans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 40px 20px;
  }
  .poster {
    width: 680px;
    background: #0D1F3C;
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    border: 1px solid rgba(56,189,248,0.12);
  }
  .blob1 {
    position: absolute;
    width: 350px; height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%);
    top: -100px; right: -80px;
    pointer-events: none;
  }
  .blob2 {
    position: absolute;
    width: 220px; height: 220px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%);
    bottom: 100px; left: -60px;
    pointer-events: none;
  }
  .blob3 {
    position: absolute;
    width: 180px; height: 180px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%);
    top: 320px; right: 60px;
    pointer-events: none;
  }
  .poster-inner { position: relative; z-index: 1; }
 
  .tier-bar {
    padding: 12px 28px;
    border-bottom: 1px solid rgba(56,189,248,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tier-bar-left {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.18em;
    color: rgba(255,255,255,0.25);
    text-transform: uppercase;
  }
  .tier-pill {
    background: linear-gradient(135deg, #0EA5E9, #6366F1);
    color: #fff;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    padding: 4px 14px;
    border-radius: 20px;
    text-transform: uppercase;
  }
  .popular-band {
    background: linear-gradient(90deg, rgba(56,189,248,0.15), rgba(99,102,241,0.15), rgba(56,189,248,0.0));
    border-top: 1px solid rgba(56,189,248,0.15);
    border-bottom: 1px solid rgba(56,189,248,0.15);
    padding: 7px 28px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .star { color: #FBBF24; font-size: 12px; }
  .popular-text {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    color: #38BDF8;
    text-transform: uppercase;
  }
 
  .hero {
    padding: 36px 32px 30px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    display: flex;
    gap: 28px;
    align-items: flex-start;
  }
  .hero-left { flex: 1; }
  .eyebrow {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }
  .eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #38BDF8; }
  .eyebrow-text {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    color: #38BDF8;
    text-transform: uppercase;
  }
  .hero-headline {
    font-size: 46px;
    font-weight: 800;
    color: #F0F9FF;
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-bottom: 14px;
  }
  .hero-headline .grad {
    background: linear-gradient(135deg, #38BDF8, #818CF8, #34D399);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hero-sub {
    font-size: 14px;
    font-weight: 300;
    color: rgba(240,249,255,0.45);
    line-height: 1.7;
    margin-bottom: 24px;
    max-width: 340px;
  }
  .cta-row { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
  .cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #0EA5E9, #6366F1);
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    padding: 12px 22px;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
  }
  .cta-primary:hover { opacity: 0.88; }
  .cta-outline {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(56,189,248,0.2);
    color: rgba(56,189,248,0.7);
    font-size: 13px;
    font-weight: 500;
    padding: 12px 18px;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
  }
  .cta-outline:hover { background: rgba(56,189,248,0.08); color: #38BDF8; }
  .hero-meta {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    flex-wrap: wrap;
  }
  .meta-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 6px;
    padding: 5px 11px;
    font-size: 11px;
    color: rgba(255,255,255,0.4);
  }
  .meta-chip .dot { width: 5px; height: 5px; border-radius: 50%; background: #34D399; flex-shrink: 0; }
  .meta-chip .dot.blue { background: #38BDF8; }
  .meta-chip .dot.purple { background: #818CF8; }
  .meta-chip .dot.yellow { background: #FBBF24; }
 
  /* mini mockup */
  .mini-mockup {
    width: 175px;
    flex-shrink: 0;
    border: 1px solid rgba(56,189,248,0.12);
    background: rgba(255,255,255,0.02);
    border-radius: 10px;
    overflow: hidden;
  }
  .mm-bar {
    background: rgba(255,255,255,0.04);
    height: 22px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    gap: 4px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .mm-dot { width: 6px; height: 6px; border-radius: 50%; }
  .mm-section { padding: 8px 8px 6px; border-bottom: 1px solid rgba(255,255,255,0.04); }
  .mm-line { height: 4px; border-radius: 2px; background: rgba(255,255,255,0.08); margin-bottom: 3px; }
  .mm-line.accent { background: rgba(56,189,248,0.4); }
  .mm-line.btn { width: 45%; height: 12px; background: linear-gradient(135deg,rgba(14,165,233,0.5),rgba(99,102,241,0.5)); border-radius: 3px; margin-top: 6px; }
  .mm-img { height: 38px; background: rgba(56,189,248,0.06); border: 1px solid rgba(56,189,248,0.1); border-radius: 4px; margin: 6px 0 4px; display: flex; align-items: center; justify-content: center; font-size: 7px; color: rgba(56,189,248,0.3); font-family: 'DM Mono',monospace; letter-spacing: 0.1em; }
  .mm-cards { display: flex; gap: 3px; margin: 4px 0; }
  .mm-card { flex: 1; height: 28px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 4px; }
  .mm-card.highlight { border-color: rgba(56,189,248,0.2); background: rgba(56,189,248,0.05); }
  .mm-testi { padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.04); }
  .mm-avatar-row { display: flex; gap: 4px; align-items: center; margin-top: 4px; }
  .mm-avatar { width: 10px; height: 10px; border-radius: 50%; background: rgba(129,140,248,0.3); }
  .mm-form { padding: 6px 8px; }
  .mm-input { height: 9px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 3px; margin-bottom: 4px; }
  .mm-submit { height: 12px; width: 60%; background: linear-gradient(135deg,rgba(14,165,233,0.4),rgba(99,102,241,0.4)); border-radius: 3px; }
  .mm-footer { height: 18px; background: rgba(0,0,0,0.2); }
 
  /* anim badge */
  .anim-row {
    padding: 10px 32px;
    background: rgba(56,189,248,0.04);
    border-bottom: 1px solid rgba(56,189,248,0.08);
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  .anim-item { display: flex; align-items: center; gap: 6px; }
  .anim-icon { width: 6px; height: 6px; border-radius: 50%; background: #38BDF8; }
  .anim-text { font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.15em; color: rgba(56,189,248,0.6); text-transform: uppercase; }
 
  /* sections */
  .sections-block {
    padding: 24px 32px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .block-title {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.22em;
    color: rgba(56,189,248,0.4);
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  .sections-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7px;
  }
  .section-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 12px;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 8px;
  }
  .section-item:hover { border-color: rgba(56,189,248,0.2); }
  .section-num { font-family: 'DM Mono', monospace; font-size: 10px; color: rgba(56,189,248,0.4); min-width: 18px; padding-top: 1px; }
  .section-name { font-size: 12px; font-weight: 600; color: rgba(240,249,255,0.85); margin-bottom: 2px; }
  .section-desc { font-size: 11px; font-weight: 300; color: rgba(255,255,255,0.28); line-height: 1.4; }
 
  /* included */
  .included-block {
    padding: 22px 32px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .included-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
  .inc-item { display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 400; color: rgba(255,255,255,0.45); }
  .inc-check {
    width: 17px; height: 17px;
    background: rgba(56,189,248,0.08);
    border: 1px solid rgba(56,189,248,0.2);
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; font-size: 9px; color: #38BDF8;
  }
 
  /* specs */
  .specs-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .spec { padding: 15px 14px; border-right: 1px solid rgba(255,255,255,0.05); }
  .spec:last-child { border-right: none; }
  .spec-label { font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.15em; color: rgba(255,255,255,0.22); text-transform: uppercase; margin-bottom: 5px; }
  .spec-val { font-size: 14px; font-weight: 600; color: #F0F9FF; }
 
  .stack-row {
    padding: 13px 32px;
    background: rgba(0,0,0,0.15);
    border-bottom: 1px solid rgba(255,255,255,0.04);
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .stack-label { font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.15em; color: rgba(255,255,255,0.22); text-transform: uppercase; margin-right: 4px; }
  .stack-tag { font-family: 'DM Mono', monospace; font-size: 10px; color: rgba(56,189,248,0.8); background: rgba(14,165,233,0.08); border: 1px solid rgba(14,165,233,0.18); padding: 3px 10px; border-radius: 4px; letter-spacing: 0.05em; }
 
  .poster-footer {
    padding: 18px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .best-for-label { font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.2em; color: rgba(255,255,255,0.22); text-transform: uppercase; margin-bottom: 4px; }
  .best-for-text { font-size: 13px; font-weight: 400; color: rgba(255,255,255,0.4); }
  .price-block { text-align: right; }
  .price-big {
    font-size: 24px;
    font-weight: 800;
    background: linear-gradient(135deg, #38BDF8, #818CF8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
  }
  .price-sub { font-family: 'DM Mono', monospace; font-size: 9px; color: rgba(255,255,255,0.18); letter-spacing: 0.15em; text-transform: uppercase; margin-top: 2px; }
</style>
</head>
<body>
<div class="poster">
  <div class="blob1"></div>
  <div class="blob2"></div>
  <div class="blob3"></div>
  <div class="poster-inner">
 
    <div class="tier-bar">
      <span class="tier-bar-left">PlutoAI — Landing Page Packages</span>
      <span class="tier-pill">Tier 02 · Intermediate</span>
    </div>
 
    <div class="popular-band">
      <span class="star">★★★★★</span>
      <span class="popular-text">Most Popular Package</span>
    </div>
 
    <div class="hero">
      <div class="hero-left">
        <div class="eyebrow"><div class="eyebrow-dot"></div><span class="eyebrow-text">Intermediate Package</span></div>
        <h1 class="hero-headline">Built to<br><span class="grad">Convert.</span></h1>
        <p class="hero-sub">A fully custom-designed page with scroll animations, email integrations, and analytics — for startups and growing brands that mean business.</p>
        <div class="cta-row">
          <a class="cta-primary" href="https://wa.me/917022951232?text=Hi%2C%20I'm%20interested%20in%20the%20*Intermediate%20Landing%20Page%20Package*%20%F0%9F%91%8B%0A%0A%F0%9F%93%A6%20*Package%20Details%3A*%0A%E2%80%A2%20Price%3A%20%E2%82%B98%2C000%20%E2%80%93%20%E2%82%B920%2C000%20(one-time)%20%2B%20Shift-wise%20pay%0A%E2%80%A2%20Sections%3A%208%E2%80%9310%20(Nav%2C%20Hero%2C%20Features%2C%20Social%20Proof%2C%20Testimonials%2C%20Pricing%2C%20FAQ%2C%20Lead%20Form%2C%20Footer)%0A%E2%80%A2%20Tech%3A%20Next.js%2C%20Tailwind%20CSS%2C%20Framer%20Motion%0A%E2%80%A2%20Scroll%20animations%3A%20Yes%0A%E2%80%A2%20Email%20integration%3A%20Mailchimp%20%2F%20Brevo%0A%E2%80%A2%20Analytics%3A%20GA4%20%2B%20Meta%20Pixel%0A%E2%80%A2%20Delivery%3A%205%E2%80%9310%20days%0A%E2%80%A2%20Revisions%3A%202%20rounds%0A%0ACan%20you%20please%20share%20more%20details%20and%20help%20me%20get%20started%3F" target="_blank">Get Started on WhatsApp →</a>
          <a class="cta-outline" href="https://buildwithplutoai.netlify.app/" target="_blank">View Portfolio ↗</a>
        </div>
        <div class="hero-meta">
          <div class="meta-chip"><div class="dot"></div>5–10 Day Delivery</div>
          <div class="meta-chip"><div class="dot blue"></div>Scroll + Hover Animations</div>
          <div class="meta-chip"><div class="dot purple"></div>Email Integration</div>
          <div class="meta-chip"><div class="dot yellow"></div>2 Revisions</div>
        </div>
      </div>
 
      <div class="mini-mockup">
        <div class="mm-bar">
          <div class="mm-dot" style="background:#FF6B6B"></div>
          <div class="mm-dot" style="background:#FFD93D"></div>
          <div class="wf-logo"></div>
        </div>
        <div class="mm-section">
          <div class="mm-line accent" style="width:60%"></div>
          <div class="mm-line" style="width:80%"></div>
          <div class="mm-img">HERO VISUAL</div>
          <div class="mm-line btn"></div>
        </div>
        <div class="mm-section">
          <div class="mm-line" style="width:50%;margin:0 auto 5px;"></div>
          <div class="mm-cards">
            <div class="mm-card"></div>
            <div class="mm-card highlight"></div>
            <div class="mm-card"></div>
          </div>
        </div>
        <div class="mm-testi">
          <div class="mm-line" style="width:90%"></div>
          <div class="mm-line" style="width:75%"></div>
          <div class="mm-avatar-row">
            <div class="mm-avatar"></div>
            <div class="mm-line" style="width:40%;margin:0;"></div>
          </div>
        </div>
        <div class="mm-section">
          <div class="mm-cards">
            <div class="mm-card"></div>
            <div class="mm-card highlight"></div>
            <div class="mm-card"></div>
          </div>
        </div>
        <div class="mm-form">
          <div class="mm-input"></div>
          <div class="mm-input"></div>
          <div class="mm-submit"></div>
        </div>
        <div class="mm-footer"></div>
      </div>
    </div>
 
    <div class="anim-row">
      <div class="anim-item"><div class="anim-icon"></div><span class="anim-text">Scroll animations</span></div>
      <div class="anim-item"><div class="anim-icon" style="background:#34D399"></div><span class="anim-text">GA4 + Meta Pixel</span></div>
      <div class="anim-item"><div class="anim-icon" style="background:#818CF8"></div><span class="anim-text">Mailchimp ready</span></div>
      <div class="anim-item"><div class="anim-icon" style="background:#FBBF24"></div><span class="anim-text">Vercel deployed</span></div>
    </div>
 
    <div class="sections-block">
      <p class="block-title">Sections Included</p>
      <div class="sections-grid">
        <div class="section-item"><span class="section-num">01</span><div><p class="section-name">Navigation + sticky header</p><p class="section-desc">Logo, links, CTA, scroll-aware</p></div></div>
        <div class="section-item"><span class="section-num">02</span><div><p class="section-name">Hero section</p><p class="section-desc">Headline, visual, 2 CTAs, animated entry</p></div></div>
        <div class="section-item"><span class="section-num">03</span><div><p class="section-name">Value proposition</p><p class="section-desc">3–4 feature cards with icons</p></div></div>
        <div class="section-item"><span class="section-num">04</span><div><p class="section-name">Social proof / logos</p><p class="section-desc">Client logos, ratings, trust badges</p></div></div>
        <div class="section-item"><span class="section-num">05</span><div><p class="section-name">Features deep-dive</p><p class="section-desc">Alternating image + text with scroll fade</p></div></div>
        <div class="section-item"><span class="section-num">06</span><div><p class="section-name">Testimonials</p><p class="section-desc">3 quote cards with name, photo, role</p></div></div>
        <div class="section-item"><span class="section-num">07</span><div><p class="section-name">Pricing section</p><p class="section-desc">2–3 tier cards, highlighted plan</p></div></div>
        <div class="section-item"><span class="section-num">08</span><div><p class="section-name">Lead capture form</p><p class="section-desc">Name, email + Mailchimp integration</p></div></div>
        <div class="section-item"><span class="section-num">09</span><div><p class="section-name">FAQ accordion</p><p class="section-desc">5–10 expandable objection handlers</p></div></div>
        <div class="section-item"><span class="section-num">10</span><div><p class="section-name">Footer</p><p class="section-desc">Links, socials, legal, newsletter</p></div></div>
      </div>
    </div>
 
    <div class="included-block">
      <p class="block-title">What's Included</p>
      <div class="included-grid">
        <div class="inc-item"><div class="inc-check">✓</div>Custom Figma design</div>
        <div class="inc-item"><div class="inc-check">✓</div>Scroll-triggered animations</div>
        <div class="inc-item"><div class="inc-check">✓</div>Hover & pointer interactions</div>
        <div class="inc-item"><div class="inc-check">✓</div>Email tool integration</div>
        <div class="inc-item"><div class="inc-check">✓</div>Google Analytics 4 setup</div>
        <div class="inc-item"><div class="inc-check">✓</div>Meta Pixel setup</div>
        <div class="inc-item"><div class="inc-check">✓</div>Mobile + tablet responsive</div>
        <div class="inc-item"><div class="inc-check">✓</div>Basic meta tags + OG images</div>
        <div class="inc-item"><div class="inc-check">✓</div>2 rounds of revisions</div>
        <div class="inc-item"><div class="inc-check">✓</div>Deployed on Vercel / Netlify</div>
        <div class="inc-item"><div class="inc-check">✓</div>Source code handover</div>
      </div>
    </div>
 
    <div class="specs-row">
      <div class="spec"><p class="spec-label">Sections</p><p class="spec-val">8–10</p></div>
      <div class="spec"><p class="spec-label">Delivery</p><p class="spec-val">5–10 days</p></div>
      <div class="spec"><p class="spec-label">Animations</p><p class="spec-val">Scroll + Hover</p></div>
      <div class="spec"><p class="spec-label">Revisions</p><p class="spec-val">2 rounds</p></div>
    </div>
 
    <div class="stack-row">
      <span class="stack-label">Stack</span>
      <span class="stack-tag">Next.js</span>
      <span class="stack-tag">Tailwind CSS</span>
      <span class="stack-tag">Framer Motion</span>
      <span class="stack-tag">Mailchimp</span>
      <span class="stack-tag">GA4</span>
      <span class="stack-tag">Vercel</span>
    </div>
 
    <div class="poster-footer">
      <div>
        <p class="best-for-label">Best for</p>
        <p class="best-for-text">Startups, SaaS, SMBs, coaches, agencies</p>
      </div>
      <div class="price-block">
        <p class="price-big">₹8,000 – ₹20,000</p>
        <p class="price-sub">One-time · No recurring fees (Shift-wise pay)</p>
      </div>
    </div>
 
  </div>
</div>
</body>
</html>
\`;

export const advancedTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Advanced Landing Page — Poster</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0A1628;
    font-family: 'Jost', sans-serif;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 40px 20px;
  }
  .poster {
    width: 680px;
    background: #0D1F3C;
    position: relative;
    overflow: hidden;
  }
 
  /* Subtle texture lines */
  .poster::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(255,255,255,0.012) 3px,
      rgba(255,255,255,0.012) 4px
    );
    pointer-events: none;
  }
 
  /* Gold accent circle */
  .poster::after {
    content: '';
    position: absolute;
    top: 60px; right: -80px;
    width: 260px; height: 260px;
    border: 1px solid rgba(56,189,248,0.15);
    border-radius: 50%;
    pointer-events: none;
  }
 
  .poster-inner { position: relative; z-index: 1; }
 
  /* Top ornament */
  .tier-bar {
    padding: 14px 28px;
    border-bottom: 1px solid rgba(56,189,248,0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tier-bar-left {
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    font-weight: 300;
    letter-spacing: 0.25em;
    color: #38BDF8;
    text-transform: uppercase;
  }
  .tier-bar-right {
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: rgba(56,189,248,0.5);
    text-transform: uppercase;
  }
 
  /* Hero */
  .hero {
    padding: 44px 28px 36px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    position: relative;
  }
  .tier-eyebrow {
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    font-weight: 300;
    letter-spacing: 0.35em;
    color: rgba(56,189,248,0.7);
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .hero-headline {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 52px;
    font-weight: 900;
    color: #F5EFE3;
    line-height: 1.05;
    letter-spacing: -0.01em;
    margin-bottom: 6px;
  }
  .hero-headline .italic { font-style: italic; color: #38BDF8; }
  .hero-sub {
    font-size: 14px;
    font-weight: 300;
    color: rgba(245,239,227,0.5);
    line-height: 1.7;
    max-width: 380px;
    margin-bottom: 28px;
    margin-top: 12px;
  }
  .cta-row { display: flex; gap: 12px; align-items: center; }
  .cta-primary {
    display: inline-block;
    background: #38BDF8;
    color: #0D1F3C;
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.15em;
    padding: 12px 28px;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
  }
  .cta-primary:hover { opacity: 0.88; }
  .cta-outline {
    display: inline-block;
    border: 1px solid rgba(56,189,248,0.3);
    color: rgba(56,189,248,0.7);
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    font-weight: 300;
    letter-spacing: 0.15em;
    padding: 12px 22px;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
  }
  .cta-outline:hover { border-color: rgba(56,189,248,0.7); color: #38BDF8; }
 
  /* Delivery badge */
  .delivery-badge {
    position: absolute;
    top: 44px; right: 28px;
    border: 1px solid rgba(56,189,248,0.25);
    padding: 14px 18px;
    text-align: center;
  }
  .delivery-num {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #38BDF8;
    line-height: 1;
  }
  .delivery-label {
    font-size: 9px;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: rgba(56,189,248,0.5);
    text-transform: uppercase;
    margin-top: 4px;
  }
 
  /* Sections */
  .sections-block {
    padding: 28px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .block-title {
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 300;
    letter-spacing: 0.3em;
    color: rgba(56,189,248,0.5);
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .sections-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: rgba(56,189,248,0.08);
  }
  .section-item {
    background: #0D1F3C;
    padding: 12px 14px;
    display: flex;
    gap: 12px;
  }
  .section-num {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 11px;
    color: rgba(56,189,248,0.4);
    min-width: 18px;
    padding-top: 1px;
  }
  .section-name {
    font-size: 12px;
    font-weight: 500;
    color: #F5EFE3;
    margin-bottom: 2px;
    letter-spacing: 0.02em;
  }
  .section-desc {
    font-size: 11px;
    font-weight: 300;
    color: rgba(245,239,227,0.35);
    line-height: 1.4;
  }
 
  /* 2-col layout for bottom */
  .bottom-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
  .included-block {
    padding: 24px 28px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    border-right: 1px solid rgba(255,255,255,0.06);
  }
  .inc-list { list-style: none; }
  .inc-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 12px;
    font-weight: 300;
    color: rgba(245,239,227,0.6);
    margin-bottom: 7px;
    line-height: 1.4;
  }
  .inc-bullet {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: #38BDF8;
    flex-shrink: 0;
    margin-top: 5px;
  }
 
  .exclusive-block {
    padding: 24px 28px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .exc-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 7px;
  }
  .exc-diamond {
    width: 6px; height: 6px;
    background: #38BDF8;
    transform: rotate(45deg);
    flex-shrink: 0;
    margin-top: 4px;
  }
  .exc-text {
    font-size: 12px;
    font-weight: 300;
    color: rgba(245,239,227,0.6);
    line-height: 1.4;
  }
 
  /* Specs */
  .specs-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .spec {
    padding: 16px 14px;
    border-right: 1px solid rgba(255,255,255,0.06);
  }
  .spec:last-child { border-right: none; }
  .spec-label {
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: rgba(56,189,248,0.4);
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .spec-val {
    font-size: 13px;
    font-weight: 400;
    color: #F5EFE3;
  }
 
  /* Stack */
  .stack-row {
    padding: 14px 28px;
    background: #0A1628;
    border-top: 1px solid rgba(56,189,248,0.1);
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .stack-label {
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: rgba(56,189,248,0.4);
    text-transform: uppercase;
    margin-right: 4px;
  }
  .stack-tag {
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    font-weight: 400;
    color: rgba(56,189,248,0.8);
    background: rgba(56,189,248,0.06);
    border: 1px solid rgba(56,189,248,0.18);
    padding: 3px 10px;
    letter-spacing: 0.08em;
  }
 
  /* Footer */
  .poster-footer {
    padding: 20px 28px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-top: 1px solid rgba(56,189,248,0.1);
  }
  .best-for-label {
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 300;
    letter-spacing: 0.25em;
    color: rgba(56,189,248,0.4);
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .best-for-text {
    font-size: 13px;
    font-weight: 300;
    color: rgba(245,239,227,0.6);
    line-height: 1.5;
    max-width: 280px;
  }
  .price-block { text-align: right; }
  .price-big {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #38BDF8;
    letter-spacing: -0.01em;
  }
  .price-sub {
    font-size: 9px;
    font-weight: 300;
    color: rgba(56,189,248,0.4);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 3px;
    font-family: 'Jost', sans-serif;
  }
 
  /* ornament line */
  .ornament {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 28px;
  }
  .orn-line { flex: 1; height: 1px; background: rgba(56,189,248,0.15); }
  .orn-diamond { width: 5px; height: 5px; background: #38BDF8; transform: rotate(45deg); opacity: 0.5; }
</style>
</head>

<body>
<div class="poster">
  <div class="poster-inner">
 
    <div class="tier-bar">
      <span class="tier-bar-left">Landing Page — Tier 03 / 03</span>
      <span class="tier-bar-right">Premium · Full-Service</span>
    </div>
 
    <div class="hero">
      <div class="delivery-badge">
        <p class="delivery-num">3 - 4</p>
        <p class="delivery-label">Week<br>Delivery</p>
      </div>
 
      <p class="tier-eyebrow">Advanced</p>
      <div class="ornament">
        <div class="orn-line"></div>
        <div class="orn-diamond"></div>
        <div class="orn-line" style="flex:0;width:40px;"></div>
      </div>
      <h1 class="hero-headline">Your Brand's<br><span class="italic">Finest Hour.</span></h1>
      <p class="hero-sub">A conversion-engineered masterpiece. Copywriting, A/B testing, CRM pipelines, video backgrounds, heatmaps — every detail crafted to perform at the highest level.</p>
      <div class="cta-row">
        <a class="cta-primary" href="https://wa.me/917022951232?text=Hi%2C%20I'm%20interested%20in%20the%20*Advanced%20Landing%20Page%20Package*%20%F0%9F%91%8B%0A%0A%F0%9F%93%A6%20*Package%20Details%3A*%0A%E2%80%A2%20Price%3A%20%E2%82%B920%2C000%20%E2%80%93%20%E2%82%B925%2C000%20(custom%20quote)%20%2B%20Shift-wise%20pay%0A%E2%80%A2%20Sections%3A%2010%E2%80%9314%20(Full%20funnel%20%E2%80%94%20Video%20hero%2C%20Case%20studies%2C%20Pricing%20table%2C%20Lead%20quiz%2C%20Exit%20popup%20%26%20more)%0A%E2%80%A2%20Tech%3A%20Next.js%2014%2C%20Tailwind%2C%20Framer%20Motion%2C%20Sanity%20CMS%2C%20PostHog%2C%20HubSpot%0A%E2%80%A2%20Includes%3A%20Copywriting%2C%20A%2FB%20testing%2C%20CRM%20integration%2C%20Full%20SEO%2C%20Heatmaps%0A%E2%80%A2%20Delivery%3A%203%20weeks%0A%E2%80%A2%20Revisions%3A%203%20rounds%20%2B%2030-day%20support%0A%0ACan%20you%20please%20share%20more%20details%20and%20send%20me%20a%20custom%20proposal%3F" target="_blank">Request a Proposal</a>
        <a class="cta-outline" href="https://buildwithplutoai.netlify.app/" target="_blank">View Case Studies ↗</a>
      </div>
    </div>
 
    <!-- Sections -->
    <div class="sections-block">
      <p class="block-title">Sections Included</p>
      <div class="sections-grid">
        <div class="section-item">
          <span class="section-num">01</span>
          <div><p class="section-name">Navigation + mega menu</p><p class="section-desc">Sticky, animated, dropdowns, CTA</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">02</span>
          <div><p class="section-name">Hero — video / 3D background</p><p class="section-desc">Video loop or WebGL canvas, animated text</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">03</span>
          <div><p class="section-name">Social proof bar</p><p class="section-desc">Logos, review count, awards, press mentions</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">04</span>
          <div><p class="section-name">Value proposition</p><p class="section-desc">Animated stat counters, benefit blocks</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">05</span>
          <div><p class="section-name">Product / service showcase</p><p class="section-desc">Interactive tabs, scroll-parallax sections</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">06</span>
          <div><p class="section-name">Case studies / results</p><p class="section-desc">Before/after sliders, metrics, stories</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">07</span>
          <div><p class="section-name">Testimonials — rich</p><p class="section-desc">Video testimonials or detailed quote cards</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">08</span>
          <div><p class="section-name">Pricing + comparison table</p><p class="section-desc">Full feature matrix, highlighted plan, toggle</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">09</span>
          <div><p class="section-name">Lead funnel / quiz</p><p class="section-desc">Multi-step form or segmentation quiz</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">10</span>
          <div><p class="section-name">FAQ + live chat</p><p class="section-desc">Accordion + Intercom / Crisp integration</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">11</span>
          <div><p class="section-name">Exit-intent popup</p><p class="section-desc">Timed offer or lead magnet on exit</p></div>
        </div>
        <div class="section-item">
          <span class="section-num">12</span>
          <div><p class="section-name">Footer — full sitemap</p><p class="section-desc">Links, socials, newsletter, legal, schema</p></div>
        </div>
      </div>
    </div>
 
    <!-- 2 col -->
    <div class="bottom-grid">
      <div class="included-block">
        <p class="block-title">What's Included</p>
        <ul class="inc-list">
          <li class="inc-item"><div class="inc-bullet"></div>Full UI/UX design in Figma</li>
          <li class="inc-item"><div class="inc-bullet"></div>Professional copywriting (all sections)</li>
          <li class="inc-item"><div class="inc-bullet"></div>Custom illustrations or photography direction</li>
          <li class="inc-item"><div class="inc-bullet"></div>Micro-interactions + page transitions</li>
          <li class="inc-item"><div class="inc-bullet"></div>CRM integration (HubSpot / Salesforce)</li>
          <li class="inc-item"><div class="inc-bullet"></div>Email automation sequences</li>
          <li class="inc-item"><div class="inc-bullet"></div>GA4 + Hotjar heatmaps + session recording</li>
          <li class="inc-item"><div class="inc-bullet"></div>A/B testing setup (PostHog)</li>
          <li class="inc-item"><div class="inc-bullet"></div>Full on-page SEO + JSON-LD schema</li>
          <li class="inc-item"><div class="inc-bullet"></div>Performance optimisation (Core Web Vitals)</li>
          <li class="inc-item"><div class="inc-bullet"></div>3 rounds of revisions</li>
          <li class="inc-item"><div class="inc-bullet"></div>30-day post-launch support</li>
        </ul>
      </div>
      <div class="exclusive-block">
        <p class="block-title">Advanced Exclusives</p>
        <div class="exc-item"><div class="exc-diamond"></div><p class="exc-text">Conversion funnel strategy session</p></div>
        <div class="exc-item"><div class="exc-diamond"></div><p class="exc-text">Video / WebGL hero background</p></div>
        <div class="exc-item"><div class="exc-diamond"></div><p class="exc-text">Multi-step lead qualification form</p></div>
        <div class="exc-item"><div class="exc-diamond"></div><p class="exc-text">Retargeting pixel + event tracking</p></div>
        <div class="exc-item"><div class="exc-diamond"></div><p class="exc-text">Live chat + bot integration</p></div>
        <div class="exc-item"><div class="exc-diamond"></div><p class="exc-text">Exit-intent popup with offer</p></div>
        <div class="exc-item"><div class="exc-diamond"></div><p class="exc-text">CMS integration (Sanity / Contentful)</p></div>
        <div class="exc-item"><div class="exc-diamond"></div><p class="exc-text">Core Web Vitals optimisation</p></div>
        <div class="exc-item"><div class="exc-diamond"></div><p class="exc-text">Dedicated project manager</p></div>
        <div class="exc-item"><div class="exc-diamond"></div><p class="exc-text">Monthly performance report</p></div>
        <div class="exc-item"><div class="exc-diamond"></div><p class="exc-text">Competitor landing page analysis</p></div>
        <div class="exc-item"><div class="exc-diamond"></div><p class="exc-text">Staged rollout + feature flags</p></div>
      </div>
    </div>
 
    <div class="specs-row">
      <div class="spec">
        <p class="spec-label">Sections</p>
        <p class="spec-val">10–12</p>
      </div>
      <div class="spec">
        <p class="spec-label">Delivery</p>
        <p class="spec-val">3 - 4 weeks</p>
      </div>
      <div class="spec">
        <p class="spec-label">Revisions</p>
        <p class="spec-val">2 rounds</p>
      </div>
      <div class="spec">
        <p class="spec-label">Support</p>
        <p class="spec-val">30 days</p>
      </div>
    </div>
 
    <div class="stack-row">
      <span class="stack-label">Stack</span>
      <span class="stack-tag">Next.js 14</span>
      <span class="stack-tag">Tailwind</span>
      <span class="stack-tag">Framer Motion</span>
      <span class="stack-tag">Sanity CMS</span>
      <span class="stack-tag">PostHog</span>
      <span class="stack-tag">HubSpot</span>
      <span class="stack-tag">Vercel Edge</span>
    </div>
 
    <div class="poster-footer">
      <div>
        <p class="best-for-label">Best for</p>
        <p class="best-for-text">Funded startups, established brands, agencies,<br>product launches, high-ticket services</p>
      </div>
      <div class="price-block">
        <p class="price-big">₹20,000 – ₹25,000</p>
        <p class="price-sub">One-time · No recurring fees (Shift-wise pay)</p>
      </div>
    </div>
 
  </div>
</div>
</body>
</html>`;
