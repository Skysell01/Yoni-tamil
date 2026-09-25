import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Download,
  Star,
  Mail,
  ShieldCheck,
  Sparkles,
  Heart,
  Zap,
  Quote,
  BookOpen,
  Check,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/yoni-hero.png";
import ritualImg from "@/assets/yoni-ritual.jpg";
import mantraImg from "@/assets/yoni-mantra.jpg";
import tantricArtImg from "@/assets/yoni-tantric-art.jpg";
import shabarImg from "@/assets/yoni-shabar.jpg";
import diyasImg from "@/assets/yoni-diyas.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const CHECKOUT_URL = "https://superprofile.bio/vp/யோனி-வஷ்யகலா---ஒரு-முழுமையான-வழிகாட்டி?checkout=true";

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-hex-pattern text-foreground font-sans">
      {/* Ambient auras */}
      <div className="aura h-[420px] w-[420px] left-[-120px] top-[10%]" style={{ background: "oklch(0.45 0.22 300 / 0.55)" }} />
      <div className="aura h-[360px] w-[360px] right-[-100px] top-[45%]" style={{ background: "oklch(0.55 0.2 25 / 0.35)", animationDelay: "1.5s" }} />
      <div className="aura h-[500px] w-[500px] left-[30%] bottom-[5%]" style={{ background: "oklch(0.5 0.2 320 / 0.35)", animationDelay: "3s" }} />

      <Header />
      <main className="relative">
        <Hero />
        <DescriptionSection />
        <FeatureGallery />
        <Reveal>
          <div className="flex justify-center py-6">
            <div className="h-px w-full max-w-5xl bg-white/10" />
          </div>
        </Reveal>
        <LearnSection />
        <IncludedSection />
        <AudienceSection />
        <HighlightsSection />
        <TestimonialsSection />
        <CheckoutSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyOfferBar />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-purple)] shadow-[var(--shadow-glow)] flicker">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Mystic<span className="text-gold">Canvas</span>
          </span>
        </Link>
        <a
          href={CHECKOUT_URL}
          className="hidden rounded-full px-4 py-2 text-xs font-semibold text-white btn-glow cta-shine hover:btn-glow-hover sm:inline-flex"
        >
          இப்போதே பெறுங்கள்
        </a>
      </div>
    </header>
  );
}

/* ---------------- Section wrapper ---------------- */
function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-10 sm:py-12 lg:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

// Custom simple component that renders a section heading
function SectionHeading({
  eyebrow,
  title,
  icon,
  center,
}: {
  eyebrow?: string;
  title: string;
  icon?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-8 text-center ${center ? "" : "sm:text-left"}`}>
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gold font-medium">
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </div>
      )}
      <h2 className={`flex items-center justify-center gap-3 text-2xl font-black text-white sm:text-3xl lg:text-4xl ${center ? "" : "sm:justify-start"}`}>
        {icon && <span className="flicker text-[color:var(--orange-glow)]">{icon}</span>}
        <span className="relative inline-block">
          <span className="text-white">{title}</span>
          <span className={`absolute -bottom-2 h-[3px] w-16 rounded-full bg-[var(--gradient-gold)] left-1/2 -translate-x-1/2 ${center ? "" : "sm:left-0 sm:translate-x-0"}`} />
        </span>
      </h2>
    </Reveal>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        <Reveal className="text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gold font-medium">
            <Sparkles className="h-3.5 w-3.5" /> பண்டைய தாந்திரீக நூல்
          </div>
          <h1 className="mb-6 font-display text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl">
            தீவிர யோனி <span className="text-gold">வசியக்கலை சாதனை</span> <span className="text-white/70 text-2xl sm:text-4xl block sm:inline mt-1 sm:mt-0">(தமிழ் இ-புக்)</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0">
            பண்டைய தாந்திரீக நூல் — பல நூற்றாண்டுகளாக மிகவும் ரகசியமாக வைக்கப்பட்ட தெய்வீக கலை, இப்போது எளிய மற்றும் தூய தமிழில்.
            மந்திரம், எந்திரம் மற்றும் முழுமையான சாதனை முறை — இப்போதே பதிவிறக்குங்கள்.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
            <a
              href={CHECKOUT_URL}
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white btn-glow cta-shine pulse-glow hover:btn-glow-hover"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              இப்போதே பதிவிறக்குங்கள் — ₹349
            </a>
            <div className="flex items-center gap-2 text-xs text-white/60 font-medium">
              <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" />
              பாதுகாப்பான கட்டணம் · உடனடி பதிவிறக்கம்
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 text-xs text-white/60 sm:flex-row sm:flex-wrap sm:gap-6 lg:justify-start">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="font-medium">4.9 / 5 · 2000+ சாதகர்கள்</span>
            </div>
            <span className="flex items-center gap-1.5 font-medium"><BookOpen className="h-3.5 w-3.5" /> PDF · தமிழ்</span>
          </div>
        </Reveal>

        <Reveal className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
          <img
            src={heroImg}
            alt="யோனி வசியக்கலை வித்தை — பண்டைய தாந்திரீக நூல்"
            width={1024}
            height={1024}
            className="h-auto w-full transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[color:var(--gold)]/20 rotate-slow" />
          <div className="pointer-events-none absolute -left-16 bottom-8 h-48 w-48 rounded-full border border-[color:var(--accent)]/25 rotate-slow" style={{ animationDirection: "reverse" }} />
          <Sparkles className="pointer-events-none absolute right-8 top-16 h-5 w-5 text-[color:var(--gold)] sparkle" />
          <Sparkles className="pointer-events-none absolute left-10 top-40 h-4 w-4 text-[color:var(--accent)] sparkle" style={{ animationDelay: "1s" }} />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Description ---------------- */
function DescriptionSection() {
  return (
    <SectionShell id="about">
      <SectionHeading eyebrow="விவரம்" title="இந்த இ-புத்தகத்தைப் பற்றி" center />
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-base leading-relaxed text-white/80 sm:text-lg">
          பண்டைய யோனி வசியக்கலை வித்தை என்பது பல நூற்றாண்டுகளாக குரு-சீடர் பாரம்பரியத்தின் மூலம் மிக ரகசியமாகப்
          பாதுகாக்கப்பட்ட ஒரு அரிய மற்றும் சக்திவாய்ந்த தாந்திரீக நூலாகும். உண்மையான மற்றும் தூய மனதுடன் விரும்பிய நபரை
          ஈர்க்கவும், வாழ்வில் அன்பையும் நல்லிணக்கத்தையும் உருவாக்கவும் விரும்பும் சாதகர்களுக்காக இந்த இ-புத்தகம்
          உருவாக்கப்பட்டுள்ளது. இதிலுள்ள மந்திரங்கள், எந்திரங்கள் மற்றும் சாதனை முறைகள் எளிய மற்றும் தெளிவான தமிழில்
          விளக்கப்பட்டுள்ளன, இதன் மூலம் எவரும் வீட்டில் இருந்தபடியே முறையான விதிகளைப் பின்பற்றி எளிதாகப் பயிற்சி செய்ய முடியும்.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <a
            href={CHECKOUT_URL}
            className="group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white btn-glow cta-shine hover:btn-glow-hover"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            இ-புத்தகத்தை இப்போதே பெறுங்கள் — ₹349
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <div className="flex items-center gap-2 text-xs text-white/60 font-medium">
            <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" />
            உடனடி பதிவிறக்கம் · பாதுகாப்பான கட்டணம்
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

/* ---------------- Feature Image Gallery ---------------- */
function FeatureGallery() {
  const items = [
    { src: ritualImg, caption: "வசியம் செய்வது எப்படி — முழுமையான முறை" },
    { src: diyasImg, caption: "விளக்கேற்றி செய்யும் சாதனை முறை" },
    { src: mantraImg, caption: "புகைப்படம் மூலம் வசியம் செய்யும் முறை" },
    { src: tantricArtImg, caption: "குரு-சீடர் பாரம்பரியத்தின் ரகசிய வித்தை" },
    { src: shabarImg, caption: "பெயர் கொண்டு வசியம் செய்யும் சாபர மந்திரம்" },
    { src: heroImg, caption: "மோகினி மந்திர சித்தி" },
  ];
  return (
    <SectionShell className="bg-black/30">
      <SectionHeading eyebrow="தொகுப்பு" title="சாதனையின் ஒரு பார்வை" center />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
            <img
              src={it.src}
              alt={it.caption}
              loading="lazy"
              width={800}
              height={800}
              className="aspect-square w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-center">
              <p className="text-sm font-bold text-gold">{it.caption}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
        <a
          href={CHECKOUT_URL}
          className="group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white btn-glow cta-shine pulse-glow hover:btn-glow-hover"
        >
          <Sparkles className="h-4 w-4 text-[color:var(--gold)]" />
          அனைத்து ரகசிய முறைகளையும் கற்க — இப்போதே வாங்கவும் (₹349)
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <div className="flex items-center gap-2 text-xs text-white/60 font-medium">
          <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" />
          100% உடனடி அணுகல் · PDF வடிவில்
        </div>
      </Reveal>
    </SectionShell>
  );
}

/* ---------------- Learn ---------------- */
function LearnSection() {
  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="என்ன கற்றுக் கொள்வீர்கள்" title="இந்த இ-புத்தகத்திலிருந்து நீங்கள் என்ன கற்றுக் கொள்வீர்கள்?" icon="✦" />
          <BulletList
            items={[
              "வசியம் செய்யும் முழுமையான முறை (படிப் படியாக / Step-by-Step)",
              "மந்திர ஜபத்தின் துல்லியமான விதிகளும் சடங்கு முறைகளும்",
              "எந்த நாளில் மற்றும் எந்த நேரத்தில் எந்த மந்திரத்தை ஜபிக்க வேண்டும்",
              "சாதனைக்கான சுப திதிகள் மற்றும் சரியான முகூர்த்த நேரம்",
              "விரும்பிய நபரை ஈர்ப்பதற்கான அதி சக்திவாய்ந்த மந்திரங்கள்",
              "புகைப்படம் மூலம் வசியம் செய்யும் ரகசிய தாந்திரீக செயல்முறை",
            ]}
          />
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={CHECKOUT_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white btn-glow cta-shine hover:btn-glow-hover w-full sm:w-auto"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              பயிற்சியைத் தொடங்குங்கள் — ₹349
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="text-xs text-white/60 font-medium flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" />
              முழுமையான வழிகாட்டி PDF
            </span>
          </div>
        </div>
        <Reveal className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
          <img src={mantraImg} alt="Mantra" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ---------------- Included ---------------- */
function IncludedSection() {
  const items = [
    "முழுமையான யோனி வசியக்கலை வித்தை",
    "ஒவ்வொரு சாதனைக்கும் படிப் படியான வழிகாட்டுதல்",
    "சக்திவாய்ந்த மோகினி மந்திரங்கள் (Step-by-Step)",
    "சித்தி பெற்ற எந்திரங்கள் மற்றும் அவற்றின் சரியான பயன்பாடு",
    "மனதார விரும்பும் நபரை வசீகரிக்கும் ரகசிய கலை",
    "சாதனையின் போது செய்ய வேண்டியவை மற்றும் செய்யக்கூடாதவை",
    "மிகவும் ரகசியமான தாந்திரீக நுட்பங்கள் மற்றும் முன்னெச்சரிக்கைகள்",
    "100% பயனுள்ள மற்றும் நிரூபிக்கப்பட்ட முறைகள்",
  ];
  return (
    <SectionShell className="bg-black/30">
      <SectionHeading eyebrow="இ-புத்தகத்தில் என்ன உள்ளது" title="இதில் உங்களுக்கு என்னென்ன கிடைக்கும்?" icon="✦" center />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => (
          <Reveal
            key={item}
            className="group rounded-2xl border border-white/10 bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)]/40 hover:shadow-[var(--shadow-glow-yoni)]"
            style={{ transitionDelay: `${idx * 40}ms` }}
          >
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-gold)] text-black shadow-md">
              <Check className="h-5 w-5" strokeWidth={3} />
            </div>
            <p className="text-sm font-semibold text-neutral-900">{item}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
        <a
          href={CHECKOUT_URL}
          className="group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white btn-glow cta-shine pulse-glow hover:btn-glow-hover"
        >
          <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          இந்த அனைத்து பலன்களையும் பெற — இப்போதே பதிவிறக்குங்கள்
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <p className="text-xs text-white/60 font-medium">ஒரே கட்டணம் ₹349 · வாழ்நாள் அணுகல்</p>
      </Reveal>
    </SectionShell>
  );
}

/* ---------------- Audience ---------------- */
function AudienceSection() {
  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="order-2 lg:order-1 group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
          <img src={tantricArtImg} alt="Audience" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="யாருக்கு ஏற்றது" title="இந்த இ-புத்தகம் யாருக்குப் பயனுள்ளதாக இருக்கும்?" icon="♥" />
          <BulletList
            check
            items={[
              "தங்கள் வாழ்க்கையில் உண்மையான அன்பை விரும்புகிறவர்கள்",
              "தங்களுக்குப் பிடித்த நபரை அல்லது பிரிந்த துணையை மீண்டும் அடைய விரும்புபவர்கள்",
              "கணவன்-மனைவி இடையே அன்பையும் ஈர்ப்பையும் அதிகரிக்க விரும்புபவர்கள்",
              "ஒருதலைக் காதலில் வெற்றி பெற விரும்புபவர்கள்",
              "மோகன கிரியை மற்றும் தாந்திரீக சாதனைகளில் ஆர்வமுள்ள சாதகர்கள்",
              "திருமண வாழ்க்கையில் மகிழ்ச்சியையும் அமைதியையும் மீண்டும் கொண்டுவர விரும்புபவர்கள்",
            ]}
          />
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={CHECKOUT_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white btn-glow cta-shine hover:btn-glow-hover w-full sm:w-auto"
            >
              <Sparkles className="h-4 w-4 text-[color:var(--gold)]" />
              இன்றே தொடங்குங்கள் — ₹349
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="text-xs text-white/60 font-medium flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" />
              100% பாதுகாப்பானது மற்றும் ரகசியமானது
            </span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- Highlights ---------------- */
function HighlightsSection() {
  const items = [
    { icon: <Download className="h-5 w-5" />, title: "உடனடி பதிவிறக்கம்", desc: "கட்டணம் செலுத்திய உடனே நொடியில் PDF இணைப்பு கிடைக்கும்" },
    { icon: <BookOpen className="h-5 w-5" />, title: "எளிய தமிழ் நடை", desc: "தெளிவான, தூய மற்றும் எளிதில் புரியக்கூடிய தமிழில் முழுமையான சடங்குகள்" },
    { icon: <Zap className="h-5 w-5" />, title: "படிப் படியான முறை", desc: "ஒவ்வொரு சாதனைக்கும் விரிவான மற்றும் துல்லியமான வழிகாட்டுதல் (Step-by-Step)" },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "ரகசிய ஞானம்", desc: "குரு-சீடர் பாரம்பரியத்தின் மிக அரிய மற்றும் ரகசிய ஞானம்" },
  ];
  return (
    <SectionShell className="bg-black/30">
      <SectionHeading eyebrow="சிறப்பம்சங்கள்" title="இ-புத்தகத்தின் முக்கிய சிறப்பம்சங்கள்" center />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, idx) => (
          <Reveal
            key={it.title}
            className="rounded-2xl border border-white/10 bg-card p-6 text-center shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:shadow-[var(--shadow-glow-yoni)]"
            style={{ transitionDelay: `${idx * 60}ms` }}
          >
            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-purple-50 text-purple-700 border border-purple-100 shadow-sm">
              {it.icon}
            </div>
            <h3 className="mb-1 font-bold text-neutral-900">{it.title}</h3>
            <p className="text-sm text-neutral-600 font-medium">{it.desc}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
        <a
          href={CHECKOUT_URL}
          className="group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white btn-glow cta-shine pulse-glow hover:btn-glow-hover"
        >
          <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          உடனடியாகப் படிக்கத் தொடங்குங்கள் — ₹349
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <span className="text-xs text-white/60 font-medium">பாதுகாப்பான கட்டண முறை · உடனடி மின்னஞ்சல் விநியோகம்</span>
      </Reveal>
    </SectionShell>
  );
}

/* ---------------- Testimonials ---------------- */
function TestimonialsSection() {
  const list = [
    { name: "ராகுல்", text: "மிகவும் அருமையான இ-புத்தகம்! அனைத்து முறைகளும் மிக எளிய தமிழில் தெளிவாக விளக்கப்பட்டுள்ளன. விதிகளைச் சரியாகப் பின்பற்றிப் பயன்படுத்தியதில் எனக்கு மிகச் சிறந்த பலன்கள் கிடைத்தன." },
    { name: "கார்த்திக்", text: "இந்தப் புத்தகத்தைப் படித்த பிறகு எனக்கு மிகப்பெரிய நன்மை கிடைத்தது. மந்திரங்கள் மற்றும் எந்திரங்கள் பற்றிய தகவல்கள் மிகவும் துல்லியமாகவும் தெளிவாகவும் உள்ளன. மனமார்ந்த நன்றிகள்!" },
    { name: "தீபக்", text: "ஆச்சரியப்படத்தக்க சக்திவாய்ந்த கலை. ஆரம்பத்தில் மனதில் சிறு தயக்கம் இருந்தது, ஆனால் சரியான முறையில் சாதனை செய்த பிறகு எங்கள் உறவில் இருந்த கருத்து வேறுபாடுகள் நீங்கி நல்ல மாற்றம் ஏற்பட்டது." },
    { name: "அனிகேத்", text: "உண்மையிலேயே ஒரு அற்புதமான வழிகாட்டி! தமிழில் அனைத்தும் மிகத் தெளிவாகப் புரிகிறது. தாந்திரீக சாதகர்கள் தங்களிடம் வைத்திருக்க வேண்டிய ஒரு பொக்கிஷம்." },
  ];
  return (
    <SectionShell>
      <SectionHeading eyebrow="கருத்துக்கள்" title="சாதகர்களின் உண்மையான அனுபவங்கள்" center />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((t) => (
          <Testimonial key={t.name} {...t} />
        ))}
      </div>
      <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
        <a
          href={CHECKOUT_URL}
          className="group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white btn-glow cta-shine hover:btn-glow-hover"
        >
          <Sparkles className="h-4 w-4 text-[color:var(--gold)]" />
          நீங்களும் இன்றே பலன் பெறுங்கள் — ₹349
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <span className="text-xs text-white/60 font-medium">2000+ திருப்திகரமான சாதகர்கள் · 4.9/5 மதிப்பீடு</span>
      </Reveal>
    </SectionShell>
  );
}

/* ---------------- Checkout ---------------- */
function CheckoutSection() {
  return (
    <SectionShell id="checkout" className="bg-black/40">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal className="text-center lg:text-left">
          <SectionHeading eyebrow="உடனடி அணுகல்" title="இப்போதே பதிவிறக்குங்கள்" icon="✦" />
          <p className="mx-auto mb-6 max-w-md text-white/75 lg:mx-0">
            கட்டணம் செலுத்திய உடனே PDF உங்கள் மின்னஞ்சலுக்கு உடனடியாக அனுப்பி வைக்கப்படும். இன்றே உங்கள்
            சாதனையைத் தொடங்குங்கள்.
          </p>
          <ul className="mx-auto inline-block space-y-3 text-left text-sm text-white/85 lg:mx-0 lg:block font-medium">
            {["100% இ-புக் — உடனடி பதிவிறக்கம்", "மொபைல் மற்றும் கணினி இரண்டிலும் எளிதாகப் படிக்கலாம்", "வாழ்நாள் அணுகல் — எப்போது வேண்டுமானாலும் எங்கும் படிக்கலாம்"].map((x) => (
              <li key={x} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[color:var(--gold)]" strokeWidth={3} />
                {x}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="rounded-2xl border border-[color:var(--accent)]/30 bg-card p-6 shadow-[var(--shadow-glow-yoni)] sm:p-8">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-600 font-semibold">ஒரே முறை கட்டணம்</p>
              <p className="text-3xl font-black text-gold">₹349</p>
            </div>
            <div className="rounded-full border border-[color:var(--deep-red)] bg-black/60 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[color:var(--orange-glow)] flicker">
              Instant
            </div>
          </div>
          <p className="mb-4 text-xs text-neutral-600 font-medium">
            கட்டணம் வெற்றிகரமாக முடிந்ததும் இ-புத்தக இணைப்பு உடனே உங்கள் மின்னஞ்சலுக்கு அனுப்பப்படும்.
          </p>

          <div className="my-5 h-px bg-neutral-200" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-neutral-600"><span>கூடுதல் தொகை</span><span className="font-semibold text-neutral-900">₹349</span></div>
            <div className="flex justify-between text-base"><span className="font-semibold text-neutral-900">மொத்தத் தொகை</span><span className="font-black text-gold">₹349</span></div>
          </div>

          <a
            href={CHECKOUT_URL}
            className="group mt-5 flex w-full items-center justify-between rounded-xl px-5 py-3.5 text-sm font-bold text-white btn-glow cta-shine pulse-glow hover:btn-glow-hover"
          >
            <span>இப்போதே வாங்கவும்</span>
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-white/50 font-medium">
            <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--accent)]" />
            பாதுகாப்பான கட்டணம் · உடனடி பதிவிறக்கம்
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ---------------- Contact ---------------- */
function ContactSection() {
  return (
    <SectionShell>
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow="தொடர்புக்கு" title="SoulMap Creations-ஐத் தொடர்பு கொள்ளவும்" center />
        <p className="flex items-center justify-center gap-2 text-sm text-white/70 font-medium">
          <Mail className="h-4 w-4 text-[color:var(--accent)]" />
          dh.soulmap@gmail.com
        </p>
        <div className="mt-10 text-left text-xs leading-relaxed text-white/50">
          <h4 className="mb-2 font-semibold text-white/70">முக்கிய அறிவிப்பு மற்றும் மறுப்புரை (Disclaimer)</h4>
          <p>
            இந்த இ-புத்தகத்தில் வழங்கப்பட்டுள்ள அனைத்து தகவல்கள், மந்திரங்கள் மற்றும் சாதனை முறைகள் கல்வி மற்றும் ஆன்மீக
            அறிவிற்காக மட்டுமே தொகுக்கப்பட்டுள்ளன. எந்தவொரு தவறான அல்லது முறையற்ற நோக்கத்திற்காகப்
            பயன்படுத்துவதற்கு வெளியீட்டாளர் பொறுப்பல்ல. தயவுசெய்து முழுமையான பக்தி மற்றும் தூய
            மனதுடன் மட்டுமே சாதனை செய்யுமாறு கேட்டுக்கொள்ளப்படுகிறீர்கள்.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- Building blocks ---------------- */
function BulletList({ items, check }: { items: string[]; check?: boolean }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, idx) => (
        <li
          key={item}
          className="fade-up flex items-start gap-3 text-[15px] text-white/85 transition-transform hover:translate-x-1"
          style={{ animationDelay: `${idx * 70}ms` }}
        >
          <span
            className={`mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[10px] shadow-md ${
              check ? "bg-[var(--gradient-gold)] text-black" : "bg-[var(--gradient-purple)] text-white"
            }`}
          >
            {check ? "✓" : "✦"}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:shadow-[var(--shadow-glow-yoni)]">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex text-[color:var(--gold)]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current transition-transform group-hover:scale-110" style={{ transitionDelay: `${i * 40}ms` }} />
          ))}
        </div>
        <Quote className="h-5 w-5 text-[color:var(--accent)] transition-transform group-hover:rotate-12" />
      </div>
      <p className="mb-3 text-sm leading-relaxed text-neutral-800">{text}</p>
      <div className="flex items-center gap-2">
        <div className="grid h-7 w-7 place-items-center rounded-full bg-[var(--gradient-purple)] text-xs font-bold text-white">
          {name[0]}
        </div>
        <span className="text-sm font-semibold text-neutral-900">{name}</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 pt-8 pb-32">
      <div className="mx-auto max-w-6xl px-4 text-center text-xs text-white/50 sm:px-6 lg:px-8">
        <p className="flex items-center justify-center gap-1.5 font-medium">
          <Heart className="h-3.5 w-3.5 text-[color:var(--accent)]" />
          © {new Date().getFullYear()} SoulMap Creations · அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை
        </p>
      </div>
    </footer>
  );
}

/* ---------------- STICKY OFFER BAR ---------------- */
function StickyOfferBar() {
  const [time, setTime] = useState({ h: 9, m: 50, s: 12 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime((v) => {
        let { h, m, s } = v;
        s--; if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) return { h: 0, m: 0, s: 0 };
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-3xl rounded-2xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg border border-white/10 bg-black/80 backdrop-blur-md"
      style={{ boxShadow: "var(--shadow-glow-yoni)" }}
    >
      <div className="flex items-center gap-3 flex-row">
        <div className="flex items-center gap-2">
          {[time.h, time.m, time.s].map((n, i) => (
            <div key={i} className="text-center">
              <div className="rounded-lg px-2 py-1 font-mono font-bold text-white text-sm min-w-[36px] bg-[var(--gradient-purple)]">
                {pad(n)}
              </div>
              <span className="text-[9px] uppercase tracking-wider text-white/50 font-medium">
                {["மணி", "நிமிடம்", "நொடி"][i]}
              </span>
            </div>
          ))}
        </div>
        <div className="text-left">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[color:var(--gold)]">
            சலுகை விரைவில் முடிவடைகிறது
          </p>
          <p className="text-sm font-bold text-white">
            <span className="line-through opacity-50 text-xs text-white/60">₹999</span>{" "}
            <span className="text-gold font-extrabold">₹349</span>
          </p>
        </div>
      </div>
      <a
        href={CHECKOUT_URL}
        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold text-white btn-glow cta-shine hover:btn-glow-hover shrink-0 w-full sm:w-auto text-center"
      >
        இப்போதே பதிவிறக்குங்கள் <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}
