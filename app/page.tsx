"use client";

import { useState, useEffect } from "react";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "products", label: "Products" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-green-950/95 backdrop-blur-xl shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-green-950 font-bold text-sm">IB</div>
          <div>
            <div className="text-white font-bold text-xs tracking-wide leading-tight">ILÉ BOLU AGRO VENTURE LTD.</div>
            <div className="text-amber-400 text-[9px] tracking-widest uppercase leading-none">From Soil to Value</div>
          </div>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-white/80 hover:text-white text-sm font-medium transition-colors">{l.label}</button>
          ))}
          <button onClick={() => scrollTo("contact")} className="bg-red-700 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105">Order Now</button>
        </div>
        <button className="md:hidden text-white flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}/>
          <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}>
        <div className="bg-green-950/98 backdrop-blur-xl px-5 pb-5 pt-2 flex flex-col gap-3">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-white/80 text-sm py-2 text-left">{l.label}</button>
          ))}
          <button onClick={() => scrollTo("contact")} className="bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full mt-1">Order Now</button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 150); }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{background: "linear-gradient(135deg, #0a1a0f 0%, #1B4332 40%, #0E1B14 100%)"}}>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl" style={{background: "rgba(45,106,79,0.3)"}}/>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full blur-3xl" style={{background: "rgba(193,68,14,0.15)"}}/>
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px"}}/>
      </div>

      {/* Floating leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-16 opacity-20 animate-bounce" style={{animationDuration: "3s"}}>
          <svg width="40" height="50" viewBox="0 0 40 50"><path d="M20 0 C20 0 40 10 38 28 C36 42 28 50 20 50 C12 50 4 42 2 28 C0 10 20 0 20 0Z" fill="#40916C"/><line x1="20" y1="2" x2="20" y2="48" stroke="#1B4332" strokeWidth="1.5"/></svg>
        </div>
        <div className="absolute bottom-40 left-16 opacity-15 animate-bounce" style={{animationDuration: "4s", animationDelay: "1s"}}>
          <svg width="30" height="38" viewBox="0 0 40 50"><path d="M20 0 C20 0 40 10 38 28 C36 42 28 50 20 50 C12 50 4 42 2 28 C0 10 20 0 20 0Z" fill="#D4A017"/></svg>
        </div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full border border-amber-400/20 opacity-40 animate-pulse" style={{animationDuration: "4s"}}/>
        <div className="absolute top-24 left-1/3 w-12 h-12 rounded-full border border-green-400/20 opacity-30 animate-pulse" style={{animationDuration: "6s"}}/>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-32 md:py-40 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{background: "rgba(45,106,79,0.4)", border: "1px solid rgba(64,145,108,0.4)"}}>
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"/>
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Premium Palm Oil — Lagos, Nigeria</span>
          </div>

          <h1 className={`font-serif text-white leading-tight mb-4 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold">From Soil</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold italic" style={{color: "#D4A017"}}>to Value.</span>
          </h1>

          <p className={`text-white/60 text-lg italic mb-2 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{fontFamily: "Georgia, serif"}}>
            Pure. Fresh. Trusted Palm Oil
          </p>

          <p className={`text-white/70 text-sm leading-relaxed mb-8 max-w-md transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            At ILÉ BOLU Agro Venture Ltd., we deliver high-quality, hygienically processed palm oil carefully sourced and repackaged to meet the needs of homes, retailers, and bulk buyers. From the soil where it is grown to the value it brings to your kitchen — excellence at every step.
          </p>

          <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all hover:scale-105 hover:brightness-110"
              style={{background: "#C1440E", boxShadow: "0 8px 30px rgba(193,68,14,0.3)"}}>
              🛒 Order Now
            </a>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}
              className="border text-white hover:bg-white/10 font-medium px-7 py-3.5 rounded-full transition-all text-sm"
              style={{borderColor: "rgba(255,255,255,0.3)"}}>
              Contact Us
            </button>
          </div>
        </div>

        {/* Palm oil bottle art */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 scale-110 rounded-full blur-3xl opacity-30" style={{background: "radial-gradient(circle, #C1440E 0%, transparent 70%)"}}/>
            <div className="relative" style={{width: 240, height: 340}}>
              {/* Bottle body */}
              <div className="absolute inset-x-8 top-8 bottom-0 rounded-2xl shadow-2xl overflow-hidden"
                style={{background: "linear-gradient(160deg, #E05C2A 0%, #C1440E 35%, #8B2500 100%)"}}>
                <div className="absolute top-4 left-4 rounded-full bg-white/20 blur-sm" style={{width: 24, height: 80}}/>
                <div className="absolute top-3 left-6 rounded-full bg-white/30 blur-sm" style={{width: 8, height: 40}}/>
                <div className="absolute bottom-0 inset-x-0 py-6 text-center">
                  <div className="text-white/90 font-bold text-base leading-tight" style={{fontFamily: "Georgia, serif"}}>ILÉ BOLU</div>
                  <div className="text-white/70 text-xs mt-1">Premium Palm Oil</div>
                  <div className="text-amber-300 text-[10px] mt-1">100% Pure & Natural</div>
                </div>
                <div className="absolute top-10 inset-x-0 flex justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-amber-400/40 flex items-center justify-center">
                    <div className="text-3xl">🌿</div>
                  </div>
                </div>
              </div>
              {/* Cap */}
              <div className="absolute top-0 inset-x-10 h-10 rounded-xl" style={{background: "linear-gradient(180deg, #D4A017 0%, #B8860B 100%)"}}/>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-6 rounded-2xl px-3 py-2 shadow-lg text-center animate-bounce" style={{background: "#D4A017", animationDuration: "3s"}}>
                <div className="text-green-950 font-bold text-[10px]">✔ Hygienically</div>
                <div className="text-green-950 font-bold text-[10px]">Processed</div>
              </div>
              <div className="absolute -bottom-4 -left-8 rounded-2xl px-4 py-2.5 shadow-lg animate-bounce" style={{background: "#1B4332", border: "1px solid rgba(64,145,108,0.4)", animationDuration: "4s", animationDelay: "0.5s"}}>
                <div className="text-amber-400 text-[10px] font-medium">Available in</div>
                <div className="text-white font-bold text-sm">1L · 2L · 5L · 25L</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full" style={{height: 60}}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FDFAF4"/>
        </svg>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["100% Pure Palm Oil","Hygienically Processed","Rich Natural Color","Affordable & Reliable","Bulk & Retail Supply","Lagos Fast Delivery","Nationwide Available","Trusted Quality"];
  const all = [...items, ...items];
  return (
    <div className="overflow-hidden py-4 border-y border-green-900" style={{background:"#1B4332"}}>
      <div className="flex whitespace-nowrap" style={{animation: "marquee 24s linear infinite"}}>
        {all.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mr-8">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">{item}</span>
            <span className="text-green-600">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

function WhyUs() {
  const reasons = [
    { icon: "✔", title: "100% Pure Palm Oil", desc: "No additives, no water, no impurities. What nature produced, we preserve and deliver." },
    { icon: "🧪", title: "Hygienically Processed & Filtered", desc: "Every batch goes through rigorous filtration for guaranteed safety and purity." },
    { icon: "🌿", title: "Rich Natural Color & Taste", desc: "Deep red, fragrant, and flavourful — exactly as nature intended." },
    { icon: "💰", title: "Affordable & Reliable Supply", desc: "Consistent pricing and supply you can count on, for homes and businesses alike." },
    { icon: "📦", title: "Bulk & Retail Available", desc: "From 1-litre household packs to 25-litre commercial bulk supply — we cover all needs." },
  ];

  return (
    <section className="py-20" style={{background: "#FDFAF4"}}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5" style={{background:"#D8F3DC"}}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-900"/>
              <span className="text-green-900 text-xs font-semibold tracking-widest uppercase">Who We Are</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-5" style={{color: "#0E1B14"}}>
              An Agro Brand Built on <span className="italic" style={{color:"#C1440E"}}>Trust</span>
            </h2>
            <p className="leading-relaxed mb-4 text-sm" style={{color:"rgba(14,27,20,0.7)"}}>
              We are an agro-based company committed to delivering clean, safe, and affordable food products. Starting with premium palm oil, we are building a trusted brand that transforms raw agricultural produce into valuable everyday essentials.
            </p>
            <p className="leading-relaxed mb-8 text-sm" style={{color:"rgba(14,27,20,0.7)"}}>
              Every bottle we supply carries our promise: pure, uncompromised quality — from the farm to your table.
            </p>
            <div className="flex gap-8">
              {[
                {val:"100%", label:"Pure, No Adulteration", color:"#1B4332"},
                {val:"4", label:"Size Options", color:"#C1440E"},
                {val:"🌍", label:"Nationwide Delivery", color:"#D4A017"},
              ].map((s,i) => (
                <div key={i}>
                  <div className="font-serif text-3xl font-bold" style={{color: s.color}}>{s.val}</div>
                  <div className="text-xs mt-1" style={{color:"rgba(14,27,20,0.5)"}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {reasons.map((r, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border transition-all duration-200 hover:shadow-md group cursor-default"
                style={{borderColor: "#D8F3DC"}}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-colors duration-200 group-hover:bg-green-900"
                  style={{background: "#D8F3DC"}}>
                  {r.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm mb-0.5" style={{color:"#0E1B14"}}>{r.title}</div>
                  <div className="text-xs leading-relaxed" style={{color:"rgba(14,27,20,0.6)"}}>{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const sizes = [
    { vol:"1L", label:"1 Litre", sub:"Small households", h:96, dark:"#E05C2A", light:"#C1440E" },
    { vol:"2L", label:"2 Litres", sub:"Regular home use", h:128, dark:"#E05C2A", light:"#A83000" },
    { vol:"5L", label:"5 Litres", sub:"Large families & small businesses", h:176, dark:"#CC3B0A", light:"#8B2500" },
    { vol:"25L", label:"25 Litres", sub:"Restaurants, caterers & retailers", h:256, dark:"#B83008", light:"#6B1B00", badge:"Bulk" },
  ];

  const benefits = ["Rich red natural color","No adulteration","Long shelf life","Great taste & aroma","All cooking types","Commercial safe"];

  return (
    <section id="products" className="py-24 relative overflow-hidden" style={{background:"#0E1B14"}}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl" style={{background:"rgba(27,67,50,0.3)"}}/>
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5" style={{background:"rgba(45,106,79,0.4)", border:"1px solid rgba(64,145,108,0.3)"}}>
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Our Product</span>
          </div>
          <h2 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">Premium Palm Oil</h2>
          <p className="text-white/60 max-w-lg mx-auto text-sm">Carefully sourced and processed to retain its natural richness. Perfect for cooking, frying, and food production.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-end">
          {/* Bottle visualization */}
          <div>
            <div className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-6">Available Sizes</div>
            <div className="flex items-end gap-5 justify-center lg:justify-start">
              {sizes.map((s,i) => (
                <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="relative">
                    {s.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-2 py-0.5 text-[9px] font-bold whitespace-nowrap z-10"
                        style={{background:"#D4A017", color:"#0E1B14"}}>
                        {s.badge}
                      </div>
                    )}
                    {/* Cap */}
                    <div className="h-3 rounded-full mb-0" style={{width:56, background:"linear-gradient(180deg, #D4A017, #B8860B)"}}/>
                    {/* Body */}
                    <div className="rounded-b-2xl overflow-hidden group-hover:scale-105 transition-transform duration-200 shadow-lg relative"
                      style={{width:56, height:s.h, background:`linear-gradient(160deg, ${s.dark} 0%, ${s.light} 100%)`}}>
                      <div className="absolute top-2 left-2 rounded-full bg-white/20 blur-sm" style={{width:10, height:"40%"}}/>
                      <div className="absolute bottom-3 left-0 right-0 text-center">
                        <div className="text-white font-bold text-xs">{s.vol}</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-xs font-semibold">{s.label}</div>
                    <div className="text-white/40 text-[10px] max-w-[80px] leading-tight mt-0.5">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits + CTA */}
          <div>
            <div className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">Product Benefits</div>
            <div className="grid grid-cols-2 gap-2.5 mb-8">
              {benefits.map((b,i) => (
                <div key={i} className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5" style={{background:"rgba(27,67,50,0.6)", border:"1px solid rgba(45,106,79,0.5)"}}>
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{background:"#D4A017"}}/>
                  <span className="text-white/80 text-xs">{b}</span>
                </div>
              ))}
            </div>
            <div className="rounded-3xl p-6" style={{background:"linear-gradient(135deg, rgba(193,68,14,0.2) 0%, rgba(193,68,14,0.05) 100%)", border:"1px solid rgba(193,68,14,0.3)"}}>
              <div className="italic text-lg mb-2" style={{fontFamily:"Georgia, serif", color:"rgba(255,255,255,0.7)"}}>Clean. Safe. Trusted.</div>
              <div className="font-serif text-white text-xl font-bold mb-4">Ready to place your order?</div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-white font-semibold px-5 py-3 rounded-full text-sm text-center transition-all hover:scale-105 flex items-center justify-center gap-2"
                  style={{background:"#25D366"}}>
                  📱 WhatsApp Order
                </a>
                <a href="tel:07030124346" className="flex-1 text-white font-medium px-5 py-3 rounded-full text-sm text-center transition-all flex items-center justify-center gap-2"
                  style={{border:"1px solid rgba(255,255,255,0.2)"}}>
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

function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{background:"#FDFAF4"}}>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-60" style={{background:"#D8F3DC"}}/>
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5" style={{background:"#D8F3DC"}}>
              <span className="text-green-900 text-xs font-semibold tracking-widest uppercase">About Us</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-5" style={{color:"#0E1B14"}}>
              About ILÉ BOLU<br/><span style={{color:"#1B4332"}}>Agro Venture Ltd.</span>
            </h2>
            <p className="leading-relaxed mb-4 text-sm" style={{color:"rgba(14,27,20,0.7)"}}>
              ILÉ BOLU Agro Venture Ltd. is a growing agro-business dedicated to transforming agricultural produce into high-quality, value-added products.
            </p>
            <p className="leading-relaxed mb-4 text-sm" style={{color:"rgba(14,27,20,0.7)"}}>
              Our journey begins with palm oil — carefully sourced, properly processed, and hygienically packaged to meet the needs of modern homes and businesses.
            </p>
            <p className="leading-relaxed mb-8 text-sm" style={{color:"rgba(14,27,20,0.7)"}}>
              Our vision is to expand into large-scale agricultural production and processing, including oil palm farming, cocoa farming, food processing, livestock farming, and agro-training services.
            </p>
            <div className="rounded-2xl px-6 py-5" style={{background:"#1B4332"}}>
              <div className="italic text-xl mb-1" style={{fontFamily:"Georgia, serif", color:"#D4A017"}}>Our Mission</div>
              <p className="text-white/80 text-sm leading-relaxed">To create value from the soil and deliver it with excellence.</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-3xl p-6 shadow-sm" style={{border:"1px solid #D8F3DC"}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{background:"#1B4332"}}>🌱</div>
                <div className="font-serif font-bold text-lg" style={{color:"#0E1B14"}}>Our Vision</div>
              </div>
              <p className="text-sm leading-relaxed" style={{color:"rgba(14,27,20,0.7)"}}>
                To become a leading agro-industrial brand known for quality, integrity, and value creation across Nigeria and beyond.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm" style={{border:"1px solid #D8F3DC"}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{background:"#C1440E"}}>🎯</div>
                <div className="font-serif font-bold text-lg" style={{color:"#0E1B14"}}>Our Mission</div>
              </div>
              {["Provide clean and affordable agro products","Promote quality processing and packaging","Build trust through consistency and excellence"].map((m,i) => (
                <div key={i} className="flex items-start gap-3 mb-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{background:"#D8F3DC"}}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{background:"#1B4332"}}/>
                  </div>
                  <span className="text-sm leading-relaxed" style={{color:"rgba(14,27,20,0.7)"}}>{m}</span>
                </div>
              ))}
            </div>

            <div className="rounded-3xl p-6" style={{background:"linear-gradient(135deg, #1B4332, #0E1B14)"}}>
              <div className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">Our Future</div>
              <div className="flex flex-wrap gap-2">
                {["Oil Palm Farming","Cocoa Farming","Food Processing","Livestock Farming","Agro-Training"].map((f,i) => (
                  <span key={i} className="text-white/80 text-xs px-3 py-1.5 rounded-full" style={{background:"rgba(45,106,79,0.6)", border:"1px solid rgba(64,145,108,0.4)"}}>{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <div className="py-12 relative overflow-hidden" style={{background:"#C1440E"}}>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(circle, white 1px, transparent 1px)", backgroundSize:"40px 40px"}}/>
      <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
        <h2 className="font-serif text-white text-3xl md:text-4xl font-bold mb-3">Ready to order quality palm oil?</h2>
        <p className="text-white/80 mb-6 text-sm">We deliver within Lagos and across Nigeria on request.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer"
            className="bg-white font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-all shadow-lg text-sm"
            style={{color:"#C1440E"}}>
            📱 WhatsApp: 07030124346
          </a>
          <a href="mailto:ilebolu96@gmail.com" className="font-semibold px-8 py-3.5 rounded-full transition-all text-sm text-white"
            style={{border:"2px solid rgba(255,255,255,0.6)"}}>
            📧 ilebolu96@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24" style={{background:"#FDFAF4"}}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5" style={{background:"#D8F3DC"}}>
            <span className="text-green-900 text-xs font-semibold tracking-widest uppercase">Get In Touch</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{color:"#0E1B14"}}>Let&apos;s Talk Business</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {[
            {icon:"📍", title:"Our Address", content:"302, Murtala Muhammed Way, Alagomeji Yaba, Lagos", bg:"#1B4332", textColor:"white", subColor:"rgba(255,255,255,0.7)"},
            {icon:"📱", title:"Phone / WhatsApp", content:"07030124346", bg:"#C1440E", textColor:"white", subColor:"rgba(255,255,255,0.7)", link:"tel:07030124346"},
            {icon:"📧", title:"Email", content:"ilebolu96@gmail.com", bg:"#D4A017", textColor:"#0E1B14", subColor:"rgba(14,27,20,0.7)", link:"mailto:ilebolu96@gmail.com"},
          ].map((c,i) => (
            <div key={i} className="rounded-3xl p-6" style={{background:c.bg, color:c.textColor}}>
              <div className="text-2xl mb-3">{c.icon}</div>
              <div className="font-semibold text-sm mb-2" style={{color:c.subColor}}>{c.title}</div>
              {c.link ? (
                <a href={c.link} className="font-serif font-bold text-lg hover:opacity-80 transition-opacity" style={{color:c.textColor}}>{c.content}</a>
              ) : (
                <div className="font-bold text-sm leading-relaxed">{c.content}</div>
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-3xl p-6 shadow-sm" style={{border:"1px solid #D8F3DC"}}>
            <div className="text-2xl mb-3">🚚</div>
            <div className="font-serif font-bold text-lg mb-3" style={{color:"#0E1B14"}}>Delivery Info</div>
            {["Fast delivery within Lagos","Nationwide delivery available on request"].map((d,i) => (
              <div key={i} className="flex items-center gap-2 mb-2 text-sm" style={{color:"rgba(14,27,20,0.7)"}}>
                <div className="w-2 h-2 rounded-full" style={{background:"#1B4332"}}/>
                {d}
              </div>
            ))}
          </div>
          <div className="rounded-3xl p-6 flex flex-col justify-between" style={{background:"#1B4332"}}>
            <div>
              <div className="text-2xl mb-3">💬</div>
              <div className="font-serif font-bold text-white text-lg mb-2">Quick Order via WhatsApp</div>
              <p className="text-white/70 text-sm mb-5">Chat with us directly and place your order instantly. We respond fast!</p>
            </div>
            <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil%20from%20Il%C3%A9%20Bolu%20Agro%20Venture" target="_blank" rel="noopener noreferrer"
              className="text-white font-bold px-6 py-3.5 rounded-full text-sm text-center transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{background:"#25D366"}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{background:"#0E1B14"}} className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{width:"100%", height:48}}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#FDFAF4"/>
        </svg>
      </div>
      <div className="pt-20 pb-8 relative z-10">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold" style={{background:"#D4A017", color:"#0E1B14"}}>IB</div>
                <div>
                  <div className="text-white font-bold text-xs tracking-wide">ILÉ BOLU AGRO VENTURE LTD.</div>
                  <div className="text-[10px] tracking-widest uppercase" style={{color:"#D4A017"}}>From Soil to Value</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{color:"rgba(255,255,255,0.5)"}}>Providing trusted agro products starting with premium palm oil. Pure. Fresh. Trusted.</p>
            </div>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{color:"#D4A017"}}>Contact Us</div>
              <div className="space-y-3">
                <a href="tel:07030124346" className="flex items-center gap-2.5 text-sm transition-colors hover:text-white" style={{color:"rgba(255,255,255,0.7)"}}>📞 07030124346</a>
                <a href="mailto:ilebolu96@gmail.com" className="flex items-center gap-2.5 text-sm transition-colors hover:text-white" style={{color:"rgba(255,255,255,0.7)"}}>📧 ilebolu96@gmail.com</a>
                <div className="flex items-start gap-2.5 text-sm" style={{color:"rgba(255,255,255,0.7)"}}>📍 302, Murtala Muhammed Way, Alagomeji Yaba, Lagos</div>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{color:"#D4A017"}}>Quick Order</div>
              <p className="text-sm mb-4" style={{color:"rgba(255,255,255,0.6)"}}>Ready to order? Reach us on WhatsApp for instant response.</p>
              <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all hover:scale-105"
                style={{background:"#25D366"}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{borderTop:"1px solid #1B4332"}}>
            <div className="text-xs" style={{color:"rgba(255,255,255,0.3)"}}>© {new Date().getFullYear()} ILÉ BOLU Agro Venture Ltd. All rights reserved.</div>
            <div className="text-xs" style={{color:"rgba(255,255,255,0.3)"}}>Built with 💚 by <span style={{color:"#D4A017"}}>JAA Studio</span></div>
          </div>
        </div>
      </div>
      <div className="py-2.5 text-center" style={{background:"#1B4332"}}>
        <div className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{color:"#D4A017"}}>From Soil to Value ✦ Pure. Fresh. Trusted.</div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a href="https://wa.me/2347030124346?text=Hello%2C%20I%20want%20to%20order%20palm%20oil" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
      style={{background:"#25D366"}} title="Order via WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  );
}

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
      <WhatsAppFloat />
    </>
  );
}
