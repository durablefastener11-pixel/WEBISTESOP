import React, { useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Timer, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Eye, 
  History,
  Factory,
  Microscope,
  PackageCheck
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

/**
 * EXPERT DESIGN SYSTEM (Per Part D)
 * Primary: #1A2744 (Deep Navy)
 * Accent: #D85A30 (Coral)
 * Neutral: #5F5E5A (Muted Gray)
 */

const RevealSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out opacity-0 translate-y-10 ${className}`}>
      {children}
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-[#5F5E5A]">
      <Helmet>
        <title>About Us | Precision OEM Fastener Manufacturing Gujarat</title>
        <meta name="description" content="Durable Fastener: Specialized OEM screw manufacturing for industrial equipment builders. 48-hour dispatch and zero-defect quality." />
      </Helmet>

      {/* 01. HERO - OPENING STATEMENT [cite: 165] */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[#1A2744] text-white px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-40 grayscale pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000" 
            alt="Manufacturing Facility Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 max-w-5xl text-center">
          <RevealSection>
            {/* Rule: Max 8 words, no punctuation  */}
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Precision Fastening for South India OEM Manufacturers
            </h1>
            {/* Rule: One sentence, 10-15 words  */}
            <p className="text-lg md:text-xl font-light text-slate-200 max-w-2xl mx-auto">
              We provide high-performance industrial fasteners with documented quality clearance for every single batch dispatched.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* 02. ORIGIN - WHY WE STARTED [cite: 172] */}
      <section className="py-24 max-w-[1100px] mx-auto px-6">
        <div className="grid md:grid-cols-[55%_45%] gap-12 items-center">
          <RevealSection>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A2744] mb-8">Bridging the Industrial Communication Gap</h2>
            <div className="space-y-4 text-[16px] leading-relaxed">
              <p>
                Before Durable Fastener, local industrial buyers faced 4-week wait times for standard fittings with zero updates on dispatch status. No supplier combined customisation with same-week delivery. [cite: 29, 33]
              </p>
              <p>
                Our founder, having spent 8 years in procurement, grew tired of unanswered complaints and decided to build the supplier he always wished existed—one where reliability is measured in hours, not weeks. [cite: 38, 39]
              </p>
            </div>
          </RevealSection>
          <RevealSection>
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" 
              alt="Our original workshop" 
              className="rounded-lg shadow-lg grayscale" 
            />
          </RevealSection>
        </div>
      </section>

      {/* 03. CREDIBILITY STATS BAR [cite: 177] */}
      <section className="bg-[#1A2744] py-16">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "08", label: "Years in Business" },
            { num: "350", label: "OEM Clients Served" },
            { num: "1.2M", label: "Products Dispatched" },
            { num: "14", label: "States Covered" }
          ].map((stat, i) => (
            <div key={i} className="text-center border-r border-slate-700 last:border-0">
              <div className="text-5xl font-bold text-[#D85A30] mb-2">{stat.num}</div>
              <div className="text-[12px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 04. GROWTH TIMELINE [cite: 183] */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl font-serif text-[#1A2744] mb-16 text-center">Growth Milestones</h2>
          <div className="space-y-12">
            {[
              { year: "2019", event: "First OEM order of 10,000 units from Rajkot", impact: "Proved we could deliver at scale." },
              { year: "2021", event: "Moved to 4,000 sqft plant in GIDC", impact: "Doubled production capacity in 9 months." },
              { year: "2022", event: "Built in-house materials testing lab", impact: "Achieved zero batch rejections since launch." }
            ].map((m, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="text-2xl font-serif font-bold text-[#D85A30] w-20">{m.year}</div>
                <div className="flex-1 pb-8 border-l-2 border-slate-200 pl-8 relative">
                  <div className="absolute w-3 h-3 bg-[#D85A30] rounded-full -left-[7px] top-2" />
                  <h4 className="text-lg font-bold text-[#1A2744] mb-1">{m.event}</h4>
                  <p className="text-sm italic">{m.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. CORE VALUES GRID [cite: 192] */}
      <section className="py-24 max-w-[1100px] mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif text-[#1A2744] mb-12">Action-Based Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "QC Sign-off", desc: "No batch is dispatched without formal QC clearance sign-off on record." },
            { title: "4-Hour Response", desc: "Every customer query receives a written response within 4 business hours." },
            { title: "Technical Review", desc: "Custom drawings are reviewed and confirmed or revised within 24 hours." },
            { title: "Direct Leadership", desc: "All client escalations go directly to the founder, never a junior assistant." },
            { title: "Documentation First", desc: "Dispatch documentation is sent before the truck leaves our gate." },
            { title: "Day 1 Commitment", desc: "Every new team member signs a product quality commitment on their first day." }
          ].map((val, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded border border-slate-100 text-left hover:border-[#D85A30] transition-colors">
              <h4 className="text-[18px] font-bold text-[#1A2744] mb-3">{val.title}</h4>
              <p className="text-[14px] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 06. MISSION & VISION [cite: 196] */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="border-l-4 border-[#D85A30] pl-8 py-4">
            <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#D85A30] mb-4">Our Mission</h3>
            <p className="text-xl font-serif text-[#1A2744] italic">
              "Manufacture and dispatch precision industrial fittings to OEM manufacturers within 48 hours, maintaining documented quality clearance at every production stage."
            </p>
          </div>
          <div className="border-l-4 border-[#1A2744] pl-8 py-4">
            <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#1A2744] mb-4">Our Vision</h3>
            <p className="text-xl font-serif text-[#1A2744] italic">
              "To become the preferred OEM fitting supplier for 500+ manufacturers across Gujarat and Maharashtra by 2028."
            </p>
          </div>
        </div>
      </section>

      {/* 07. PHOTO GALLERY [cite: 200] */}
      <section className="py-24 max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl font-serif text-[#1A2744] mb-12 text-center">Facility & Operations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { img: "facility-wide.jpg", cap: "Wide shot of our GIDC production floor" },
            { img: "qc-process.jpg", cap: "Multi-stage QC testing in progress" },
            { img: "product-close.jpg", cap: "Final inspection of stainless steel variants" },
            { img: "packaging.jpg", cap: "Secure industrial packaging before dispatch" },
            { img: "team.jpg", cap: "Our core engineering and ops team" },
            { img: "shipping.jpg", cap: "Documentation check at the dispatch bay" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <div className="aspect-[4/3] bg-slate-200 overflow-hidden rounded">
                 <div className="w-full h-full bg-[#2D3A52]/10 flex items-center justify-center text-xs italic">[Authentic Photo {i+1}]</div>
              </div>
              <p className="text-[12px] text-slate-400">{item.cap}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 08. CALL TO ACTION [cite: 204] */}
      <section className="py-24 bg-[#1A2744] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-10">Do you need a supplier who never makes you follow up twice?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#D85A30] px-10 py-4 font-bold rounded hover:bg-[#c44e27] transition-all">
              Contact Our Engineers
            </button>
            <button className="border border-white/30 px-10 py-4 font-bold rounded hover:bg-white/10 transition-all">
              Download Catalogue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;