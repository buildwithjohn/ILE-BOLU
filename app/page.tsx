"use client";
import { useState, useEffect } from "react";

const C = {
  green:"#1B4332", greenMid:"#2D6A4F", greenLight:"#40916C",
  greenPale:"#D8F3DC", red:"#C1440E", redWarm:"#E05C2A",
  gold:"#D4A017", cream:"#FDFAF4", ink:"#0E1B14",
};

/* SVG Components */
function PalmTree({ style={} }:{ style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 200" style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M58 200 C56 160 54 120 60 80 C66 120 64 160 62 200Z" fill="#5C3D1A" opacity="0.8"/>
      <path d="M60 85 C40 60 10 55 5 40 C25 42 50 58 60 85Z" fill="#2D6A4F"/>
      <path d="M60 85 C80 60 110 55 115 40 C95 42 70 58 60 85Z" fill="#40916C"/>
      <path d="M60 85 C35 70 15 80 8 70 C28 65 50 72 60 85Z" fill="#2D6A4F" opacity="0.8"/>
      <path d="M60 85 C85 70 105 80 112 70 C92 65 70 72 60 85Z" fill="#40916C" opacity="0.8"/>
      <path d="M60 85 C45 65 45 45 35 35 C42 50 52 68 60 85Z" fill="#1B4332"/>
      <path d="M60 85 C75 65 75 45 85 35 C78 50 68 68 60 85Z" fill="#2D6A4F"/>
      <circle cx="55" cy="88" r="5" fill={C.red} opacity="0.9"/>
      <circle cx="64" cy="90" r="4" fill="#C1440E" opacity="0.9"/>
      <circle cx="59" cy="94" r="4.5" fill="#A83000" opacity="0.9"/>
    </svg>
  );
}

function OilBottle({ height=200, vol="" }:{ height?: number; vol?: string }) {
  const w = Math.round(height * 0.42);
  return (
    <svg viewBox={`0 0 60 ${height}`} width={w} height={height} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`bg-${vol}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E05C2A"/>
          <stop offset="40%" stopColor="#C1440E"/>
          <stop offset="100%" stopColor="#7A1F00"/>
        </linearGradient>
        <linearGradient id={`cap-${vol}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0C030"/>
          <stop offset="100%" stopColor="#8B6000"/>
        </linearGradient>
      </defs>
      <rect x="18" y="2" width="24" height="12" rx="4" fill={`url(#cap-${vol})`}/>
      <rect x="22" y="12" width="16" height="10" rx="2" fill="#C1440E"/>
      <rect x="8" y="20" width="44" height={height - 26} rx="8" fill={`url(#bg-${vol})`}/>
      <rect x="10" y="22" width="10" height={height * 0.38} rx="5" fill="rgba(255,255,255,0.22)" opacity="0.7"/>
      <text x="30" y={height * 0.5} textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" fontFamily="system-ui">{vol}</text>
      <text x="30" y={height * 0.59} textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.75)" fontFamily="system-ui">PALM OIL</text>
    </svg>
  );
}

function Leaf({ color="#40916C", size=40, style={} }:{ color?: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 40 52" style={style}>
      <path d="M20 2 C20 2 40 12 38 30 C36 44 28 52 20 52 C12 52 4 44 2 30 C0 12 20 2 20 2Z" fill={color} opacity="0.9"/>
      <line x1="20" y1="4" x2="20" y2="50" stroke={C.green} strokeWidth="1.5" opacity="0.6"/>
      <line x1="20" y1="15" x2="10" y2="22" stroke={C.green} strokeWidth="0.8" opacity="0.4"/>
      <line x1="20" y1="28" x2="30" y2="35" stroke={C.green} strokeWidth="0.8" opacity="0.4"/>
    </svg>
  );
}

function OilDroplet() {
  return (
    <svg viewBox="0 0 200 290" width="200" height="290" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="dG" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#F07040"/>
          <stop offset="50%" stopColor="#C1440E"/>
          <stop offset="100%" stopColor="#6B1800"/>
        </radialGradient>
        <filter id="dGlow"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <ellipse cx="100" cy="272" rx="60" ry="14" fill={C.red} opacity="0.2" filter="url(#dGlow)"/>
      <path d="M100 10 C100 10 185 92 185 180 C185 238 148 278 100 278 C52 278 15 238 15 180 C15 92 100 10 100 10Z" fill="url(#dG)" filter="url(#dGlow)"/>
      <ellipse cx="68" cy="112" rx="20" ry="46" fill="rgba(255,255,255,0.16)" transform="rotate(-15 68 112)"/>
      <ellipse cx="62" cy="98" rx="7" ry="20" fill="rgba(255,255,255,0.26)" transform="rotate(-15 62 98)"/>
      <text x="100" y="178" textAnchor="middle" fontSize="13" fontWeight="bold" fill="rgba(255,255,255,0.95)" fontFamily="Georgia,serif">ILÉ BOLU</text>
      <text x="100" y="196" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.72)" fontFamily="system-ui">PREMIUM PALM OIL</text>
      <text x="100" y="212" textAnchor="middle" fontSize="7.5" fill="rgba(255,200,100,0.9)" fontFamily="system-ui">100% PURE · NATURAL</text>
      <g transform="translate(87,136) scale(0.5)">
        <path d="M20 2 C20 2 36 10 34 24 C32 34 26 40 20 40 C14 40 8 34 6 24 C4 10 20 2 20 2Z" fill="rgba(255,255,255,0.22)"/>
        <line x1="20" y1="3" x2="20" y2="39" stroke="rgba(255,255,255,0.28)" strokeWidth="1"/>
      </g>
    </svg>
  );
}

function WAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

/* ── NAV ────────────────────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); };
  const links:[string,string][] = [["home","Home"],["about","About"],["products","Products"],["contact","Contact"]];

  return (
    <nav className={`site-nav${scrolled?" scrolled":""}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => go("home")}>
          <div className="nav-logo-circle">IB</div>
          <div className="nav-logo-text">
            <div className="nav-logo-name">ILÉ BOLU AGRO VENTURE LTD.</div>
            <div className="nav-logo-tag">From Soil to Value 🌱</div>
          </div>
        </button>
        <div className="nav-links">
          {links.map(([id,label]) => (
            <button key={id} className="nav-link" onClick={() => go(id)}>{label}</button>
          ))}
          <button className="nav-cta" onClick={() => go("contact")}>Order Now</button>
        </div>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          {[0,1,2].map(i => (
            <span key={i} className="hbar" style={{
              transform: open ? (i===0?"rotate(45deg) translate(5px,5px)":i===2?"rotate(-45deg) translate(5px,-5px)":"none") : "none",
              opacity: open && i===1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </div>
      <div className={`mobile-menu${open?" open":""}`}>
        <div className="mobile-menu-inner">
          {links.map(([id,label]) => (
            <button key={id} className="mobile-link" onClick={() => go(id)}>{label}</button>
          ))}
          <button className="mobile-cta" onClick={() => go("contact")}>🛒 Order Now</button>
        </div>
      </div>
    </nav>
  );
}

/* ── HERO ───────────────────────────────────────────────────────────────── */
function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);

  return (
    <section className="hero" style={{background:"linear-gradient(145deg,#060f08 0%,#0d1f13 30%,#1B4332 70%,#132a1c 100%)"}}>
      {/* Bg blobs */}
      <div className="bl" style={{position:"absolute",top:"15%",left:"-8%",width:380,height:380,background:"rgba(45,106,79,.28)",filter:"blur(55px)"}}/>
      <div className="bl" style={{position:"absolute",bottom:"8%",right:"-8%",width:320,height:320,background:"rgba(193,68,14,.18)",filter:"blur(55px)",animationDelay:"4s"}}/>
      {/* Grid */}
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",backgroundSize:"55px 55px",pointerEvents:"none"}}/>
      {/* Floating leaves */}
      <div className="fa" style={{position:"absolute",top:"20%",right:"6%",opacity:.22,pointerEvents:"none"}}><Leaf color="#52B788" size={48}/></div>
      <div className="fb" style={{position:"absolute",bottom:"28%",left:"4%",opacity:.14,pointerEvents:"none"}}><Leaf color="#40916C" size={36}/></div>
      {/* Palm trees */}
      <PalmTree style={{position:"absolute",bottom:0,right:"2%",width:110,opacity:.14,pointerEvents:"none"}}/>
      <PalmTree style={{position:"absolute",bottom:0,left:"1%",width:70,opacity:.1,transform:"scaleX(-1)",pointerEvents:"none"}}/>
      {/* Spin ring */}
      <div className="sp" style={{position:"absolute",top:"14%",left:"40%",width:70,height:70,borderRadius:"50%",border:"1px dashed rgba(212,160,23,.28)",pointerEvents:"none"}}/>

      <div className="hero-content">
        {/* LEFT */}
        <div>
          <div className={`hero-tag${show?" fu1":""}`}>
            <span className="pu" style={{width:8,height:8,borderRadius:"50%",background:C.gold,display:"inline-block"}}/>
            <span style={{color:C.gold,fontSize:10.5,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase"}}>Premium Palm Oil — Lagos, Nigeria</span>
          </div>
          <h1 className={`hero-h1${show?" fu2":""}`}>
            <span className="hero-h1-line">From Soil</span>
            <span className="hero-h1-line gold-shine">to Value.</span>
          </h1>
          <p className={`hero-sub${show?" fu3":""}`}>Pure. Fresh. Trusted Palm Oil</p>
          <p className={`hero-body${show?" fu3":""}`}>
            At ILÉ BOLU Agro Venture Ltd., we deliver high-quality, hygienically processed palm oil carefully sourced and repackaged to meet the needs of homes, retailers, and bulk buyers. From the soil where it is grown to the value it brings to your kitchen — excellence at every step.
          </p>
          <div className={`hero-btns${show?" fu4":""}`}>
            <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer" className="btn-primary">
              🛒 Order Now
            </a>
            <button className="btn-ghost" onClick={() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}>
              Contact Us
            </button>
          </div>
        </div>
        {/* RIGHT (desktop only) */}
        <div className="hero-right-art">
          <div style={{position:"absolute",width:280,height:280,borderRadius:"50%",background:"radial-gradient(circle,rgba(193,68,14,.3) 0%,transparent 70%)",filter:"blur(30px)"}}/>
          <div className="fa" style={{position:"relative",zIndex:2}}><OilDroplet/></div>
          <div className="fb" style={{position:"absolute",top:10,right:0,zIndex:3}}><OilBottle height={105} vol="5L"/></div>
          <div className="fa" style={{position:"absolute",bottom:20,left:10,zIndex:3,animationDelay:"1s"}}><OilBottle height={78} vol="1L"/></div>
          <div className="fb" style={{position:"absolute",top:-8,left:10,background:C.gold,borderRadius:14,padding:"8px 12px",zIndex:4,boxShadow:"0 6px 18px rgba(0,0,0,.3)"}}>
            <div style={{color:C.ink,fontWeight:800,fontSize:10}}>✔ Hygienically</div>
            <div style={{color:C.ink,fontWeight:800,fontSize:10}}>Processed</div>
          </div>
          <div className="fa" style={{position:"absolute",bottom:-8,right:4,background:C.green,border:"1px solid rgba(64,145,108,.5)",borderRadius:14,padding:"8px 14px",zIndex:4,boxShadow:"0 6px 18px rgba(0,0,0,.3)"}}>
            <div style={{color:C.gold,fontSize:9,fontWeight:600}}>Available in</div>
            <div style={{color:"white",fontWeight:700,fontSize:13}}>1L · 2L · 5L · 25L</div>
          </div>
        </div>
      </div>

      {/* Mobile product pill — shown only on mobile */}
      <div style={{position:"relative",zIndex:5,textAlign:"center",paddingBottom:24,display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap",padding:"0 20px 32px"}}>
        <style>{`@media(min-width:768px){.mobile-pill{display:none!important}}`}</style>
        <div className="mobile-pill" style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
          {["1L","2L","5L","25L"].map(v=>(
            <span key={v} style={{background:"rgba(212,160,23,.18)",border:"1px solid rgba(212,160,23,.4)",borderRadius:999,padding:"6px 14px",color:C.gold,fontSize:12,fontWeight:700}}>{v}</span>
          ))}
        </div>
      </div>

      {/* Wave */}
      <div style={{position:"absolute",bottom:-1,left:0,right:0}}>
        <svg viewBox="0 0 1440 80" style={{width:"100%",display:"block"}} preserveAspectRatio="none">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill={C.cream}/>
        </svg>
      </div>
    </section>
  );
}

/* ── MARQUEE ────────────────────────────────────────────────────────────── */
function Marquee() {
  const items = ["100% Pure Palm Oil","Hygienically Processed","Rich Natural Color","Affordable & Reliable","Bulk & Retail Supply","Fast Lagos Delivery","Nationwide Available","Trusted Quality","Clean. Safe. Trusted"];
  return (
    <div style={{background:C.green,padding:"14px 0",overflow:"hidden",borderTop:`3px solid ${C.gold}`,borderBottom:`3px solid ${C.gold}`}}>
      <div className="marquee-track">
        {[...items,...items].map((t,i)=>(
          <span key={i} style={{display:"inline-flex",alignItems:"center",gap:16,marginRight:32}}>
            <span style={{color:C.gold,fontSize:12,fontWeight:700,letterSpacing:".15em",textTransform:"uppercase"}}>{t}</span>
            <span style={{color:C.greenLight,fontSize:16}}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── WHY US ─────────────────────────────────────────────────────────────── */
function WhyUs() {
  const items = [
    {icon:"✔",title:"100% Pure Palm Oil",desc:"No additives, no water, no impurities. What nature produced, we preserve and deliver."},
    {icon:"🧪",title:"Hygienically Processed",desc:"Every batch goes through rigorous filtration for guaranteed safety and purity."},
    {icon:"🌿",title:"Rich Natural Color & Taste",desc:"Deep red, fragrant, and flavourful — exactly as nature intended."},
    {icon:"💰",title:"Affordable & Reliable",desc:"Consistent pricing and supply you can count on, for homes and businesses alike."},
    {icon:"📦",title:"Bulk & Retail Available",desc:"From 1-litre household packs to 25-litre commercial bulk supply."},
  ];
  return (
    <section style={{background:C.cream,padding:"80px 0 80px",overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",top:0,right:0,width:300,height:300,borderRadius:"50%",background:C.greenPale,filter:"blur(70px)",opacity:.7}}/>
      <div className="container">
        <div className="grid-2">
          {/* LEFT */}
          <div>
            <div className="section-tag" style={{background:C.greenPale}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:C.green,display:"inline-block"}}/>
              <span style={{color:C.green,fontSize:10.5,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase"}}>Who We Are</span>
            </div>
            <h2 className="section-h2" style={{fontSize:"clamp(28px,5vw,48px)",color:C.ink,marginBottom:18}}>
              An Agro Brand Built on <em style={{color:C.red}}>Trust</em>
            </h2>
            <p style={{color:"rgba(14,27,20,.68)",fontSize:14.5,lineHeight:1.8,marginBottom:14}}>
              We are an agro-based company committed to delivering clean, safe, and affordable food products. Starting with premium palm oil, we are building a trusted brand that transforms raw agricultural produce into valuable everyday essentials.
            </p>
            <p style={{color:"rgba(14,27,20,.68)",fontSize:14.5,lineHeight:1.8,marginBottom:32}}>
              Every bottle we supply carries our promise: pure, uncompromised quality — from the farm to your table.
            </p>
            <div className="stat-row">
              {[{v:"100%",l:"Pure, No Adulteration",c:C.green},{v:"4",l:"Size Options",c:C.red},{v:"🌍",l:"Nationwide Delivery",c:C.gold}].map((s,i)=>(
                <div key={i}>
                  <div style={{fontFamily:"Georgia,serif",fontSize:30,fontWeight:700,color:s.c}}>{s.v}</div>
                  <div style={{fontSize:11,color:"rgba(14,27,20,.5)",marginTop:3,lineHeight:1.4}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT */}
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {items.map((it,i)=>(
              <div key={i} className="why-card">
                <div style={{width:40,height:40,borderRadius:12,background:C.greenPale,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{it.icon}</div>
                <div>
                  <div style={{fontWeight:700,fontSize:13.5,color:C.ink,marginBottom:3}}>{it.title}</div>
                  <div style={{fontSize:12.5,color:"rgba(14,27,20,.6)",lineHeight:1.6}}>{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PRODUCTS ───────────────────────────────────────────────────────────── */
function Products() {
  const sizes = [
    {vol:"1L",label:"1 Litre",sub:"Small households",h:90},
    {vol:"2L",label:"2 Litres",sub:"Regular home use",h:122},
    {vol:"5L",label:"5 Litres",sub:"Large families & businesses",h:165},
    {vol:"25L",label:"25 Litres",sub:"Restaurants & retailers",h:240,badge:"Bulk"},
  ];
  const benefits = ["Rich red natural color","No adulteration","Long shelf life","Great taste & aroma","All cooking types","Commercial use safe"];
  return (
    <section id="products" style={{background:C.ink,padding:"80px 0",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:600,height:300,borderRadius:"50%",background:"rgba(27,67,50,.35)",filter:"blur(60px)"}}/>
      <PalmTree style={{position:"absolute",bottom:0,left:"1%",width:90,opacity:.09,pointerEvents:"none"}}/>
      <PalmTree style={{position:"absolute",bottom:0,right:"2%",width:110,opacity:.09,transform:"scaleX(-1)",pointerEvents:"none"}}/>

      <div className="container" style={{position:"relative",zIndex:5}}>
        <div style={{textAlign:"center",marginBottom:52}}>
          <div className="section-tag" style={{background:"rgba(45,106,79,.45)",border:"1px solid rgba(64,145,108,.4)",justifyContent:"center"}}>
            <span style={{color:C.gold,fontSize:10.5,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase"}}>Our Product</span>
          </div>
          <h2 className="section-h2" style={{fontSize:"clamp(28px,5vw,52px)",color:"white",marginBottom:12}}>Premium Palm Oil</h2>
          <p style={{color:"rgba(255,255,255,.58)",maxWidth:480,margin:"0 auto",fontSize:14.5}}>Carefully sourced and processed to retain its natural richness. Perfect for cooking, frying, and food production.</p>
        </div>

        <div className="grid-2" style={{alignItems:"flex-end"}}>
          {/* Bottles */}
          <div>
            <div style={{color:C.gold,fontSize:10,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",marginBottom:20}}>Available Sizes</div>
            <div className="bottles-row">
              {sizes.map((s,i)=>(
                <div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:8,cursor:"pointer",transition:"transform .2s"}}
                  onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform="scale(1.07)"}
                  onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform="scale(1)"}>
                  <div style={{position:"relative"}}>
                    {s.badge&&<div style={{position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",background:C.gold,color:C.ink,fontSize:9,fontWeight:800,padding:"2px 10px",borderRadius:999,whiteSpace:"nowrap",zIndex:2}}>{s.badge}</div>}
                    <OilBottle height={s.h} vol={s.vol}/>
                  </div>
                  <div style={{textAlign:"center"}}>
                    <div style={{color:"white",fontSize:11.5,fontWeight:700}}>{s.label}</div>
                    <div style={{color:"rgba(255,255,255,.38)",fontSize:10,maxWidth:78,lineHeight:1.4}}>{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Benefits + CTA */}
          <div>
            <div style={{color:C.gold,fontSize:10,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",marginBottom:14}}>Product Benefits</div>
            <div className="benefit-grid">
              {benefits.map((b,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"9px 12px",background:"rgba(27,67,50,.7)",border:"1px solid rgba(45,106,79,.55)"}}>
                  <div style={{width:6,height:6,borderRadius:"50%",background:C.gold,flexShrink:0}}/>
                  <span style={{color:"rgba(255,255,255,.8)",fontSize:12}}>{b}</span>
                </div>
              ))}
            </div>
            <div style={{borderRadius:20,padding:22,background:"linear-gradient(135deg,rgba(193,68,14,.22),rgba(193,68,14,.06))",border:"1px solid rgba(193,68,14,.4)"}}>
              <div style={{fontFamily:"Georgia,serif",color:"rgba(255,255,255,.65)",fontStyle:"italic",fontSize:17,marginBottom:5}}>Clean. Safe. Trusted.</div>
              <div style={{fontFamily:"Georgia,serif",color:"white",fontWeight:700,fontSize:19,marginBottom:16}}>Ready to place your order?</div>
              <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer"
                  style={{flex:"1 1 120px",display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:"#25D366",color:"white",textDecoration:"none",padding:"12px",borderRadius:999,fontSize:13,fontWeight:700}}>
                  <WAIcon/>WhatsApp Order
                </a>
                <a href="tel:07030124346" style={{flex:"1 1 100px",display:"flex",alignItems:"center",justifyContent:"center",gap:6,color:"white",textDecoration:"none",padding:"12px",borderRadius:999,fontSize:13,fontWeight:600,border:"1px solid rgba(255,255,255,.25)"}}>
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

/* ── ABOUT ──────────────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" style={{background:C.cream,padding:"80px 0",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:0,right:0,width:280,height:280,borderRadius:"50%",background:C.greenPale,filter:"blur(65px)",opacity:.8}}/>
      <div className="container" style={{position:"relative",zIndex:2}}>
        <div className="grid-2">
          <div>
            <div className="section-tag" style={{background:C.greenPale}}>
              <span style={{color:C.green,fontSize:10.5,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase"}}>About Us</span>
            </div>
            <h2 className="section-h2" style={{fontSize:"clamp(26px,4.5vw,46px)",color:C.ink,marginBottom:18}}>
              About ILÉ BOLU<br/><span style={{color:C.green}}>Agro Venture Ltd.</span>
            </h2>
            {["ILÉ BOLU Agro Venture Ltd. is a growing agro-business dedicated to transforming agricultural produce into high-quality, value-added products.",
              "Our journey begins with palm oil — carefully sourced, properly processed, and hygienically packaged to meet the needs of modern homes and businesses.",
              "Our vision is to expand into large-scale agricultural production including oil palm farming, cocoa farming, food processing, livestock farming, and agro-training services.",
            ].map((p,i)=>(
              <p key={i} style={{color:"rgba(14,27,20,.68)",fontSize:14.5,lineHeight:1.8,marginBottom:14}}>{p}</p>
            ))}
            <div style={{borderRadius:16,padding:"18px 22px",background:C.green,marginTop:8}}>
              <div style={{fontFamily:"Georgia,serif",color:C.gold,fontStyle:"italic",fontSize:17,marginBottom:5}}>Our Mission</div>
              <p style={{color:"rgba(255,255,255,.82)",fontSize:14}}>To create value from the soil and deliver it with excellence.</p>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            <div style={{background:"white",borderRadius:20,padding:22,boxShadow:"0 4px 18px rgba(0,0,0,.06)",border:"1px solid #D8F3DC"}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
                <div style={{width:40,height:40,borderRadius:12,background:C.green,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🌱</div>
                <div style={{fontFamily:"Georgia,serif",fontWeight:700,fontSize:17,color:C.ink}}>Our Vision</div>
              </div>
              <p style={{fontSize:13.5,lineHeight:1.7,color:"rgba(14,27,20,.68)"}}>To become a leading agro-industrial brand known for quality, integrity, and value creation across Nigeria and beyond.</p>
            </div>
            <div style={{background:"white",borderRadius:20,padding:22,boxShadow:"0 4px 18px rgba(0,0,0,.06)",border:"1px solid #D8F3DC"}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
                <div style={{width:40,height:40,borderRadius:12,background:C.red,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🎯</div>
                <div style={{fontFamily:"Georgia,serif",fontWeight:700,fontSize:17,color:C.ink}}>Our Mission</div>
              </div>
              {["Provide clean and affordable agro products","Promote quality processing and packaging","Build trust through consistency and excellence"].map((m,i)=>(
                <div key={i} style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:9}}>
                  <div style={{width:18,height:18,borderRadius:"50%",background:C.greenPale,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>
                    <div style={{width:6,height:6,borderRadius:"50%",background:C.green}}/>
                  </div>
                  <span style={{fontSize:13.5,lineHeight:1.6,color:"rgba(14,27,20,.68)"}}>{m}</span>
                </div>
              ))}
            </div>
            <div style={{background:`linear-gradient(135deg,${C.green},${C.ink})`,borderRadius:20,padding:22}}>
              <div style={{color:C.gold,fontSize:10,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",marginBottom:12}}>Our Future</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                {["Oil Palm Farming","Cocoa Farming","Food Processing","Livestock Farming","Agro-Training"].map((f,i)=>(
                  <span key={i} style={{background:"rgba(45,106,79,.65)",border:"1px solid rgba(64,145,108,.45)",color:"rgba(255,255,255,.82)",fontSize:12,padding:"6px 14px",borderRadius:999}}>{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CTA BAND ───────────────────────────────────────────────────────────── */
function CtaBand() {
  return (
    <div style={{background:C.red,padding:"60px 0",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle,rgba(255,255,255,.07) 1px,transparent 1px)",backgroundSize:"36px 36px"}}/>
      <div className="container" style={{textAlign:"center",position:"relative",zIndex:2}}>
        <h2 className="section-h2" style={{color:"white",fontSize:"clamp(24px,4.5vw,42px)",marginBottom:12}}>
          Ready to order quality palm oil?
        </h2>
        <p style={{color:"rgba(255,255,255,.78)",marginBottom:28,fontSize:14.5}}>We deliver within Lagos and across Nigeria on request.</p>
        <div className="cta-btns">
          <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer"
            style={{background:"white",color:C.red,textDecoration:"none",padding:"14px 28px",borderRadius:999,fontWeight:800,fontSize:14,boxShadow:"0 6px 22px rgba(0,0,0,.2)"}}>
            📱 WhatsApp: 07030124346
          </a>
          <a href="mailto:ilebolu96@gmail.com" style={{color:"white",textDecoration:"none",padding:"14px 28px",borderRadius:999,fontWeight:700,fontSize:14,border:"2px solid rgba(255,255,255,.55)"}}>
            📧 ilebolu96@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── CONTACT ────────────────────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" style={{background:C.cream,padding:"80px 0"}}>
      <div className="container">
        <div style={{textAlign:"center",marginBottom:48}}>
          <div className="section-tag" style={{background:C.greenPale,justifyContent:"center"}}>
            <span style={{color:C.green,fontSize:10.5,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase"}}>Get In Touch</span>
          </div>
          <h2 className="section-h2" style={{fontSize:"clamp(26px,4.5vw,48px)",color:C.ink}}>
            Let&apos;s Talk Business
          </h2>
        </div>
        <div className="contact-info-grid">
          {[
            {icon:"📍",title:"Our Address",val:"302, Murtala Muhammed Way, Alagomeji Yaba, Lagos",bg:C.green,tc:"white",sc:"rgba(255,255,255,.65)"},
            {icon:"📱",title:"Phone / WhatsApp",val:"07030124346",bg:C.red,tc:"white",sc:"rgba(255,255,255,.65)",link:"tel:07030124346"},
            {icon:"📧",title:"Email",val:"ilebolu96@gmail.com",bg:C.gold,tc:C.ink,sc:"rgba(14,27,20,.65)",link:"mailto:ilebolu96@gmail.com"},
          ].map((c,i)=>(
            <div key={i} style={{borderRadius:20,padding:22,background:c.bg}}>
              <div style={{fontSize:24,marginBottom:8}}>{c.icon}</div>
              <div style={{fontWeight:600,fontSize:11,marginBottom:5,color:c.sc,textTransform:"uppercase",letterSpacing:".1em"}}>{c.title}</div>
              {c.link
                ? <a href={c.link} style={{fontFamily:"Georgia,serif",fontWeight:700,fontSize:16,color:c.tc,textDecoration:"none",wordBreak:"break-all"}}>{c.val}</a>
                : <div style={{fontWeight:700,fontSize:13.5,color:c.tc,lineHeight:1.6}}>{c.val}</div>
              }
            </div>
          ))}
        </div>
        <div className="contact-bottom">
          <div style={{background:"white",borderRadius:20,padding:22,border:"1px solid #D8F3DC",boxShadow:"0 2px 12px rgba(0,0,0,.04)"}}>
            <div style={{fontSize:24,marginBottom:8}}>🚚</div>
            <div style={{fontFamily:"Georgia,serif",fontWeight:700,fontSize:17,color:C.ink,marginBottom:12}}>Delivery Info</div>
            {["Fast delivery within Lagos","Nationwide delivery available on request"].map((d,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:10,marginBottom:8,fontSize:14,color:"rgba(14,27,20,.7)"}}>
                <div style={{width:8,height:8,borderRadius:"50%",background:C.green,flexShrink:0}}/>
                {d}
              </div>
            ))}
          </div>
          <div style={{borderRadius:20,padding:22,background:C.green,display:"flex",flexDirection:"column",justifyContent:"space-between",gap:16}}>
            <div>
              <div style={{fontSize:24,marginBottom:8}}>💬</div>
              <div style={{fontFamily:"Georgia,serif",fontWeight:700,color:"white",fontSize:17,marginBottom:8}}>Quick Order via WhatsApp</div>
              <p style={{color:"rgba(255,255,255,.68)",fontSize:13.5,lineHeight:1.6}}>Chat with us directly and place your order instantly. We respond fast!</p>
            </div>
            <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil%20from%20Il%C3%A9%20Bolu%20Agro%20Venture" target="_blank" rel="noopener noreferrer"
              style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:"#25D366",color:"white",textDecoration:"none",padding:"14px",borderRadius:999,fontSize:14,fontWeight:800}}>
              <WAIcon/>Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ─────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{background:C.ink,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:0,left:0,right:0}}>
        <svg viewBox="0 0 1440 60" style={{width:"100%",display:"block"}} preserveAspectRatio="none">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill={C.cream}/>
        </svg>
      </div>
      <PalmTree style={{position:"absolute",right:"4%",bottom:0,width:140,opacity:.07,pointerEvents:"none"}}/>
      <div style={{paddingTop:60,paddingBottom:20,position:"relative",zIndex:2}}>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                <div style={{width:38,height:38,borderRadius:"50%",background:C.gold,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:C.ink,fontFamily:"Georgia,serif",fontSize:11,flexShrink:0}}>IB</div>
                <div>
                  <div style={{color:"white",fontWeight:700,fontSize:10.5,letterSpacing:".07em"}}>ILÉ BOLU AGRO VENTURE LTD.</div>
                  <div style={{color:C.gold,fontSize:8,letterSpacing:".2em",textTransform:"uppercase"}}>From Soil to Value 🌱</div>
                </div>
              </div>
              <p style={{color:"rgba(255,255,255,.45)",fontSize:13,lineHeight:1.7}}>Providing trusted agro products starting with premium palm oil. Pure. Fresh. Trusted.</p>
            </div>
            <div>
              <div style={{color:C.gold,fontSize:10,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",marginBottom:14}}>Contact Us</div>
              {[{icon:"📞",val:"07030124346",link:"tel:07030124346"},{icon:"📧",val:"ilebolu96@gmail.com",link:"mailto:ilebolu96@gmail.com"},{icon:"📍",val:"302, Murtala Muhammed Way, Alagomeji Yaba, Lagos"}].map((c,i)=>(
                <div key={i} style={{display:"flex",gap:10,marginBottom:10,fontSize:13,color:"rgba(255,255,255,.6)"}}>
                  <span style={{flexShrink:0}}>{c.icon}</span>
                  {c.link ? <a href={c.link} style={{color:"rgba(255,255,255,.7)",textDecoration:"none"}}>{c.val}</a> : <span style={{lineHeight:1.5}}>{c.val}</span>}
                </div>
              ))}
            </div>
            <div>
              <div style={{color:C.gold,fontSize:10,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",marginBottom:14}}>Quick Order</div>
              <p style={{color:"rgba(255,255,255,.5)",fontSize:13,marginBottom:14}}>Ready to order? Reach us on WhatsApp for instant response.</p>
              <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer"
                style={{display:"inline-flex",alignItems:"center",gap:8,background:"#25D366",color:"white",textDecoration:"none",padding:"10px 18px",borderRadius:999,fontSize:13,fontWeight:700}}>
                <WAIcon/>Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span style={{color:"rgba(255,255,255,.25)",fontSize:12}}>© {new Date().getFullYear()} ILÉ BOLU Agro Venture Ltd. All rights reserved.</span>
            <span style={{color:"rgba(255,255,255,.25)",fontSize:12}}>Built with 💚 by <span style={{color:C.gold}}>JAA Studio</span></span>
          </div>
        </div>
      </div>
      <div style={{background:C.green,padding:"10px 0",textAlign:"center"}}>
        <span style={{color:C.gold,fontSize:10,letterSpacing:".3em",textTransform:"uppercase",fontWeight:700}}>From Soil to Value ✦ Pure. Fresh. Trusted. ✦ 100% Natural Palm Oil</span>
      </div>
    </footer>
  );
}

/* ── FLOATING WA ────────────────────────────────────────────────────────── */
function WAFloat() {
  return (
    <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer"
      style={{position:"fixed",bottom:22,right:22,zIndex:200,width:54,height:54,borderRadius:"50%",background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 6px 22px rgba(37,211,102,.45)",transition:"all .2s",color:"white"}}
      onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.transform="scale(1.12)";}}
      onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.transform="scale(1)";}}>
      <WAIcon/>
    </a>
  );
}

/* ── APP ────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav/><Hero/><Marquee/><WhyUs/><Products/><About/><CtaBand/><Contact/><Footer/><WAFloat/>
    </>
  );
}
