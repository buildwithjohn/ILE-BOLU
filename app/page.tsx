"use client";
import { useState, useEffect, useRef } from "react";

/* ─── COLOUR TOKENS ─────────────────────────────────────────────────────── */
const C = {
  green:     "#1B4332",
  greenMid:  "#2D6A4F",
  greenLight:"#40916C",
  greenPale: "#D8F3DC",
  red:       "#C1440E",
  redWarm:   "#E05C2A",
  gold:      "#D4A017",
  cream:     "#FDFAF4",
  ink:       "#0E1B14",
};

/* ─── PALM TREE SVG ──────────────────────────────────────────────────────── */
function PalmTree({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 200" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* trunk */}
      <path d="M58 200 C56 160 54 120 60 80 C66 120 64 160 62 200Z" fill="#5C3D1A" opacity="0.8"/>
      {/* fronds */}
      <path d="M60 85 C40 60 10 55 5 40 C25 42 50 58 60 85Z" fill="#2D6A4F"/>
      <path d="M60 85 C80 60 110 55 115 40 C95 42 70 58 60 85Z" fill="#40916C"/>
      <path d="M60 85 C35 70 15 80 8 70 C28 65 50 72 60 85Z" fill="#2D6A4F" opacity="0.8"/>
      <path d="M60 85 C85 70 105 80 112 70 C92 65 70 72 60 85Z" fill="#40916C" opacity="0.8"/>
      <path d="M60 85 C45 65 45 45 35 35 C42 50 52 68 60 85Z" fill="#1B4332"/>
      <path d="M60 85 C75 65 75 45 85 35 C78 50 68 68 60 85Z" fill="#2D6A4F"/>
      {/* coconuts */}
      <circle cx="55" cy="88" r="5" fill={C.red} opacity="0.9"/>
      <circle cx="64" cy="90" r="4" fill="#C1440E" opacity="0.9"/>
      <circle cx="59" cy="94" r="4.5" fill="#A83000" opacity="0.9"/>
    </svg>
  );
}

/* ─── OIL BOTTLE SVG ─────────────────────────────────────────────────────── */
function OilBottle({ height = 200, label = "", vol = "" }: { height?: number; label?: string; vol?: string }) {
  const w = Math.round(height * 0.38);
  return (
    <svg viewBox={`0 0 60 ${height}`} width={w} height={height} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`bg-${vol}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E05C2A"/>
          <stop offset="40%" stopColor="#C1440E"/>
          <stop offset="100%" stopColor="#7A1F00"/>
        </linearGradient>
        <linearGradient id={`shine-${vol}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </linearGradient>
        <linearGradient id={`cap-${vol}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0C030"/>
          <stop offset="100%" stopColor="#8B6000"/>
        </linearGradient>
      </defs>
      {/* Cap */}
      <rect x="18" y="2" width="24" height="14" rx="4" fill={`url(#cap-${vol})`}/>
      {/* Neck */}
      <rect x="22" y="14" width="16" height="10" rx="2" fill="#C1440E"/>
      {/* Body */}
      <rect x="8" y="22" width="44" height={height - 30} rx="8" fill={`url(#bg-${vol})`}/>
      {/* Shine */}
      <rect x="10" y="24" width="12" height={height * 0.4} rx="6" fill={`url(#shine-${vol})`} opacity="0.6"/>
      {/* Label band */}
      <rect x="8" y={height * 0.35} width="44" height={height * 0.3} rx="0" fill="rgba(255,255,255,0.12)"/>
      {/* Label text — vol */}
      <text x="30" y={height * 0.52} textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" fontFamily="system-ui">{vol}</text>
      {/* Label text — name */}
      <text x="30" y={height * 0.6} textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.8)" fontFamily="system-ui">PALM OIL</text>
      {/* Bottom shine */}
      <ellipse cx="30" cy={height - 12} rx="18" ry="4" fill="rgba(0,0,0,0.25)"/>
    </svg>
  );
}

/* ─── LEAF SVG ───────────────────────────────────────────────────────────── */
function Leaf({ color = "#40916C", size = 40, style = {} }: { color?: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 40 52" style={style}>
      <path d="M20 2 C20 2 40 12 38 30 C36 44 28 52 20 52 C12 52 4 44 2 30 C0 12 20 2 20 2Z" fill={color} opacity="0.9"/>
      <line x1="20" y1="4" x2="20" y2="50" stroke={C.green} strokeWidth="1.5" opacity="0.6"/>
      <line x1="20" y1="15" x2="10" y2="22" stroke={C.green} strokeWidth="0.8" opacity="0.4"/>
      <line x1="20" y1="22" x2="30" y2="29" stroke={C.green} strokeWidth="0.8" opacity="0.4"/>
      <line x1="20" y1="30" x2="11" y2="38" stroke={C.green} strokeWidth="0.8" opacity="0.4"/>
    </svg>
  );
}

/* ─── DROPLET SVG ────────────────────────────────────────────────────────── */
function OilDroplet() {
  return (
    <svg viewBox="0 0 220 320" width="220" height="320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="dropGrad" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#F07040"/>
          <stop offset="50%" stopColor="#C1440E"/>
          <stop offset="100%" stopColor="#6B1800"/>
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Glow halo */}
      <ellipse cx="110" cy="290" rx="70" ry="18" fill={C.red} opacity="0.25" filter="url(#glow)"/>
      {/* Main droplet shape */}
      <path d="M110 10 C110 10 200 100 200 195 C200 255 160 305 110 305 C60 305 20 255 20 195 C20 100 110 10 110 10Z"
        fill="url(#dropGrad)" filter="url(#glow)"/>
      {/* Highlight */}
      <ellipse cx="75" cy="120" rx="22" ry="50" fill="rgba(255,255,255,0.18)" transform="rotate(-15 75 120)"/>
      <ellipse cx="68" cy="105" rx="8" ry="22" fill="rgba(255,255,255,0.28)" transform="rotate(-15 68 105)"/>
      {/* Text inside */}
      <text x="110" y="195" textAnchor="middle" fontSize="13" fontWeight="bold" fill="rgba(255,255,255,0.95)" fontFamily="Georgia, serif">ILÉ BOLU</text>
      <text x="110" y="214" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.75)" fontFamily="system-ui">PREMIUM PALM OIL</text>
      <text x="110" y="232" textAnchor="middle" fontSize="8" fill="rgba(255,190,100,0.9)" fontFamily="system-ui">100% PURE · NATURAL</text>
      {/* Leaf icon in droplet */}
      <g transform="translate(95,148) scale(0.55)">
        <path d="M20 2 C20 2 36 10 34 24 C32 34 26 40 20 40 C14 40 8 34 6 24 C4 10 20 2 20 2Z" fill="rgba(255,255,255,0.25)"/>
        <line x1="20" y1="3" x2="20" y2="39" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      </g>
    </svg>
  );
}

/* ─── NAV ─────────────────────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  const links = [["home","Home"],["about","About"],["products","Products"],["contact","Contact"]];

  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:100,
      background: scrolled ? "rgba(14,27,20,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.4)" : "none",
      transition: "all 0.4s ease",
      padding: scrolled ? "12px 0" : "20px 0",
    }}>
      <div style={{maxWidth:1100, margin:"0 auto", padding:"0 24px", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        {/* Logo */}
        <button onClick={() => go("home")} style={{display:"flex", alignItems:"center", gap:10, background:"none", border:"none", cursor:"pointer"}}>
          <div style={{width:38, height:38, borderRadius:"50%", background:C.gold, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:13, color:C.ink, fontFamily:"Georgia,serif", flexShrink:0}}>IB</div>
          <div style={{textAlign:"left"}}>
            <div style={{color:"white", fontWeight:700, fontSize:11.5, letterSpacing:"0.08em", lineHeight:1.2}}>ILÉ BOLU AGRO VENTURE LTD.</div>
            <div style={{color:C.gold, fontSize:8.5, letterSpacing:"0.22em", textTransform:"uppercase"}}>From Soil to Value 🌱</div>
          </div>
        </button>

        {/* Desktop links */}
        <div style={{display:"flex", alignItems:"center", gap:32}} className="hidden md:flex">
          {links.map(([id,label]) => (
            <button key={id} onClick={() => go(id)} style={{background:"none", border:"none", color:"rgba(255,255,255,0.82)", fontSize:13.5, fontWeight:500, cursor:"pointer", letterSpacing:"0.02em", transition:"color 0.2s"}}
              onMouseEnter={e=>(e.currentTarget.style.color="white")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.82)")}>{label}</button>
          ))}
          <button onClick={() => go("contact")} style={{background:C.red, color:"white", border:"none", padding:"10px 22px", borderRadius:999, fontSize:13, fontWeight:700, cursor:"pointer", transition:"all 0.2s"}}
            onMouseEnter={e=>(e.currentTarget.style.background=C.redWarm)} onMouseLeave={e=>(e.currentTarget.style.background=C.red)}>
            Order Now
          </button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} style={{background:"none", border:"none", cursor:"pointer", padding:6, display:"flex", flexDirection:"column", gap:5}} className="md:hidden">
          {[0,1,2].map(i => (
            <div key={i} style={{width:22, height:2, background:"white", borderRadius:2, transition:"all 0.3s",
              transform: open ? (i===0?"rotate(45deg) translate(5px,5px)":i===2?"rotate(-45deg) translate(5px,-5px)":"none") : "none",
              opacity: open && i===1 ? 0 : 1}}/>
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{overflow:"hidden", maxHeight: open ? 320 : 0, transition:"max-height 0.35s ease", background:"rgba(14,27,20,0.99)"}}>
        <div style={{padding:"16px 24px 20px", display:"flex", flexDirection:"column", gap:4}}>
          {links.map(([id,label]) => (
            <button key={id} onClick={() => go(id)} style={{background:"none", border:"none", color:"rgba(255,255,255,0.85)", fontSize:15, fontWeight:500, padding:"10px 0", textAlign:"left", cursor:"pointer", borderBottom:"1px solid rgba(255,255,255,0.06)"}}>{label}</button>
          ))}
          <button onClick={() => go("contact")} style={{background:C.red, color:"white", border:"none", padding:"12px", borderRadius:999, fontSize:14, fontWeight:700, cursor:"pointer", marginTop:10}}>
            🛒 Order Now
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ─── HERO ────────────────────────────────────────────────────────────────── */
function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 80); }, []);

  return (
    <section id="home" style={{position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", overflow:"hidden", background:`linear-gradient(145deg, #060f08 0%, #0d1f13 30%, ${C.green} 70%, #132a1c 100%)`}}>
      {/* Animated blobs */}
      <div style={{position:"absolute", top:"15%", left:"-5%", width:420, height:420, borderRadius:"60% 40% 30% 70%/60% 30% 70% 40%", background:"rgba(45,106,79,0.28)", filter:"blur(50px)", animation:"blob 8s ease-in-out infinite"}}/>
      <div style={{position:"absolute", bottom:"10%", right:"-5%", width:350, height:350, borderRadius:"40% 60% 70% 30%/40% 50% 50% 60%", background:"rgba(193,68,14,0.18)", filter:"blur(50px)", animation:"blob 10s ease-in-out infinite reverse"}}/>

      {/* Grid overlay */}
      <div style={{position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize:"55px 55px", pointerEvents:"none"}}/>

      {/* Floating leaves */}
      <div className="anim-float" style={{position:"absolute", top:"18%", right:"8%", opacity:0.25}}>
        <Leaf color="#52B788" size={52}/>
      </div>
      <div className="anim-float2" style={{position:"absolute", top:"55%", right:"18%", opacity:0.18}}>
        <Leaf color="#D4A017" size={35}/>
      </div>
      <div className="anim-float" style={{position:"absolute", bottom:"25%", left:"5%", opacity:0.15}}>
        <Leaf color="#40916C" size={44}/>
      </div>

      {/* Palm trees */}
      <PalmTree style={{position:"absolute", bottom:50, right:"3%", width:120, opacity:0.18}}/>
      <PalmTree style={{position:"absolute", bottom:50, left:"2%", width:80, opacity:0.12, transform:"scaleX(-1)"}}/>

      {/* Spinning circle accent */}
      <div className="anim-spin" style={{position:"absolute", top:"12%", left:"38%", width:80, height:80, borderRadius:"50%", border:"1px dashed rgba(212,160,23,0.3)", pointerEvents:"none"}}/>
      <div style={{position:"absolute", top:"14%", left:"40%", width:60, height:60, borderRadius:"50%", border:"1px solid rgba(212,160,23,0.15)", pointerEvents:"none"}}/>

      {/* Content */}
      <div style={{maxWidth:1100, margin:"0 auto", padding:"130px 24px 100px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"center", width:"100%", position:"relative", zIndex:5}}
        className="hero-grid">
        <style>{`@media(max-width:768px){.hero-grid{grid-template-columns:1fr!important;padding:120px 20px 80px!important}.hero-right{display:none!important}}`}</style>

        {/* LEFT */}
        <div>
          <div className={show ? "fade-up-1" : ""} style={{display:"inline-flex", alignItems:"center", gap:8, borderRadius:999, padding:"6px 16px", marginBottom:24, background:"rgba(45,106,79,0.4)", border:"1px solid rgba(64,145,108,0.5)"}}>
            <span className="anim-pulse" style={{width:8, height:8, borderRadius:"50%", background:C.gold, display:"inline-block"}}/>
            <span style={{color:C.gold, fontSize:11, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase"}}>Premium Palm Oil — Lagos, Nigeria</span>
          </div>

          <h1 className={show ? "fade-up-2" : ""} style={{fontFamily:"Georgia,'Times New Roman',serif", lineHeight:1.08, marginBottom:16, color:"white"}}>
            <span style={{display:"block", fontSize:"clamp(48px,7vw,88px)", fontWeight:700}}>From Soil</span>
            <span style={{display:"block", fontSize:"clamp(48px,7vw,88px)", fontWeight:700, fontStyle:"italic", background:"linear-gradient(90deg,#D4A017,#FFF5C0,#D4A017)", backgroundSize:"200%", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", animation:"shimmer 3s linear infinite"}}>to Value.</span>
          </h1>

          <p className={show ? "fade-up-3" : ""} style={{fontFamily:"Georgia,serif", color:"rgba(255,255,255,0.55)", fontSize:20, fontStyle:"italic", marginBottom:10}}>
            Pure. Fresh. Trusted Palm Oil
          </p>

          <p className={show ? "fade-up-3" : ""} style={{color:"rgba(255,255,255,0.72)", fontSize:14.5, lineHeight:1.75, marginBottom:36, maxWidth:480}}>
            At ILÉ BOLU Agro Venture Ltd., we deliver high-quality, hygienically processed palm oil carefully sourced and repackaged to meet the needs of homes, retailers, and bulk buyers. From the soil where it is grown to the value it brings to your kitchen — excellence at every step.
          </p>

          <div className={show ? "fade-up-4" : ""} style={{display:"flex", flexWrap:"wrap", gap:12}}>
            <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer"
              style={{display:"inline-flex", alignItems:"center", gap:8, background:C.red, color:"white", textDecoration:"none", padding:"14px 28px", borderRadius:999, fontSize:14, fontWeight:700, boxShadow:"0 8px 30px rgba(193,68,14,0.35)", transition:"all 0.2s"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.background=C.redWarm;(e.currentTarget as HTMLAnchorElement).style.transform="scale(1.04)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.background=C.red;(e.currentTarget as HTMLAnchorElement).style.transform="scale(1)"}}>
              🛒 Order Now
            </a>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}
              style={{background:"transparent", border:"1.5px solid rgba(255,255,255,0.35)", color:"white", padding:"14px 28px", borderRadius:999, fontSize:14, fontWeight:600, cursor:"pointer", transition:"all 0.2s"}}
              onMouseEnter={e=>(e.currentTarget.style.background="rgba(255,255,255,0.1)")} onMouseLeave={e=>(e.currentTarget.style.background="transparent")}>
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT — animated product art */}
        <div className="hero-right" style={{display:"flex", justifyContent:"center", alignItems:"center", position:"relative"}}>
          {/* Glow circle */}
          <div style={{position:"absolute", width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle, rgba(193,68,14,0.3) 0%, transparent 70%)", filter:"blur(30px)"}}/>
          {/* Droplet */}
          <div className="anim-float" style={{position:"relative", zIndex:2}}>
            <OilDroplet/>
          </div>
          {/* Orbiting bottle */}
          <div className="anim-float2" style={{position:"absolute", top:10, right:0, zIndex:3}}>
            <OilBottle height={110} vol="5L"/>
          </div>
          <div className="anim-float" style={{position:"absolute", bottom:20, left:10, zIndex:3, animationDelay:"1s"}}>
            <OilBottle height={80} vol="1L"/>
          </div>
          {/* Badges */}
          <div className="anim-float2" style={{position:"absolute", top:-10, left:10, background:C.gold, borderRadius:16, padding:"8px 14px", zIndex:4, boxShadow:"0 6px 20px rgba(0,0,0,0.3)"}}>
            <div style={{color:C.ink, fontWeight:800, fontSize:10}}>✔ Hygienically</div>
            <div style={{color:C.ink, fontWeight:800, fontSize:10}}>Processed</div>
          </div>
          <div className="anim-float" style={{position:"absolute", bottom:-10, right:5, background:C.green, border:"1px solid rgba(64,145,108,0.5)", borderRadius:16, padding:"8px 16px", zIndex:4, boxShadow:"0 6px 20px rgba(0,0,0,0.3)"}}>
            <div style={{color:C.gold, fontSize:9, fontWeight:600}}>Available in</div>
            <div style={{color:"white", fontWeight:700, fontSize:13}}>1L · 2L · 5L · 25L</div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div style={{position:"absolute", bottom:-1, left:0, right:0}}>
        <svg viewBox="0 0 1440 90" style={{width:"100%", display:"block"}} preserveAspectRatio="none">
          <path d="M0,45 C480,90 960,0 1440,45 L1440,90 L0,90 Z" fill={C.cream}/>
        </svg>
      </div>
    </section>
  );
}

/* ─── MARQUEE ─────────────────────────────────────────────────────────────── */
function Marquee() {
  const items = ["100% Pure Palm Oil","Hygienically Processed","Rich Natural Color","Affordable & Reliable","Bulk & Retail Supply","Fast Lagos Delivery","Nationwide Available","Trusted Quality","Clean. Safe. Trusted"];
  const all = [...items,...items];
  return (
    <div style={{background:C.green, padding:"14px 0", overflow:"hidden", borderTop:`3px solid ${C.gold}`, borderBottom:`3px solid ${C.gold}`}}>
      <div style={{display:"flex", whiteSpace:"nowrap", animation:"marquee 26s linear infinite"}}>
        {all.map((t,i) => (
          <span key={i} style={{display:"inline-flex", alignItems:"center", gap:16, marginRight:32}}>
            <span style={{color:C.gold, fontSize:13, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase"}}>{t}</span>
            <span style={{color:C.greenLight, fontSize:18}}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── WHY US ──────────────────────────────────────────────────────────────── */
function WhyUs() {
  const items = [
    {icon:"✔", title:"100% Pure Palm Oil", desc:"No additives, no water, no impurities. What nature produced, we preserve and deliver."},
    {icon:"🧪", title:"Hygienically Processed", desc:"Every batch goes through rigorous filtration for guaranteed safety and purity."},
    {icon:"🌿", title:"Rich Natural Color & Taste", desc:"Deep red, fragrant, and flavourful — exactly as nature intended."},
    {icon:"💰", title:"Affordable & Reliable", desc:"Consistent pricing and supply you can count on, for homes and businesses alike."},
    {icon:"📦", title:"Bulk & Retail Available", desc:"From 1-litre household packs to 25-litre commercial bulk supply — we cover all needs."},
  ];

  return (
    <section style={{background:C.cream, padding:"90px 0", overflow:"hidden", position:"relative"}}>
      <div style={{position:"absolute", top:0, right:0, width:350, height:350, borderRadius:"50%", background:C.greenPale, filter:"blur(80px)", opacity:0.7}}/>
      <div style={{maxWidth:1100, margin:"0 auto", padding:"0 24px"}}>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center"}} className="two-col">
          <style>{`@media(max-width:768px){.two-col{grid-template-columns:1fr!important;gap:40px!important}}`}</style>

          <div>
            <div style={{display:"inline-flex", alignItems:"center", gap:8, borderRadius:999, padding:"6px 16px", marginBottom:20, background:C.greenPale}}>
              <span style={{width:6, height:6, borderRadius:"50%", background:C.green, display:"inline-block"}}/>
              <span style={{color:C.green, fontSize:10.5, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase"}}>Who We Are</span>
            </div>
            <h2 style={{fontFamily:"Georgia,'Times New Roman',serif", fontSize:"clamp(32px,4vw,50px)", fontWeight:700, lineHeight:1.15, color:C.ink, marginBottom:20}}>
              An Agro Brand Built on <em style={{color:C.red}}>Trust</em>
            </h2>
            <p style={{color:"rgba(14,27,20,0.68)", fontSize:14.5, lineHeight:1.8, marginBottom:16}}>
              We are an agro-based company committed to delivering clean, safe, and affordable food products. Starting with premium palm oil, we are building a trusted brand that transforms raw agricultural produce into valuable everyday essentials.
            </p>
            <p style={{color:"rgba(14,27,20,0.68)", fontSize:14.5, lineHeight:1.8, marginBottom:36}}>
              Every bottle we supply carries our promise: pure, uncompromised quality — from the farm to your table.
            </p>
            <div style={{display:"flex", gap:40}}>
              {[{v:"100%",l:"Pure, No Adulteration",c:C.green},{v:"4",l:"Size Options",c:C.red},{v:"🌍",l:"Nationwide Delivery",c:C.gold}].map((s,i) => (
                <div key={i}>
                  <div style={{fontFamily:"Georgia,serif", fontSize:30, fontWeight:700, color:s.c}}>{s.v}</div>
                  <div style={{fontSize:11, color:"rgba(14,27,20,0.5)", marginTop:4}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{display:"flex", flexDirection:"column", gap:10}}>
            {items.map((it,i) => (
              <div key={i} style={{display:"flex", alignItems:"flex-start", gap:14, background:"white", borderRadius:16, padding:"14px 18px", boxShadow:"0 2px 12px rgba(0,0,0,0.05)", border:"1px solid #D8F3DC", transition:"all 0.2s"}}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 6px 24px rgba(27,67,50,0.12)";(e.currentTarget as HTMLElement).style.borderColor=C.greenLight}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 2px 12px rgba(0,0,0,0.05)";(e.currentTarget as HTMLElement).style.borderColor="#D8F3DC"}}>
                <div style={{width:40, height:40, borderRadius:12, background:C.greenPale, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0}}>{it.icon}</div>
                <div>
                  <div style={{fontWeight:700, fontSize:13.5, color:C.ink, marginBottom:3}}>{it.title}</div>
                  <div style={{fontSize:12.5, color:"rgba(14,27,20,0.6)", lineHeight:1.6}}>{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PRODUCTS ────────────────────────────────────────────────────────────── */
function Products() {
  const sizes = [
    {vol:"1L", label:"1 Litre", sub:"Small households", h:100},
    {vol:"2L", label:"2 Litres", sub:"Regular home use", h:135},
    {vol:"5L", label:"5 Litres", sub:"Large families & small businesses", h:180},
    {vol:"25L", label:"25 Litres", sub:"Restaurants, caterers & retailers", h:260, badge:"Bulk"},
  ];
  const benefits = ["Rich red natural color","No adulteration","Long shelf life","Great taste & aroma","All cooking types","Commercial use safe"];

  return (
    <section id="products" style={{background:C.ink, padding:"100px 0", position:"relative", overflow:"hidden"}}>
      <div style={{position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:700, height:350, borderRadius:"50%", background:"rgba(27,67,50,0.35)", filter:"blur(60px)"}}/>
      {/* Palm decorations */}
      <PalmTree style={{position:"absolute", bottom:0, left:"2%", width:100, opacity:0.1}}/>
      <PalmTree style={{position:"absolute", bottom:0, right:"3%", width:130, opacity:0.1, transform:"scaleX(-1)"}}/>

      <div style={{maxWidth:1100, margin:"0 auto", padding:"0 24px", position:"relative", zIndex:5}}>
        <div style={{textAlign:"center", marginBottom:60}}>
          <div style={{display:"inline-flex", alignItems:"center", gap:8, borderRadius:999, padding:"6px 18px", marginBottom:20, background:"rgba(45,106,79,0.45)", border:"1px solid rgba(64,145,108,0.4)"}}>
            <span style={{color:C.gold, fontSize:11, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase"}}>Our Product</span>
          </div>
          <h2 style={{fontFamily:"Georgia,'Times New Roman',serif", fontSize:"clamp(32px,4.5vw,54px)", fontWeight:700, color:"white", marginBottom:14}}>Premium Palm Oil</h2>
          <p style={{color:"rgba(255,255,255,0.58)", maxWidth:520, margin:"0 auto", fontSize:14.5}}>Carefully sourced and processed to retain its natural richness. Perfect for cooking, frying, and food production.</p>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"flex-end"}} className="two-col">
          {/* Bottles */}
          <div>
            <div style={{color:C.gold, fontSize:10.5, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:24}}>Available Sizes</div>
            <div style={{display:"flex", alignItems:"flex-end", gap:20, flexWrap:"wrap"}}>
              {sizes.map((s,i) => (
                <div key={i} style={{display:"flex", flexDirection:"column", alignItems:"center", gap:10, cursor:"pointer"}}
                  onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform="scale(1.06)"}
                  onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform="scale(1)"}>
                  <div style={{position:"relative"}}>
                    {s.badge && (
                      <div style={{position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)", background:C.gold, color:C.ink, fontSize:9, fontWeight:800, padding:"2px 10px", borderRadius:999, whiteSpace:"nowrap", zIndex:2}}>{s.badge}</div>
                    )}
                    <OilBottle height={s.h} vol={s.vol}/>
                  </div>
                  <div style={{textAlign:"center"}}>
                    <div style={{color:"white", fontSize:12, fontWeight:700}}>{s.label}</div>
                    <div style={{color:"rgba(255,255,255,0.38)", fontSize:10, maxWidth:80, lineHeight:1.4}}>{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits + CTA */}
          <div>
            <div style={{color:C.gold, fontSize:10.5, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:16}}>Product Benefits</div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:28}}>
              {benefits.map((b,i) => (
                <div key={i} style={{display:"flex", alignItems:"center", gap:10, borderRadius:12, padding:"10px 14px", background:"rgba(27,67,50,0.7)", border:"1px solid rgba(45,106,79,0.55)"}}>
                  <div style={{width:6, height:6, borderRadius:"50%", background:C.gold, flexShrink:0}}/>
                  <span style={{color:"rgba(255,255,255,0.8)", fontSize:12}}>{b}</span>
                </div>
              ))}
            </div>
            <div style={{borderRadius:24, padding:24, background:"linear-gradient(135deg,rgba(193,68,14,0.22),rgba(193,68,14,0.06))", border:"1px solid rgba(193,68,14,0.4)"}}>
              <div style={{fontFamily:"Georgia,serif", color:"rgba(255,255,255,0.65)", fontStyle:"italic", fontSize:18, marginBottom:6}}>Clean. Safe. Trusted.</div>
              <div style={{fontFamily:"Georgia,serif", color:"white", fontWeight:700, fontSize:20, marginBottom:18}}>Ready to place your order?</div>
              <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
                <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer"
                  style={{flex:1, minWidth:120, display:"flex", alignItems:"center", justifyContent:"center", gap:8, background:"#25D366", color:"white", textDecoration:"none", padding:"12px 16px", borderRadius:999, fontSize:13, fontWeight:700}}>
                  📱 WhatsApp Order
                </a>
                <a href="tel:07030124346" style={{flex:1, minWidth:120, display:"flex", alignItems:"center", justifyContent:"center", gap:8, color:"white", textDecoration:"none", padding:"12px 16px", borderRadius:999, fontSize:13, fontWeight:600, border:"1px solid rgba(255,255,255,0.25)"}}>
                  📞 Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ───────────────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" style={{background:C.cream, padding:"100px 0", position:"relative", overflow:"hidden"}}>
      <div style={{position:"absolute", top:0, right:0, width:320, height:320, borderRadius:"50%", background:C.greenPale, filter:"blur(70px)", opacity:0.8}}/>
      <div style={{maxWidth:1100, margin:"0 auto", padding:"0 24px", position:"relative", zIndex:2}}>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:60}} className="two-col">
          <div>
            <div style={{display:"inline-flex", alignItems:"center", gap:8, borderRadius:999, padding:"6px 16px", marginBottom:20, background:C.greenPale}}>
              <span style={{color:C.green, fontSize:10.5, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase"}}>About Us</span>
            </div>
            <h2 style={{fontFamily:"Georgia,'Times New Roman',serif", fontSize:"clamp(30px,4vw,48px)", fontWeight:700, lineHeight:1.15, color:C.ink, marginBottom:20}}>
              About ILÉ BOLU<br/><span style={{color:C.green}}>Agro Venture Ltd.</span>
            </h2>
            {["ILÉ BOLU Agro Venture Ltd. is a growing agro-business dedicated to transforming agricultural produce into high-quality, value-added products.",
              "Our journey begins with palm oil — carefully sourced, properly processed, and hygienically packaged to meet the needs of modern homes and businesses.",
              "Our vision is to expand into large-scale agricultural production and processing, including oil palm farming, cocoa farming, food processing, livestock farming, and agro-training services.",
            ].map((p,i) => (
              <p key={i} style={{color:"rgba(14,27,20,0.68)", fontSize:14.5, lineHeight:1.8, marginBottom:14}}>{p}</p>
            ))}
            <div style={{borderRadius:18, padding:"20px 24px", background:C.green, marginTop:10}}>
              <div style={{fontFamily:"Georgia,serif", color:C.gold, fontStyle:"italic", fontSize:18, marginBottom:6}}>Our Mission</div>
              <p style={{color:"rgba(255,255,255,0.82)", fontSize:14}}>To create value from the soil and deliver it with excellence.</p>
            </div>
          </div>

          <div style={{display:"flex", flexDirection:"column", gap:16}}>
            {/* Vision */}
            <div style={{background:"white", borderRadius:24, padding:24, boxShadow:"0 4px 20px rgba(0,0,0,0.06)", border:"1px solid #D8F3DC"}}>
              <div style={{display:"flex", alignItems:"center", gap:12, marginBottom:14}}>
                <div style={{width:42, height:42, borderRadius:14, background:C.green, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20}}>🌱</div>
                <div style={{fontFamily:"Georgia,serif", fontWeight:700, fontSize:18, color:C.ink}}>Our Vision</div>
              </div>
              <p style={{fontSize:13.5, lineHeight:1.7, color:"rgba(14,27,20,0.68)"}}>To become a leading agro-industrial brand known for quality, integrity, and value creation across Nigeria and beyond.</p>
            </div>
            {/* Mission */}
            <div style={{background:"white", borderRadius:24, padding:24, boxShadow:"0 4px 20px rgba(0,0,0,0.06)", border:"1px solid #D8F3DC"}}>
              <div style={{display:"flex", alignItems:"center", gap:12, marginBottom:14}}>
                <div style={{width:42, height:42, borderRadius:14, background:C.red, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20}}>🎯</div>
                <div style={{fontFamily:"Georgia,serif", fontWeight:700, fontSize:18, color:C.ink}}>Our Mission</div>
              </div>
              {["Provide clean and affordable agro products","Promote quality processing and packaging","Build trust through consistency and excellence"].map((m,i) => (
                <div key={i} style={{display:"flex", alignItems:"flex-start", gap:10, marginBottom:10}}>
                  <div style={{width:20, height:20, borderRadius:"50%", background:C.greenPale, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1}}>
                    <div style={{width:6, height:6, borderRadius:"50%", background:C.green}}/>
                  </div>
                  <span style={{fontSize:13.5, lineHeight:1.6, color:"rgba(14,27,20,0.68)"}}>{m}</span>
                </div>
              ))}
            </div>
            {/* Future */}
            <div style={{background:`linear-gradient(135deg, ${C.green}, ${C.ink})`, borderRadius:24, padding:24}}>
              <div style={{color:C.gold, fontSize:10.5, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:12}}>Our Future</div>
              <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
                {["Oil Palm Farming","Cocoa Farming","Food Processing","Livestock Farming","Agro-Training"].map((f,i) => (
                  <span key={i} style={{background:"rgba(45,106,79,0.65)", border:"1px solid rgba(64,145,108,0.45)", color:"rgba(255,255,255,0.82)", fontSize:12, padding:"6px 14px", borderRadius:999}}>{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA BAND ────────────────────────────────────────────────────────────── */
function CtaBand() {
  return (
    <div style={{background:C.red, padding:"64px 0", position:"relative", overflow:"hidden"}}>
      <div style={{position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize:"36px 36px"}}/>
      <div style={{maxWidth:860, margin:"0 auto", padding:"0 24px", textAlign:"center", position:"relative", zIndex:2}}>
        <h2 style={{fontFamily:"Georgia,'Times New Roman',serif", color:"white", fontSize:"clamp(26px,4vw,42px)", fontWeight:700, marginBottom:12}}>
          Ready to order quality palm oil?
        </h2>
        <p style={{color:"rgba(255,255,255,0.78)", marginBottom:28, fontSize:14.5}}>We deliver within Lagos and across Nigeria on request.</p>
        <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", gap:14}}>
          <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer"
            style={{background:"white", color:C.red, textDecoration:"none", padding:"14px 30px", borderRadius:999, fontWeight:800, fontSize:14, boxShadow:"0 6px 24px rgba(0,0,0,0.2)", transition:"all 0.2s"}}
            onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.transform="scale(1.05)"}
            onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.transform="scale(1)"}>
            📱 WhatsApp: 07030124346
          </a>
          <a href="mailto:ilebolu96@gmail.com" style={{color:"white", textDecoration:"none", padding:"14px 30px", borderRadius:999, fontWeight:700, fontSize:14, border:"2px solid rgba(255,255,255,0.55)", transition:"all 0.2s"}}
            onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.background="rgba(255,255,255,0.12)"}
            onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.background="transparent"}>
            📧 ilebolu96@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── CONTACT ──────────────────────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" style={{background:C.cream, padding:"100px 0"}}>
      <div style={{maxWidth:1100, margin:"0 auto", padding:"0 24px"}}>
        <div style={{textAlign:"center", marginBottom:56}}>
          <div style={{display:"inline-flex", alignItems:"center", gap:8, borderRadius:999, padding:"6px 16px", marginBottom:20, background:C.greenPale}}>
            <span style={{color:C.green, fontSize:10.5, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase"}}>Get In Touch</span>
          </div>
          <h2 style={{fontFamily:"Georgia,'Times New Roman',serif", fontSize:"clamp(30px,4vw,50px)", fontWeight:700, color:C.ink}}>
            Let&apos;s Talk Business
          </h2>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16, marginBottom:16}} className="three-col">
          <style>{`@media(max-width:768px){.three-col{grid-template-columns:1fr!important}}`}</style>
          {[
            {icon:"📍", title:"Our Address", val:"302, Murtala Muhammed Way, Alagomeji Yaba, Lagos", bg:C.green, tc:"white", sc:"rgba(255,255,255,0.65)"},
            {icon:"📱", title:"Phone / WhatsApp", val:"07030124346", bg:C.red, tc:"white", sc:"rgba(255,255,255,0.65)", link:"tel:07030124346"},
            {icon:"📧", title:"Email", val:"ilebolu96@gmail.com", bg:C.gold, tc:C.ink, sc:"rgba(14,27,20,0.6)", link:"mailto:ilebolu96@gmail.com"},
          ].map((c,i) => (
            <div key={i} style={{borderRadius:24, padding:24, background:c.bg}}>
              <div style={{fontSize:26, marginBottom:10}}>{c.icon}</div>
              <div style={{fontWeight:600, fontSize:12, marginBottom:6, color:c.sc, textTransform:"uppercase", letterSpacing:"0.1em"}}>{c.title}</div>
              {c.link ? (
                <a href={c.link} style={{fontFamily:"Georgia,serif", fontWeight:700, fontSize:17, color:c.tc, textDecoration:"none"}}>{c.val}</a>
              ) : (
                <div style={{fontWeight:700, fontSize:14, color:c.tc, lineHeight:1.6}}>{c.val}</div>
              )}
            </div>
          ))}
        </div>

        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16}} className="two-col">
          <div style={{background:"white", borderRadius:24, padding:24, border:"1px solid #D8F3DC", boxShadow:"0 2px 12px rgba(0,0,0,0.04)"}}>
            <div style={{fontSize:26, marginBottom:10}}>🚚</div>
            <div style={{fontFamily:"Georgia,serif", fontWeight:700, fontSize:18, color:C.ink, marginBottom:12}}>Delivery Info</div>
            {["Fast delivery within Lagos","Nationwide delivery available on request"].map((d,i) => (
              <div key={i} style={{display:"flex", alignItems:"center", gap:10, marginBottom:8, fontSize:14, color:"rgba(14,27,20,0.7)"}}>
                <div style={{width:8, height:8, borderRadius:"50%", background:C.green, flexShrink:0}}/>
                {d}
              </div>
            ))}
          </div>
          <div style={{borderRadius:24, padding:24, background:C.green, display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
            <div>
              <div style={{fontSize:26, marginBottom:10}}>💬</div>
              <div style={{fontFamily:"Georgia,serif", fontWeight:700, color:"white", fontSize:18, marginBottom:8}}>Quick Order via WhatsApp</div>
              <p style={{color:"rgba(255,255,255,0.68)", fontSize:13.5, marginBottom:20, lineHeight:1.6}}>Chat with us directly and place your order instantly. We respond fast!</p>
            </div>
            <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil%20from%20Il%C3%A9%20Bolu%20Agro%20Venture" target="_blank" rel="noopener noreferrer"
              style={{display:"flex", alignItems:"center", justifyContent:"center", gap:8, background:"#25D366", color:"white", textDecoration:"none", padding:"14px", borderRadius:999, fontSize:14, fontWeight:800, transition:"all 0.2s"}}
              onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.transform="scale(1.03)"}
              onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.transform="scale(1)"}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{background:C.ink, position:"relative", overflow:"hidden"}}>
      <div style={{position:"absolute", top:0, left:0, right:0}}>
        <svg viewBox="0 0 1440 70" style={{width:"100%", display:"block"}} preserveAspectRatio="none">
          <path d="M0,35 C480,70 960,0 1440,35 L1440,0 L0,0 Z" fill={C.cream}/>
        </svg>
      </div>
      {/* BG palm */}
      <PalmTree style={{position:"absolute", right:"5%", bottom:0, width:160, opacity:0.06}}/>

      <div style={{paddingTop:70, paddingBottom:24, position:"relative", zIndex:2}}>
        <div style={{maxWidth:1100, margin:"0 auto", padding:"0 24px"}}>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:40, marginBottom:40}} className="three-col">
            <div>
              <div style={{display:"flex", alignItems:"center", gap:12, marginBottom:14}}>
                <div style={{width:40, height:40, borderRadius:"50%", background:C.gold, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, color:C.ink, fontFamily:"Georgia,serif", fontSize:12}}>IB</div>
                <div>
                  <div style={{color:"white", fontWeight:700, fontSize:11, letterSpacing:"0.08em"}}>ILÉ BOLU AGRO VENTURE LTD.</div>
                  <div style={{color:C.gold, fontSize:8.5, letterSpacing:"0.2em", textTransform:"uppercase"}}>From Soil to Value 🌱</div>
                </div>
              </div>
              <p style={{color:"rgba(255,255,255,0.45)", fontSize:13, lineHeight:1.7}}>Providing trusted agro products starting with premium palm oil. Pure. Fresh. Trusted.</p>
            </div>
            <div>
              <div style={{color:C.gold, fontSize:10, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:16}}>Contact Us</div>
              {[{icon:"📞",val:"07030124346",link:"tel:07030124346"},{icon:"📧",val:"ilebolu96@gmail.com",link:"mailto:ilebolu96@gmail.com"},{icon:"📍",val:"302, Murtala Muhammed Way, Alagomeji Yaba, Lagos"}].map((c,i) => (
                <div key={i} style={{display:"flex", gap:10, marginBottom:10, fontSize:13, color:"rgba(255,255,255,0.6)"}}>
                  <span>{c.icon}</span>
                  {c.link ? <a href={c.link} style={{color:"rgba(255,255,255,0.7)", textDecoration:"none"}}>{c.val}</a> : <span>{c.val}</span>}
                </div>
              ))}
            </div>
            <div>
              <div style={{color:C.gold, fontSize:10, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:16}}>Quick Order</div>
              <p style={{color:"rgba(255,255,255,0.5)", fontSize:13, marginBottom:14}}>Ready to order? Reach us on WhatsApp for instant response.</p>
              <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer"
                style={{display:"inline-flex", alignItems:"center", gap:8, background:"#25D366", color:"white", textDecoration:"none", padding:"10px 20px", borderRadius:999, fontSize:13, fontWeight:700}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div style={{borderTop:"1px solid rgba(27,67,50,0.8)", paddingTop:20, display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:8}}>
            <span style={{color:"rgba(255,255,255,0.25)", fontSize:12}}>© {new Date().getFullYear()} ILÉ BOLU Agro Venture Ltd. All rights reserved.</span>
            <span style={{color:"rgba(255,255,255,0.25)", fontSize:12}}>Built with 💚 by <span style={{color:C.gold}}>JAA Studio</span></span>
          </div>
        </div>
      </div>

      {/* Green brand strip */}
      <div style={{background:C.green, padding:"10px 0", textAlign:"center"}}>
        <span style={{color:C.gold, fontSize:10, letterSpacing:"0.3em", textTransform:"uppercase", fontWeight:700}}>From Soil to Value ✦ Pure. Fresh. Trusted. ✦ 100% Natural Palm Oil</span>
      </div>
    </footer>
  );
}

/* ─── FLOATING WHATSAPP ───────────────────────────────────────────────────── */
function WAFloat() {
  return (
    <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer"
      style={{position:"fixed", bottom:24, right:24, zIndex:200, width:56, height:56, borderRadius:"50%", background:"#25D366", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 6px 24px rgba(37,211,102,0.45)", transition:"all 0.2s"}}
      onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.transform="scale(1.12)";(e.currentTarget as HTMLAnchorElement).style.boxShadow="0 8px 30px rgba(37,211,102,0.6)"}}
      onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.transform="scale(1)";(e.currentTarget as HTMLAnchorElement).style.boxShadow="0 6px 24px rgba(37,211,102,0.45)"}}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  );
}

/* ─── APP ─────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <WhyUs />
      <Products />
      <About />
      <CtaBand />
      <Contact />
      <Footer />
      <WAFloat />
    </>
  );
}
