import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You for Your Order | ILÉ BOLU Agro Venture Ltd.",
  description:
    "Your palm oil order has been received. Thank you for choosing ILÉ BOLU Agro Venture Ltd. — Pure. Fresh. Trusted. We will confirm your order shortly.",
  robots: { index: false, follow: true },
};

const C = {
  green: "#1B4332", greenMid: "#2D6A4F", greenLight: "#40916C",
  greenPale: "#D8F3DC", red: "#C1440E", redWarm: "#E05C2A",
  gold: "#D4A017", cream: "#FDFAF4", ink: "#0E1B14",
};

function Leaf({ color = "#40916C", size = 40, style = {} }: { color?: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 40 52" style={style}>
      <path d="M20 2 C20 2 40 12 38 30 C36 44 28 52 20 52 C12 52 4 44 2 30 C0 12 20 2 20 2Z" fill={color} opacity="0.9" />
      <line x1="20" y1="4" x2="20" y2="50" stroke={C.green} strokeWidth="1.5" opacity="0.6" />
      <line x1="20" y1="15" x2="10" y2="22" stroke={C.green} strokeWidth="0.8" opacity="0.4" />
      <line x1="20" y1="28" x2="30" y2="35" stroke={C.green} strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

function PalmTree({ style = {} }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 200" style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M58 200 C56 160 54 120 60 80 C66 120 64 160 62 200Z" fill="#5C3D1A" opacity="0.8" />
      <path d="M60 85 C40 60 10 55 5 40 C25 42 50 58 60 85Z" fill="#2D6A4F" />
      <path d="M60 85 C80 60 110 55 115 40 C95 42 70 58 60 85Z" fill="#40916C" />
      <path d="M60 85 C35 70 15 80 8 70 C28 65 50 72 60 85Z" fill="#2D6A4F" opacity="0.8" />
      <path d="M60 85 C85 70 105 80 112 70 C92 65 70 72 60 85Z" fill="#40916C" opacity="0.8" />
      <path d="M60 85 C45 65 45 45 35 35 C42 50 52 68 60 85Z" fill="#1B4332" />
      <path d="M60 85 C75 65 75 45 85 35 C78 50 68 68 60 85Z" fill="#2D6A4F" />
      <circle cx="55" cy="88" r="5" fill={C.red} opacity="0.9" />
      <circle cx="64" cy="90" r="4" fill="#C1440E" opacity="0.9" />
      <circle cx="59" cy="94" r="4.5" fill="#A83000" opacity="0.9" />
    </svg>
  );
}

function WAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ThankYou() {
  const steps = [
    { icon: "💬", title: "We confirm your order", desc: "Our team reaches out on WhatsApp to confirm your sizes, quantity and total." },
    { icon: "🧴", title: "We package it fresh", desc: "Your palm oil is hygienically packed in 1L, 2L, 5L or 25L containers." },
    { icon: "🚚", title: "We deliver to you", desc: "Fast delivery within Lagos and nationwide delivery available on request." },
  ];

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "80px 20px",
        background: "linear-gradient(145deg,#060f08 0%,#0d1f13 30%,#1B4332 70%,#132a1c 100%)",
      }}
    >
      {/* Animated checkmark + badge styles */}
      <style>{`
        @keyframes popIn { 0%{transform:scale(0);opacity:0} 60%{transform:scale(1.12)} 100%{transform:scale(1);opacity:1} }
        @keyframes drawCheck { from{stroke-dashoffset:48} to{stroke-dashoffset:0} }
        @keyframes ringPulse { 0%{transform:scale(1);opacity:.55} 70%{transform:scale(1.55);opacity:0} 100%{opacity:0} }
        .ty-badge { animation: popIn .6s cubic-bezier(.2,.8,.3,1.4) both; }
        .ty-check { stroke-dasharray:48; stroke-dashoffset:48; animation: drawCheck .5s .5s ease forwards; }
        .ty-ring  { animation: ringPulse 2.4s 1s ease-out infinite; }
      `}</style>

      {/* Decorative background */}
      <div className="bl" style={{ position: "absolute", top: "12%", left: "-8%", width: 380, height: 380, background: "rgba(45,106,79,.28)", filter: "blur(55px)", pointerEvents: "none" }} />
      <div className="bl" style={{ position: "absolute", bottom: "6%", right: "-8%", width: 320, height: 320, background: "rgba(193,68,14,.18)", filter: "blur(55px)", animationDelay: "4s", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "55px 55px", pointerEvents: "none" }} />
      <div className="fa" style={{ position: "absolute", top: "16%", right: "8%", opacity: 0.18, pointerEvents: "none" }}><Leaf color="#52B788" size={46} /></div>
      <div className="fb" style={{ position: "absolute", bottom: "20%", left: "6%", opacity: 0.12, pointerEvents: "none" }}><Leaf color="#40916C" size={36} /></div>
      <PalmTree style={{ position: "absolute", bottom: 0, right: "2%", width: 110, opacity: 0.1, pointerEvents: "none" }} />
      <PalmTree style={{ position: "absolute", bottom: 0, left: "1%", width: 70, opacity: 0.08, transform: "scaleX(-1)", pointerEvents: "none" }} />

      {/* Card */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: 620,
          textAlign: "center",
          background: "rgba(8,18,12,.55)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(64,145,108,.35)",
          borderRadius: 28,
          padding: "44px 26px 36px",
          boxShadow: "0 24px 70px rgba(0,0,0,.45)",
        }}
      >
        {/* Brand */}
        <div className="fu1" style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
          <div style={{ width: 38, height: 38, borderRadius: "50%", background: C.gold, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: C.ink, fontFamily: "Georgia,serif", flexShrink: 0 }}>IB</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ color: "white", fontWeight: 700, fontSize: 11, letterSpacing: ".07em", lineHeight: 1.25 }}>ILÉ BOLU AGRO VENTURE LTD.</div>
            <div style={{ color: C.gold, fontSize: 8, letterSpacing: ".22em", textTransform: "uppercase" }}>From Soil to Value 🌱</div>
          </div>
        </div>

        {/* Success badge */}
        <div style={{ position: "relative", width: 104, height: 104, margin: "0 auto 26px" }}>
          <div className="ty-ring" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `2px solid ${C.greenLight}` }} />
          <div className="ty-badge" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: `linear-gradient(135deg,${C.greenLight},${C.green})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 30px rgba(45,106,79,.5)" }}>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <path className="ty-check" d="M14 27 L23 36 L39 18" stroke="#FDFAF4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="section-tag fu2" style={{ background: "rgba(45,106,79,.45)", border: "1px solid rgba(64,145,108,.4)" }}>
          <span style={{ color: C.gold, fontSize: 10.5, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase" }}>Order Received</span>
        </div>

        <h1 className="section-h2 fu2" style={{ fontSize: "clamp(30px,7vw,52px)", color: "white", marginBottom: 14 }}>
          Thank <span className="gold-shine">You!</span>
        </h1>

        <p className="fu3" style={{ color: "rgba(255,255,255,.78)", fontSize: 15, lineHeight: 1.8, maxWidth: 460, margin: "0 auto 6px" }}>
          Your order request has been received. Thank you for choosing <strong style={{ color: "white" }}>ILÉ BOLU Agro Venture Ltd.</strong> for pure, fresh and trusted palm oil.
        </p>
        <p className="fu3" style={{ color: "rgba(255,255,255,.55)", fontSize: 13.5, lineHeight: 1.7, maxWidth: 460, margin: "0 auto 30px" }}>
          To complete and confirm your order, please send us a quick message on WhatsApp — our team responds fast.
        </p>

        {/* Next steps */}
        <div className="fu3" style={{ display: "grid", gap: 10, textAlign: "left", marginBottom: 30 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, background: "rgba(27,67,50,.55)", border: "1px solid rgba(45,106,79,.55)", borderRadius: 14, padding: "14px 16px" }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(212,160,23,.16)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{s.icon}</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                  <span style={{ width: 18, height: 18, borderRadius: "50%", background: C.gold, color: C.ink, fontSize: 10, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                  <span style={{ fontWeight: 700, fontSize: 13.5, color: "white" }}>{s.title}</span>
                </div>
                <div style={{ fontSize: 12.5, color: "rgba(255,255,255,.6)", lineHeight: 1.6, paddingLeft: 26 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="fu4" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 22 }}>
          <a
            href="https://wa.me/2347030124346?text=Hello%2C%20I%20just%20placed%20an%20order%20and%20would%20like%20to%20confirm%20it"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25D366", color: "white", textDecoration: "none", padding: "14px 26px", borderRadius: 999, fontSize: 14, fontWeight: 800, boxShadow: "0 8px 24px rgba(37,211,102,.35)" }}
          >
            <WAIcon />Confirm Order on WhatsApp
          </a>
          <Link href="/" className="btn-ghost" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
            ← Back to Home
          </Link>
        </div>

        {/* Support line */}
        <div className="fu4" style={{ display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "center", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.1)" }}>
          <a href="tel:07030124346" style={{ color: "rgba(255,255,255,.7)", textDecoration: "none", fontSize: 12.5, display: "inline-flex", alignItems: "center", gap: 6 }}>📞 07030124346</a>
          <a href="mailto:ilebolu96@gmail.com" style={{ color: "rgba(255,255,255,.7)", textDecoration: "none", fontSize: 12.5, display: "inline-flex", alignItems: "center", gap: 6 }}>📧 ilebolu96@gmail.com</a>
        </div>
      </div>
    </main>
  );
}
